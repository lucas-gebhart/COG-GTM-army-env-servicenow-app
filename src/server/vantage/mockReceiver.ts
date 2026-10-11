/**
 * Mock Vantage ingest receiver. Validates the envelope the way a real landing zone would
 * (product known, schema version matches, hash recomputes, row count matches) and reports back.
 * Used in-process by the exporter in loopback mode and exposed as POST /vantage_mock/ingest.
 */
import { DATA_PRODUCTS, type DataProduct } from '../lib/domain.ts'
import { DATA_PRODUCT_SCHEMAS, SCHEMA_VERSION, contentHash, type DataProductEnvelope } from '../lib/vantage.ts'

export interface IngestResult {
    status: number
    message: string
    accepted_rows: number
}

export function mockIngest(body: unknown): IngestResult {
    const env = body as Partial<DataProductEnvelope>
    const key = (Object.keys(DATA_PRODUCTS) as DataProduct[]).find((k) => DATA_PRODUCTS[k] === env.data_product)
    const schema = key ? DATA_PRODUCT_SCHEMAS[key] : undefined
    if (!schema) return { status: 400, message: `unknown data product ${String(env.data_product)}`, accepted_rows: 0 }
    if (env.schema_version !== SCHEMA_VERSION) return { status: 409, message: `schema ${String(env.schema_version)} does not match catalog ${SCHEMA_VERSION}`, accepted_rows: 0 }
    const rows = Array.isArray(env.rows) ? env.rows : null
    if (!rows) return { status: 400, message: 'rows missing', accepted_rows: 0 }
    if (env.row_count !== rows.length) return { status: 400, message: `row_count ${String(env.row_count)} != rows.length ${rows.length}`, accepted_rows: 0 }
    if (contentHash(rows) !== env.content_hash) return { status: 422, message: 'content hash mismatch', accepted_rows: 0 }
    const expected = schema.columns.map((c) => c.name)
    for (const r of rows) {
        const keys = Object.keys(r)
        if (keys.length !== expected.length || keys.some((k, i) => k !== expected[i])) return { status: 422, message: 'row columns do not match schema order', accepted_rows: 0 }
    }
    return { status: 200, message: `accepted ${rows.length} rows into ${String(env.data_product)}@${SCHEMA_VERSION}`, accepted_rows: rows.length }
}
