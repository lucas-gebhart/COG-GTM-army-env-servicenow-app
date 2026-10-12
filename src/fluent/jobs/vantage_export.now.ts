import '@servicenow/sdk/global'
import { ScheduledScript } from '@servicenow/sdk/core'
import { scheduledVantageExport } from '../../server/vantage/exporter'

export const vantageExport = ScheduledScript({
    $id: Now.ID['job_vantage_export'],
    name: 'ENV Vantage data product export',
    active: true,
    frequency: 'daily',
    executionTime: { hours: 3, minutes: 0, seconds: 0 },
    timeZone: 'America/New_York',
    conditional: false,
    upgradeSafe: true,
    script: scheduledVantageExport,
})
