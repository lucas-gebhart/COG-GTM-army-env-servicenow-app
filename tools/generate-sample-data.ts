/**
 * Deterministic synthetic dataset: 10 installations, FY2023-FY2026 EPAS assessments, ~300 findings,
 * corrective actions, enforcement actions and EQCC snapshots. Installation names are public Army
 * posts; every figure, finding and UIC is invented. No Army data was used.
 *   npx tsx tools/generate-sample-data.ts   # writes sample-data/*.json
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { addDays } from '../src/server/lib/dates'
import { closureDueDate } from '../src/server/lib/sla'
import type { CaState, CaType, EnforcementState, EnforcementType, FindingState, FundingStatus, RootCause, Severity } from '../src/server/lib/domain'

export const SAMPLE_DIR = fileURLToPath(new URL('../sample-data/', import.meta.url))
export const CLOCK = '2026-10-01'
const day = (iso: string, n: number): string => { const v = addDays(iso, n); if (v === undefined || v === null) throw new Error('invalid date ' + iso); return v }
const SEED = 20261001

class Rng {
    private s: number
    constructor(seed: number) { this.s = seed >>> 0 }
    next(): number { this.s = (Math.imul(this.s, 1664525) + 1013904223) >>> 0; return this.s / 2 ** 32 }
    int(lo: number, hi: number): number { return lo + Math.floor(this.next() * (hi - lo + 1)) }
    pick<T>(arr: readonly T[]): T { return arr[Math.floor(this.next() * arr.length)] as T }
    chance(p: number): boolean { return this.next() < p }
}

export const INSTALLATIONS = [
    { name: 'Fort Cavazos', uic: 'W0ZA01', acom: 'imcom', imcom_directorate: 'readiness', state: 'TX', epa_region: 6 },
    { name: 'Fort Bliss', uic: 'W0ZA02', acom: 'imcom', imcom_directorate: 'readiness', state: 'TX', epa_region: 6 },
    { name: 'Fort Liberty', uic: 'W0ZA03', acom: 'imcom', imcom_directorate: 'readiness', state: 'NC', epa_region: 4 },
    { name: 'Joint Base Lewis-McChord', uic: 'W0ZA04', acom: 'imcom', imcom_directorate: 'readiness', state: 'WA', epa_region: 10 },
    { name: 'Fort Campbell', uic: 'W0ZA05', acom: 'imcom', imcom_directorate: 'readiness', state: 'KY', epa_region: 4 },
    { name: 'Fort Stewart', uic: 'W0ZA06', acom: 'imcom', imcom_directorate: 'readiness', state: 'GA', epa_region: 4 },
    { name: 'Fort Riley', uic: 'W0ZA07', acom: 'imcom', imcom_directorate: 'readiness', state: 'KS', epa_region: 7 },
    { name: 'Fort Carson', uic: 'W0ZA08', acom: 'imcom', imcom_directorate: 'readiness', state: 'CO', epa_region: 8 },
    { name: 'Fort Drum', uic: 'W0ZA09', acom: 'imcom', imcom_directorate: 'readiness', state: 'NY', epa_region: 2 },
    { name: 'Fort Moore', uic: 'W0ZA10', acom: 'imcom', imcom_directorate: 'training', state: 'GA', epa_region: 4 },
] as const

export const PROGRAM_AREAS = [
    { code: 'AIR', name: 'Air emissions', order: 10 },
    { code: 'HW', name: 'Hazardous waste', order: 20 },
    { code: 'HM', name: 'Hazardous materials', order: 30 },
    { code: 'WATER', name: 'Water quality and wastewater', order: 40 },
    { code: 'STORM', name: 'Storm water', order: 50 },
    { code: 'DW', name: 'Drinking water', order: 60 },
    { code: 'TANKS', name: 'Storage tanks', order: 70 },
    { code: 'PEST', name: 'Pesticides', order: 80 },
    { code: 'SW', name: 'Solid waste', order: 90 },
    { code: 'NAT', name: 'Natural and cultural resources', order: 100 },
    { code: 'EMS', name: 'Environmental management system', order: 110 },
] as const

export const DRIVERS = [
    { statute: 'rcra', citation: '40 CFR 262.17(a)(1)', name: 'Large quantity generator accumulation (90 days)', regulator_level: 'federal', program_area: 'HW' },
    { statute: 'rcra', citation: '40 CFR 262.17(a)(5)', name: 'Container labeling and marking', regulator_level: 'federal', program_area: 'HW' },
    { statute: 'rcra', citation: '40 CFR 262.15(a)(4)', name: 'Satellite accumulation area management', regulator_level: 'federal', program_area: 'HW' },
    { statute: 'rcra', citation: '40 CFR 262.17(a)(7)', name: 'Hazardous waste personnel training', regulator_level: 'federal', program_area: 'HW' },
    { statute: 'rcra', citation: '40 CFR 262.11', name: 'Hazardous waste determination', regulator_level: 'federal', program_area: 'HW' },
    { statute: 'rcra', citation: '40 CFR 280.34', name: 'UST operation and maintenance records', regulator_level: 'federal', program_area: 'TANKS' },
    { statute: 'rcra', citation: '40 CFR 280.43', name: 'UST release detection', regulator_level: 'federal', program_area: 'TANKS' },
    { statute: 'cwa', citation: '40 CFR 112.7', name: 'SPCC plan implementation', regulator_level: 'federal', program_area: 'TANKS' },
    { statute: 'cwa', citation: '40 CFR 122.26 / MSGP', name: 'Industrial storm water permit (SWPPP, inspections)', regulator_level: 'federal', program_area: 'STORM' },
    { statute: 'cwa', citation: 'State NPDES permit', name: 'Wastewater discharge monitoring and reporting', regulator_level: 'state', program_area: 'WATER' },
    { statute: 'cwa', citation: '40 CFR 403', name: 'Industrial pretreatment', regulator_level: 'federal', program_area: 'WATER' },
    { statute: 'caa', citation: '40 CFR 70 / Title V permit', name: 'Title V operating permit recordkeeping', regulator_level: 'federal', program_area: 'AIR' },
    { statute: 'caa', citation: '40 CFR 63 Subpart ZZZZ', name: 'Stationary RICE NESHAP (generators)', regulator_level: 'federal', program_area: 'AIR' },
    { statute: 'caa', citation: '40 CFR 82 Subpart F', name: 'Refrigerant management and technician certification', regulator_level: 'federal', program_area: 'AIR' },
    { statute: 'caa', citation: '40 CFR 63 Subpart HHHHHH', name: 'Paint stripping and surface coating NESHAP', regulator_level: 'federal', program_area: 'AIR' },
    { statute: 'sdwa', citation: '40 CFR 141 Subpart I', name: 'Lead and copper rule sampling', regulator_level: 'federal', program_area: 'DW' },
    { statute: 'sdwa', citation: '40 CFR 141.21', name: 'Coliform monitoring', regulator_level: 'federal', program_area: 'DW' },
    { statute: 'fifra', citation: '40 CFR 171 / AR 200-1 ch.5', name: 'Certified pesticide applicators and records', regulator_level: 'federal', program_area: 'PEST' },
    { statute: 'epcra', citation: '40 CFR 370', name: 'Tier II hazardous chemical inventory reporting', regulator_level: 'federal', program_area: 'HM' },
    { statute: 'epcra', citation: '40 CFR 372', name: 'Toxics Release Inventory (Form R)', regulator_level: 'federal', program_area: 'HM' },
    { statute: 'army_policy', citation: 'AR 200-1 para 4-2', name: 'Hazardous material authorized use list', regulator_level: 'army', program_area: 'HM' },
    { statute: 'rcra', citation: '40 CFR 273', name: 'Universal waste management', regulator_level: 'federal', program_area: 'SW' },
    { statute: 'army_policy', citation: 'AR 200-1 para 13 / EO 14057', name: 'Solid waste diversion reporting', regulator_level: 'army', program_area: 'SW' },
    { statute: 'esa', citation: '16 USC 1536 / INRMP', name: 'Endangered species consultation and INRMP implementation', regulator_level: 'federal', program_area: 'NAT' },
    { statute: 'nhpa', citation: '36 CFR 800 / ICRMP', name: 'Section 106 consultation and ICRMP', regulator_level: 'federal', program_area: 'NAT' },
    { statute: 'army_policy', citation: 'AR 200-1 para 1-15 / ISO 14001', name: 'EMS management review and internal audit', regulator_level: 'army', program_area: 'EMS' },
] as const

const TITLES: Record<string, string[]> = {
    HW: ['Open container of spent solvent in satellite accumulation area', 'Accumulation start date missing on hazardous waste drum', 'Waste determination not documented for blast media', 'Annual RCRA training records incomplete for motor pool staff', 'Hazardous waste stored past 90-day limit', 'Incompatible wastes stored without segregation'],
    HM: ['Tier II report omitted lead-acid batteries at warehouse', 'Hazardous material not on authorized use list', 'Safety data sheets unavailable at point of use', 'Shelf-life expired hazmat held in unit storage'],
    AIR: ['Emergency generator run hours not logged', 'Refrigerant leak inspection records missing for chiller', 'Paint booth filter change log incomplete', 'Title V semiannual deviation report late', 'Boiler tune-up record not retained'],
    WATER: ['DMR exceedance for TSS not reported within 24 hours', 'Oil-water separator inspection overdue', 'Pretreatment sampling missed for wash rack'],
    STORM: ['SWPPP not updated after new wash rack', 'Quarterly visual storm water inspection not documented', 'Secondary containment drain valve left open'],
    DW: ['Lead and copper sampling sites not per approved plan', 'Coliform repeat samples not collected', 'Cross-connection survey overdue'],
    TANKS: ['UST release detection console alarm not investigated', 'SPCC plan not re-certified within five years', 'AST integrity inspection overdue', 'UST operator training certificates lapsed'],
    PEST: ['Pesticide application records missing applicator certification number', 'Pesticide storage lacks spill containment', 'Non-certified applicator applied restricted-use pesticide'],
    SW: ['Universal waste lamps stored over one year', 'Diversion data not reported for Q3', 'Open-top dumpster used for lead-acid batteries'],
    NAT: ['Training area activity in RCW cluster buffer without consultation', 'Section 106 review not documented before building demolition', 'INRMP annual review not completed'],
    EMS: ['Management review not held in FY', 'Internal EMS audit findings not tracked to closure', 'Aspects and impacts register not updated after mission change'],
}

const ROOT_CAUSES: RootCause[] = ['training', 'procedure', 'resourcing', 'equipment', 'oversight', 'contractor', 'recordkeeping', 'other']
const CA_TYPES: CaType[] = ['procedure_update', 'training', 'immediate_fix', 'funded_project', 'policy']
const FUNDING: FundingStatus[] = ['not_required', 'funded', 'unfunded', 'requested']

export interface Dataset {
    installations: Record<string, unknown>[]
    program_areas: Record<string, unknown>[]
    regulatory_drivers: Record<string, unknown>[]
    assessments: Record<string, unknown>[]
    findings: Record<string, unknown>[]
    corrective_actions: Record<string, unknown>[]
    enforcement_actions: Record<string, unknown>[]
    eqcc_meetings: Record<string, unknown>[]
}

export function generate(seed = SEED): Dataset {
    const rng = new Rng(seed)
    const ds: Dataset = { installations: [...INSTALLATIONS.map((i) => ({ ...i, active: true }))], program_areas: [...PROGRAM_AREAS.map((p) => ({ ...p, description: `${p.name} program area`, active: true }))], regulatory_drivers: [...DRIVERS.map((d) => ({ ...d, active: true }))], assessments: [], findings: [], corrective_actions: [], enforcement_actions: [], eqcc_meetings: [] }
    let fKey = 0
    let aKey = 0
    const driversByArea = (code: string) => DRIVERS.filter((d) => d.program_area === code)

    INSTALLATIONS.forEach((inst, idx) => {
        const riskProfile = idx % 4 // 0 strong, 1 average, 2 weak, 3 average
        for (const fy of [2023, 2024, 2025, 2026]) {
            const external = (fy - 2023 + idx) % 3 === 0
            const start = `${fy - 1}-${String(10 + ((idx + fy) % 3)).padStart(2, '0')}-${String(rng.int(3, 20)).padStart(2, '0')}`
            const endIso = addDays(start, external ? 9 : 4) ?? start
            const isCurrent = fy === 2026 && endIso > day(CLOCK, -60)
            const state = isCurrent ? (endIso > CLOCK ? 'in_progress' : 'draft_report') : 'finalized'
            const a = { key: `A${++aKey}`, installation: inst.name, assessment_type: external ? 'external' : 'internal', fiscal_year: fy, state, start_date: start, end_date: endIso, scope_notes: external ? 'USAEC external EPAS: all media, records review, field inspection of industrial areas, ranges and cantonment.' : 'Annual internal EPAS by garrison environmental division; all media.' }
            ds.assessments.push(a)
            const base = external ? 11 : 6
            const n = base + rng.int(-2, 3) + (riskProfile === 2 ? 3 : riskProfile === 0 ? -2 : 0)
            for (let i = 0; i < n; i++) {
                const area = rng.pick(PROGRAM_AREAS)
                const title = rng.pick(TITLES[area.code] ?? ['Recordkeeping gap'])
                const driver = rng.pick(driversByArea(area.code))
                const r = rng.next()
                const severity: Severity = r < 0.08 ? 'significant' : r < 0.35 ? 'major' : r < 0.85 ? 'minor' : 'observation'
                const identified = addDays(start, rng.int(0, external ? 8 : 3)) ?? start
                const due = closureDueDate(identified, severity)
                let fstate: FindingState = 'open'
                let closedOn = ''
                if (fy <= 2025) {
                    const closeP = riskProfile === 0 ? 0.95 : riskProfile === 2 ? 0.7 : 0.85
                    if (severity === 'observation') { fstate = 'closed'; closedOn = day(identified, rng.int(5, 60)) }
                    else if (rng.chance(closeP)) { fstate = 'closed'; closedOn = day(identified, rng.int(20, (due ? Math.max(30, (Date.parse(due) - Date.parse(identified)) / 86400000) : 120) * (rng.chance(0.8) ? 1 : 1.4))) }
                    else if (rng.chance(0.15)) { fstate = 'risk_accepted'; closedOn = day(identified, rng.int(60, 200)) }
                } else if (state !== 'in_progress' && severity !== 'observation' && rng.chance(0.6)) fstate = 'ca_assigned'
                const f = { key: `F${++fKey}`, assessment: a.key, program_area: area.code, regulatory_driver: driver.citation, title, description: `${title}. Observed during ${external ? 'external' : 'internal'} EPAS fieldwork; see assessor notes and photographs.`, location: `Bldg ${rng.int(100, 9999)}`, severity, root_cause: rng.pick(ROOT_CAUSES), identified_on: identified, target_state: fstate, closed_on: closedOn, closure_justification: fstate === 'closed' ? 'Corrective action verified; evidence attached.' : fstate === 'risk_accepted' ? 'Commander accepted residual risk pending MILCON project; interim controls in place.' : '' }
                ds.findings.push(f)
                if (severity !== 'observation' && (fstate !== 'open' || rng.chance(0.4))) {
                    const caType = rng.pick(CA_TYPES)
                    const funding = caType === 'funded_project' || caType === 'immediate_fix' ? rng.pick(FUNDING) : 'not_required'
                    const caState: CaState = fstate === 'closed' ? 'verified' : fstate === 'risk_accepted' ? 'cancelled' : fstate === 'ca_assigned' ? (rng.chance(0.3) ? 'pending_approval' : 'in_progress') : 'draft'
                    ds.corrective_actions.push({ finding: f.key, short_description: `Correct: ${title}`, description: `Root cause ${f.root_cause}. ${caType === 'training' ? 'Retrain affected personnel and document attendance.' : caType === 'funded_project' ? 'Program and execute facility project; interim controls until complete.' : 'Update SOP, brief staff, and verify by follow-up inspection.'}`, action_type: caType, funding_status: funding, cost_estimate: caType === 'funded_project' ? rng.int(50, 900) * 1000 : caType === 'immediate_fix' ? rng.int(5, 80) * 1000 : rng.int(0, 5) * 1000, due_date: due ?? addDays(identified, 120), percent_complete: caState === 'verified' ? 100 : caState === 'pending_approval' ? 100 : caState === 'in_progress' ? rng.int(10, 80) : 0, target_state: caState, evidence_attached: caState === 'verified' || caState === 'pending_approval', verification_notes: caState === 'verified' ? 'Follow-up inspection confirmed; photos and training roster attached.' : '' })
                }
            }
        }
        if (riskProfile !== 0) {
            const count = riskProfile === 2 ? 2 : 1
            for (let k = 0; k < count; k++) {
                const area = rng.pick(['HW', 'AIR', 'WATER', 'STORM', 'TANKS'] as const)
                const driver = rng.pick(driversByArea(area))
                const received = day(CLOCK, -rng.int(10, 400))
                const types: EnforcementType[] = ['nov', 'nov', 'noe', 'consent_order', 'penalty', 'warning']
                const t = rng.pick(types)
                const age = (Date.parse(CLOCK) - Date.parse(received)) / 86400000
                const estate: EnforcementState = age < 25 ? 'received' : age < 60 ? 'response_drafted' : age < 150 ? 'response_submitted' : rng.chance(0.7) ? 'closed' : 'contested'
                ds.enforcement_actions.push({ installation: inst.name, regulator: driver.regulator_level === 'federal' ? `EPA Region ${inst.epa_region}` : `${inst.state} state environmental agency`, regulator_level: driver.regulator_level === 'army' ? 'state' : driver.regulator_level, action_type: t, program_area: area, regulatory_driver: driver.citation, reference_number: `${inst.state}-${rng.int(2024, 2026)}-${rng.int(1000, 9999)}`, summary: `${t === 'nov' ? 'Notice of Violation' : t === 'noe' ? 'Notice of Enforcement' : t === 'consent_order' ? 'Consent order' : t === 'penalty' ? 'Penalty assessment' : 'Warning letter'}: ${driver.name}`, allegations: `Inspection found ${rng.pick(TITLES[area] ?? ['recordkeeping gaps']).toLowerCase()}; alleged violation of ${driver.citation}.`, received_on: received, response_due: addDays(received, 30), response_submitted_on: estate === 'received' || estate === 'response_drafted' ? '' : addDays(received, rng.int(14, 29)), penalty_proposed: t === 'penalty' || t === 'consent_order' ? rng.int(15, 240) * 1000 : t === 'nov' && rng.chance(0.4) ? rng.int(5, 60) * 1000 : 0, penalty_final: estate === 'closed' ? rng.int(0, 60) * 1000 : 0, target_state: estate, linked_finding_area: area })
            }
        }
        for (const q of ['FY26Q2', 'FY26Q3', 'FY26Q4']) {
            const month = q === 'FY26Q2' ? '2026-03' : q === 'FY26Q3' ? '2026-06' : '2026-09'
            ds.eqcc_meetings.push({ installation: inst.name, fiscal_quarter: q, meeting_date: `${month}-${String(rng.int(8, 26)).padStart(2, '0')}`, decisions: rng.pick(['Commander directed hazardous waste refresher training for all motor pools by end of quarter.', 'Unfunded SPCC secondary containment project elevated to IMCOM for FY27 programming.', 'Risk acceptance for legacy UST monitoring gap approved pending replacement contract.', 'Repeat storm water findings assigned to DPW with 60-day suspense.', 'No new direction; review of open NOV response status.']) })
        }
    })
    return ds
}

function isMain(): boolean {
    return process.argv[1] !== undefined && import.meta.url === new URL(`file://${process.argv[1]}`).href
}
if (isMain()) {
    mkdirSync(SAMPLE_DIR, { recursive: true })
    const ds = generate()
    for (const [k, v] of Object.entries(ds)) writeFileSync(`${SAMPLE_DIR}${k}.json`, JSON.stringify(v, null, 2) + '\n')
    const counts = Object.fromEntries(Object.entries(ds).map(([k, v]) => [k, v.length]))
    writeFileSync(`${SAMPLE_DIR}README.md`, `# Synthetic sample data\n\nGenerated by \`npm run gen:sample-data\` (seed ${SEED}, clock ${CLOCK}). Installation names are public Army posts; every UIC, finding, date, penalty and decision is invented. No Army data was used.\n\n| file | rows |\n|---|---|\n${Object.entries(counts).map(([k, v]) => `| ${k}.json | ${v} |`).join('\n')}\n\nLoad with \`npm run seed\` (requires PDI credentials in the environment).\n`)
    console.log(JSON.stringify(counts))
}
