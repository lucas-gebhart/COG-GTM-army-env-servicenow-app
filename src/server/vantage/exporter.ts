/**
 * Vantage data product exporter.
 *
 * Builds a governed, versioned, hashed envelope per data product (see lib/vantage.ts) and either
 * POSTs it to an absolute https endpoint (real pipeline, via sn_ws.RESTMessageV2) or, when the
 * configured endpoint is a path, hands it to the local mock receiver in-process ("loopback").
 * Every run is written to x_cog_env_vantage_export_run. The PDI never talks to a real Vantage.
 */
import { GlideDateTime, GlideRecord, gs } from '@servicenow/glide'
import { RESTMessageV2 } from '@servicenow/glide/sn_ws'
import { DATA_PRODUCT_SCHEMAS, buildEnvelope, type DataProductEnvelope } from '../lib/vantage.ts'
import { PROPERTIES, TABLES, type DataProduct } from '../lib/domain.ts'
import { securityLog, str } from '../rules/glideSupport.ts'
import { mockIngest } from './mockReceiver.ts'

export interface RunResult {
    runSysId: string
    product: DataProduct
    status: 'success' | 'failed' | 'dry_run'
    rowCount: number
    contentHash: string
    httpStatus: number
    message: string
}

const PRODUCT_SOURCE: Record<DataProduct, { table: string; query: string; map: (gr: GlideRecord<string>) => Record<string, unknown> }> = {
    findings: {
        table: TABLES.finding,
        query: 'state!=cancelled',
        map: (gr) => ({
            finding_id: str(gr, 'number'),
            installation: gr.getDisplayValue('installation'),
            installation_uic: String(gr.getElement('installation.uic')?.toString() ?? ''),
            acom: String(gr.getElement('installation.acom')?.toString() ?? ''),
            assessment_id: gr.getDisplayValue('assessment'),
            assessment_type: String(gr.getElement('assessment.assessment_type')?.toString() ?? ''),
            fiscal_year: String(gr.getElement('assessment.fiscal_year')?.toString() ?? ''),
            program_area: String(gr.getElement('program_area.code')?.toString() ?? ''),
            statute: String(gr.getElement('regulatory_driver.statute')?.toString() ?? ''),
            citation: String(gr.getElement('regulatory_driver.citation')?.toString() ?? ''),
            severity: str(gr, 'severity'),
            root_cause: str(gr, 'root_cause'),
            state: str(gr, 'state'),
            repeat_finding: str(gr, 'repeat_finding'),
            identified_on: str(gr, 'identified_on'),
            closure_due: str(gr, 'closure_due'),
            closed_on: str(gr, 'closed_on'),
            days_open: str(gr, 'days_open'),
            aging_flag: str(gr, 'aging_flag'),
            enforcement_action_id: gr.getDisplayValue('enforcement_action'),
            updated_at: str(gr, 'sys_updated_on'),
        }),
    },
    corrective_actions: {
        table: TABLES.corrective_action,
        query: 'state!=cancelled',
        map: (gr) => ({
            corrective_action_id: str(gr, 'number'),
            finding_id: gr.getDisplayValue('finding'),
            installation: gr.getDisplayValue('installation'),
            action_type: str(gr, 'action_type'),
            state: str(gr, 'state'),
            funding_status: str(gr, 'funding_status'),
            cost_estimate: str(gr, 'cost_estimate'),
            due_date: str(gr, 'due_date'),
            percent_complete: str(gr, 'percent_complete'),
            evidence_attached: str(gr, 'evidence_attached'),
            verified_on: str(gr, 'verified_on'),
            updated_at: str(gr, 'sys_updated_on'),
        }),
    },
    enforcement_actions: {
        table: TABLES.enforcement_action,
        query: 'active=true',
        map: (gr) => ({
            enforcement_action_id: str(gr, 'number'),
            installation: gr.getDisplayValue('installation'),
            regulator: str(gr, 'regulator'),
            regulator_level: str(gr, 'regulator_level'),
            action_type: str(gr, 'action_type'),
            program_area: String(gr.getElement('program_area.code')?.toString() ?? ''),
            state: str(gr, 'state'),
            received_on: str(gr, 'received_on'),
            response_due: str(gr, 'response_due'),
            response_submitted_on: str(gr, 'response_submitted_on'),
            penalty_proposed: str(gr, 'penalty_proposed'),
            penalty_final: str(gr, 'penalty_final'),
            linked_findings: str(gr, 'linked_findings'),
            closed_on: str(gr, 'closed_on'),
            updated_at: str(gr, 'sys_updated_on'),
        }),
    },
    installation_risk: {
        table: TABLES.installation,
        query: 'active=true',
        map: (gr) => ({
            installation: str(gr, 'name'),
            installation_uic: str(gr, 'uic'),
            acom: str(gr, 'acom'),
            imcom_directorate: str(gr, 'imcom_directorate'),
            state: str(gr, 'state'),
            epa_region: str(gr, 'epa_region'),
            risk_score: str(gr, 'risk_score'),
            risk_rating: str(gr, 'risk_rating'),
            open_findings: str(gr, 'open_findings'),
            overdue_findings: str(gr, 'overdue_findings'),
            repeat_findings: str(gr, 'repeat_findings'),
            open_enforcement_actions: str(gr, 'open_enforcement_actions'),
            last_external_assessment: str(gr, 'last_external_assessment'),
            next_external_due: str(gr, 'next_external_due'),
            computed_at: str(gr, 'risk_computed_at'),
        }),
    },
}

export function collectRows(product: DataProduct): Record<string, unknown>[] {
    const src = PRODUCT_SOURCE[product]
    const rows: Record<string, unknown>[] = []
    const gr = new GlideRecord(src.table)
    gr.addEncodedQuery(src.query)
    gr.orderBy('sys_created_on')
    gr.setLimit(5000)
    gr.query()
    while (gr.next()) rows.push(src.map(gr))
    return rows
}

export function buildProduct(product: DataProduct): DataProductEnvelope {
    return buildEnvelope(product, collectRows(product), new GlideDateTime().getValue().replace(' ', 'T') + 'Z', gs.getProperty('instance_name', 'servicenow'))
}

function deliver(endpoint: string, envelope: DataProductEnvelope): { status: number; message: string } {
    if (/^https:\/\//i.test(endpoint)) {
        try {
            const rm = new RESTMessageV2()
            rm.setEndpoint(endpoint)
            rm.setHttpMethod('POST')
            rm.setRequestHeader('Content-Type', 'application/json')
            rm.setRequestHeader('X-Data-Product', envelope.data_product)
            rm.setRequestHeader('X-Schema-Version', envelope.schema_version)
            rm.setRequestHeader('X-Content-Hash', envelope.content_hash)
            rm.setRequestBody(JSON.stringify(envelope))
            const resp = rm.execute()
            const status = Number(resp.getStatusCode())
            return { status, message: status >= 200 && status < 300 ? 'delivered' : `remote rejected (${status})` }
        } catch (e) {
            return { status: 0, message: `transport error: ${String(e).slice(0, 200)}` }
        }
    }
    const r = mockIngest(envelope)
    return { status: r.status, message: `loopback mock receiver: ${r.message}` }
}

export function runExport(product: DataProduct, trigger: 'schedule' | 'manual', dryRun: boolean): RunResult {
    const started = new GlideDateTime().getValue()
    const endpoint = String(gs.getProperty(PROPERTIES.vantageEndpoint, '/api/x_cog_env/vantage/mock/ingest'))
    const envelope = buildProduct(product)
    let status: RunResult['status'] = 'dry_run'
    let http = 0
    let message = 'dry run; envelope built, nothing sent'
    if (!dryRun) {
        const d = deliver(endpoint, envelope)
        http = d.status
        message = d.message
        status = http >= 200 && http < 300 ? 'success' : 'failed'
    }
    const run = new GlideRecord(TABLES.vantage_export_run)
    run.initialize()
    run.setValue('data_product', product)
    run.setValue('trigger', trigger)
    run.setValue('status', status)
    run.setValue('started_at', started)
    run.setValue('finished_at', new GlideDateTime().getValue())
    run.setValue('row_count', String(envelope.row_count))
    run.setValue('schema_version', envelope.schema_version)
    run.setValue('content_hash', envelope.content_hash)
    run.setValue('endpoint', endpoint)
    run.setValue('http_status', String(http))
    run.setValue('message', message.slice(0, 400))
    run.setValue('payload_preview', JSON.stringify({ ...envelope, rows: envelope.rows.slice(0, 3), rows_truncated_to: Math.min(3, envelope.rows.length) }, null, 2).slice(0, 8000))
    run.setValue('triggered_by', gs.getUserID())
    const runSysId = String(run.insert() ?? '')
    gs.setProperty(PROPERTIES.vantageLastRun, JSON.stringify({ product, status, rows: envelope.row_count, hash: envelope.content_hash, at: started }))
    securityLog({ event: 'job_run', source: 'vantageExport', outcome: status === 'failed' ? 'failure' : 'success', details: { product, trigger, rows: envelope.row_count, http } })
    return { runSysId, product, status, rowCount: envelope.row_count, contentHash: envelope.content_hash, httpStatus: http, message }
}

export function runAllProducts(trigger: 'schedule' | 'manual'): RunResult[] {
    if (String(gs.getProperty(PROPERTIES.vantageEnabled, 'true')) !== 'true') return []
    return (Object.keys(DATA_PRODUCT_SCHEMAS) as DataProduct[]).map((p) => runExport(p, trigger, false))
}

export function scheduledVantageExport(): void {
    const results = runAllProducts('schedule')
    gs.info(`[x_cog_env] vantage export: ${JSON.stringify(results.map((r) => ({ p: r.product, s: r.status, n: r.rowCount })))}`)
}
