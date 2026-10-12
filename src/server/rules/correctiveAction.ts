/** Business rules for x_cog_env_corrective_action: evidence-gated verification and finding state derivation. */
import { GlideRecord, gs } from '@servicenow/glide'
import { TABLES, type CaState, type FindingState, type Severity } from '../lib/domain.ts'
import { canTransitionCa, deriveFindingState } from '../lib/lifecycle.ts'
import { mergeResults, validateIsoDate, validateMoney, validateMultiline, validateSafeText } from '../lib/validators.ts'
import { todayIso } from './config.ts'
import { abortWithMessage, abortWithValidation, countChildren, currentRoleKeys, securityLog, str, type AnyRecord } from './glideSupport.ts'

function hasAttachment(table: string, sysId: string): boolean {
    if (!sysId) return false
    return countChildren('sys_attachment', 'table_sys_id', sysId, { field: 'table_name', operator: '=', value: table }) > 0
}

/** before insert/update */
export function correctiveActionBefore(current: AnyRecord, previous: AnyRecord): void {
    const table = TABLES.corrective_action
    const isInsert = current.isNewRecord()
    const validation = mergeResults([
        validateSafeText('short_description', str(current, 'short_description'), 160, true),
        validateMultiline('description', str(current, 'description'), 4000, false),
        validateMultiline('verification_notes', str(current, 'verification_notes'), 4000, false),
        validateIsoDate(str(current, 'due_date'), 'due_date', false),
        validateMoney(str(current, 'cost_estimate') || '0', 'cost_estimate'),
    ])
    if (!validation.valid) {
        abortWithValidation(current, validation, table)
        return
    }

    const finding = new GlideRecord(TABLES.finding)
    const hasFinding = finding.get(str(current, 'finding'))
    if (hasFinding) current.setValue('installation', str(finding, 'installation'))
    const findingSeverity = (hasFinding ? str(finding, 'severity') : 'minor') as Severity

    const evidence = hasAttachment(table, isInsert ? '' : current.getUniqueValue()) || str(current, 'evidence_attached') === 'true'
    current.setValue('evidence_attached', evidence ? 'true' : 'false')

    const fromState = (isInsert ? 'draft' : str(previous, 'state') || 'draft') as CaState
    const toState = (str(current, 'state') || 'draft') as CaState
    if (fromState !== toState) {
        const decision = canTransitionCa({
            from: fromState,
            to: toState,
            findingSeverity,
            roles: currentRoleKeys(),
            hasEvidence: evidence,
            isOwner: str(current, 'owner') === gs.getUserID(),
        })
        if (!decision.allowed) {
            abortWithMessage(current, decision.reason ?? 'That state change is not allowed.', table, `ca_${fromState}_to_${toState}`)
            return
        }
        if (toState === 'pending_approval') current.setValue('requested_closure_on', todayIso())
        if (toState === 'verified') {
            current.setValue('verified_by', gs.getUserID())
            current.setValue('verified_on', todayIso())
            current.setValue('percent_complete', '100')
        }
        if (toState === 'in_progress' && fromState === 'pending_approval') current.setValue('requested_closure_on', '')
    }
}

/** after insert/update/delete: derive the parent finding state from its corrective actions. */
export function correctiveActionAfter(current: AnyRecord, previous: AnyRecord): void {
    const findingSysId = str(current, 'finding') || str(previous, 'finding')
    if (!findingSysId) return
    const cas: { state: CaState }[] = []
    const gr = new GlideRecord(TABLES.corrective_action)
    gr.addQuery('finding', findingSysId)
    gr.query()
    while (gr.next()) cas.push({ state: str(gr, 'state') as CaState })

    const finding = new GlideRecord(TABLES.finding)
    if (!finding.get(findingSysId)) return
    const currentState = str(finding, 'state') as FindingState
    const derived = deriveFindingState(currentState, cas)
    if (derived === currentState) return
    finding.setValue('state', derived)
    finding.setWorkflow(false)
    finding.update()
    securityLog({ event: 'data_change', table: TABLES.finding, record: findingSysId, outcome: 'success', reason: 'derived_from_corrective_actions', details: { from: currentState, to: derived } })
}
