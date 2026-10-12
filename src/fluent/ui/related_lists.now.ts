import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

export const rlInstallation = Record({ $id: Now.ID['rl_installation'], table: 'sys_ui_related_list', data: { name: 'x_cog_env_installation', view: 'Default view' } })
Record({ $id: Now.ID['rl_installation_assessments'], table: 'sys_ui_related_list_entry', data: { list_id: rlInstallation, related_list: 'x_cog_env_assessment.installation', position: 0, order_by: 'fiscal_year' } })
Record({ $id: Now.ID['rl_installation_findings'], table: 'sys_ui_related_list_entry', data: { list_id: rlInstallation, related_list: 'x_cog_env_finding.installation', position: 1, order_by: 'closure_due' } })
Record({ $id: Now.ID['rl_installation_enforcement'], table: 'sys_ui_related_list_entry', data: { list_id: rlInstallation, related_list: 'x_cog_env_enforcement_action.installation', position: 2, order_by: 'response_due' } })
Record({ $id: Now.ID['rl_installation_eqcc'], table: 'sys_ui_related_list_entry', data: { list_id: rlInstallation, related_list: 'x_cog_env_eqcc_meeting.installation', position: 3, order_by: 'meeting_date' } })

export const rlAssessment = Record({ $id: Now.ID['rl_assessment'], table: 'sys_ui_related_list', data: { name: 'x_cog_env_assessment', view: 'Default view' } })
Record({ $id: Now.ID['rl_assessment_findings'], table: 'sys_ui_related_list_entry', data: { list_id: rlAssessment, related_list: 'x_cog_env_finding.assessment', position: 0, order_by: 'severity' } })

export const rlFinding = Record({ $id: Now.ID['rl_finding'], table: 'sys_ui_related_list', data: { name: 'x_cog_env_finding', view: 'Default view' } })
Record({ $id: Now.ID['rl_finding_cas'], table: 'sys_ui_related_list_entry', data: { list_id: rlFinding, related_list: 'x_cog_env_corrective_action.finding', position: 0, order_by: 'due_date' } })
Record({ $id: Now.ID['rl_finding_repeats'], table: 'sys_ui_related_list_entry', data: { list_id: rlFinding, related_list: 'x_cog_env_finding.previous_finding', position: 1, order_by: 'identified_on' } })

export const rlEnforcement = Record({ $id: Now.ID['rl_enforcement'], table: 'sys_ui_related_list', data: { name: 'x_cog_env_enforcement_action', view: 'Default view' } })
Record({ $id: Now.ID['rl_enforcement_findings'], table: 'sys_ui_related_list_entry', data: { list_id: rlEnforcement, related_list: 'x_cog_env_finding.enforcement_action', position: 0, order_by: 'severity' } })

export const rlProgramArea = Record({ $id: Now.ID['rl_program_area'], table: 'sys_ui_related_list', data: { name: 'x_cog_env_program_area', view: 'Default view' } })
Record({ $id: Now.ID['rl_program_area_drivers'], table: 'sys_ui_related_list_entry', data: { list_id: rlProgramArea, related_list: 'x_cog_env_regulatory_driver.program_area', position: 0, order_by: 'citation' } })
