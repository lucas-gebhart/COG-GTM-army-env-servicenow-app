/**
 * State machines for findings, corrective actions and enforcement actions, with the role rules the
 * business rules and UI actions enforce. Pure functions, exercised directly by Vitest.
 */
import type { AssessmentState, CaState, EnforcementState, FindingState, RoleKey, Severity } from './domain.ts'

export interface Decision {
    allowed: boolean
    reason?: string
}
const allow = (): Decision => ({ allowed: true })
const deny = (reason: string): Decision => ({ allowed: false, reason })
const has = (roles: readonly RoleKey[], ...wanted: RoleKey[]): boolean => roles.includes('admin') || wanted.some((w) => roles.includes(w))

const ASSESSMENT_TRANSITIONS: Record<AssessmentState, readonly AssessmentState[]> = {
    planned: ['in_progress'],
    in_progress: ['draft_report', 'planned'],
    draft_report: ['finalized', 'in_progress'],
    finalized: ['closed'],
    closed: [],
}
export function canTransitionAssessment(input: { from: AssessmentState; to: AssessmentState; roles: readonly RoleKey[]; endDate: string }): Decision {
    const { from, to, roles, endDate } = input
    if (from === to) return allow()
    if (!ASSESSMENT_TRANSITIONS[from].includes(to)) return deny(`An assessment cannot move from ${from} to ${to}`)
    if (to === 'draft_report' && !endDate) return deny('Record the fieldwork end date before closing fieldwork')
    if (to === 'finalized' && !has(roles, 'assessor', 'compliance_officer', 'hqda_analyst')) return deny('Role not permitted to finalize assessment reports')
    if (to === 'closed' && !has(roles, 'compliance_officer', 'commander', 'hqda_analyst')) return deny('Role not permitted to close assessments')
    return allow()
}

const FINDING_TRANSITIONS: Record<FindingState, readonly FindingState[]> = {
    open: ['ca_assigned', 'risk_accepted', 'closed'],
    ca_assigned: ['pending_verification', 'risk_accepted', 'open'],
    pending_verification: ['closed', 'ca_assigned'],
    closed: [],
    risk_accepted: ['open'],
}
export function canTransitionFinding(input: { from: FindingState; to: FindingState; severity: Severity; roles: readonly RoleKey[]; openCorrectiveActions: number }): Decision {
    const { from, to, severity, roles, openCorrectiveActions } = input
    if (from === to) return allow()
    if (!FINDING_TRANSITIONS[from].includes(to)) return deny(`A finding cannot move from ${from} to ${to}`)
    if (to === 'closed') {
        if (openCorrectiveActions > 0) return deny('All corrective actions must be verified or cancelled before the finding closes')
        if (from === 'open' && severity !== 'observation') return deny('Only observations close without a corrective action')
        if (severity === 'significant' && !has(roles, 'commander', 'assessor')) return deny('Significant findings are closed by the commander or the assessor')
        if (!has(roles, 'compliance_officer', 'assessor', 'commander')) return deny('Role not permitted to close findings')
    }
    if (to === 'risk_accepted' && !has(roles, 'commander')) return deny('Only the commander can accept risk on a finding')
    if (to === 'ca_assigned' && !has(roles, 'compliance_officer', 'assessor')) return deny('Only the compliance officer or assessor assigns corrective actions')
    if (to === 'open' && from === 'risk_accepted' && !has(roles, 'commander', 'hqda_analyst')) return deny('Reopening a risk-accepted finding requires the commander or HQDA')
    return allow()
}

const CA_TRANSITIONS: Record<CaState, readonly CaState[]> = {
    draft: ['in_progress', 'cancelled'],
    in_progress: ['pending_approval', 'cancelled', 'draft'],
    pending_approval: ['verified', 'in_progress'],
    verified: [],
    cancelled: ['draft'],
}
/** Significant-finding corrective actions need commander approval; others verify by the assessor or compliance officer. */
export function canTransitionCa(input: { from: CaState; to: CaState; findingSeverity: Severity; roles: readonly RoleKey[]; hasEvidence: boolean; isOwner: boolean }): Decision {
    const { from, to, findingSeverity, roles, hasEvidence, isOwner } = input
    if (from === to) return allow()
    if (!CA_TRANSITIONS[from].includes(to)) return deny(`A corrective action cannot move from ${from} to ${to}`)
    if (to === 'pending_approval') {
        if (!hasEvidence) return deny('Attach verification evidence before requesting closure')
        if (!isOwner && !has(roles, 'compliance_officer', 'assessor')) return deny('Only the owner or the compliance officer can request closure')
    }
    if (to === 'verified') {
        if (findingSeverity === 'significant' && !has(roles, 'commander')) return deny('Corrective actions on significant findings are verified by the commander')
        if (!has(roles, 'commander', 'assessor', 'compliance_officer')) return deny('Role not permitted to verify corrective actions')
        if (isOwner && !has(roles, 'commander')) return deny('Owners cannot verify their own corrective action')
    }
    if (to === 'cancelled' && !has(roles, 'compliance_officer', 'commander')) return deny('Only the compliance officer or commander cancels a corrective action')
    return allow()
}

const EA_TRANSITIONS: Record<EnforcementState, readonly EnforcementState[]> = {
    received: ['response_drafted', 'contested', 'closed'],
    response_drafted: ['response_submitted', 'received'],
    response_submitted: ['closed', 'contested'],
    contested: ['closed', 'response_submitted'],
    closed: [],
}
export function canTransitionEnforcement(input: { from: EnforcementState; to: EnforcementState; roles: readonly RoleKey[]; responseSubmittedOn: string }): Decision {
    const { from, to, roles, responseSubmittedOn } = input
    if (from === to) return allow()
    if (!EA_TRANSITIONS[from].includes(to)) return deny(`An enforcement action cannot move from ${from} to ${to}`)
    if (to === 'response_submitted' && !responseSubmittedOn) return deny('Record the response submission date')
    if (to === 'closed' && !has(roles, 'compliance_officer', 'commander', 'hqda_analyst')) return deny('Role not permitted to close enforcement actions')
    if (to === 'contested' && !has(roles, 'commander', 'hqda_analyst')) return deny('Contesting an enforcement action requires the commander or HQDA')
    return allow()
}

/** The finding state implied by its corrective actions. */
export function deriveFindingState(current: FindingState, cas: readonly { state: CaState }[]): FindingState {
    if (current === 'closed' || current === 'risk_accepted') return current
    const live = cas.filter((c) => c.state !== 'cancelled')
    if (live.length === 0) return 'open'
    if (live.every((c) => c.state === 'verified')) return 'pending_verification'
    return 'ca_assigned'
}
