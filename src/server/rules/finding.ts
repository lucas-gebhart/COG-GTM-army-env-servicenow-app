/**
 * Business rules for x_cog_env_finding: validation, installation stamping, severity-driven
 * closure dates, repeat-finding detection, role-gated state transitions, aging.
 */
import { GlideRecord, gs } from '@servicenow/glide'
import { isTerminalFindingState, REPEAT_LOOKBACK_FY, TABLES, type FindingState, type Severity } from '../lib/domain.ts'
import { canTransitionFinding } from '../lib/lifecycle.ts'
import { detectRepeat, type PriorFinding } from '../lib/repeat.ts'
import { closureDueDate, computeAging } from '../lib/sla.ts'
import { mergeResults, validateIsoDate, validateMultiline, validateSafeText } from '../lib/validators.ts'
import { recountAssessment } from './assessment.ts'
import { slaConfig, todayIso } from './config.ts'
import { abortWithMessage, abortWithValidation, countChildren, currentRoleKeys, int, securityLog, str, type AnyRecord } from './glideSupport.ts'

function assessmentFiscalYear(assessmentSysId: string): { fiscalYear: number; installation: string } | null {
    const a = new GlideRecord(TABLES.assessment)
    if (!assessmentSysId || !a.get(assessmentSysId)) return null
    return { fiscalYear: int(a, 'fiscal_year'), installation: str(a, 'installation') }
}

function priorFindings(installation: string, programArea: string, excludeSysId: string, fiscalYear: number): PriorFinding[] {
    const out: PriorFinding[] = []
    if (!installation || !programArea) return out
    const gr = new GlideRecord(TABLES.finding)
    gr.addQuery('installation', installation)
    gr.addQuery('program_area', programArea)
    gr.addQuery('state', '!=', 'cancelled')
    gr.addQuery('assessment.fiscal_year', '<', String(fiscalYear))
    gr.addQuery('assessment.fiscal_year', '>=', String(fiscalYear - REPEAT_LOOKBACK_FY))
    if (excludeSysId) gr.addQuery('sys_id', '!=', excludeSysId)
    gr.orderByDesc('assessment.fiscal_year')
    gr.setLimit(50)
    gr.query()
    while (gr.next()) {
        out.push({
            sysId: gr.getUniqueValue(),
            fiscalYear: Number.parseInt(String(gr.getElement('assessment.fiscal_year')?.toString() ?? '0'), 10) || 0,
            programArea: str(gr, 'program_area'),
            regulatoryDriver: str(gr, 'regulatory_driver'),
            installation: str(gr, 'installation'),
        })
    }
    return out
}

/** before insert/update */
export function findingBefore(current: AnyRecord, previous: AnyRecord): void {
    const table = TABLES.finding
    const isInsert = current.isNewRecord()
    const validation = mergeResults([
        validateSafeText('title', str(current, 'title'), 160, true),
        validateMultiline('description', str(current, 'description'), 4000, false),
        validateSafeText('location', str(current, 'location'), 120, false),
        validateMultiline('closure_justification', str(current, 'closure_justification'), 4000, false),
        validateIsoDate(str(current, 'identified_on'), 'identified_on', false),
    ])
    if (!validation.valid) {
        abortWithValidation(current, validation, table)
        return
    }

    const ctx = assessmentFiscalYear(str(current, 'assessment'))
    if (ctx && ctx.installation) current.setValue('installation', ctx.installation)
    if (!str(current, 'identified_on')) current.setValue('identified_on', todayIso())

    const severity = (str(current, 'severity') || 'minor') as Severity
    const identifiedOn = str(current, 'identified_on')
    const cfg = slaConfig()
    const severityChanged = isInsert || current.getElement('severity')?.changes() || current.getElement('identified_on')?.changes()
    if (severityChanged) current.setValue('closure_due', closureDueDate(identifiedOn, severity, cfg) ?? '')

    if (ctx && (isInsert || current.getElement('program_area')?.changes() || current.getElement('regulatory_driver')?.changes())) {
        const check = detectRepeat(
            { fiscalYear: ctx.fiscalYear, programArea: str(current, 'program_area'), regulatoryDriver: str(current, 'regulatory_driver'), installation: str(current, 'installation') },
            priorFindings(str(current, 'installation'), str(current, 'program_area'), isInsert ? '' : current.getUniqueValue(), ctx.fiscalYear)
        )
        current.setValue('repeat_finding', check.repeat ? 'true' : 'false')
        current.setValue('previous_finding', check.priorSysId ?? '')
    }

    const fromState = (isInsert ? 'open' : str(previous, 'state') || 'open') as FindingState
    const toState = (str(current, 'state') || 'open') as FindingState
    if (fromState !== toState) {
        const decision = canTransitionFinding({
            from: fromState,
            to: toState,
            severity,
            roles: currentRoleKeys(),
            openCorrectiveActions: isInsert ? 0 : countChildren(TABLES.corrective_action, 'finding', current.getUniqueValue(), { field: 'state', operator: 'NOT IN', value: 'verified,cancelled' }),
        })
        if (!decision.allowed) {
            abortWithMessage(current, decision.reason ?? 'That state change is not allowed.', table, `finding_${fromState}_to_${toState}`)
            return
        }
        if ((toState === 'closed' || toState === 'risk_accepted') && !str(current, 'closure_justification')) {
            abortWithMessage(current, 'A closure or risk acceptance justification is required.', table, 'closure_justification_missing')
            return
        }
        if (isTerminalFindingState(toState)) {
            current.setValue('closed_on', todayIso())
            current.setValue('closed_by', gs.getUserID())
        } else {
            current.setValue('closed_on', '')
            current.setValue('closed_by', '')
        }
    }

    const aging = computeAging(identifiedOn, isTerminalFindingState(toState) ? null : str(current, 'closure_due') || null, isTerminalFindingState(toState) ? str(current, 'closed_on') || todayIso() : todayIso())
    current.setValue('days_open', String(aging.daysOpen))
    current.setValue('aging_flag', isTerminalFindingState(toState) ? 'green' : aging.flag)
}

function recountEnforcement(enforcementSysId: string): void {
    if (!enforcementSysId) return
    const n = countChildren(TABLES.finding, 'enforcement_action', enforcementSysId)
    const ea = new GlideRecord(TABLES.enforcement_action)
    if (!ea.get(enforcementSysId) || int(ea, 'linked_findings') === n) return
    ea.setValue('linked_findings', String(n))
    ea.setWorkflow(false)
    ea.update()
}

/** after insert/update/delete */
export function findingAfter(current: AnyRecord, previous: AnyRecord): void {
    recountAssessment(str(current, 'assessment'))
    const prevAssessment = str(previous, 'assessment')
    if (prevAssessment && prevAssessment !== str(current, 'assessment')) recountAssessment(prevAssessment)
    recountEnforcement(str(current, 'enforcement_action'))
    const prevEa = str(previous, 'enforcement_action')
    if (prevEa && prevEa !== str(current, 'enforcement_action')) recountEnforcement(prevEa)
    if (current.getElement('state')?.changes()) {
        securityLog({ event: 'data_change', table: TABLES.finding, record: current.getUniqueValue(), outcome: 'success', details: { from: str(previous, 'state'), to: str(current, 'state'), severity: str(current, 'severity') } })
    }
}
