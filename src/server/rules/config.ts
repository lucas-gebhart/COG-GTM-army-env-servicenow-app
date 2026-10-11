/** Reads SLA / cadence settings from system properties with safe defaults. */
import { gs } from '@servicenow/glide'
import { DEFAULT_ENFORCEMENT_RESPONSE_DAYS, DEFAULT_FINALIZATION_DAYS, DEFAULT_SLA_DAYS, PROPERTIES } from '../lib/domain.ts'
import { type SlaConfig } from '../lib/sla.ts'

function intProp(name: string, fallback: number): number {
    const n = Number.parseInt(String(gs.getProperty(name, String(fallback))), 10)
    return Number.isFinite(n) && n > 0 ? n : fallback
}

export function slaConfig(): SlaConfig {
    return {
        significant: intProp(PROPERTIES.slaSignificantDays, DEFAULT_SLA_DAYS.significant ?? 90),
        major: intProp(PROPERTIES.slaMajorDays, DEFAULT_SLA_DAYS.major ?? 180),
        minor: intProp(PROPERTIES.slaMinorDays, DEFAULT_SLA_DAYS.minor ?? 365),
        finalization: intProp(PROPERTIES.finalizationDays, DEFAULT_FINALIZATION_DAYS),
        enforcementResponse: intProp(PROPERTIES.enforcementResponseDays, DEFAULT_ENFORCEMENT_RESPONSE_DAYS),
    }
}

export function todayIso(): string {
    return new Date().toISOString().slice(0, 10)
}
