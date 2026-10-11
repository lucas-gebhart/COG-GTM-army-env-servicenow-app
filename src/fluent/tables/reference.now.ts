import { BooleanColumn, ChoiceColumn, DateColumn, DateTimeColumn, IntegerColumn, MultiLineTextColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'
import { ACOMS, IMCOM_DIRECTORATES, REGULATOR_LEVELS, RISK_RATINGS, STATUTES } from '../../server/lib/domain'

/** Army installations in the compliance population. Risk fields are recomputed by the nightly job. */
export const x_cog_env_installation = Table({
    name: 'x_cog_env_installation',
    label: 'Installation',
    audit: true,
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Installation', maxLength: 100, mandatory: true }),
        uic: StringColumn({ label: 'UIC', maxLength: 6 }),
        acom: ChoiceColumn({ label: 'Army command', choices: ACOMS, default: 'imcom', dropdown: 'dropdown_without_none' }),
        imcom_directorate: ChoiceColumn({ label: 'IMCOM directorate', choices: IMCOM_DIRECTORATES, default: 'readiness', dropdown: 'dropdown_without_none' }),
        state: StringColumn({ label: 'State', maxLength: 2 }),
        epa_region: IntegerColumn({ label: 'EPA region' }),
        garrison_env_chief: ReferenceColumn({ label: 'Garrison environmental chief', referenceTable: 'sys_user' }),
        commander: ReferenceColumn({ label: 'Garrison commander', referenceTable: 'sys_user' }),
        active: BooleanColumn({ label: 'Active', default: true }),
        risk_score: IntegerColumn({ label: 'Risk score', default: 0, readOnly: true }),
        risk_rating: ChoiceColumn({ label: 'Risk rating', choices: RISK_RATINGS, default: 'low', dropdown: 'dropdown_without_none', readOnly: true }),
        risk_drivers: StringColumn({ label: 'Risk drivers', maxLength: 400, readOnly: true }),
        open_findings: IntegerColumn({ label: 'Open findings', default: 0, readOnly: true }),
        overdue_findings: IntegerColumn({ label: 'Overdue findings', default: 0, readOnly: true }),
        repeat_findings: IntegerColumn({ label: 'Open repeat findings', default: 0, readOnly: true }),
        open_enforcement_actions: IntegerColumn({ label: 'Open enforcement actions', default: 0, readOnly: true }),
        last_external_assessment: DateColumn({ label: 'Last external EPAS', readOnly: true }),
        next_external_due: DateColumn({ label: 'Next external EPAS due', readOnly: true }),
        risk_computed_at: DateTimeColumn({ label: 'Risk computed', readOnly: true }),
    },
    index: [{ name: 'idx_installation_uic', unique: false, element: 'uic' }],
    allowWebServiceAccess: true,
    actions: { read: true, create: true, update: true, delete: true },
})

/** Environmental media / program areas (air, water, hazardous waste …). */
export const x_cog_env_program_area = Table({
    name: 'x_cog_env_program_area',
    label: 'Program area',
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Program area', maxLength: 80, mandatory: true }),
        code: StringColumn({ label: 'Code', maxLength: 30, mandatory: true, unique: true }),
        description: StringColumn({ label: 'Description', maxLength: 255 }),
        order: IntegerColumn({ label: 'Order', default: 100 }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
    allowWebServiceAccess: true,
    actions: { read: true, create: true, update: true, delete: true },
})

/** Regulatory drivers: the statute, citation and regulator level a finding or enforcement action is tied to. */
export const x_cog_env_regulatory_driver = Table({
    name: 'x_cog_env_regulatory_driver',
    label: 'Regulatory driver',
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Requirement', maxLength: 160, mandatory: true }),
        statute: ChoiceColumn({ label: 'Statute', choices: STATUTES, default: 'rcra', dropdown: 'dropdown_without_none' }),
        citation: StringColumn({ label: 'Citation', maxLength: 80 }),
        regulator_level: ChoiceColumn({ label: 'Regulator level', choices: REGULATOR_LEVELS, default: 'federal', dropdown: 'dropdown_without_none' }),
        program_area: ReferenceColumn({ label: 'Program area', referenceTable: 'x_cog_env_program_area' }),
        summary: MultiLineTextColumn({ label: 'Summary', maxLength: 1000 }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
    allowWebServiceAccess: true,
    actions: { read: true, create: true, update: true, delete: true },
})
