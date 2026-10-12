import { BusinessRule } from '@servicenow/sdk/core'
import { assessmentBefore } from '../../server/rules/assessment'
import { correctiveActionAfter, correctiveActionBefore } from '../../server/rules/correctiveAction'
import { enforcementBefore } from '../../server/rules/enforcement'
import { findingAfter, findingBefore } from '../../server/rules/finding'

BusinessRule({
    $id: Now.ID['br_assessment_before'],
    name: 'ENV Assessment - validate, state guard, finalization due',
    table: 'x_cog_env_assessment',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    description: 'Validates fiscal year and fieldwork dates, derives report finalization due (fieldwork end + property days), enforces the planned > in progress > draft report > finalized > closed state machine and stamps finalized_on.',
    script: assessmentBefore,
})

BusinessRule({
    $id: Now.ID['br_finding_before'],
    name: 'ENV Finding - validate, SLA, repeat detection, state guard',
    table: 'x_cog_env_finding',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    description: 'Whitelist validation, installation stamping from the assessment, severity-driven closure due date, 3-FY repeat-finding detection, role-gated state transitions, aging flag.',
    script: findingBefore,
})

BusinessRule({
    $id: Now.ID['br_finding_after'],
    name: 'ENV Finding - recount assessment and enforcement links',
    table: 'x_cog_env_finding',
    when: 'after',
    action: ['insert', 'update', 'delete'],
    order: 100,
    description: 'Recomputes finding counts on the parent assessment and linked-finding counts on the enforcement action; logs state changes.',
    script: findingAfter,
})

BusinessRule({
    $id: Now.ID['br_ca_before'],
    name: 'ENV Corrective action - evidence-gated verification',
    table: 'x_cog_env_corrective_action',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    description: 'Validation, installation stamping, evidence check (sys_attachment), role-gated transitions (owner cannot self-verify; significant findings need commander/assessor), verification stamps.',
    script: correctiveActionBefore,
})

BusinessRule({
    $id: Now.ID['br_ca_after'],
    name: 'ENV Corrective action - derive finding state',
    table: 'x_cog_env_corrective_action',
    when: 'after',
    action: ['insert', 'update', 'delete'],
    order: 100,
    description: 'Moves the parent finding between open / ca_assigned / pending_verification based on its corrective actions.',
    script: correctiveActionAfter,
})

BusinessRule({
    $id: Now.ID['br_enforcement_before'],
    name: 'ENV Enforcement action - response countdown and state guard',
    table: 'x_cog_env_enforcement_action',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    description: 'Validation, default response due (received + property days), days-to-respond countdown, role-gated transitions, closed_on stamp.',
    script: enforcementBefore,
})
