/**
 * Domain constants for the Army Environmental Compliance scoped app (x_cog_env).
 *
 * Mission framing: AR 200-1 Environmental Performance Assessment System (EPAS). Installations run an
 * annual internal fence-line-to-fence-line assessment; USAEC runs an external assessment on a
 * three-year cycle; findings are finalized within ~45 days; corrective actions are briefed at the
 * quarterly Environmental Quality Control Committee (EQCC). Regulatory enforcement actions (NOVs,
 * consent orders) link back to the findings they cite. Everything here is demo data; nothing is
 * sourced from WEBCASS-E or any production Army system.
 */
export const SCOPE = 'x_cog_env'

export const TABLES = {
    installation: 'x_cog_env_installation',
    program_area: 'x_cog_env_program_area',
    regulatory_driver: 'x_cog_env_regulatory_driver',
    assessment: 'x_cog_env_assessment',
    finding: 'x_cog_env_finding',
    corrective_action: 'x_cog_env_corrective_action',
    enforcement_action: 'x_cog_env_enforcement_action',
    eqcc_meeting: 'x_cog_env_eqcc_meeting',
    vantage_export_run: 'x_cog_env_vantage_export_run',
} as const
export type TableKey = keyof typeof TABLES

export const ROLES = {
    compliance_officer: 'x_cog_env.compliance_officer',
    assessor: 'x_cog_env.assessor',
    commander: 'x_cog_env.commander',
    hqda_analyst: 'x_cog_env.hqda_analyst',
    admin: 'x_cog_env.admin',
} as const
export type RoleKey = keyof typeof ROLES

export const PROPERTIES = {
    slaSignificantDays: 'x_cog_env.sla.significant_days',
    slaMajorDays: 'x_cog_env.sla.major_days',
    slaMinorDays: 'x_cog_env.sla.minor_days',
    finalizationDays: 'x_cog_env.assessment.finalization_days',
    enforcementResponseDays: 'x_cog_env.enforcement.response_days',
    vantageEnabled: 'x_cog_env.vantage.enabled',
    vantageEndpoint: 'x_cog_env.vantage.endpoint',
    vantageLastRun: 'x_cog_env.vantage.last_run',
} as const

export const EVENTS = {
    findingOpened: 'x_cog_env.finding.opened',
    findingOverdue: 'x_cog_env.finding.overdue',
    enforcementReceived: 'x_cog_env.enforcement.received',
    exportCompleted: 'x_cog_env.vantage.export_completed',
} as const

// ------------------------------------------------------------------ choices

export const ACOMS = {
    imcom: 'IMCOM',
    amc: 'AMC (Organic Industrial Base)',
    usar: 'USAR',
    arng: 'ARNG',
    usace: 'USACE',
} as const

export const IMCOM_DIRECTORATES = {
    readiness: 'ID-Readiness',
    sustainment: 'ID-Sustainment',
    training: 'ID-Training',
    pacific: 'ID-Pacific',
    europe: 'ID-Europe',
    none: 'Not IMCOM',
} as const

export const ASSESSMENT_TYPES = { internal: 'Internal (annual)', external: 'External (USAEC)' } as const
export type AssessmentType = keyof typeof ASSESSMENT_TYPES

export const ASSESSMENT_STATES = {
    planned: 'Planned',
    in_progress: 'In progress',
    draft_report: 'Draft report',
    finalized: 'Finalized',
    closed: 'Closed',
} as const
export type AssessmentState = keyof typeof ASSESSMENT_STATES

export const SEVERITIES = {
    significant: 'Significant',
    major: 'Major',
    minor: 'Minor',
    observation: 'Management practice / observation',
} as const
export type Severity = keyof typeof SEVERITIES

export const FINDING_STATES = {
    open: 'Open',
    ca_assigned: 'Corrective action assigned',
    pending_verification: 'Pending verification',
    closed: 'Closed',
    risk_accepted: 'Closed - risk accepted',
} as const
export type FindingState = keyof typeof FINDING_STATES

export const ROOT_CAUSES = {
    training: 'Training / awareness',
    procedure: 'Procedure missing or outdated',
    resourcing: 'Resourcing / funding',
    equipment: 'Equipment / infrastructure',
    oversight: 'Oversight / inspection gap',
    contractor: 'Contractor / tenant performance',
    recordkeeping: 'Recordkeeping',
    other: 'Other',
} as const
export type RootCause = keyof typeof ROOT_CAUSES

export const STATUTES = {
    rcra: 'RCRA',
    cwa: 'CWA',
    caa: 'CAA',
    sdwa: 'SDWA',
    tsca: 'TSCA',
    fifra: 'FIFRA',
    epcra: 'EPCRA',
    nepa: 'NEPA',
    esa: 'ESA',
    nhpa: 'NHPA',
    ust: 'UST (40 CFR 280)',
    ar200: 'AR 200-1',
    state: 'State regulation',
} as const
export type Statute = keyof typeof STATUTES

export const REGULATOR_LEVELS = { federal: 'Federal (EPA)', state: 'State', local: 'Local / tribal', army: 'Army policy' } as const

export const CA_TYPES = {
    immediate_fix: 'Immediate fix',
    procedure_update: 'Procedure / SOP update',
    training: 'Training',
    funded_project: 'Funded project',
    policy: 'Policy / command emphasis',
} as const
export type CaType = keyof typeof CA_TYPES

export const CA_STATES = {
    draft: 'Draft',
    in_progress: 'In progress',
    pending_approval: 'Pending closure approval',
    verified: 'Verified',
    cancelled: 'Cancelled',
} as const
export type CaState = keyof typeof CA_STATES

export const FUNDING_STATUSES = {
    not_required: 'Not required',
    requested: 'Requested',
    funded: 'Funded',
    unfunded: 'Unfunded requirement',
} as const
export type FundingStatus = keyof typeof FUNDING_STATUSES

export const ENFORCEMENT_TYPES = {
    nov: 'Notice of Violation',
    noe: 'Notice of Enforcement',
    consent_order: 'Consent order',
    admin_order: 'Administrative order',
    penalty: 'Penalty assessment',
    warning: 'Warning letter',
} as const
export type EnforcementType = keyof typeof ENFORCEMENT_TYPES

export const ENFORCEMENT_STATES = {
    received: 'Received',
    response_drafted: 'Response drafted',
    response_submitted: 'Response submitted',
    contested: 'Contested',
    closed: 'Closed',
} as const
export type EnforcementState = keyof typeof ENFORCEMENT_STATES

export const AGING_FLAGS = { green: 'Green', amber: 'Amber', red: 'Red' } as const
export type AgingFlag = keyof typeof AGING_FLAGS

export const RISK_RATINGS = { low: 'Low', moderate: 'Moderate', high: 'High' } as const
export type RiskRating = keyof typeof RISK_RATINGS

export const DATA_PRODUCTS = {
    findings: 'env_compliance_findings',
    corrective_actions: 'env_corrective_actions',
    enforcement_actions: 'env_enforcement_actions',
    installation_risk: 'env_installation_risk',
} as const
export type DataProduct = keyof typeof DATA_PRODUCTS

export const EXPORT_STATUSES = { success: 'Success', failed: 'Failed', dry_run: 'Dry run' } as const
export const EXPORT_TRIGGERS = { schedule: 'Scheduled', manual: 'Manual' } as const

// ------------------------------------------------------------------ limits and defaults

export const LIMITS = {
    shortText: 160,
    text: 4000,
    citation: 80,
    regulator: 80,
} as const

/** Default closure windows (days from identification) by severity; overridable via properties. */
export const DEFAULT_SLA_DAYS: Record<Severity, number | null> = {
    significant: 90,
    major: 180,
    minor: 365,
    observation: null,
}
export const DEFAULT_FINALIZATION_DAYS = 45
export const DEFAULT_ENFORCEMENT_RESPONSE_DAYS = 30
/** A finding is a repeat when the same installation + program area + driver was cited within this many fiscal years. */
export const REPEAT_LOOKBACK_FY = 3

export function labelOf<T extends Record<string, string>>(map: T, key: string): string {
    return (map as Record<string, string>)[key] ?? key
}

export function isTerminalFindingState(state: string): boolean {
    return state === 'closed' || state === 'risk_accepted'
}
export function isTerminalCaState(state: string): boolean {
    return state === 'verified' || state === 'cancelled'
}
export function isTerminalEnforcementState(state: string): boolean {
    return state === 'closed'
}
