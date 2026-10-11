/**
 * Installation environmental risk rating, the number the commander and HQDA dashboards lead with.
 * Weighted open findings plus open enforcement exposure; thresholds are deliberately simple so the
 * demo audience can recompute them by hand.
 */
import type { RiskRating, Severity } from './domain.ts'

export const SEVERITY_WEIGHT: Record<Severity, number> = { significant: 10, major: 4, minor: 1, observation: 0 }

export interface RiskInput {
    openFindings: readonly { severity: Severity; overdue: boolean; repeat: boolean }[]
    openEnforcementActions: number
    penaltyExposure: number
}
export interface RiskResult {
    score: number
    rating: RiskRating
    drivers: string[]
}
export function computeRisk(input: RiskInput): RiskResult {
    let score = 0
    const drivers: string[] = []
    let overdue = 0
    let repeats = 0
    for (const f of input.openFindings) {
        let w = SEVERITY_WEIGHT[f.severity]
        if (f.overdue) {
            w *= 2
            overdue++
        }
        if (f.repeat) {
            w += 2
            repeats++
        }
        score += w
    }
    score += input.openEnforcementActions * 15
    if (input.penaltyExposure >= 100_000) score += 20
    else if (input.penaltyExposure > 0) score += 5

    if (overdue) drivers.push(`${overdue} overdue finding${overdue === 1 ? '' : 's'}`)
    if (repeats) drivers.push(`${repeats} repeat finding${repeats === 1 ? '' : 's'}`)
    if (input.openEnforcementActions) drivers.push(`${input.openEnforcementActions} open enforcement action${input.openEnforcementActions === 1 ? '' : 's'}`)
    if (input.penaltyExposure > 0) drivers.push(`$${Math.round(input.penaltyExposure).toLocaleString('en-US')} penalty exposure`)

    const rating: RiskRating = score >= 40 ? 'high' : score >= 15 ? 'moderate' : 'low'
    return { score, rating, drivers }
}
