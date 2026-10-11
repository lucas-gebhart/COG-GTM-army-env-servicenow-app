# Conventions for agents working in this repo

- Gate before every commit: `npm run lint && npm test && npx now-sdk build`. `tsc --noEmit` alone is not enough; the SDK build type-checks `src/server` with stricter settings.
- Pure logic lives in `src/server/lib` and must stay free of Glide imports so it is unit-testable. Glide access goes through `src/server/rules/glideSupport.ts`.
- ACLs are generated: edit `src/server/lib/security.ts`, run `npm run gen:security`, never hand-edit `src/fluent/security/acls.now.ts`. `tests/security-sync.test.ts` fails if they drift.
- State changes are enforced in business rules, not in UI actions. UI actions only set the target state; the rule applies role, evidence and justification gates so REST and list edits are covered too.
- Fluent gotchas: no `CurrencyColumn` or `JournalInputColumn` (use `DecimalColumn`, `GenericColumn({ columnType: 'journal_input' })`); outbound REST is `import { RESTMessageV2 } from '@servicenow/glide/sn_ws'`.
- Data is synthetic only. Do not add real Army installations' UICs, personnel or findings.
- Credentials are environment variables. Do not print them, write them to files, or commit `.env`.
- Deploying to the PDI needs the vendor key workaround in `docs/INSTALL.md`.
