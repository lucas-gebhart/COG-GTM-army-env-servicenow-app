# Demo talk track: WEBCASS-E EPAS and enforcement slice on ServiceNow

Audience: Ms. Poppy Harrover (Director, WarFighter Environmental Protection, SAIE-ESOE) and staff. Length: 25 minutes plus questions. Instance: ServiceNow PDI dev399979, synthetic data.

Opening frame (2 min). WEBCASS-E is sustained as-is through 20 Aug 2027 under a limited-source award (option to Feb 2028). The 1 Oct 2027 target means the replacement has to be on an approved platform, source-controlled, tied to Vantage, and cheap to sustain. This prototype shows one WEBCASS-E slice (EPAS plus Regulatory Enforcement Action Compliance Tracking) rebuilt as platform metadata in about two weeks of agent-driven engineering, with the CIO mandates designed in rather than retrofitted.

1. Module map (2 min). Show `docs/MANDATE-CROSSWALK.md` table of WEBCASS-E modules and which one this slice covers. Say plainly what is not rebuilt (CRL liabilities, HMID, pesticides, document repository, ESTARR).

2. Installation risk posture (3 min). Application menu > Command and HQDA view > Installation risk posture. Ten installations ranked by a computed risk score (open, overdue and repeat findings, open enforcement actions, penalty exposure). Open Fort Liberty or another high-risk post; walk the related lists: assessments, findings, enforcement actions, EQCC meetings.

3. EPAS assessment (3 min). Open a FY26 external (USAEC) assessment in draft report state. Point at finalization due (45 days from end of fieldwork), findings counts by severity, repeat count. Click Finalize report; the rule stamps finalized_on and the findings are now official.

4. Finding lifecycle (4 min). Open a significant finding. Severity set the closure due date (90 days); the repeat flag came from a prior finding on the same installation, program area and citation within three fiscal years, with the link to the previous finding. Open its corrective action. Try Request closure without evidence: blocked. Attach a file, request closure, then Verify as the same user: blocked by separation of duties. Run this step impersonating `env.demo.compliance` (User menu > Impersonate user); the platform admin role bypasses every role gate, so as admin the self-verification goes through. Switch impersonation to `env.demo.assessor` (or `env.demo.commander` for a significant finding) and Verify: finding moves to pending verification, then Close finding with a justification; that second signature is deliberate. Everything is in the audit history.

5. Regulatory enforcement action (3 min). Open an NOV in received state. Response due is received plus 30 days; days to respond counts down nightly. Linked findings related list shows the EPAS findings that underlie the allegations. Walk Draft response, Response submitted, Close; show that Contest is restricted to the commander or HQDA.

6. Commander and HQDA reports (3 min). Reports module: Commander aging donut, overdue list, repeat findings by program area, unfunded corrective action cost; HQDA open findings by installation and severity, installations by risk rating, penalty exposure. These are the views EQCC and ODASA ESOH ask WEBCASS-E for today.

7. Vantage data product (3 min). Vantage data products > Data product catalog (API) shows four products with schema version, steward and columns. Export runs list shows nightly runs with row count, content hash and HTTP status against the mock receiver. Run one manually: `POST /api/x_cog_env/vantage/runs/findings`. Explain that in production the endpoint property points at the Vantage landing zone (or an ADVANA/Vantage pull via the same REST contract) and that the content hash lets both sides prove parity.

8. Governance and platform story (2 min). Show the repository: tables, ACLs and rules are TypeScript metadata reviewed in pull requests, built and installed by CLI, with unit tests for the business logic. Roles map to ICAM groups in production. The security event log shows what an auditor would see. Then the honest list in `docs/PRODUCTION-GAPS.md`: hosting instance and ATO, ICAM and CAC, Vantage pipeline, data migration from WEBCASS-E, APMS and Data Catalog registration, licensing.

Close. Ask for the three decisions: which instance (AESMP, a command-level instance under the Army ServiceNow EA, or National Security Cloud), which WEBCASS-E modules go second (HMID is the recommendation), and who the data steward of record is for the Vantage products.

Reset between demos: `npm run seed -- --reset`, then execute the nightly job once.
