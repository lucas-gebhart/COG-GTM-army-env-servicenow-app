/** Business rules for x_cog_env_enforcement_action: response countdown and role-gated closure. */
import { isTerminalEnforcementState, TABLES, type EnforcementState } from '../lib/domain.ts'
import { daysBetween } from '../lib/dates.ts'
import { canTransitionEnforcement } from '../lib/lifecycle.ts'
import { enforcementResponseDue } from '../lib/sla.ts'
import { mergeResults, validateDateOrder, validateIsoDate, validateMoney, validateMultiline, validateSafeText } from '../lib/validators.ts'
import { slaConfig, todayIso } from './config.ts'
import { abortWithMessage, abortWithValidation, currentRoleKeys, str, type AnyRecord } from './glideSupport.ts'

/** before insert/update */
export function enforcementBefore(current: AnyRecord, previous: AnyRecord): void {
    const table = TABLES.enforcement_action
    const isInsert = current.isNewRecord()
    const validation = mergeResults([
        validateSafeText('regulator', str(current, 'regulator'), 80, true),
        validateSafeText('reference_number', str(current, 'reference_number'), 60, false),
        validateSafeText('summary', str(current, 'summary'), 160, true),
        validateMultiline('allegations', str(current, 'allegations'), 4000, false),
        validateIsoDate(str(current, 'received_on'), 'received_on', false),
        validateIsoDate(str(current, 'response_due'), 'response_due', false),
        validateIsoDate(str(current, 'response_submitted_on'), 'response_submitted_on', false),
        validateDateOrder('received_on', str(current, 'received_on'), 'response_due', str(current, 'response_due')),
        validateMoney(str(current, 'penalty_proposed') || '0', 'penalty_proposed'),
        validateMoney(str(current, 'penalty_final') || '0', 'penalty_final'),
    ])
    if (!validation.valid) {
        abortWithValidation(current, validation, table)
        return
    }

    if (!str(current, 'received_on')) current.setValue('received_on', todayIso())
    const received = str(current, 'received_on')
    if (!str(current, 'response_due')) current.setValue('response_due', enforcementResponseDue(received, slaConfig()) ?? '')

    const fromState = (isInsert ? 'received' : str(previous, 'state') || 'received') as EnforcementState
    const toState = (str(current, 'state') || 'received') as EnforcementState
    if (fromState !== toState) {
        const decision = canTransitionEnforcement({ from: fromState, to: toState, roles: currentRoleKeys(), responseSubmittedOn: str(current, 'response_submitted_on') })
        if (!decision.allowed) {
            abortWithMessage(current, decision.reason ?? 'That state change is not allowed.', table, `ea_${fromState}_to_${toState}`)
            return
        }
        current.setValue('closed_on', isTerminalEnforcementState(toState) ? todayIso() : '')
    }

    const due = str(current, 'response_due')
    const submitted = str(current, 'response_submitted_on')
    const anchor = submitted || todayIso()
    current.setValue('days_to_respond', String(due ? (daysBetween(anchor, due) ?? 0) : 0))
}
