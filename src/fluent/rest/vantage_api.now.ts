import '@servicenow/sdk/global'
import { Acl, RestApi } from '@servicenow/sdk/core'
import { catalog, dataProduct, ingest, runProduct } from '../../server/rest/vantageApi'
import { admin, hqdaAnalyst } from '../security/roles.now'

export const vantageApiAcl = Acl({
    $id: Now.ID['acl_rest_vantage'],
    name: 'vantage',
    type: 'rest_endpoint',
    operation: 'execute',
    roles: [hqdaAnalyst, admin],
    securityAttribute: 'user_is_authenticated',
    description: 'Only HQDA analysts and application admins may call the Vantage data product API.',
})

export const vantageApi = RestApi({
    $id: Now.ID['rest_vantage'],
    name: 'ENV Vantage Data Products',
    serviceId: 'vantage',
    shortDescription: 'Governed data product contract for Army Vantage (CIO-092): catalog, envelope preview, manual run, and a mock ingest receiver for demos.',
    consumes: 'application/json',
    produces: 'application/json',
    enforceAcl: [vantageApiAcl],
    active: true,
    versions: [{ $id: Now.ID['rest_vantage_v1'], version: 1, active: true, isDefault: true, shortDescription: 'Initial data product contract (schema 1.0.0).' }],
    routes: [
        { $id: Now.ID['rest_vantage_catalog'], name: 'Data product catalog', method: 'GET', path: '/catalog', version: 1, authentication: true, authorization: true, produces: 'application/json', script: catalog },
        { $id: Now.ID['rest_vantage_product'], name: 'Build data product envelope', method: 'GET', path: '/data_products/{product}', version: 1, authentication: true, authorization: true, produces: 'application/json', script: dataProduct },
        { $id: Now.ID['rest_vantage_run'], name: 'Run export (product or all; ?dry_run=true)', method: 'POST', path: '/runs/{product}', version: 1, authentication: true, authorization: true, consumes: 'application/json', produces: 'application/json', script: runProduct },
        { $id: Now.ID['rest_vantage_ingest'], name: 'Mock Vantage ingest receiver', method: 'POST', path: '/mock/ingest', version: 1, authentication: true, authorization: true, consumes: 'application/json', produces: 'application/json', script: ingest },
    ],
})
