# Army Environmental Compliance (x_cog_env)

ServiceNow scoped application prototype that rebuilds the EPAS assessment and Regulatory Enforcement Action modules of WEBCASS-E as source-controlled, low-code platform metadata, with a governed data product contract shaped for Army Vantage (PPM CIO-092).

Everything in this repository is synthetic. Installation names are public Army posts; every UIC, finding, date, penalty, decision and person is invented. The target instance is a ServiceNow Personal Developer Instance, which is not Army infrastructure and has no ATO, ICAM federation, AESMP tenancy or Vantage connectivity.

## What is in the box

| Area | Content |
|---|---|
| Tables | installation, program area, regulatory driver, EPAS assessment, finding, corrective action, regulatory enforcement action, EQCC meeting snapshot, Vantage export run (all audited) |
| Roles | `x_cog_env.compliance_officer`, `x_cog_env.assessor`, `x_cog_env.commander`, `x_cog_env.hqda_analyst`, `x_cog_env.admin` |
| Security | 102 generated ACLs from one matrix (`src/server/lib/security.ts`), privacy-safe security event log |
| Rules | severity-driven closure SLAs (90/180/365 days), 45-day report finalization, 3 fiscal year repeat-finding detection, evidence-gated corrective action verification with separation of duties, role-gated enforcement response workflow, nightly aging and installation risk scoring |
| UI | application menu, forms, lists, related lists, 14 UI actions, 13 HQDA and commander reports |
| Vantage | `env_compliance_findings`, `env_corrective_actions`, `env_enforcement_actions`, `env_installation_risk` data products with versioned schema, content hash and run log; scripted REST API `/api/x_cog_env/vantage/*`; mock ingest receiver |
| Data | deterministic generator (`sample-data/`) and Table API loader that lets the business rules run |
| Docs | demo talk track, CIO mandate crosswalk, production gap list, Data Catalog / APMS registration drafts |

## Commands

```bash
npm install
npm run lint && npm test && npx now-sdk build   # gate
npm run gen:sample-data                          # regenerate sample-data/*.json
npm run seed -- --reset                          # wipe and load the PDI (needs credentials)
npx now-sdk install --auth <alias>               # deploy (see docs/INSTALL.md)
```

Credentials come from `SERVICENOW_PDI_USERNAME`, `SERVICENOW_PDI_PASSWORD` and `SN_INSTANCE_URL` (see `.env.example`). Never commit them.

## Layout

```
src/fluent/     ServiceNow metadata as code (tables, roles, ACLs, rules, UI, reports, REST, jobs)
src/server/     TypeScript executed on the instance (lib = pure logic with tests, rules, services, jobs, rest, vantage)
tools/          generator, loader, ACL generator, instance client
tests/          Vitest unit tests for the pure logic and the ACL matrix
docs/           demo and governance collateral
sample-data/    generated synthetic dataset
```

See `AGENTS.md` for conventions.
