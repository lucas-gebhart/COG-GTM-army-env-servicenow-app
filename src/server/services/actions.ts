/**
 * UI action handlers. Each sets the target state and lets the business rules enforce
 * role / evidence guards, so the form button and a direct update behave identically.
 */
import { gs } from '@servicenow/glide'
import { TABLES } from '../lib/domain.ts'
import { refreshInstallationRisk } from '../jobs/nightly.ts'
import { todayIso } from '../rules/config.ts'
import { str, type AnyRecord } from '../rules/glideSupport.ts'

function transition(current: AnyRecord, state: string, successMessage: string): boolean {
    current.setValue('state', state)
    const ok = current.update() !== null && str(current, 'state') === state
    if (ok) gs.addInfoMessage(successMessage)
    return ok
}

export function startAssessment(current: AnyRecord): void {
    if (!str(current, 'start_date')) current.setValue('start_date', todayIso())
    transition(current, 'in_progress', 'Fieldwork started.')
}
export function draftAssessmentReport(current: AnyRecord): void {
    if (!str(current, 'end_date')) current.setValue('end_date', todayIso())
    transition(current, 'draft_report', 'Fieldwork closed; the report finalization clock is running.')
}
export function finalizeAssessment(current: AnyRecord): void {
    transition(current, 'finalized', 'Assessment report finalized. Findings are now official.')
}

export function assignCorrectiveAction(current: AnyRecord): void {
    transition(current, 'ca_assigned', 'Finding marked as having corrective action assigned.')
}
export function closeFinding(current: AnyRecord): void {
    transition(current, 'closed', 'Finding closed.')
    refreshInstallationRisk(str(current, 'installation'), todayIso())
}
export function acceptRisk(current: AnyRecord): void {
    transition(current, 'risk_accepted', 'Risk accepted by command. The justification is part of the audit record.')
    refreshInstallationRisk(str(current, 'installation'), todayIso())
}

export function startCorrectiveAction(current: AnyRecord): void {
    transition(current, 'in_progress', 'Corrective action in progress.')
}
export function requestClosure(current: AnyRecord): void {
    transition(current, 'pending_approval', 'Closure requested. An assessor or commander will verify the evidence.')
}
export function verifyCorrectiveAction(current: AnyRecord): void {
    transition(current, 'verified', 'Corrective action verified.')
}
export function returnCorrectiveAction(current: AnyRecord): void {
    current.setValue('state', 'in_progress')
    if (current.update() !== null) gs.addInfoMessage('Returned to the owner for more work.')
}

export function draftResponse(current: AnyRecord): void {
    transition(current, 'response_drafted', 'Response drafting started.')
}
export function submitResponse(current: AnyRecord): void {
    if (!str(current, 'response_submitted_on')) current.setValue('response_submitted_on', todayIso())
    transition(current, 'response_submitted', 'Response recorded as submitted to the regulator.')
}
export function contestEnforcement(current: AnyRecord): void {
    transition(current, 'contested', 'Enforcement action marked as contested; close once the dispute is settled.')
}
export function closeEnforcement(current: AnyRecord): void {
    transition(current, 'closed', 'Enforcement action closed.')
    refreshInstallationRisk(str(current, 'installation'), todayIso())
}

export function recomputeInstallationRisk(current: AnyRecord): void {
    const r = refreshInstallationRisk(current.getUniqueValue(), todayIso())
    gs.addInfoMessage(`Risk posture recomputed: ${r.rating}.`)
}

export { TABLES }
