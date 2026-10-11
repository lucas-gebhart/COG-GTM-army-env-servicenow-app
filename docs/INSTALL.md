# Installing on the PDI (dev399979)

1. `npm install && npx now-sdk build`
2. Register credentials once: `npx now-sdk auth --add https://dev399979.service-now.com --type basic --alias pdi` (interactive; use `expect` with the env vars if automating).
3. Vendor key. A PDI only allows apps whose scope prefix matches `glide.appcreator.company.code` / `sn_appauthor.all_company_keys` (`2226893` on this instance). The Table API refuses to change those two private properties, so: elevate to `security_admin` in the browser, open `/sys.scripts.do`, and run

   ```js
   ['glide.appcreator.company.code', 'sn_appauthor.all_company_keys'].forEach(function (n) {
     var gr = new GlideRecord('sys_properties'); gr.addQuery('name', n); gr.query();
     if (gr.next() && String(gr.value).indexOf('cog') < 0) { gr.value = gr.value + ',cog'; gr.setWorkflow(false); gr.update(); }
   });
   ```

   then open `/cache.do`. Without this the install log says "Not allowing install of third party application" and the SDK reports "application was null".
4. `npx now-sdk install --auth pdi`
5. `SN_INSTANCE_URL=https://dev399979.service-now.com npm run seed -- --reset`
6. Run the scheduled job "ENV Nightly aging and installation risk" once (System Definition > Scheduled Jobs > Execute Now) or press "Recompute risk posture" on each installation.
7. Optionally restore the two properties to `2226893`; a platform sync resets them anyway.

Reset for a new demo: step 5 again.
