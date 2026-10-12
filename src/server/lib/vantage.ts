/**
 * Vantage data products. PPM CIO-092 asks each organisation to deliver ETL'd data products into
 * Army Vantage and register them in the Army Data Catalog. This module defines the schemas (the
 * contract a Vantage pipeline would consume), builds payload envelopes and computes a deterministic
 * content hash so each run is auditable. The transport (push to an endpoint, or pull via the
 * Scripted REST API) lives in the server layer.
 */
import { DATA_PRODUCTS, type DataProduct } from './domain.ts'

export const SCHEMA_VERSION = '1.0.0'

export interface ColumnSpec {
    name: string
    type: 'string' | 'integer' | 'decimal' | 'date' | 'datetime' | 'boolean'
    description: string
    key?: boolean
}
export const DATA_PRODUCT_SCHEMAS: Record<DataProduct, { table: string; description: string; steward: string; columns: ColumnSpec[] }> = {
    findings: {
        table: 'x_cog_env_finding',
        description: 'EPAS findings (internal and external assessments) with severity, repeat flag, closure window and state.',
        steward: 'ODASA(ESOH) / DCS G-9 Environmental Quality data steward',
        columns: [
            { name: 'finding_id', type: 'string', description: 'Finding number (EPF…)', key: true },
            { name: 'installation', type: 'string', description: 'Installation name' },
            { name: 'installation_uic', type: 'string', description: 'Installation UIC' },
            { name: 'acom', type: 'string', description: 'Army command' },
            { name: 'assessment_id', type: 'string', description: 'Parent assessment number' },
            { name: 'assessment_type', type: 'string', description: 'internal | external' },
            { name: 'fiscal_year', type: 'integer', description: 'Fiscal year of the assessment' },
            { name: 'program_area', type: 'string', description: 'Environmental media / program area code' },
            { name: 'statute', type: 'string', description: 'Governing statute key' },
            { name: 'citation', type: 'string', description: 'Regulatory citation' },
            { name: 'severity', type: 'string', description: 'significant | major | minor | observation' },
            { name: 'root_cause', type: 'string', description: 'Root cause category' },
            { name: 'repeat_finding', type: 'boolean', description: 'Repeat within the lookback window' },
            { name: 'state', type: 'string', description: 'Finding state' },
            { name: 'identified_on', type: 'date', description: 'Date identified' },
            { name: 'closure_due', type: 'date', description: 'Closure due date (null for observations)' },
            { name: 'closed_on', type: 'date', description: 'Date closed' },
            { name: 'days_open', type: 'integer', description: 'Days open as of export' },
            { name: 'aging_flag', type: 'string', description: 'green | amber | red' },
            { name: 'updated_at', type: 'datetime', description: 'Last update (UTC)' },
        ],
    },
    corrective_actions: {
        table: 'x_cog_env_corrective_action',
        description: 'Corrective actions with owner, funding status, due date and verification state.',
        steward: 'ODASA(ESOH) / DCS G-9 Environmental Quality data steward',
        columns: [
            { name: 'corrective_action_id', type: 'string', description: 'Number (ECA…)', key: true },
            { name: 'finding_id', type: 'string', description: 'Parent finding number' },
            { name: 'installation', type: 'string', description: 'Installation name' },
            { name: 'action_type', type: 'string', description: 'Action type key' },
            { name: 'state', type: 'string', description: 'State key' },
            { name: 'funding_status', type: 'string', description: 'Funding status key' },
            { name: 'cost_estimate', type: 'decimal', description: 'Estimated cost (USD)' },
            { name: 'due_date', type: 'date', description: 'Due date' },
            { name: 'percent_complete', type: 'integer', description: '0-100' },
            { name: 'verified_on', type: 'date', description: 'Verification date' },
            { name: 'updated_at', type: 'datetime', description: 'Last update (UTC)' },
        ],
    },
    enforcement_actions: {
        table: 'x_cog_env_enforcement_action',
        description: 'Regulatory enforcement actions (NOV, consent order, penalty) with response status and exposure.',
        steward: 'ODASA(ESOH) / DCS G-9 Environmental Quality data steward',
        columns: [
            { name: 'enforcement_action_id', type: 'string', description: 'Number (EEA…)', key: true },
            { name: 'installation', type: 'string', description: 'Installation name' },
            { name: 'regulator', type: 'string', description: 'Issuing regulator' },
            { name: 'regulator_level', type: 'string', description: 'federal | state | local' },
            { name: 'action_type', type: 'string', description: 'Enforcement type key' },
            { name: 'program_area', type: 'string', description: 'Program area code' },
            { name: 'received_on', type: 'date', description: 'Date received' },
            { name: 'response_due', type: 'date', description: 'Response due' },
            { name: 'response_submitted_on', type: 'date', description: 'Response submitted' },
            { name: 'penalty_proposed', type: 'decimal', description: 'Proposed penalty (USD)' },
            { name: 'penalty_final', type: 'decimal', description: 'Final penalty (USD)' },
            { name: 'state', type: 'string', description: 'State key' },
            { name: 'linked_findings', type: 'integer', description: 'Count of linked findings' },
            { name: 'updated_at', type: 'datetime', description: 'Last update (UTC)' },
        ],
    },
    installation_risk: {
        table: 'x_cog_env_installation',
        description: 'Per-installation environmental risk rating with contributing counts, recomputed nightly.',
        steward: 'ODASA(ESOH) / DCS G-9 Environmental Quality data steward',
        columns: [
            { name: 'installation_uic', type: 'string', description: 'UIC', key: true },
            { name: 'installation', type: 'string', description: 'Installation name' },
            { name: 'acom', type: 'string', description: 'Army command' },
            { name: 'state', type: 'string', description: 'US state' },
            { name: 'epa_region', type: 'integer', description: 'EPA region' },
            { name: 'risk_score', type: 'integer', description: 'Computed score' },
            { name: 'risk_rating', type: 'string', description: 'low | moderate | high' },
            { name: 'open_findings', type: 'integer', description: 'Open findings' },
            { name: 'overdue_findings', type: 'integer', description: 'Overdue findings' },
            { name: 'repeat_findings', type: 'integer', description: 'Open repeat findings' },
            { name: 'open_enforcement_actions', type: 'integer', description: 'Open enforcement actions' },
            { name: 'last_external_assessment', type: 'date', description: 'Most recent external EPAS end date' },
            { name: 'computed_at', type: 'datetime', description: 'Risk computation time (UTC)' },
        ],
    },
}

export type DataRow = Record<string, string | number | boolean | null>

export interface DataProductEnvelope {
    data_product: string
    schema_version: string
    source_system: string
    source_scope: string
    generated_at: string
    row_count: number
    content_hash: string
    columns: ColumnSpec[]
    rows: DataRow[]
}

/** FNV-1a 64-bit over the canonical JSON of the rows; stable across runs when data is unchanged. */
export function contentHash(rows: readonly DataRow[]): string {
    const text = JSON.stringify(rows)
    let h1 = 0xcbf29ce4
    let h2 = 0x84222325
    for (let i = 0; i < text.length; i++) {
        const c = text.charCodeAt(i)
        h1 ^= c
        h1 = Math.imul(h1, 0x01000193) >>> 0
        h2 ^= c
        h2 = Math.imul(h2, 0x01000193) >>> 0
    }
    return `${h1.toString(16).padStart(8, '0')}${h2.toString(16).padStart(8, '0')}`
}

/** Keep only schema columns, in schema order, coercing missing values to null. */
export function projectRow(product: DataProduct, raw: Record<string, unknown>): DataRow {
    const out: DataRow = {}
    for (const col of DATA_PRODUCT_SCHEMAS[product].columns) {
        const v = raw[col.name]
        if (v === undefined || v === null || v === '') {
            out[col.name] = null
            continue
        }
        switch (col.type) {
            case 'integer': {
                const n = Number.parseInt(String(v), 10)
                out[col.name] = Number.isFinite(n) ? n : null
                break
            }
            case 'decimal': {
                const n = Number(v)
                out[col.name] = Number.isFinite(n) ? n : null
                break
            }
            case 'boolean':
                out[col.name] = v === true || v === 'true' || v === '1'
                break
            default:
                out[col.name] = String(v)
        }
    }
    return out
}

export function buildEnvelope(product: DataProduct, rows: readonly Record<string, unknown>[], generatedAt: string, sourceSystem = 'ServiceNow'): DataProductEnvelope {
    const projected = rows.map((r) => projectRow(product, r))
    return {
        data_product: DATA_PRODUCTS[product],
        schema_version: SCHEMA_VERSION,
        source_system: sourceSystem,
        source_scope: 'x_cog_env',
        generated_at: generatedAt,
        row_count: projected.length,
        content_hash: contentHash(projected),
        columns: DATA_PRODUCT_SCHEMAS[product].columns,
        rows: projected,
    }
}

/** Accepts either the internal key (installation_risk) or the published name (env_installation_risk). */
export function resolveDataProduct(name: string): DataProduct | undefined {
    const keys = Object.keys(DATA_PRODUCTS) as DataProduct[]
    return keys.find((k) => k === name) ?? keys.find((k) => DATA_PRODUCTS[k] === name)
}

/** Army Data Catalog style registration stub for a data product (what the steward would file). */
export function catalogEntry(product: DataProduct): Record<string, string> {
    const s = DATA_PRODUCT_SCHEMAS[product]
    return {
        name: DATA_PRODUCTS[product],
        description: s.description,
        source_system: 'Army Environmental Compliance (ServiceNow scoped app x_cog_env)',
        source_table: s.table,
        data_steward: s.steward,
        refresh: 'Daily 0300 ET (scheduled job) and on demand',
        delivery: 'JSON envelope push to Vantage ingest endpoint; pull via GET /api/x_cog_env/vantage/data_products/{name}',
        schema_version: SCHEMA_VERSION,
        classification: 'CUI (demo instance holds synthetic data only)',
    }
}
