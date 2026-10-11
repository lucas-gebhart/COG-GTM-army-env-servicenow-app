import '@servicenow/sdk/global'
import { ScheduledScript } from '@servicenow/sdk/core'
import { nightlyJob } from '../../server/jobs/nightly'

export const nightly = ScheduledScript({
    $id: Now.ID['job_nightly'],
    name: 'ENV Nightly aging and installation risk',
    active: true,
    frequency: 'daily',
    executionTime: { hours: 2, minutes: 30, seconds: 0 },
    timeZone: 'America/New_York',
    conditional: false,
    upgradeSafe: true,
    script: nightlyJob,
})
