/** Small UTC date helpers over ISO `YYYY-MM-DD` strings (what glide_date fields accept). */
const pad = (n: number): string => String(n).padStart(2, '0')

export function toIsoDate(d: Date): string {
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`
}
export function parseIsoDate(s: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}/.test(s)) return null
    const d = new Date(`${s.slice(0, 10)}T00:00:00Z`)
    return Number.isNaN(d.getTime()) ? null : d
}
export function addDays(iso: string, days: number): string | null {
    const d = parseIsoDate(iso)
    if (!d) return null
    d.setUTCDate(d.getUTCDate() + days)
    return toIsoDate(d)
}
/** Whole days from `from` to `to` (negative when `to` is earlier). */
export function daysBetween(from: string, to: string): number | null {
    const a = parseIsoDate(from)
    const b = parseIsoDate(to)
    if (!a || !b) return null
    return Math.round((b.getTime() - a.getTime()) / 86_400_000)
}
/** US federal fiscal year (1 Oct - 30 Sep) for an ISO date. */
export function fiscalYearOf(iso: string): number | null {
    const d = parseIsoDate(iso)
    if (!d) return null
    return d.getUTCMonth() >= 9 ? d.getUTCFullYear() + 1 : d.getUTCFullYear()
}
export function fiscalQuarterOf(iso: string): string | null {
    const d = parseIsoDate(iso)
    const fy = fiscalYearOf(iso)
    if (!d || fy === null) return null
    const q = ((d.getUTCMonth() + 3) % 12 >> 0) / 3
    return `FY${String(fy).slice(2)}Q${Math.floor(q) + 1}`
}
