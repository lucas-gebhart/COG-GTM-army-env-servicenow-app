# What the PDI does not prove

- Hosting and ATO. A Personal Developer Instance has no authorization. Production options: AESMP (NETCOM), a command-level instance under the Army ServiceNow EA, or ServiceNow National Security Cloud (IL5). Decision owner: Army CIO with ASA(IE&E).
- Identity. Users here log in with local accounts. Production requires ICAM/CAC SSO and group-to-role mapping for the five application roles.
- Vantage. Exports go to a mock receiver on the same instance. Production needs the Vantage ingestion endpoint or pull pattern, credentials, and steward sign-off on the four schemas.
- Data migration. No WEBCASS-E data has been touched. A migration needs an export agreement with Plateau Group, a field-level mapping for EPAS and enforcement tables, and a reconciliation report.
- Registration. APMS and Army Data Catalog entries are drafts in this repository.
- Notifications. PDI SMTP is disabled; notification design (suspense reminders, EQCC packets) is not in this slice.
- Scale. 10 installations and about 360 findings. WEBCASS-E spans the Army; indexes exist but no load test has been run.
- Other modules. See the coverage table in `MANDATE-CROSSWALK.md`.
