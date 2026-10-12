/** Scripted REST handlers for the Vantage data product API and the mock receiver. */
import { DATA_PRODUCT_SCHEMAS, catalogEntry, resolveDataProduct } from '../lib/vantage.ts'
import { type DataProduct } from '../lib/domain.ts'
import { hasAnyRole, securityLog } from '../rules/glideSupport.ts'
import { buildProduct, runAllProducts, runExport } from '../vantage/exporter.ts'
import { mockIngest } from '../vantage/mockReceiver.ts'
import { securityHeaders, writeError, writeJson, type RestResponse } from './respond.ts'

export interface ApiRequest {
    body?: { dataString?: string; data?: unknown }
    queryParams?: Record<string, string[] | string>
    pathParams?: Record<string, string>
}

function pathParam(request: ApiRequest, name: string): string {
    return String(request.pathParams?.[name] ?? '')
}
function queryParam(request: ApiRequest, name: string): string {
    const v = request.queryParams?.[name]
    return Array.isArray(v) ? String(v[0] ?? '') : v === undefined ? '' : String(v)
}
function parseBody(request: ApiRequest): unknown {
    if (request.body?.data !== undefined) return request.body.data
    try {
        return JSON.parse(request.body?.dataString ?? '{}')
    } catch {
        return null
    }
}

export function catalog(_request: ApiRequest, response: RestResponse): void {
    securityHeaders(response)
    writeJson(response, 200, { data_products: (Object.keys(DATA_PRODUCT_SCHEMAS) as DataProduct[]).map((p) => ({ ...catalogEntry(p), columns: DATA_PRODUCT_SCHEMAS[p].columns })) })
}

export function dataProduct(request: ApiRequest, response: RestResponse): void {
    securityHeaders(response)
    if (!hasAnyRole(['hqda_analyst', 'admin'])) return writeError(response, 403, 'forbidden')
    const p = resolveDataProduct(pathParam(request, 'product'))
    if (!p) return writeError(response, 404, 'unknown_product')
    securityLog({ event: 'data_access', source: 'vantage_api.dataProduct', outcome: 'success', details: { product: p } })
    writeJson(response, 200, buildProduct(p))
}

export function runProduct(request: ApiRequest, response: RestResponse): void {
    securityHeaders(response)
    if (!hasAnyRole(['hqda_analyst', 'admin'])) return writeError(response, 403, 'forbidden')
    const raw = pathParam(request, 'product')
    const dry = queryParam(request, 'dry_run') === 'true'
    if (raw === 'all') return writeJson(response, 200, { runs: runAllProducts('manual') })
    const p = resolveDataProduct(raw)
    if (!p) return writeError(response, 404, 'unknown_product')
    writeJson(response, 200, runExport(p, 'manual', dry))
}

export function ingest(request: ApiRequest, response: RestResponse): void {
    securityHeaders(response)
    const body = parseBody(request)
    if (body === null) return writeError(response, 400, 'invalid_json')
    const r = mockIngest(body)
    writeJson(response, r.status, { receiver: 'vantage_mock', ...r })
}
