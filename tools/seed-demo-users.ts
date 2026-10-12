/**
 * Create the per-role demo users on the PDI so the separation-of-duties gates can be shown live.
 * The platform `admin` role bypasses every x_cog_env role gate, so the talk track impersonates
 * these users (User menu > Impersonate user) instead of running everything as admin.
 *   npm run seed:users          # create or update users, grant roles, make the compliance officer own open corrective actions
 * Users get no password unless ENV_DEMO_USER_PASSWORD is set; impersonation does not need one.
 * Passwords go through sysparm_input_display_value=true; without it the Table API stores the value unhashed and login fails.
 * The instance password policy silently drops passwords without a special character (the update returns 200 but nothing changes).
 * `snc_platform_rest_api_access` is granted when the instance has it, so the users can also exercise the gates through the Table API.
 * All names are synthetic.
 */
import { callInstance, instanceFromEnv, loadDotEnv, type InstanceConfig } from './lib/instance'

type Row = Record<string, unknown>

export const DEMO_USERS = [
    { user_name: 'env.demo.compliance', first_name: 'Dana', last_name: 'Whitfield', title: 'Installation Environmental Compliance Officer', role: 'x_cog_env.compliance_officer' },
    { user_name: 'env.demo.assessor', first_name: 'Marcus', last_name: 'Oyelaran', title: 'USAEC EPAS Assessor', role: 'x_cog_env.assessor' },
    { user_name: 'env.demo.commander', first_name: 'Renee', last_name: 'Castellano', title: 'Garrison Commander, EQCC Chair', role: 'x_cog_env.commander' },
    { user_name: 'env.demo.hqda', first_name: 'Priya', last_name: 'Raman', title: 'HQDA ESOH Analyst', role: 'x_cog_env.hqda_analyst' },
] as const

const OPEN_CA_STATES = 'draft,in_progress,pending_approval'

async function list(cfg: InstanceConfig, table: string, query: string, fields: string): Promise<Row[]> {
    const r = await callInstance<{ result: Row[] }>(cfg, { method: 'GET', path: `/api/now/table/${table}?sysparm_query=${encodeURIComponent(query)}&sysparm_fields=${fields}&sysparm_limit=1000` })
    return r.result
}

async function upsertUser(cfg: InstanceConfig, u: (typeof DEMO_USERS)[number], password: string | undefined): Promise<string> {
    const body: Row = { user_name: u.user_name, first_name: u.first_name, last_name: u.last_name, title: u.title, email: `${u.user_name}@example.com`, active: true, locked_out: false, password_needs_reset: false }
    if (password) body.user_password = password
    const existing = await list(cfg, 'sys_user', `user_name=${u.user_name}`, 'sys_id')
    if (existing[0]) {
        const id = String(existing[0].sys_id)
        await callInstance(cfg, { method: 'PATCH', path: `/api/now/table/sys_user/${id}?sysparm_input_display_value=true`, body })
        return id
    }
    const r = await callInstance<{ result: Row }>(cfg, { method: 'POST', path: '/api/now/table/sys_user?sysparm_fields=sys_id&sysparm_input_display_value=true', body })
    return String(r.result.sys_id)
}

async function grantRole(cfg: InstanceConfig, userId: string, roleName: string, optional = false): Promise<void> {
    const role = (await list(cfg, 'sys_user_role', `name=${roleName}`, 'sys_id'))[0]
    if (!role) { if (optional) return; throw new Error(`role ${roleName} not found; install x_cog_env first`) }
    const has = await list(cfg, 'sys_user_has_role', `user=${userId}^role=${String(role.sys_id)}`, 'sys_id')
    if (has.length === 0) await callInstance(cfg, { method: 'POST', path: '/api/now/table/sys_user_has_role', body: { user: userId, role: String(role.sys_id) } })
}

async function main(): Promise<void> {
    loadDotEnv()
    const cfg = instanceFromEnv()
    const password = process.env['ENV_DEMO_USER_PASSWORD'] || undefined
    const ids = new Map<string, string>()
    for (const u of DEMO_USERS) {
        const id = await upsertUser(cfg, u, password)
        await grantRole(cfg, id, 'snc_platform_rest_api_access', true)
        await grantRole(cfg, id, u.role)
        ids.set(u.user_name, id)
        console.log(`${u.user_name}: ${u.role}`)
    }
    const officer = ids.get('env.demo.compliance') as string
    const open = await list(cfg, 'x_cog_env_corrective_action', `stateIN${OPEN_CA_STATES}^ownerISEMPTY`, 'sys_id')
    for (const ca of open) await callInstance(cfg, { method: 'PATCH', path: `/api/now/table/x_cog_env_corrective_action/${String(ca.sys_id)}`, body: { owner: officer } })
    console.log(`open corrective actions now owned by env.demo.compliance: ${open.length}`)
    console.log(password ? 'passwords set from ENV_DEMO_USER_PASSWORD' : 'no passwords set; use Impersonate user from the admin session')
}

main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1) })
