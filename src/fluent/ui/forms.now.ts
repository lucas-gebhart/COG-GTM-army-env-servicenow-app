import '@servicenow/sdk/global'
import { Form, default_view } from '@servicenow/sdk/core'

export const formInstallation = Form({
    table: 'x_cog_env_installation',
    view: default_view,
    sections: [
        { caption: 'Installation', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'name' }, { type: 'table_field', field: 'uic' }, { type: 'table_field', field: 'acom' }, { type: 'table_field', field: 'imcom_directorate' }, { type: 'table_field', field: 'state' }, { type: 'table_field', field: 'epa_region' }], rightElements: [{ type: 'table_field', field: 'garrison_env_chief' }, { type: 'table_field', field: 'commander' }, { type: 'table_field', field: 'active' }, { type: 'table_field', field: 'last_external_assessment' }, { type: 'table_field', field: 'next_external_due' }] }] },
        { caption: 'Risk posture (computed nightly)', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'risk_rating' }, { type: 'table_field', field: 'risk_score' }, { type: 'table_field', field: 'risk_computed_at' }], rightElements: [{ type: 'table_field', field: 'open_findings' }, { type: 'table_field', field: 'overdue_findings' }, { type: 'table_field', field: 'repeat_findings' }, { type: 'table_field', field: 'open_enforcement_actions' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'risk_drivers' }] }] },
    ],
})

export const formAssessment = Form({
    table: 'x_cog_env_assessment',
    view: default_view,
    sections: [
        { caption: 'EPAS assessment', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'installation' }, { type: 'table_field', field: 'assessment_type' }, { type: 'table_field', field: 'fiscal_year' }, { type: 'table_field', field: 'team_lead' }], rightElements: [{ type: 'table_field', field: 'state' }, { type: 'table_field', field: 'start_date' }, { type: 'table_field', field: 'end_date' }, { type: 'table_field', field: 'finalization_due' }, { type: 'table_field', field: 'finalized_on' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'scope_notes' }] }] },
        { caption: 'Findings summary', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'findings_total' }, { type: 'table_field', field: 'findings_significant' }, { type: 'table_field', field: 'findings_major' }], rightElements: [{ type: 'table_field', field: 'findings_minor' }, { type: 'table_field', field: 'findings_repeat' }, { type: 'table_field', field: 'active' }] }] },
        { caption: 'Notes', content: [{ layout: 'one-column', elements: [{ type: 'table_field', field: 'work_notes' }] }] },
    ],
})

export const formFinding = Form({
    table: 'x_cog_env_finding',
    view: default_view,
    sections: [
        { caption: 'Finding', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'assessment' }, { type: 'table_field', field: 'installation' }, { type: 'table_field', field: 'program_area' }, { type: 'table_field', field: 'regulatory_driver' }, { type: 'table_field', field: 'location' }, { type: 'table_field', field: 'assigned_to' }], rightElements: [{ type: 'table_field', field: 'state' }, { type: 'table_field', field: 'severity' }, { type: 'table_field', field: 'root_cause' }, { type: 'table_field', field: 'identified_on' }, { type: 'table_field', field: 'closure_due' }, { type: 'table_field', field: 'aging_flag' }, { type: 'table_field', field: 'days_open' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'title' }, { type: 'table_field', field: 'description' }] }] },
        { caption: 'Repeat and enforcement linkage', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'repeat_finding' }, { type: 'table_field', field: 'previous_finding' }], rightElements: [{ type: 'table_field', field: 'enforcement_action' }, { type: 'table_field', field: 'active' }] }] },
        { caption: 'Closure', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'closed_on' }], rightElements: [{ type: 'table_field', field: 'closed_by' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'closure_justification' }, { type: 'table_field', field: 'work_notes' }] }] },
    ],
})

export const formCorrectiveAction = Form({
    table: 'x_cog_env_corrective_action',
    view: default_view,
    sections: [
        { caption: 'Corrective action', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'finding' }, { type: 'table_field', field: 'installation' }, { type: 'table_field', field: 'action_type' }, { type: 'table_field', field: 'owner' }], rightElements: [{ type: 'table_field', field: 'state' }, { type: 'table_field', field: 'due_date' }, { type: 'table_field', field: 'percent_complete' }, { type: 'table_field', field: 'funding_status' }, { type: 'table_field', field: 'cost_estimate' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'short_description' }, { type: 'table_field', field: 'description' }] }] },
        { caption: 'Verification', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'evidence_attached' }, { type: 'table_field', field: 'requested_closure_on' }], rightElements: [{ type: 'table_field', field: 'verified_by' }, { type: 'table_field', field: 'verified_on' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'verification_notes' }, { type: 'table_field', field: 'work_notes' }] }] },
    ],
})

export const formEnforcement = Form({
    table: 'x_cog_env_enforcement_action',
    view: default_view,
    sections: [
        { caption: 'Enforcement action', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'installation' }, { type: 'table_field', field: 'regulator' }, { type: 'table_field', field: 'regulator_level' }, { type: 'table_field', field: 'action_type' }, { type: 'table_field', field: 'reference_number' }, { type: 'table_field', field: 'program_area' }, { type: 'table_field', field: 'regulatory_driver' }], rightElements: [{ type: 'table_field', field: 'state' }, { type: 'table_field', field: 'received_on' }, { type: 'table_field', field: 'response_due' }, { type: 'table_field', field: 'days_to_respond' }, { type: 'table_field', field: 'response_submitted_on' }, { type: 'table_field', field: 'response_lead' }, { type: 'table_field', field: 'linked_findings' }, { type: 'table_field', field: 'closed_on' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'summary' }, { type: 'table_field', field: 'allegations' }] }] },
        { caption: 'Penalty', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'penalty_proposed' }], rightElements: [{ type: 'table_field', field: 'penalty_final' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'work_notes' }] }] },
    ],
})

export const formEqcc = Form({
    table: 'x_cog_env_eqcc_meeting',
    view: default_view,
    sections: [
        { caption: 'EQCC meeting', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'installation' }, { type: 'table_field', field: 'fiscal_quarter' }, { type: 'table_field', field: 'meeting_date' }, { type: 'table_field', field: 'chair' }], rightElements: [{ type: 'table_field', field: 'risk_rating_at_meeting' }, { type: 'table_field', field: 'open_findings' }, { type: 'table_field', field: 'overdue_findings' }, { type: 'table_field', field: 'open_corrective_actions' }, { type: 'table_field', field: 'open_enforcement_actions' }, { type: 'table_field', field: 'snapshot_taken_at' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'decisions' }] }] },
    ],
})

export const formExportRun = Form({
    table: 'x_cog_env_vantage_export_run',
    view: default_view,
    sections: [
        { caption: 'Vantage export run', content: [{ layout: 'two-column', leftElements: [{ type: 'table_field', field: 'number' }, { type: 'table_field', field: 'data_product' }, { type: 'table_field', field: 'trigger' }, { type: 'table_field', field: 'status' }, { type: 'table_field', field: 'triggered_by' }], rightElements: [{ type: 'table_field', field: 'started_at' }, { type: 'table_field', field: 'finished_at' }, { type: 'table_field', field: 'row_count' }, { type: 'table_field', field: 'schema_version' }, { type: 'table_field', field: 'content_hash' }, { type: 'table_field', field: 'http_status' }] }, { layout: 'one-column', elements: [{ type: 'table_field', field: 'endpoint' }, { type: 'table_field', field: 'message' }, { type: 'table_field', field: 'payload_preview' }] }] },
    ],
})
