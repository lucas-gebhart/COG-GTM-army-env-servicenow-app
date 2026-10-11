/**
 * Nightly job: recompute finding aging, enforcement response countdowns, and per-installation
 * risk posture (score, rating, drivers, counters, next external EPAS due).
 */
import { GlideDateTime, GlideRecord, gs } from '@servicenow/glide'
import { addDays } from '../lib/dates.ts'
import { TABLES, type Severity } from '../lib/domain.ts'
import { computeRisk } from '../lib/risk.ts'
import { computeAging } from '../lib/sla.ts'
import { todayIso } from '../rules/config.ts'
import { int, securityLog, str } from '../rules/glideSupport.ts'

const EXTERNAL_CYCLE_DAYS = 3 * 365

export interface NightlySummary {
    findingsTouched: number
    enforcementTouched: number
    installations: number
    high: number
}

function refreshFindingAging(today: string): number {
    let touched = 0
    const gr = new GlideRecord(TABLES.finding)
    gr.addQuery('state', 'NOT IN', 'closed,risk_accepted,cancelled')
    gr.query()
    while (gr.next()) {
        const aging = computeAging(str(gr, 'identified_on'), str(gr, 'closure_due') || null, today)
        if (int(gr, 'days_open') === aging.daysOpen && str(gr, 'aging_flag') === aging.flag) continue
        gr.setValue('days_open', String(aging.daysOpen))
        gr.setValue('aging_flag', aging.flag)
        gr.setWorkflow(false)
        gr.update()
        touched++
    }
    return touched
}

function refreshEnforcementCountdown(today: string): number {
    let touched = 0
    const gr = new GlideRecord(TABLES.enforcement_action)
    gr.addQuery('state', 'NOT IN', 'closed,withdrawn')
    gr.addQuery('response_submitted_on', '')
    gr.query()
    while (gr.next()) {
        const due = str(gr, 'response_due')
        if (!due) continue
        const days = Math.round((Date.parse(due) - Date.parse(today)) / 86_400_000)
        if (int(gr, 'days_to_respond') === days) continue
        gr.setValue('days_to_respond', String(days))
        gr.setWorkflow(false)
        gr.update()
        touched++
    }
    return touched
}

export function refreshInstallationRisk(installationSysId: string, today: string): { rating: string } {
    const open: { severity: Severity; overdue: boolean; repeat: boolean }[] = []
    const f = new GlideRecord(TABLES.finding)
    f.addQuery('installation', installationSysId)
    f.addQuery('state', 'NOT IN', 'closed,risk_accepted,cancelled')
    f.query()
    while (f.next()) {
        const due = str(f, 'closure_due')
        open.push({ severity: (str(f, 'severity') || 'minor') as Severity, overdue: due !== '' && due < today, repeat: str(f, 'repeat_finding') === 'true' })
    }
    let openEa = 0
    let exposure = 0
    const e = new GlideRecord(TABLES.enforcement_action)
    e.addQuery('installation', installationSysId)
    e.addQuery('state', 'NOT IN', 'closed,withdrawn')
    e.query()
    while (e.next()) {
        openEa++
        exposure += Number.parseFloat(str(e, 'penalty_final') || str(e, 'penalty_proposed') || '0') || 0
    }
    const risk = computeRisk({ openFindings: open, openEnforcementActions: openEa, penaltyExposure: exposure })

    let lastExternal = ''
    const a = new GlideRecord(TABLES.assessment)
    a.addQuery('installation', installationSysId)
    a.addQuery('assessment_type', 'external')
    a.addQuery('state', 'IN', 'finalized,closed')
    a.orderByDesc('end_date')
    a.setLimit(1)
    a.query()
    if (a.next()) lastExternal = str(a, 'end_date')

    const inst = new GlideRecord(TABLES.installation)
    if (!inst.get(installationSysId)) return { rating: 'low' }
    inst.setValue('risk_score', String(risk.score))
    inst.setValue('risk_rating', risk.rating)
    inst.setValue('risk_drivers', risk.drivers.join('; ').slice(0, 400))
    inst.setValue('open_findings', String(open.length))
    inst.setValue('overdue_findings', String(open.filter((o) => o.overdue).length))
    inst.setValue('repeat_findings', String(open.filter((o) => o.repeat).length))
    inst.setValue('open_enforcement_actions', String(openEa))
    inst.setValue('last_external_assessment', lastExternal)
    inst.setValue('next_external_due', lastExternal ? (addDays(lastExternal, EXTERNAL_CYCLE_DAYS) ?? '') : '')
    inst.setValue('risk_computed_at', new GlideDateTime().getValue())
    inst.setWorkflow(false)
    inst.update()
    return { rating: risk.rating }
}

export function nightlyJob(): NightlySummary {
    const today = todayIso()
    const summary: NightlySummary = { findingsTouched: 0, enforcementTouched: 0, installations: 0, high: 0 }
    summary.findingsTouched = refreshFindingAging(today)
    summary.enforcementTouched = refreshEnforcementCountdown(today)
    const inst = new GlideRecord(TABLES.installation)
    inst.addQuery('active', 'true')
    inst.query()
    while (inst.next()) {
        summary.installations++
        if (refreshInstallationRisk(inst.getUniqueValue(), today).rating === 'high') summary.high++
    }
    securityLog({ event: 'job_run', source: 'nightlyJob', outcome: 'success', details: { ...summary } })
    gs.info(`[x_cog_env] nightly: ${JSON.stringify(summary)}`)
    return summary
}
