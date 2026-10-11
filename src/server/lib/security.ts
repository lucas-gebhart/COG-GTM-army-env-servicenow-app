/**
 * Access-control matrix, the single source of truth for table ACLs.
 * `tools/generate-fluent-security.ts` renders it into `src/fluent/security/acls.now.ts`;
 * `tests/security-sync.test.ts` fails when the two drift.
 */
import { type RoleKey, type TableKey } from './domain.ts'

export type Operation = 'create' | 'read' | 'write' | 'delete'
export type TableAccess = Readonly<Record<Operation, readonly RoleKey[]>>

const ALL: readonly RoleKey[] = ['compliance_officer', 'assessor', 'commander', 'hqda_analyst', 'admin']
const FIELD_STAFF: readonly RoleKey[] = ['compliance_officer', 'assessor', 'admin']
const ADMIN_ONLY: readonly RoleKey[] = ['admin']

export const TABLE_ACCESS: Readonly<Record<TableKey, TableAccess>> = {
    installation: { read: ALL, create: ['hqda_analyst', 'admin'], write: ['hqda_analyst', 'commander', 'admin'], delete: ADMIN_ONLY },
    program_area: { read: ALL, create: ['hqda_analyst', 'admin'], write: ['hqda_analyst', 'admin'], delete: ADMIN_ONLY },
    regulatory_driver: { read: ALL, create: ['hqda_analyst', 'assessor', 'admin'], write: ['hqda_analyst', 'assessor', 'admin'], delete: ADMIN_ONLY },
    assessment: { read: ALL, create: FIELD_STAFF, write: FIELD_STAFF, delete: ADMIN_ONLY },
    finding: { read: ALL, create: FIELD_STAFF, write: ['compliance_officer', 'assessor', 'commander', 'admin'], delete: ADMIN_ONLY },
    corrective_action: { read: ALL, create: FIELD_STAFF, write: ['compliance_officer', 'assessor', 'commander', 'admin'], delete: ADMIN_ONLY },
    enforcement_action: { read: ALL, create: ['compliance_officer', 'hqda_analyst', 'admin'], write: ['compliance_officer', 'commander', 'hqda_analyst', 'admin'], delete: ADMIN_ONLY },
    eqcc_meeting: { read: ALL, create: ['compliance_officer', 'commander', 'admin'], write: ['compliance_officer', 'commander', 'admin'], delete: ADMIN_ONLY },
    vantage_export_run: { read: ['hqda_analyst', 'admin'], create: ['hqda_analyst', 'admin'], write: ADMIN_ONLY, delete: ADMIN_ONLY },
}

/** Fields only the platform (business rules) may write; everyone with table read may read them. */
export const SYSTEM_FIELDS: Readonly<Partial<Record<TableKey, readonly string[]>>> = {
    installation: ['risk_score', 'risk_rating', 'risk_drivers', 'open_findings', 'overdue_findings', 'repeat_findings', 'open_enforcement_actions', 'risk_computed_at'],
    assessment: ['finalization_due', 'finalized_on', 'findings_total', 'findings_significant', 'findings_major', 'findings_minor', 'findings_repeat'],
    finding: ['installation', 'repeat_finding', 'previous_finding', 'closure_due', 'closed_on', 'closed_by', 'days_open', 'aging_flag'],
    corrective_action: ['installation', 'requested_closure_on', 'verified_by', 'verified_on'],
    enforcement_action: ['days_to_respond', 'linked_findings', 'closed_on'],
}
