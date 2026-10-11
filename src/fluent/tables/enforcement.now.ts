import { BooleanColumn, ChoiceColumn, DateColumn, DateTimeColumn, IntegerColumn, GenericColumn, DecimalColumn, MultiLineTextColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'
import { DATA_PRODUCTS, ENFORCEMENT_STATES, ENFORCEMENT_TYPES, EXPORT_STATUSES, EXPORT_TRIGGERS, REGULATOR_LEVELS } from '../../server/lib/domain'

/** Regulatory enforcement action (NOV, consent order, penalty) received by an installation. */
export const x_cog_env_enforcement_action = Table({
    name: 'x_cog_env_enforcement_action',
    label: 'Enforcement action',
    audit: true,
    display: 'number',
    schema: {
        number: StringColumn({ label: 'Number', maxLength: 40, default: 'javascript:global.getNextObjNumberPadded();', readOnly: true }),
        installation: ReferenceColumn({ label: 'Installation', referenceTable: 'x_cog_env_installation', mandatory: true }),
        regulator: StringColumn({ label: 'Regulator', maxLength: 80, mandatory: true }),
        regulator_level: ChoiceColumn({ label: 'Regulator level', choices: REGULATOR_LEVELS, default: 'state', dropdown: 'dropdown_without_none' }),
        action_type: ChoiceColumn({ label: 'Action type', choices: ENFORCEMENT_TYPES, default: 'nov', dropdown: 'dropdown_without_none' }),
        program_area: ReferenceColumn({ label: 'Program area', referenceTable: 'x_cog_env_program_area' }),
        regulatory_driver: ReferenceColumn({ label: 'Regulatory driver', referenceTable: 'x_cog_env_regulatory_driver' }),
        reference_number: StringColumn({ label: 'Regulator reference', maxLength: 60 }),
        summary: StringColumn({ label: 'Summary', maxLength: 160, mandatory: true }),
        allegations: MultiLineTextColumn({ label: 'Alleged violations', maxLength: 4000 }),
        state: ChoiceColumn({ label: 'State', choices: ENFORCEMENT_STATES, default: 'received', dropdown: 'dropdown_without_none' }),
        received_on: DateColumn({ label: 'Received on', mandatory: true }),
        response_due: DateColumn({ label: 'Response due' }),
        response_submitted_on: DateColumn({ label: 'Response submitted' }),
        days_to_respond: IntegerColumn({ label: 'Days to respond', default: 0, readOnly: true }),
        penalty_proposed: DecimalColumn({ label: 'Penalty proposed' }),
        penalty_final: DecimalColumn({ label: 'Penalty final' }),
        linked_findings: IntegerColumn({ label: 'Linked findings', default: 0, readOnly: true }),
        response_lead: ReferenceColumn({ label: 'Response lead', referenceTable: 'sys_user' }),
        closed_on: DateColumn({ label: 'Closed on', readOnly: true }),
        work_notes: GenericColumn({ label: 'Work notes', columnType: 'journal_input' }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
    index: [{ name: 'idx_ea_installation', unique: false, element: 'installation' }],
    autoNumber: { prefix: 'EEA', number: 1000, numberOfDigits: 7 },
    allowWebServiceAccess: true,
    actions: { read: true, create: true, update: true, delete: true },
})

/** Quarterly EQCC snapshot: what the commander was briefed and what was decided. */
export const x_cog_env_eqcc_meeting = Table({
    name: 'x_cog_env_eqcc_meeting',
    label: 'EQCC meeting',
    audit: true,
    display: 'fiscal_quarter',
    schema: {
        installation: ReferenceColumn({ label: 'Installation', referenceTable: 'x_cog_env_installation', mandatory: true }),
        fiscal_quarter: StringColumn({ label: 'Fiscal quarter', maxLength: 8, mandatory: true }),
        meeting_date: DateColumn({ label: 'Meeting date', mandatory: true }),
        chair: ReferenceColumn({ label: 'Chair', referenceTable: 'sys_user' }),
        open_findings: IntegerColumn({ label: 'Open findings', default: 0, readOnly: true }),
        overdue_findings: IntegerColumn({ label: 'Overdue findings', default: 0, readOnly: true }),
        open_corrective_actions: IntegerColumn({ label: 'Open corrective actions', default: 0, readOnly: true }),
        open_enforcement_actions: IntegerColumn({ label: 'Open enforcement actions', default: 0, readOnly: true }),
        risk_rating_at_meeting: StringColumn({ label: 'Risk rating at meeting', maxLength: 20, readOnly: true }),
        decisions: MultiLineTextColumn({ label: 'Decisions / command guidance', maxLength: 4000 }),
        snapshot_taken_at: DateTimeColumn({ label: 'Snapshot taken', readOnly: true }),
    },
    allowWebServiceAccess: true,
    actions: { read: true, create: true, update: true, delete: true },
})

/** Audit log of every Vantage data product run (scheduled or manual, push or dry run). */
export const x_cog_env_vantage_export_run = Table({
    name: 'x_cog_env_vantage_export_run',
    label: 'Vantage export run',
    display: 'number',
    schema: {
        number: StringColumn({ label: 'Number', maxLength: 40, default: 'javascript:global.getNextObjNumberPadded();', readOnly: true }),
        data_product: ChoiceColumn({ label: 'Data product', choices: DATA_PRODUCTS, default: 'findings', dropdown: 'dropdown_without_none' }),
        trigger: ChoiceColumn({ label: 'Trigger', choices: EXPORT_TRIGGERS, default: 'schedule', dropdown: 'dropdown_without_none' }),
        status: ChoiceColumn({ label: 'Status', choices: EXPORT_STATUSES, default: 'dry_run', dropdown: 'dropdown_without_none' }),
        started_at: DateTimeColumn({ label: 'Started' }),
        finished_at: DateTimeColumn({ label: 'Finished' }),
        row_count: IntegerColumn({ label: 'Rows', default: 0 }),
        schema_version: StringColumn({ label: 'Schema version', maxLength: 20 }),
        content_hash: StringColumn({ label: 'Content hash', maxLength: 64 }),
        endpoint: StringColumn({ label: 'Endpoint', maxLength: 255 }),
        http_status: IntegerColumn({ label: 'HTTP status' }),
        message: StringColumn({ label: 'Message', maxLength: 400 }),
        payload_preview: MultiLineTextColumn({ label: 'Payload preview (first rows)', maxLength: 8000 }),
        triggered_by: ReferenceColumn({ label: 'Triggered by', referenceTable: 'sys_user' }),
    },
    autoNumber: { prefix: 'EVX', number: 1000, numberOfDigits: 7 },
    allowWebServiceAccess: true,
    actions: { read: true, create: true, update: true, delete: true },
})
