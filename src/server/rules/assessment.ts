/** Business rules for x_cog_env_assessment. */
import { GlideRecord } from '@servicenow/glide'
import { TABLES, type AssessmentState } from '../lib/domain.ts'
import { finalizationDueDate } from '../lib/sla.ts'
import { mergeResults, validateDateOrder, validateFiscalYear, validateMultiline } from '../lib/validators.ts'
import { slaConfig, todayIso } from './config.ts'
import { abortWithValidation, int, str, type AnyRecord } from './glideSupport.ts'

/** before insert/update */
export function assessmentBefore(current: AnyRecord): void {
    const validation = mergeResults([
        validateFiscalYear(str(current, 'fiscal_year')),
        validateMultiline('scope_notes', str(current, 'scope_notes'), 4000, false),
        validateDateOrder('start_date', str(current, 'start_date'), 'end_date', str(current, 'end_date')),
    ])
    if (!validation.valid) {
        abortWithValidation(current, validation, TABLES.assessment)
        return
    }
    const end = str(current, 'end_date')
    if (end) current.setValue('finalization_due', finalizationDueDate(end, slaConfig()) ?? '')
    const state = str(current, 'state') as AssessmentState
    if ((state === 'finalized' || state === 'closed') && !str(current, 'finalized_on')) current.setValue('finalized_on', todayIso())
}

/** Recount findings on the parent assessment (called from finding after-rules). */
export function recountAssessment(assessmentSysId: string): void {
    if (!assessmentSysId) return
    const counts = { total: 0, significant: 0, major: 0, minor: 0, repeat: 0 }
    const f = new GlideRecord(TABLES.finding)
    f.addQuery('assessment', assessmentSysId)
    f.addQuery('state', '!=', 'cancelled')
    f.query()
    while (f.next()) {
        counts.total++
        const sev = str(f, 'severity')
        if (sev === 'significant') counts.significant++
        else if (sev === 'major') counts.major++
        else if (sev === 'minor') counts.minor++
        if (str(f, 'repeat_finding') === 'true') counts.repeat++
    }
    const a = new GlideRecord(TABLES.assessment)
    if (!a.get(assessmentSysId)) return
    if (int(a, 'findings_total') === counts.total && int(a, 'findings_repeat') === counts.repeat && int(a, 'findings_significant') === counts.significant && int(a, 'findings_major') === counts.major && int(a, 'findings_minor') === counts.minor) return
    a.setValue('findings_total', String(counts.total))
    a.setValue('findings_significant', String(counts.significant))
    a.setValue('findings_major', String(counts.major))
    a.setValue('findings_minor', String(counts.minor))
    a.setValue('findings_repeat', String(counts.repeat))
    a.setWorkflow(false)
    a.update()
}
