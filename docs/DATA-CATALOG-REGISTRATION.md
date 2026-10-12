# Army Data Catalog registration (draft entries)

Source system: Army Environmental Compliance (ServiceNow scoped app x_cog_env). Classification: CUI when populated with real data; synthetic in this prototype. Steward: ODASA ESOH / DCS G-9 (to be appointed). Refresh: nightly 0300 ET, plus on demand. Access: HQDA analyst role via REST; Vantage consumers via the data product landing zone.

| Data product | Grain | Primary key | Row count (synthetic) | Schema |
|---|---|---|---|---|
| env_compliance_findings | one row per EPAS finding | finding_id | about 360 | 1.0.0 |
| env_corrective_actions | one row per corrective action | corrective_action_id | about 260 | 1.0.0 |
| env_enforcement_actions | one row per regulatory enforcement action | enforcement_action_id | 9 | 1.0.0 |
| env_installation_risk | one row per installation per export | installation | 10 | 1.0.0 |

Column dictionaries are served live at `GET /api/x_cog_env/vantage/catalog`. Every export carries `schema_version`, `generated_at`, `row_count` and `content_hash` so Vantage can validate parity. Schema changes bump the version and keep the prior version available for one quarter.
