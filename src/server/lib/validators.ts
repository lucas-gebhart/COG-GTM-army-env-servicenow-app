/**
 * Whitelist validators for user-supplied values. Every validator is total (never throws) and
 * returns a structured result so callers can surface a generic message to the user while logging
 * the specific reason server-side.
 */
import { LIMITS } from './domain.ts'

export interface ValidationIssue {
    field: string
    code: string
    message: string
}
export interface ValidationResult {
    valid: boolean
    issues: ValidationIssue[]
}

const ok = (): ValidationResult => ({ valid: true, issues: [] })
const fail = (field: string, code: string, message: string): ValidationResult => ({ valid: false, issues: [{ field, code, message }] })

/** Letters, digits, space and a short punctuation whitelist. */
const SAFE_TEXT = /^[A-Za-z0-9 .,'&/()#:;§%-]*$/
const SAFE_MULTILINE = /^[A-Za-z0-9 .,'&/()#:;?"!_§%\r\n-]*$/
const UNSAFE_MULTILINE_CHARS = /[^A-Za-z0-9 .,'&/()#:;?"!_§%\r\n-]/g
/** Regulatory citations such as `40 CFR 262.17(a)(1)` or `30 TAC 335.69`. */
const CITATION = /^[A-Za-z0-9 .()§-]{1,80}$/
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const FISCAL_YEAR = /^20\d{2}$/
const UIC = /^[A-Z][A-Z0-9]{5}$/

export function isSafeText(value: string, max: number = LIMITS.shortText): boolean {
    return value.length <= max && SAFE_TEXT.test(value)
}
export function isSafeMultiline(value: string, max: number = LIMITS.text): boolean {
    return value.length <= max && SAFE_MULTILINE.test(value)
}
export function toSafeMultiline(value: string, max: number = LIMITS.text): string {
    return value.replace(UNSAFE_MULTILINE_CHARS, ' ').slice(0, max)
}

export function validateSafeText(field: string, value: unknown, max: number = LIMITS.shortText, required = false): ValidationResult {
    const s = typeof value === 'string' ? value.trim() : ''
    if (s === '') return required ? fail(field, 'required', `${field} is required`) : ok()
    return isSafeText(s, max) ? ok() : fail(field, 'invalid_text', `${field} contains characters that are not allowed or is too long`)
}
export function validateMultiline(field: string, value: unknown, max: number = LIMITS.text, required = false): ValidationResult {
    const s = typeof value === 'string' ? value : ''
    if (s.trim() === '') return required ? fail(field, 'required', `${field} is required`) : ok()
    return isSafeMultiline(s, max) ? ok() : fail(field, 'invalid_text', `${field} contains characters that are not allowed or is too long`)
}
export function validateCitation(value: unknown, field = 'citation'): ValidationResult {
    const s = typeof value === 'string' ? value.trim() : ''
    if (s === '') return ok()
    return CITATION.test(s) ? ok() : fail(field, 'invalid_citation', 'Citation format not recognised')
}
export function validateIsoDate(value: unknown, field: string, required = false): ValidationResult {
    const s = typeof value === 'string' ? value.trim() : ''
    if (s === '') return required ? fail(field, 'required', `${field} is required`) : ok()
    if (!ISO_DATE.test(s) || Number.isNaN(Date.parse(`${s}T00:00:00Z`))) return fail(field, 'invalid_date', `${field} must be a valid date`)
    return ok()
}
export function validateFiscalYear(value: unknown, field = 'fiscal_year'): ValidationResult {
    const s = typeof value === 'string' || typeof value === 'number' ? String(value).trim() : ''
    if (s === '') return fail(field, 'required', 'Fiscal year is required')
    return FISCAL_YEAR.test(s) ? ok() : fail(field, 'invalid_fiscal_year', 'Fiscal year must be 20xx')
}
export function validateUic(value: unknown, field = 'uic'): ValidationResult {
    const s = typeof value === 'string' ? value.trim().toUpperCase() : ''
    if (s === '') return ok()
    return UIC.test(s) ? ok() : fail(field, 'invalid_uic', 'UIC must be six characters starting with a letter')
}
export function validateMoney(value: unknown, field: string, max = 1_000_000_000): ValidationResult {
    if (value === undefined || value === null || value === '') return ok()
    const n = Number(value)
    if (!Number.isFinite(n) || n < 0 || n > max) return fail(field, 'invalid_amount', `${field} must be between 0 and ${max}`)
    return ok()
}
export function validateDateOrder(earlierField: string, earlier: unknown, laterField: string, later: unknown): ValidationResult {
    const a = typeof earlier === 'string' ? earlier.trim() : ''
    const b = typeof later === 'string' ? later.trim() : ''
    if (!a || !b) return ok()
    return a <= b ? ok() : fail(laterField, 'date_order', `${laterField} must not be before ${earlierField}`)
}

export function mergeResults(results: ValidationResult[]): ValidationResult {
    const issues = results.flatMap((r) => r.issues)
    return { valid: issues.length === 0, issues }
}
export const GENERIC_VALIDATION_MESSAGE = 'One or more values were not accepted. Please review the highlighted fields.'
