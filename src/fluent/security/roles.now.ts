import { Role } from '@servicenow/sdk/core'

export const complianceOfficer = Role({
    $id: Now.ID['role_compliance_officer'],
    name: 'x_cog_env.compliance_officer',
    description: 'Installation environmental compliance officer: records internal assessment findings, owns corrective actions, uploads evidence, drafts enforcement responses.',
})
export const assessor = Role({
    $id: Now.ID['role_assessor'],
    name: 'x_cog_env.assessor',
    description: 'USAEC external EPAS assessor: plans and runs external assessments, finalizes findings, verifies corrective actions.',
})
export const commander = Role({
    $id: Now.ID['role_commander'],
    name: 'x_cog_env.commander',
    description: 'Garrison commander / EQCC chair: dashboard view, approves closure of significant findings, accepts risk.',
})
export const hqdaAnalyst = Role({
    $id: Now.ID['role_hqda_analyst'],
    name: 'x_cog_env.hqda_analyst',
    description: 'HQDA ODASA(ESOH) / DCS G-9 analyst: cross-installation visibility, enforcement exposure, Vantage data product runs.',
})
export const admin = Role({
    $id: Now.ID['role_admin'],
    name: 'x_cog_env.admin',
    description: 'Application administrator: reference data, properties, export configuration.',
    containsRoles: [complianceOfficer, assessor, commander, hqdaAnalyst],
})
