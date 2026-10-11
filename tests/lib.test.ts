import { describe, expect, it } from 'vitest'
import { addDays, daysBetween, fiscalQuarterOf, fiscalYearOf } from '../src/server/lib/dates'
import { canTransitionCa, canTransitionEnforcement, canTransitionFinding, deriveFindingState } from '../src/server/lib/lifecycle'
import { detectRepeat } from '../src/server/lib/repeat'
import { computeRisk } from '../src/server/lib/risk'
import { closureDueDate, computeAging, enforcementResponseDue, finalizationDueDate } from '../src/server/lib/sla'
import { validateCitation, validateDateOrder, validateFiscalYear, validateSafeText, validateUic } from '../src/server/lib/validators'
import { buildEnvelope, catalogEntry, contentHash, DATA_PRODUCT_SCHEMAS, projectRow } from '../src/server/lib/vantage'

describe('dates', () => {
    it('adds days and computes fiscal periods', () => {
        expect(addDays('2026-09-20', 45)).toBe('2026-11-04')
        expect(daysBetween('2026-01-01', '2026-01-31')).toBe(30)
        expect(fiscalYearOf('2026-10-01')).toBe(2027)
        expect(fiscalYearOf('2026-09-30')).toBe(2026)
        expect(fiscalQuarterOf('2026-10-15')).toBe('FY27Q1')
        expect(fiscalQuarterOf('2026-02-15')).toBe('FY26Q2')
        expect(fiscalQuarterOf('2026-08-15')).toBe('FY26Q4')
        expect(addDays('nope', 1)).toBeNull()
    })
})

describe('sla', () => {
    it('derives closure windows by severity', () => {
        expect(closureDueDate('2026-03-01', 'significant')).toBe('2026-05-30')
        expect(closureDueDate('2026-03-01', 'major')).toBe('2026-08-28')
        expect(closureDueDate('2026-03-01', 'minor')).toBe('2027-03-01')
        expect(closureDueDate('2026-03-01', 'observation')).toBeNull()
        expect(finalizationDueDate('2026-03-06')).toBe('2026-04-20')
        expect(enforcementResponseDue('2026-03-06')).toBe('2026-04-05')
    })
    it('flags aging green / amber / red', () => {
        expect(computeAging('2026-01-01', '2026-04-01', '2026-01-15').flag).toBe('green')
        expect(computeAging('2026-01-01', '2026-04-01', '2026-03-20').flag).toBe('amber')
        expect(computeAging('2026-01-01', '2026-04-01', '2026-04-02')).toMatchObject({ flag: 'red', daysRemaining: -1 })
        expect(computeAging('2026-01-01', null, '2026-12-01')).toMatchObject({ flag: 'green', daysRemaining: null, daysOpen: 334 })
    })
})

describe('repeat detection', () => {
    const priors = [
        { sysId: 'a', fiscalYear: 2023, programArea: 'hazwaste', regulatoryDriver: 'd1', installation: 'cavazos' },
        { sysId: 'b', fiscalYear: 2020, programArea: 'hazwaste', regulatoryDriver: 'd1', installation: 'cavazos' },
        { sysId: 'c', fiscalYear: 2025, programArea: 'air', regulatoryDriver: 'd9', installation: 'cavazos' },
    ]
    it('matches within lookback on installation + program area + driver', () => {
        expect(detectRepeat({ fiscalYear: 2026, programArea: 'hazwaste', regulatoryDriver: 'd1', installation: 'cavazos' }, priors)).toEqual({ repeat: true, priorSysId: 'a' })
        expect(detectRepeat({ fiscalYear: 2026, programArea: 'hazwaste', regulatoryDriver: 'd2', installation: 'cavazos' }, priors).repeat).toBe(false)
        expect(detectRepeat({ fiscalYear: 2026, programArea: 'hazwaste', regulatoryDriver: '', installation: 'cavazos' }, priors).repeat).toBe(true)
        expect(detectRepeat({ fiscalYear: 2026, programArea: 'hazwaste', regulatoryDriver: 'd1', installation: 'bliss' }, priors).repeat).toBe(false)
        expect(detectRepeat({ fiscalYear: 2029, programArea: 'hazwaste', regulatoryDriver: 'd1', installation: 'cavazos' }, priors).repeat).toBe(false)
    })
})

describe('lifecycle', () => {
    it('guards finding closure', () => {
        expect(canTransitionFinding({ from: 'pending_verification', to: 'closed', severity: 'significant', roles: ['compliance_officer'], openCorrectiveActions: 0 }).allowed).toBe(false)
        expect(canTransitionFinding({ from: 'pending_verification', to: 'closed', severity: 'significant', roles: ['commander'], openCorrectiveActions: 0 }).allowed).toBe(true)
        expect(canTransitionFinding({ from: 'pending_verification', to: 'closed', severity: 'minor', roles: ['compliance_officer'], openCorrectiveActions: 1 }).allowed).toBe(false)
        expect(canTransitionFinding({ from: 'open', to: 'closed', severity: 'observation', roles: ['compliance_officer'], openCorrectiveActions: 0 }).allowed).toBe(true)
        expect(canTransitionFinding({ from: 'open', to: 'risk_accepted', severity: 'major', roles: ['assessor'], openCorrectiveActions: 0 }).allowed).toBe(false)
        expect(canTransitionFinding({ from: 'closed', to: 'open', severity: 'major', roles: ['admin'], openCorrectiveActions: 0 }).allowed).toBe(false)
    })
    it('guards corrective action verification', () => {
        const base = { findingSeverity: 'major' as const, hasEvidence: true, isOwner: false }
        expect(canTransitionCa({ ...base, from: 'in_progress', to: 'pending_approval', roles: ['compliance_officer'], hasEvidence: false }).allowed).toBe(false)
        expect(canTransitionCa({ ...base, from: 'in_progress', to: 'pending_approval', roles: [], isOwner: true }).allowed).toBe(true)
        expect(canTransitionCa({ ...base, from: 'pending_approval', to: 'verified', roles: ['assessor'] }).allowed).toBe(true)
        expect(canTransitionCa({ ...base, from: 'pending_approval', to: 'verified', roles: ['assessor'], findingSeverity: 'significant' }).allowed).toBe(false)
        expect(canTransitionCa({ ...base, from: 'pending_approval', to: 'verified', roles: ['commander'], findingSeverity: 'significant' }).allowed).toBe(true)
        expect(canTransitionCa({ ...base, from: 'pending_approval', to: 'verified', roles: ['compliance_officer'], isOwner: true }).allowed).toBe(false)
    })
    it('guards enforcement actions and derives finding state', () => {
        expect(canTransitionEnforcement({ from: 'response_drafted', to: 'response_submitted', roles: ['compliance_officer'], responseSubmittedOn: '' }).allowed).toBe(false)
        expect(canTransitionEnforcement({ from: 'response_drafted', to: 'response_submitted', roles: ['compliance_officer'], responseSubmittedOn: '2026-05-01' }).allowed).toBe(true)
        expect(canTransitionEnforcement({ from: 'received', to: 'contested', roles: ['compliance_officer'], responseSubmittedOn: '' }).allowed).toBe(false)
        expect(deriveFindingState('open', [])).toBe('open')
        expect(deriveFindingState('open', [{ state: 'in_progress' }])).toBe('ca_assigned')
        expect(deriveFindingState('ca_assigned', [{ state: 'verified' }, { state: 'cancelled' }])).toBe('pending_verification')
        expect(deriveFindingState('risk_accepted', [{ state: 'draft' }])).toBe('risk_accepted')
    })
})

describe('risk', () => {
    it('scores and rates installations', () => {
        expect(computeRisk({ openFindings: [], openEnforcementActions: 0, penaltyExposure: 0 })).toMatchObject({ score: 0, rating: 'low' })
        const r = computeRisk({
            openFindings: [
                { severity: 'significant', overdue: true, repeat: true },
                { severity: 'minor', overdue: false, repeat: false },
            ],
            openEnforcementActions: 1,
            penaltyExposure: 150000,
        })
        expect(r.score).toBe(10 * 2 + 2 + 1 + 15 + 20)
        expect(r.rating).toBe('high')
        expect(r.drivers).toHaveLength(4)
        expect(computeRisk({ openFindings: [{ severity: 'major', overdue: false, repeat: false }, { severity: 'major', overdue: false, repeat: false }, { severity: 'major', overdue: false, repeat: false }, { severity: 'major', overdue: false, repeat: false }], openEnforcementActions: 0, penaltyExposure: 0 }).rating).toBe('moderate')
    })
})

describe('vantage data products', () => {
    it('projects rows to the schema and hashes deterministically', () => {
        const row = projectRow('findings', { finding_id: 'EPF0001000', fiscal_year: '2026', repeat_finding: 'true', extra: 'dropped', days_open: 'x' })
        expect(row['finding_id']).toBe('EPF0001000')
        expect(row['fiscal_year']).toBe(2026)
        expect(row['repeat_finding']).toBe(true)
        expect(row['days_open']).toBeNull()
        expect('extra' in row).toBe(false)
        expect(Object.keys(row)).toEqual(DATA_PRODUCT_SCHEMAS.findings.columns.map((c) => c.name))
        const a = buildEnvelope('findings', [{ finding_id: 'EPF1' }], '2026-10-11T00:00:00Z')
        const b = buildEnvelope('findings', [{ finding_id: 'EPF1' }], '2026-10-12T00:00:00Z')
        expect(a.content_hash).toBe(b.content_hash)
        expect(a.content_hash).toMatch(/^[0-9a-f]{16}$/)
        expect(contentHash([{ x: 1 }])).not.toBe(contentHash([{ x: 2 }]))
        expect(a).toMatchObject({ data_product: 'env_compliance_findings', row_count: 1, source_scope: 'x_cog_env' })
        expect(catalogEntry('installation_risk')['source_table']).toBe('x_cog_env_installation')
    })
    it('every schema has exactly one key column', () => {
        for (const s of Object.values(DATA_PRODUCT_SCHEMAS)) expect(s.columns.filter((c) => c.key).length).toBe(1)
    })
})

describe('validators', () => {
    it('whitelists input', () => {
        expect(validateSafeText('title', 'Open container of spent solvent (D001)', 160).valid).toBe(true)
        expect(validateSafeText('title', '<script>', 160).valid).toBe(false)
        expect(validateCitation('40 CFR 262.17(a)(1)').valid).toBe(true)
        expect(validateCitation('40 CFR; DROP TABLE').valid).toBe(false)
        expect(validateFiscalYear('2026').valid).toBe(true)
        expect(validateFiscalYear('1999').valid).toBe(false)
        expect(validateUic('W0ABAA').valid).toBe(true)
        expect(validateUic('0ABAA1').valid).toBe(false)
        expect(validateDateOrder('start_date', '2026-03-01', 'end_date', '2026-02-01').valid).toBe(false)
    })
})
