/**
 * Load sample-data/*.json into the PDI through the Table API, in dependency order, letting the
 * application's business rules run (closure dates, repeat detection, counts, lifecycle gates).
 *   npm run seed            # load (idempotent-ish: skips when installations already exist)
 *   npm run seed -- --reset # delete all x_cog_env data first, then load
 * Needs SN_INSTANCE_URL, SERVICENOW_PDI_USERNAME, SERVICENOW_PDI_PASSWORD (see .env.example).
 */
import { readFileSync } from 'node:fs'
import { callInstance, instanceFromEnv, loadDotEnv, type InstanceConfig } from './lib/instance'
import { SAMPLE_DIR } from './generate-sample-data'

const T = {
    installation: 'x_cog_env_installation', program_area: 'x_cog_env_program_area', regulatory_driver: 'x_cog_env_regulatory_driver',
    assessment: 'x_cog_env_assessment', finding: 'x_cog_env_finding', corrective_action: 'x_cog_env_corrective_action',
    enforcement_action: 'x_cog_env_enforcement_action', eqcc_meeting: 'x_cog_env_eqcc_meeting', export_run: 'x_cog_env_vantage_export_run',
}
type Row = Record<string, unknown>
const read = (name: string): Row[] => JSON.parse(readFileSync(`${SAMPLE_DIR}${name}.json`, 'utf8')) as Row[]

async function insert(cfg: InstanceConfig, table: string, data: Row): Promise<Row> {
    const r = await callInstance<{ result: Row }>(cfg, { method: 'POST', path: `/api/now/table/${table}?sysparm_fields=sys_id,number,state,closure_due,repeat_finding`, body: data })
    return r.result
}
async function patch(cfg: InstanceConfig, table: string, sysId: string, data: Row): Promise<Row> {
    const r = await callInstance<{ result: Row }>(cfg, { method: 'PATCH', path: `/api/now/table/${table}/${sysId}?sysparm_fields=sys_id,state`, body: data })
    return r.result
}
async function attachEvidence(cfg: InstanceConfig, table: string, sysId: string, text: string): Promise<void> {
    const auth = Buffer.from(`${cfg.username}:${cfg.password}`, 'utf8').toString('base64')
    const res = await fetch(`${cfg.baseUrl}/api/now/attachment/file?table_name=${table}&table_sys_id=${sysId}&file_name=evidence-${sysId.slice(0, 6)}.txt`, { method: 'POST', headers: { Authorization: `Basic ${auth}`, Accept: 'application/json', 'Content-Type': 'text/plain' }, body: text })
    if (!res.ok) throw new Error(`attachment upload failed ${res.status}`)
}
async function list(cfg: InstanceConfig, table: string, query: string, fields: string): Promise<Row[]> {
    const r = await callInstance<{ result: Row[] }>(cfg, { method: 'GET', path: `/api/now/table/${table}?sysparm_query=${encodeURIComponent(query)}&sysparm_fields=${fields}&sysparm_limit=10000` })
    return r.result
}
async function wipe(cfg: InstanceConfig): Promise<void> {
    for (const table of [T.export_run, T.eqcc_meeting, T.corrective_action, T.finding, T.enforcement_action, T.assessment, T.regulatory_driver, T.program_area, T.installation]) {
        const rows = await list(cfg, table, '', 'sys_id')
        let n = 0
        await pool(rows, 8, async (r) => { await callInstance(cfg, { method: 'DELETE', path: `/api/now/table/${table}/${String(r.sys_id)}` }); n++ })
        console.log(`reset ${table}: deleted ${n}`)
    }
}
async function pool<T>(items: readonly T[], size: number, fn: (t: T) => Promise<void>): Promise<void> {
    let i = 0
    const failures: string[] = []
    const workers = Array.from({ length: size }, async () => { while (i < items.length) { const it = items[i++] as T; try { await fn(it) } catch (e) { failures.push(e instanceof Error ? e.message : String(e)) } } })
    await Promise.all(workers)
    if (failures.length) console.warn(`${failures.length} item(s) failed; first: ${failures[0]?.slice(0, 300)}`)
}

async function main(): Promise<void> {
    loadDotEnv()
    const cfg = instanceFromEnv()
    const reset = process.argv.includes('--reset')
    if (reset) await wipe(cfg)
    else if ((await list(cfg, T.installation, '', 'sys_id')).length > 0) { console.log('installations already present; use --reset to reload'); return }

    const instId = new Map<string, string>(), areaId = new Map<string, string>(), driverId = new Map<string, string>(), assessId = new Map<string, string>(), findingId = new Map<string, string>()
    const findingInst = new Map<string, string>(), findingArea = new Map<string, string>()
    for (const r of read('installations')) instId.set(String(r.name), String((await insert(cfg, T.installation, r)).sys_id))
    for (const r of read('program_areas')) areaId.set(String(r.code), String((await insert(cfg, T.program_area, r)).sys_id))
    for (const r of read('regulatory_drivers')) driverId.set(String(r.citation), String((await insert(cfg, T.regulatory_driver, { ...r, program_area: areaId.get(String(r.program_area)) })).sys_id))
    console.log(`reference data: ${instId.size} installations, ${areaId.size} program areas, ${driverId.size} drivers`)

    const assessments = read('assessments')
    for (const a of assessments) {
        const { key, state, ...data } = a
        const created = await insert(cfg, T.assessment, { ...data, installation: instId.get(String(a.installation)), state: 'planned' })
        assessId.set(String(key), String(created.sys_id))
        for (const s of ['in_progress', 'draft_report', 'finalized']) { if (s === state || state === 'finalized' || (state === 'draft_report' && s !== 'finalized')) await patch(cfg, T.assessment, String(created.sys_id), { state: s }); if (s === state) break }
    }
    console.log(`assessments: ${assessId.size}`)

    const findings = read('findings')
    let repeat = 0
    for (const f of findings) {
        const { key, target_state, closed_on, closure_justification, assessment, program_area, regulatory_driver, ...data } = f
        const aRow = assessments.find((a) => a.key === assessment) as Row
        const created = await insert(cfg, T.finding, { ...data, assessment: assessId.get(String(assessment)), installation: instId.get(String(aRow.installation)), program_area: areaId.get(String(program_area)), regulatory_driver: driverId.get(String(regulatory_driver)), state: 'open' })
        findingId.set(String(key), String(created.sys_id)); findingInst.set(String(key), String(aRow.installation)); findingArea.set(String(key), String(program_area))
        if (String(created.repeat_finding) === 'true') repeat++
        void closed_on; void closure_justification; void target_state
    }
    console.log(`findings: ${findingId.size} (${repeat} flagged repeat by the business rule)`)

    const cas = read('corrective_actions')
    let n = 0
    await pool(cas, 4, async (c) => {
        const { finding, target_state, evidence_attached, verification_notes, ...data } = c
        const fid = findingId.get(String(finding)) as string
        const created = await insert(cfg, T.corrective_action, { ...data, finding: fid, installation: instId.get(findingInst.get(String(finding)) as string), state: 'draft' })
        const id = String(created.sys_id)
        const chain: Record<string, string[]> = { draft: [], in_progress: ['in_progress'], pending_approval: ['in_progress', 'pending_approval'], verified: ['in_progress', 'pending_approval', 'verified'], cancelled: ['cancelled'] }
        for (const s of chain[String(target_state)] ?? []) {
            const body: Row = { state: s }
            if (s === 'pending_approval') { if (evidence_attached) await attachEvidence(cfg, T.corrective_action, id, `SYNTHETIC EVIDENCE for ${String(data.short_description)}\nFollow-up inspection photo log, training roster or SOP revision would be attached here.\n`); body.percent_complete = 100 }
            if (s === 'verified') body.verification_notes = verification_notes
            await patch(cfg, T.corrective_action, id, body)
        }
        n++
    })
    console.log(`corrective actions: ${n}`)

    let closed = 0, accepted = 0
    for (const f of findings) {
        const id = findingId.get(String(f.key)) as string
        if (f.target_state === 'closed') { await patch(cfg, T.finding, id, { state: 'closed', closure_justification: f.closure_justification, closed_on: f.closed_on }); closed++ }
        else if (f.target_state === 'risk_accepted') { await patch(cfg, T.finding, id, { state: 'risk_accepted', closure_justification: f.closure_justification, closed_on: f.closed_on }); accepted++ }
    }
    console.log(`findings closed: ${closed}, risk accepted: ${accepted}`)

    let ea = 0
    for (const e of read('enforcement_actions')) {
        const { target_state, linked_finding_area, program_area, regulatory_driver, installation, ...data } = e
        const created = await insert(cfg, T.enforcement_action, { ...data, installation: instId.get(String(installation)), program_area: areaId.get(String(program_area)), regulatory_driver: driverId.get(String(regulatory_driver)), state: 'received' })
        const id = String(created.sys_id)
        const chain: Record<string, string[]> = { received: [], response_drafted: ['response_drafted'], response_submitted: ['response_drafted', 'response_submitted'], contested: ['response_drafted', 'response_submitted', 'contested'], closed: ['response_drafted', 'response_submitted', 'closed'] }
        for (const s of chain[String(target_state)] ?? []) await patch(cfg, T.enforcement_action, id, { state: s })
        // link up to three open findings of the same installation and program area
        const linked = findings.filter((f) => findingInst.get(String(f.key)) === installation && findingArea.get(String(f.key)) === linked_finding_area && f.target_state !== 'closed').slice(0, 3)
        for (const f of linked) await patch(cfg, T.finding, findingId.get(String(f.key)) as string, { enforcement_action: id })
        ea++
    }
    console.log(`enforcement actions: ${ea}`)

    let m = 0
    for (const q of read('eqcc_meetings')) { await insert(cfg, T.eqcc_meeting, { ...q, installation: instId.get(String(q.installation)) }); m++ }
    console.log(`eqcc meetings: ${m}`)
    console.log('done; run the nightly job (ENV Nightly aging and installation risk) or "Recompute risk posture" to populate installation risk.')
}

main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1) })
