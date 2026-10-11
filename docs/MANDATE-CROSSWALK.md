# CIO mandate crosswalk

| Requirement | Source | How the prototype addresses it | What remains for production |
|---|---|---|---|
| Business data assets transition to Army Vantage; register in Army Data Catalog and Data Marketplace; named data steward; efficient ETL | PPM CIO-092 (26 Sep 2025) | Four versioned data products with schema, steward field, content hash and run log; scheduled and manual export; REST catalog endpoint; `docs/DATA-CATALOG-REGISTRATION.md` draft entries | Vantage landing zone endpoint and credentials; steward appointment by DCS G-9 / ODASA ESOH; Data Catalog submission |
| LC/NC applications use enterprise services (ICAM, cArmy, Army Data Platforms) and ride the hosting platform's ATO | PPM CIO-076 (31 Jul 2025) | Roles are the only authorization construct, ready to map to ICAM groups; no local user store; app is scoped metadata that inherits the instance boundary | Instance selection (AESMP, command-level instance, or ServiceNow National Security Cloud IL5); SSO configuration; ATO inheritance letter |
| Portability, open APIs, interoperability standards | PPM CIO-076 | All tables web-service enabled; scripted REST with JSON contract; metadata and logic in Git, buildable and installable by CLI; no proprietary binary | API management registration; data dictionary publication |
| Approved LC/NC platform list, nomination path via ECMA Cloud Governance Council | PPM CIO-076 | Not satisfied by a PDI. ServiceNow is in use by the Army (AESMP, Army ServiceNow EA W519TC-23-D-0005) and appears on the PM LOG-FIN approved development platform list | Confirm platform approval route for this application with Army CIO; document in APMS |
| Application registration in APMS; Data Catalog registration even for non-DBS LC/NC apps | Army business system guidance | `docs/APMS-REGISTRATION.md` draft | Submission by the system owner |
| Software delivery with DevSecOps, continuous ATO practices | Army Directive 2024-02 and related memoranda | Source control, unit tests, lint, deterministic build, generated ACLs with drift test | Pipeline on an Army-approved CI service; SAST/SCA gates; change management on the target instance |
| Low cost or no cost COTS | Harrover requirement | No custom hosting; standard platform tables and reports; no additional ServiceNow products beyond platform runtime | Confirm license entitlement (fulfiller count) under the enterprise agreement |
| 1 Oct 2027 completion | Harrover requirement | Slice built in about two weeks of agent-driven engineering; repeatable pattern for remaining modules | Module-by-module plan; WEBCASS-E data extraction agreement with Plateau Group before Aug 2027 |

## WEBCASS-E module coverage

| WEBCASS-E module | Status in this prototype |
|---|---|
| EPAS (assessments, findings, corrective actions) | Built |
| Regulatory Enforcement Action Compliance Tracking | Built |
| Analytics and self-service BI | Partially (13 reports; dashboards and Vantage products) |
| Environmental Document Repository | Attachments on records only |
| Hazardous Material Inventory and Disposal | Recommended second slice |
| Cleanup, Restoration and Liabilities | Deferred (financial validation and audit rules) |
| Integrated Pesticide Management | Not built |
| Natural Resources Revenue Tracking | Not built |
| ESTARR, legislative impact evaluation, EQ universal portal | Not built |
