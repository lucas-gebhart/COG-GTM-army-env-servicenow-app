import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { admin, assessor, commander, complianceOfficer, hqdaAnalyst } from '../security/roles.now'

const ALL = ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.commander', 'x_cog_env.hqda_analyst', 'x_cog_env.admin']
const FIELD = ['x_cog_env.compliance_officer', 'x_cog_env.assessor', 'x_cog_env.admin']
const HQ = ['x_cog_env.hqda_analyst', 'x_cog_env.admin']

export const envCategory = Record({
    $id: Now.ID['app_category'],
    table: 'sys_app_category',
    data: { name: 'Army Environmental Compliance', style: 'border-color: #2f5d3a; background-color: #e9f2ea;' },
})

export const envMenu = ApplicationMenu({
    $id: Now.ID['app_menu'],
    title: 'Army Environmental Compliance',
    name: 'x_cog_env',
    hint: 'EPAS assessments, findings, corrective actions and regulatory enforcement actions (WEBCASS-E modernization prototype, synthetic data)',
    description: 'Prototype of the EPAS and Regulatory Enforcement Action modules of WEBCASS-E rebuilt as a ServiceNow scoped application with a governed Vantage data product.',
    category: envCategory,
    roles: [complianceOfficer, assessor, commander, hqdaAnalyst, admin],
    active: true,
    order: 100,
})

export const modSepAssess = Record({ $id: Now.ID['mod_sep_assess'], table: 'sys_app_module', data: { title: 'EPAS assessments', application: envMenu, link_type: 'SEPARATOR', active: true, order: 200, roles: ALL } })
export const modAssessments = Record({ $id: Now.ID['mod_assessments'], table: 'sys_app_module', data: { title: 'Assessments', application: envMenu, link_type: 'LIST', name: 'x_cog_env_assessment', filter: 'active=true^ORDERBYDESCfiscal_year', active: true, order: 210, roles: ALL } })
export const modNewAssessment = Record({ $id: Now.ID['mod_new_assessment'], table: 'sys_app_module', data: { title: 'Plan new assessment', application: envMenu, link_type: 'NEW', name: 'x_cog_env_assessment', active: true, order: 220, roles: FIELD } })
export const modFindings = Record({ $id: Now.ID['mod_findings'], table: 'sys_app_module', data: { title: 'Findings', application: envMenu, link_type: 'LIST', name: 'x_cog_env_finding', filter: 'active=true^ORDERBYDESCsys_updated_on', active: true, order: 230, roles: ALL } })
export const modFindingsOpen = Record({ $id: Now.ID['mod_findings_open'], table: 'sys_app_module', data: { title: 'Open findings', application: envMenu, link_type: 'LIST', name: 'x_cog_env_finding', filter: 'stateNOT INclosed,risk_accepted,cancelled^ORDERBYclosure_due', active: true, order: 231, roles: ALL } })
export const modFindingsOverdue = Record({ $id: Now.ID['mod_findings_overdue'], table: 'sys_app_module', data: { title: 'Overdue findings (red)', application: envMenu, link_type: 'LIST', name: 'x_cog_env_finding', filter: 'aging_flag=red^stateNOT INclosed,risk_accepted,cancelled^ORDERBYclosure_due', active: true, order: 232, roles: ALL } })
export const modFindingsRepeat = Record({ $id: Now.ID['mod_findings_repeat'], table: 'sys_app_module', data: { title: 'Repeat findings', application: envMenu, link_type: 'LIST', name: 'x_cog_env_finding', filter: 'repeat_finding=true^stateNOT INclosed,risk_accepted,cancelled^ORDERBYDESCseverity', active: true, order: 233, roles: ALL } })
export const modCas = Record({ $id: Now.ID['mod_cas'], table: 'sys_app_module', data: { title: 'Corrective actions', application: envMenu, link_type: 'LIST', name: 'x_cog_env_corrective_action', filter: 'active=true^ORDERBYdue_date', active: true, order: 240, roles: ALL } })
export const modCasPending = Record({ $id: Now.ID['mod_cas_pending'], table: 'sys_app_module', data: { title: 'Awaiting verification', application: envMenu, link_type: 'LIST', name: 'x_cog_env_corrective_action', filter: 'state=pending_approval^ORDERBYrequested_closure_on', active: true, order: 241, roles: ALL } })

export const modSepEnf = Record({ $id: Now.ID['mod_sep_enf'], table: 'sys_app_module', data: { title: 'Regulatory enforcement', application: envMenu, link_type: 'SEPARATOR', active: true, order: 300, roles: ALL } })
export const modEnforcement = Record({ $id: Now.ID['mod_enforcement'], table: 'sys_app_module', data: { title: 'Enforcement actions', application: envMenu, link_type: 'LIST', name: 'x_cog_env_enforcement_action', filter: 'active=true^ORDERBYresponse_due', active: true, order: 310, roles: ALL } })
export const modNewEnforcement = Record({ $id: Now.ID['mod_new_enforcement'], table: 'sys_app_module', data: { title: 'Record new enforcement action', application: envMenu, link_type: 'NEW', name: 'x_cog_env_enforcement_action', active: true, order: 320, roles: ['x_cog_env.compliance_officer', 'x_cog_env.hqda_analyst', 'x_cog_env.admin'] } })
export const modEnforcementOpen = Record({ $id: Now.ID['mod_enforcement_open'], table: 'sys_app_module', data: { title: 'Open, response pending', application: envMenu, link_type: 'LIST', name: 'x_cog_env_enforcement_action', filter: 'stateINreceived,response_drafted^ORDERBYresponse_due', active: true, order: 330, roles: ALL } })

export const modSepCmd = Record({ $id: Now.ID['mod_sep_cmd'], table: 'sys_app_module', data: { title: 'Command and HQDA view', application: envMenu, link_type: 'SEPARATOR', active: true, order: 400, roles: ALL } })
export const modInstallations = Record({ $id: Now.ID['mod_installations'], table: 'sys_app_module', data: { title: 'Installation risk posture', application: envMenu, link_type: 'LIST', name: 'x_cog_env_installation', filter: 'active=true^ORDERBYDESCrisk_score', active: true, order: 410, roles: ALL } })
export const modEqcc = Record({ $id: Now.ID['mod_eqcc'], table: 'sys_app_module', data: { title: 'EQCC meetings', application: envMenu, link_type: 'LIST', name: 'x_cog_env_eqcc_meeting', filter: 'ORDERBYDESCmeeting_date', active: true, order: 420, roles: ALL } })
export const modReports = Record({ $id: Now.ID['mod_reports'], table: 'sys_app_module', data: { title: 'Reports', application: envMenu, link_type: 'LIST', name: 'sys_report', filter: 'titleSTARTSWITHENV ^ORDERBYtitle', active: true, order: 430, roles: ALL } })

export const modSepVantage = Record({ $id: Now.ID['mod_sep_vantage'], table: 'sys_app_module', data: { title: 'Vantage data products', application: envMenu, link_type: 'SEPARATOR', active: true, order: 500, roles: HQ } })
export const modExportRuns = Record({ $id: Now.ID['mod_export_runs'], table: 'sys_app_module', data: { title: 'Export runs', application: envMenu, link_type: 'LIST', name: 'x_cog_env_vantage_export_run', filter: 'ORDERBYDESCstarted_at', active: true, order: 510, roles: HQ } })
export const modCatalog = Record({ $id: Now.ID['mod_catalog'], table: 'sys_app_module', data: { title: 'Data product catalog (API)', application: envMenu, link_type: 'DIRECT', query: '/api/x_cog_env/vantage/catalog', active: true, order: 520, roles: HQ } })

export const modSepAdmin = Record({ $id: Now.ID['mod_sep_admin'], table: 'sys_app_module', data: { title: 'Reference data and administration', application: envMenu, link_type: 'SEPARATOR', active: true, order: 900, roles: HQ } })
export const modProgramAreas = Record({ $id: Now.ID['mod_program_areas'], table: 'sys_app_module', data: { title: 'Program areas', application: envMenu, link_type: 'LIST', name: 'x_cog_env_program_area', filter: 'ORDERBYorder', active: true, order: 910, roles: ALL } })
export const modDrivers = Record({ $id: Now.ID['mod_drivers'], table: 'sys_app_module', data: { title: 'Regulatory drivers', application: envMenu, link_type: 'LIST', name: 'x_cog_env_regulatory_driver', filter: 'ORDERBYstatute', active: true, order: 920, roles: ALL } })
export const modProps = Record({ $id: Now.ID['mod_props'], table: 'sys_app_module', data: { title: 'Properties (SLA, Vantage endpoint)', application: envMenu, link_type: 'LIST', name: 'sys_properties', filter: 'nameSTARTSWITHx_cog_env.', active: true, order: 930, roles: ['x_cog_env.admin'] } })
