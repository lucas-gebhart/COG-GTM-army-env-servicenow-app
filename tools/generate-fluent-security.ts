/**
 * Renders src/server/lib/security.ts into Fluent ACL metadata.
 *   npx tsx tools/generate-fluent-security.ts          # write src/fluent/security/acls.now.ts
 *   npx tsx tools/generate-fluent-security.ts --check  # exit 1 if stale
 * Fluent files only accept literal property assignments, so the matrix is expanded here.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { ROLES, TABLES, type RoleKey, type TableKey } from '../src/server/lib/domain'
import { SYSTEM_FIELDS, TABLE_ACCESS, type Operation } from '../src/server/lib/security'

export const ACL_FILE = fileURLToPath(new URL('../src/fluent/security/acls.now.ts', import.meta.url))

function roleList(keys: readonly RoleKey[]): string {
    return `[${keys.map((k) => `'${ROLES[k]}'`).join(', ')}]`
}

function acl(id: string, table: string, op: Operation, roles: readonly RoleKey[], field: string | null, desc: string, extra = ''): string {
    const f = field === null ? '' : `\n    field: '${field}',`
    return `Acl({\n    $id: Now.ID['${id}'],\n    type: 'record',\n    table: '${table}',${f}\n    operation: '${op}',\n    roles: ${roleList(roles)},${extra}\n    description: '${desc}',\n})\n`
}

export function renderAcls(): string {
    const out: string[] = [
        '// GENERATED FILE - do not edit by hand.',
        '// Source of truth: src/server/lib/security.ts. Regenerate with `npm run gen:security`.',
        "import { Acl } from '@servicenow/sdk/core'",
        '',
    ]
    for (const key of Object.keys(TABLE_ACCESS) as TableKey[]) {
        const table = TABLES[key]
        const access = TABLE_ACCESS[key]
        for (const op of ['create', 'read', 'write', 'delete'] as Operation[]) {
            const roles = access[op]
            const desc = `${table} ${op}: ${roles.join(', ')}`
            out.push(acl(`acl_${key}_${op}`, table, op, roles, null, desc))
            out.push(acl(`acl_${key}_all_fields_${op}`, table, op, roles, '*', `${desc} (all fields)`))
        }
        for (const field of SYSTEM_FIELDS[key] ?? []) {
            out.push(acl(`acl_${key}_${field}_write`, table, 'write', ['admin'], field, `${table}.${field} is maintained by business rules; admin only`))
        }
    }
    return out.join('\n')
}

const isMain = process.argv[1] !== undefined && import.meta.url === new URL(`file://${process.argv[1]}`).href
if (isMain) {
    const check = process.argv.includes('--check')
    const rendered = renderAcls()
    if (check) {
        const current = readFileSync(ACL_FILE, 'utf8')
        if (current !== rendered) {
            console.error('acls.now.ts is stale; run npm run gen:security')
            process.exit(1)
        }
    } else {
        writeFileSync(ACL_FILE, rendered)
        console.log(`wrote ${ACL_FILE}`)
    }
}
