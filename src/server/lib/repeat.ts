/**
 * Repeat-finding detection: the same installation cited for the same program area and regulatory
 * driver within the lookback window counts as a repeat, which is what EPAS reports to commanders and
 * what drives root-cause scrutiny at the EQCC.
 */
import { REPEAT_LOOKBACK_FY } from './domain.ts'

export interface PriorFinding {
    sysId: string
    fiscalYear: number
    programArea: string
    regulatoryDriver: string
    installation: string
}
export interface RepeatCheck {
    repeat: boolean
    priorSysId: string | null
}
export function detectRepeat(
    candidate: { fiscalYear: number; programArea: string; regulatoryDriver: string; installation: string },
    priors: readonly PriorFinding[],
    lookbackFy: number = REPEAT_LOOKBACK_FY
): RepeatCheck {
    if (!candidate.programArea || !candidate.installation) return { repeat: false, priorSysId: null }
    const matches = priors
        .filter((p) => p.installation === candidate.installation && p.programArea === candidate.programArea)
        .filter((p) => !candidate.regulatoryDriver || !p.regulatoryDriver || p.regulatoryDriver === candidate.regulatoryDriver)
        .filter((p) => p.fiscalYear < candidate.fiscalYear && candidate.fiscalYear - p.fiscalYear <= lookbackFy)
        .sort((a, b) => b.fiscalYear - a.fiscalYear)
    const first = matches[0]
    return first ? { repeat: true, priorSysId: first.sysId } : { repeat: false, priorSysId: null }
}
