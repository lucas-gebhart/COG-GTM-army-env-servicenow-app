import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { ACL_FILE, renderAcls } from '../tools/generate-fluent-security'
import { TABLE_ACCESS } from '../src/server/lib/security'

describe('security matrix', () => {
    it('generated ACL file matches the matrix', () => {
        expect(readFileSync(ACL_FILE, 'utf8')).toBe(renderAcls())
    })
    it('admin can do everything and delete is admin only', () => {
        for (const access of Object.values(TABLE_ACCESS)) {
            for (const roles of Object.values(access)) expect(roles).toContain('admin')
            expect(access.delete).toEqual(['admin'])
        }
    })
})
