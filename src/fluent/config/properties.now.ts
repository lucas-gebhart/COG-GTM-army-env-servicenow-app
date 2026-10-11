import { Property } from '@servicenow/sdk/core'

const rw = { read: ['x_cog_env.hqda_analyst', 'x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander'], write: ['x_cog_env.admin'] }

Property({ $id: Now.ID['prop_sla_significant'], name: 'x_cog_env.sla.significant_days', type: 'integer', value: 90, description: 'Closure window (days) for significant findings.', roles: rw })
Property({ $id: Now.ID['prop_sla_major'], name: 'x_cog_env.sla.major_days', type: 'integer', value: 180, description: 'Closure window (days) for major findings.', roles: rw })
Property({ $id: Now.ID['prop_sla_minor'], name: 'x_cog_env.sla.minor_days', type: 'integer', value: 365, description: 'Closure window (days) for minor findings.', roles: rw })
Property({ $id: Now.ID['prop_finalization_days'], name: 'x_cog_env.assessment.finalization_days', type: 'integer', value: 45, description: 'Days after fieldwork ends by which the assessment report is finalized (EPAS standard is ~45).', roles: rw })
Property({ $id: Now.ID['prop_enforcement_days'], name: 'x_cog_env.enforcement.response_days', type: 'integer', value: 30, description: 'Default regulator response window (days) when an enforcement action does not state one.', roles: rw })
Property({ $id: Now.ID['prop_vantage_enabled'], name: 'x_cog_env.vantage.enabled', type: 'boolean', value: true, description: 'Master switch for the scheduled Vantage data product push.', roles: rw })
Property({
    $id: Now.ID['prop_vantage_endpoint'],
    name: 'x_cog_env.vantage.endpoint',
    type: 'string',
    value: '/api/x_cog_env/vantage/mock/ingest',
    description: 'Vantage ingest endpoint. Absolute https URL for a real pipeline; a path keeps the push on this instance (mock receiver) for demos.',
    roles: rw,
})
Property({ $id: Now.ID['prop_vantage_last_run'], name: 'x_cog_env.vantage.last_run', type: 'string', value: '', description: 'JSON summary of the last Vantage export run (written by the job).', roles: rw })
