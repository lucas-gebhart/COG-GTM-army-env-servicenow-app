// GENERATED FILE - do not edit by hand.
// Source of truth: src/server/lib/security.ts. Regenerate with `npm run gen:security`.
import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['acl_installation_create'],
    type: 'record',
    table: 'x_cog_env_installation',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_installation create: hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_installation_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_installation create: hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_installation_read'],
    type: 'record',
    table: 'x_cog_env_installation',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_installation read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_installation_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_installation read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_installation_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    operation: 'write',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_installation write: hqda_analyst, commander, admin',
})

Acl({
    $id: Now.ID['acl_installation_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_installation write: hqda_analyst, commander, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_installation_delete'],
    type: 'record',
    table: 'x_cog_env_installation',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation delete: admin',
})

Acl({
    $id: Now.ID['acl_installation_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_installation_risk_score_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'risk_score',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.risk_score is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_risk_rating_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'risk_rating',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.risk_rating is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_risk_drivers_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'risk_drivers',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.risk_drivers is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_open_findings_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'open_findings',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.open_findings is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_overdue_findings_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'overdue_findings',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.overdue_findings is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_repeat_findings_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'repeat_findings',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.repeat_findings is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_open_enforcement_actions_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'open_enforcement_actions',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.open_enforcement_actions is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_installation_risk_computed_at_write'],
    type: 'record',
    table: 'x_cog_env_installation',
    field: 'risk_computed_at',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_installation.risk_computed_at is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_program_area_create'],
    type: 'record',
    table: 'x_cog_env_program_area',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_program_area create: hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_program_area_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_program_area',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_program_area create: hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_program_area_read'],
    type: 'record',
    table: 'x_cog_env_program_area',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_program_area read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_program_area_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_program_area',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_program_area read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_program_area_write'],
    type: 'record',
    table: 'x_cog_env_program_area',
    operation: 'write',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_program_area write: hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_program_area_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_program_area',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_program_area write: hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_program_area_delete'],
    type: 'record',
    table: 'x_cog_env_program_area',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_program_area delete: admin',
})

Acl({
    $id: Now.ID['acl_program_area_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_program_area',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_program_area delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_create'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver create: hqda_analyst, assessor, admin',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver create: hqda_analyst, assessor, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_read'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_write'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    operation: 'write',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver write: hqda_analyst, assessor, admin',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver write: hqda_analyst, assessor, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_delete'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver delete: admin',
})

Acl({
    $id: Now.ID['acl_regulatory_driver_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_regulatory_driver',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_regulatory_driver delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_assessment_create'],
    type: 'record',
    table: 'x_cog_env_assessment',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_assessment create: compliance_officer, assessor, admin',
})

Acl({
    $id: Now.ID['acl_assessment_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_assessment create: compliance_officer, assessor, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_assessment_read'],
    type: 'record',
    table: 'x_cog_env_assessment',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_assessment read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_assessment_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_assessment read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_assessment_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_assessment write: compliance_officer, assessor, admin',
})

Acl({
    $id: Now.ID['acl_assessment_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_assessment write: compliance_officer, assessor, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_assessment_delete'],
    type: 'record',
    table: 'x_cog_env_assessment',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment delete: admin',
})

Acl({
    $id: Now.ID['acl_assessment_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_assessment_finalization_due_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'finalization_due',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.finalization_due is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_assessment_finalized_on_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'finalized_on',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.finalized_on is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_assessment_findings_total_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'findings_total',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.findings_total is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_assessment_findings_significant_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'findings_significant',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.findings_significant is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_assessment_findings_major_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'findings_major',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.findings_major is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_assessment_findings_minor_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'findings_minor',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.findings_minor is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_assessment_findings_repeat_write'],
    type: 'record',
    table: 'x_cog_env_assessment',
    field: 'findings_repeat',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_assessment.findings_repeat is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_create'],
    type: 'record',
    table: 'x_cog_env_finding',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_finding create: compliance_officer, assessor, admin',
})

Acl({
    $id: Now.ID['acl_finding_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_finding create: compliance_officer, assessor, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_finding_read'],
    type: 'record',
    table: 'x_cog_env_finding',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_finding read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_finding_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_finding read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_finding_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_finding write: compliance_officer, assessor, commander, admin',
})

Acl({
    $id: Now.ID['acl_finding_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_finding write: compliance_officer, assessor, commander, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_finding_delete'],
    type: 'record',
    table: 'x_cog_env_finding',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding delete: admin',
})

Acl({
    $id: Now.ID['acl_finding_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_finding_installation_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'installation',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.installation is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_repeat_finding_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'repeat_finding',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.repeat_finding is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_previous_finding_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'previous_finding',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.previous_finding is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_closure_due_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'closure_due',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.closure_due is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_closed_on_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'closed_on',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.closed_on is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_closed_by_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'closed_by',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.closed_by is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_days_open_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'days_open',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.days_open is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_finding_aging_flag_write'],
    type: 'record',
    table: 'x_cog_env_finding',
    field: 'aging_flag',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_finding.aging_flag is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_corrective_action_create'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_corrective_action create: compliance_officer, assessor, admin',
})

Acl({
    $id: Now.ID['acl_corrective_action_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin'],
    description: 'x_cog_env_corrective_action create: compliance_officer, assessor, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_corrective_action_read'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_corrective_action read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_corrective_action_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_corrective_action read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_corrective_action_write'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_corrective_action write: compliance_officer, assessor, commander, admin',
})

Acl({
    $id: Now.ID['acl_corrective_action_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_corrective_action write: compliance_officer, assessor, commander, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_corrective_action_delete'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_corrective_action delete: admin',
})

Acl({
    $id: Now.ID['acl_corrective_action_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_corrective_action delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_corrective_action_installation_write'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: 'installation',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_corrective_action.installation is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_corrective_action_requested_closure_on_write'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: 'requested_closure_on',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_corrective_action.requested_closure_on is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_corrective_action_verified_by_write'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: 'verified_by',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_corrective_action.verified_by is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_corrective_action_verified_on_write'],
    type: 'record',
    table: 'x_cog_env_corrective_action',
    field: 'verified_on',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_corrective_action.verified_on is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_enforcement_action_create'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action create: compliance_officer, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_enforcement_action_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action create: compliance_officer, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_enforcement_action_read'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_enforcement_action_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_enforcement_action_write'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action write: compliance_officer, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_enforcement_action_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action write: compliance_officer, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_enforcement_action_delete'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action delete: admin',
})

Acl({
    $id: Now.ID['acl_enforcement_action_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_enforcement_action_days_to_respond_write'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: 'days_to_respond',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action.days_to_respond is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_enforcement_action_linked_findings_write'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: 'linked_findings',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action.linked_findings is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_enforcement_action_closed_on_write'],
    type: 'record',
    table: 'x_cog_env_enforcement_action',
    field: 'closed_on',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_enforcement_action.closed_on is maintained by business rules; admin only',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_create'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting create: compliance_officer, commander, admin',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting create: compliance_officer, commander, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_read'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting read: compliance_officer, assessor, commander, hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting read: compliance_officer, assessor, commander, hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_write'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting write: compliance_officer, commander, admin',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.compliance_officer', 'x_cog_env.commander', 'x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting write: compliance_officer, commander, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_delete'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting delete: admin',
})

Acl({
    $id: Now.ID['acl_eqcc_meeting_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_eqcc_meeting',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_eqcc_meeting delete: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_create'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run create: hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_all_fields_create'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    field: '*',
    operation: 'create',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run create: hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_read'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    operation: 'read',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run read: hqda_analyst, admin',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_all_fields_read'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    field: '*',
    operation: 'read',
    roles: ['x_cog_env.hqda_analyst', 'x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run read: hqda_analyst, admin (all fields)',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_write'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run write: admin',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_all_fields_write'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    field: '*',
    operation: 'write',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run write: admin (all fields)',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_delete'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run delete: admin',
})

Acl({
    $id: Now.ID['acl_vantage_export_run_all_fields_delete'],
    type: 'record',
    table: 'x_cog_env_vantage_export_run',
    field: '*',
    operation: 'delete',
    roles: ['x_cog_env.admin'],
    description: 'x_cog_env_vantage_export_run delete: admin (all fields)',
})
