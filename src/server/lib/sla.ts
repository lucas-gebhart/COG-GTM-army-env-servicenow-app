/**
 * Closure and finalization windows. Significant findings close in 90 days, major in 180, minor in
 * 365; observations carry no clock. Assessments finalize their report 45 days after fieldwork ends.
 * Values are defaults; the business rules read system properties first.
 */
import { addDays, daysBetween } from './dates.ts'
import { DEFAULT_ENFORCEMENT_RESPONSE_DAYS, DEFAULT_FINALIZATION_DAYS, DEFAULT_SLA_DAYS, type AgingFlag, type Severity } from './domain.ts'

export interface SlaConfig {
    significant: number
    major: number
    minor: number
    finalization: number
    enforcementResponse: number
}
export const DEFAULT_SLA: SlaConfig = {
    significant: DEFAULT_SLA_DAYS.significant ?? 90,
    major: DEFAULT_SLA_DAYS.major ?? 180,
    minor: DEFAULT_SLA_DAYS.minor ?? 365,
    finalization: DEFAULT_FINALIZATION_DAYS,
    enforcementResponse: DEFAULT_ENFORCEMENT_RESPONSE_DAYS,
}

export function closureWindowDays(severity: Severity, cfg: SlaConfig = DEFAULT_SLA): number | null {
    switch (severity) {
        case 'significant':
            return cfg.significant
        case 'major':
            return cfg.major
        case 'minor':
            return cfg.minor
        default:
            return null
    }
}
export function closureDueDate(identifiedOn: string, severity: Severity, cfg: SlaConfig = DEFAULT_SLA): string | null {
    const days = closureWindowDays(severity, cfg)
    return days === null ? null : addDays(identifiedOn, days)
}
export function finalizationDueDate(fieldworkEnd: string, cfg: SlaConfig = DEFAULT_SLA): string | null {
    return addDays(fieldworkEnd, cfg.finalization)
}
export function enforcementResponseDue(receivedOn: string, cfg: SlaConfig = DEFAULT_SLA): string | null {
    return addDays(receivedOn, cfg.enforcementResponse)
}

export interface Aging {
    daysOpen: number
    daysRemaining: number | null
    flag: AgingFlag
}
/**
 * Green while more than 25% of the window remains, amber inside the last 25%, red once overdue.
 * Observations (no window) stay green.
 */
export function computeAging(identifiedOn: string, dueOn: string | null, today: string): Aging {
    const daysOpen = Math.max(0, daysBetween(identifiedOn, today) ?? 0)
    if (!dueOn) return { daysOpen, daysRemaining: null, flag: 'green' }
    const remaining = daysBetween(today, dueOn) ?? 0
    const window = Math.max(1, daysBetween(identifiedOn, dueOn) ?? 1)
    let flag: AgingFlag = 'green'
    if (remaining < 0) flag = 'red'
    else if (remaining <= window * 0.25) flag = 'amber'
    return { daysOpen, daysRemaining: remaining, flag }
}
