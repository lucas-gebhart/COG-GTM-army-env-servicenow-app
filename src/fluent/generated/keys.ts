import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    acl_assessment_all_fields_create: {
                        table: 'sys_security_acl'
                        id: '03966efeb4be48a4b6859166fe554324'
                    }
                    acl_assessment_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: '9c8664bbdfaa44de888f1014e4c8a648'
                    }
                    acl_assessment_all_fields_read: {
                        table: 'sys_security_acl'
                        id: 'c3fd73ab77944c9185787361ff5781b6'
                    }
                    acl_assessment_all_fields_write: {
                        table: 'sys_security_acl'
                        id: 'eb53cfd80f8840e2ad913d8e1ce3dc5a'
                    }
                    acl_assessment_create: {
                        table: 'sys_security_acl'
                        id: '8dfffebc641d486da86bf5160eb05135'
                    }
                    acl_assessment_delete: {
                        table: 'sys_security_acl'
                        id: '156ec1d7aff94b1aada27cb76e0877b6'
                    }
                    acl_assessment_finalization_due_write: {
                        table: 'sys_security_acl'
                        id: '12bdf74b22d94045ba4b61f916ff50df'
                    }
                    acl_assessment_finalized_on_write: {
                        table: 'sys_security_acl'
                        id: '5e1758be72f2438b8a58de3737f49ba7'
                    }
                    acl_assessment_findings_major_write: {
                        table: 'sys_security_acl'
                        id: '0a1276ceecfe48d8932a13dec660f420'
                    }
                    acl_assessment_findings_minor_write: {
                        table: 'sys_security_acl'
                        id: '021a3359ded74952a5c6d52cba1011ce'
                    }
                    acl_assessment_findings_repeat_write: {
                        table: 'sys_security_acl'
                        id: '1b5616d9be6d4e20b0b3b16eb330f265'
                    }
                    acl_assessment_findings_significant_write: {
                        table: 'sys_security_acl'
                        id: 'e950691408794701985c798db544e3b5'
                    }
                    acl_assessment_findings_total_write: {
                        table: 'sys_security_acl'
                        id: '32f07d21c33d45ca8b9ad19d5ab59727'
                    }
                    acl_assessment_read: {
                        table: 'sys_security_acl'
                        id: 'e6c0816906ed43d1be25d92413a3b8cb'
                    }
                    acl_assessment_write: {
                        table: 'sys_security_acl'
                        id: '74f20e857c65468cb47851d6785a7f53'
                    }
                    acl_corrective_action_all_fields_create: {
                        table: 'sys_security_acl'
                        id: '46032701e5304ec2934af1b6ff480b06'
                    }
                    acl_corrective_action_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: '65ee6e905a374b66ab63ab43c33130ab'
                    }
                    acl_corrective_action_all_fields_read: {
                        table: 'sys_security_acl'
                        id: '3340ea4636d84a5d8a23a8cd5d83a367'
                    }
                    acl_corrective_action_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '80db1b81bd3d42e4ad6b9c507c5c1a71'
                    }
                    acl_corrective_action_create: {
                        table: 'sys_security_acl'
                        id: 'c3d8d644b90d42f1a12087f895e09744'
                    }
                    acl_corrective_action_delete: {
                        table: 'sys_security_acl'
                        id: 'b28e560bd0594a408e8ca86056df089a'
                    }
                    acl_corrective_action_installation_write: {
                        table: 'sys_security_acl'
                        id: 'c47bf4a082a94156b980dec9d76bc8ca'
                    }
                    acl_corrective_action_read: {
                        table: 'sys_security_acl'
                        id: '8ab3589e31154cd0b9c4517aef01185f'
                    }
                    acl_corrective_action_requested_closure_on_write: {
                        table: 'sys_security_acl'
                        id: 'a56e8f9f055f43eea1da4f8f0956f533'
                    }
                    acl_corrective_action_verified_by_write: {
                        table: 'sys_security_acl'
                        id: '6b9587ca787747688e11e3fa0f1f13d9'
                    }
                    acl_corrective_action_verified_on_write: {
                        table: 'sys_security_acl'
                        id: '9cd5e03089f142b1b50a08c1c030804a'
                    }
                    acl_corrective_action_write: {
                        table: 'sys_security_acl'
                        id: '8c8f1e4b77d546c29db7fdfed4904c6c'
                    }
                    acl_enforcement_action_all_fields_create: {
                        table: 'sys_security_acl'
                        id: 'cdf1d99b4c044d7c8465786c1facf004'
                    }
                    acl_enforcement_action_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: 'a96bb10f5c0949058686564fbef08612'
                    }
                    acl_enforcement_action_all_fields_read: {
                        table: 'sys_security_acl'
                        id: '8523bd7118d04620b3e827631fe2363b'
                    }
                    acl_enforcement_action_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '9944b6c082fe43288117ae0d52d4ff31'
                    }
                    acl_enforcement_action_closed_on_write: {
                        table: 'sys_security_acl'
                        id: '7280ee8b7cbf4471ae5918c984a19283'
                    }
                    acl_enforcement_action_create: {
                        table: 'sys_security_acl'
                        id: 'e60fe7b45e3645baa712df1327f9fabc'
                    }
                    acl_enforcement_action_days_to_respond_write: {
                        table: 'sys_security_acl'
                        id: 'fdb0b75e73374c0cbc2aab5b2a21ece8'
                    }
                    acl_enforcement_action_delete: {
                        table: 'sys_security_acl'
                        id: '4b1c7f137cee4991b188ca0e600d144a'
                    }
                    acl_enforcement_action_linked_findings_write: {
                        table: 'sys_security_acl'
                        id: '3713ffecd50b441fa6cbc6bf039de322'
                    }
                    acl_enforcement_action_read: {
                        table: 'sys_security_acl'
                        id: '7a32a7ee3a31488286ec225de65825e2'
                    }
                    acl_enforcement_action_write: {
                        table: 'sys_security_acl'
                        id: '6db6d357033c4cd489745cd8e0bc9357'
                    }
                    acl_eqcc_meeting_all_fields_create: {
                        table: 'sys_security_acl'
                        id: 'd0d3b4bfd69b432c8df246304fbc3444'
                    }
                    acl_eqcc_meeting_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: 'ea21cf7b63b941c6a4bdcd755b0a4cee'
                    }
                    acl_eqcc_meeting_all_fields_read: {
                        table: 'sys_security_acl'
                        id: '00486f0a67d049c5800a49397c9d5a92'
                    }
                    acl_eqcc_meeting_all_fields_write: {
                        table: 'sys_security_acl'
                        id: 'dfcb0212040f4d93a2764c68ab40a1c1'
                    }
                    acl_eqcc_meeting_create: {
                        table: 'sys_security_acl'
                        id: '2a92aadeabc645f8a10be32f8f81b820'
                    }
                    acl_eqcc_meeting_delete: {
                        table: 'sys_security_acl'
                        id: 'f3bdfb50cd414528887e2a5173a82351'
                    }
                    acl_eqcc_meeting_read: {
                        table: 'sys_security_acl'
                        id: '4de363356f3b462f9ee15deb37c8b059'
                    }
                    acl_eqcc_meeting_write: {
                        table: 'sys_security_acl'
                        id: '3a77ddb8ddc74cd1857fdc2c1f7e5364'
                    }
                    acl_finding_aging_flag_write: {
                        table: 'sys_security_acl'
                        id: '57225586f2ed49d797630594c7c6c2ca'
                    }
                    acl_finding_all_fields_create: {
                        table: 'sys_security_acl'
                        id: '5d8b32bb446948998a4df9cbc5e2fe2e'
                    }
                    acl_finding_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: 'c798767d59974c6aabc05449e2990042'
                    }
                    acl_finding_all_fields_read: {
                        table: 'sys_security_acl'
                        id: 'fd490c20e3e541d79f9b589af23a01dc'
                    }
                    acl_finding_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '14a0a1666c954ec480bdc5d35c45fcd6'
                    }
                    acl_finding_closed_by_write: {
                        table: 'sys_security_acl'
                        id: 'ad67c41a88bc4eee9766b663877c1a4a'
                    }
                    acl_finding_closed_on_write: {
                        table: 'sys_security_acl'
                        id: '1d7ee989f5de44899c2c5d1c4320612c'
                    }
                    acl_finding_closure_due_write: {
                        table: 'sys_security_acl'
                        id: 'd0b9c41af2bd4b61a2bd380974f2776d'
                    }
                    acl_finding_create: {
                        table: 'sys_security_acl'
                        id: '829c0c5ee7fb4d6ea64028187ddf4f31'
                    }
                    acl_finding_days_open_write: {
                        table: 'sys_security_acl'
                        id: 'abed186de7b941b788f56f50d400911d'
                    }
                    acl_finding_delete: {
                        table: 'sys_security_acl'
                        id: 'baac8dc8468d485cb984de8fd223ddf5'
                    }
                    acl_finding_installation_write: {
                        table: 'sys_security_acl'
                        id: '94bf62b155c141bc88a05b55b39db449'
                    }
                    acl_finding_previous_finding_write: {
                        table: 'sys_security_acl'
                        id: 'dd222a01910d44eb878cf0d631d1aa72'
                    }
                    acl_finding_read: {
                        table: 'sys_security_acl'
                        id: '7043c615807d48a6938f9f4f7e42c0e5'
                    }
                    acl_finding_repeat_finding_write: {
                        table: 'sys_security_acl'
                        id: 'fbe3ab055bf747d88630087d39a3a2b3'
                    }
                    acl_finding_write: {
                        table: 'sys_security_acl'
                        id: '8e266fd5bf9e409e8754a9464c225e56'
                    }
                    acl_installation_all_fields_create: {
                        table: 'sys_security_acl'
                        id: '5693e713512d4841a9a1500b28547192'
                    }
                    acl_installation_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: '6a06b3743ce244529105323ac423a662'
                    }
                    acl_installation_all_fields_read: {
                        table: 'sys_security_acl'
                        id: 'f106d18131ca473593919f34abfe43b2'
                    }
                    acl_installation_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '39b7cb549ec54ead841793825e9d8d62'
                    }
                    acl_installation_create: {
                        table: 'sys_security_acl'
                        id: '6404f17c7b8a4305b40a42e17ea49d9c'
                    }
                    acl_installation_delete: {
                        table: 'sys_security_acl'
                        id: '62a0ef48071b424bbb39f55d1f2616dc'
                    }
                    acl_installation_open_enforcement_actions_write: {
                        table: 'sys_security_acl'
                        id: 'f08b09c645de4e1aac56593a81aab602'
                    }
                    acl_installation_open_findings_write: {
                        table: 'sys_security_acl'
                        id: '22ea7a7dae1d43f987fbbe9dec82563f'
                    }
                    acl_installation_overdue_findings_write: {
                        table: 'sys_security_acl'
                        id: '90dd50c62daf4917bcd22d82fa80b204'
                    }
                    acl_installation_read: {
                        table: 'sys_security_acl'
                        id: 'a6194c5ad3d94930be9488fb4d7e97af'
                    }
                    acl_installation_repeat_findings_write: {
                        table: 'sys_security_acl'
                        id: '516e67d7910f421b8a8174e979eb14db'
                    }
                    acl_installation_risk_computed_at_write: {
                        table: 'sys_security_acl'
                        id: 'f138facdd2a94dd284b84562e79854af'
                    }
                    acl_installation_risk_drivers_write: {
                        table: 'sys_security_acl'
                        id: '15e973ba47b24242853b58badeba3057'
                    }
                    acl_installation_risk_rating_write: {
                        table: 'sys_security_acl'
                        id: '1a0a24a3778f491bad065de20b5b6c2c'
                    }
                    acl_installation_risk_score_write: {
                        table: 'sys_security_acl'
                        id: '364d88c56dae49e7aeaaa47d2f6ba7d0'
                    }
                    acl_installation_write: {
                        table: 'sys_security_acl'
                        id: 'f1177aa915bf43a09b170067fcc252a2'
                    }
                    acl_program_area_all_fields_create: {
                        table: 'sys_security_acl'
                        id: '46a9013ab4bc4d99bee6a6d4d7f6aebf'
                    }
                    acl_program_area_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: '01c5a7ccacd14711903c8944160226a3'
                    }
                    acl_program_area_all_fields_read: {
                        table: 'sys_security_acl'
                        id: '2169bbfdc3cb40efa63088c5177e74dd'
                    }
                    acl_program_area_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '2de9382d99d24b5098ef8bdc3f729940'
                    }
                    acl_program_area_create: {
                        table: 'sys_security_acl'
                        id: 'b3aeed52add143b1ba8e48fc4e613932'
                    }
                    acl_program_area_delete: {
                        table: 'sys_security_acl'
                        id: '6410c2773a5e46659326cd379d1ebf17'
                    }
                    acl_program_area_read: {
                        table: 'sys_security_acl'
                        id: '888e06b370254825bb5496c88c4143e1'
                    }
                    acl_program_area_write: {
                        table: 'sys_security_acl'
                        id: '2135c4eb7649490da3029b8d5a125019'
                    }
                    acl_regulatory_driver_all_fields_create: {
                        table: 'sys_security_acl'
                        id: '320b71c9039d44feb2156b2d84500614'
                    }
                    acl_regulatory_driver_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: 'c5cc2a36f502411298b48cdb1198b9f4'
                    }
                    acl_regulatory_driver_all_fields_read: {
                        table: 'sys_security_acl'
                        id: 'f009a2f05b7240bda2e0bbbe74871c3f'
                    }
                    acl_regulatory_driver_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '908ca8eb2e4740cbb124081993132d3e'
                    }
                    acl_regulatory_driver_create: {
                        table: 'sys_security_acl'
                        id: 'fc6ab46b870f475a997af38cb287415d'
                    }
                    acl_regulatory_driver_delete: {
                        table: 'sys_security_acl'
                        id: 'a1cb0f325db54f7e97d82954e0c7d1c1'
                    }
                    acl_regulatory_driver_read: {
                        table: 'sys_security_acl'
                        id: '467f66d85e134a7ab9bb6ad4b8216991'
                    }
                    acl_regulatory_driver_write: {
                        table: 'sys_security_acl'
                        id: 'c017d6d101b347948d2692ef2ac74ba2'
                    }
                    acl_rest_vantage: {
                        table: 'sys_security_acl'
                        id: '5768d6f169fc4353a11cef2a36baa440'
                    }
                    acl_vantage_export_run_all_fields_create: {
                        table: 'sys_security_acl'
                        id: 'f9c941265dc847329f0d4f8afb946669'
                    }
                    acl_vantage_export_run_all_fields_delete: {
                        table: 'sys_security_acl'
                        id: '7e39314fc89442d884c04ed729fa2662'
                    }
                    acl_vantage_export_run_all_fields_read: {
                        table: 'sys_security_acl'
                        id: '3a6f9886af2f41838fddb93d65c86782'
                    }
                    acl_vantage_export_run_all_fields_write: {
                        table: 'sys_security_acl'
                        id: '2c7e09f3676f48afb5784d8672031374'
                    }
                    acl_vantage_export_run_create: {
                        table: 'sys_security_acl'
                        id: '290606585bdb4105b6b462859f76c560'
                    }
                    acl_vantage_export_run_delete: {
                        table: 'sys_security_acl'
                        id: 'ab9de078225a4f53b7dd4c4569339888'
                    }
                    acl_vantage_export_run_read: {
                        table: 'sys_security_acl'
                        id: '90c85a0a0ffe46718f6531b6a7965afb'
                    }
                    acl_vantage_export_run_write: {
                        table: 'sys_security_acl'
                        id: '88f9ae8366a44c1faf74b67402996fe8'
                    }
                    app_category: {
                        table: 'sys_app_category'
                        id: '3274b757056f4c64af3840256398d161'
                    }
                    app_menu: {
                        table: 'sys_app_application'
                        id: 'af08da79c0274757af06a1abae037369'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'caeabe36f9564a12a9fff38faca8bd62'
                    }
                    br_assessment_before: {
                        table: 'sys_script'
                        id: '4062a8e2beae40d489c0bf823968aba1'
                    }
                    br_ca_after: {
                        table: 'sys_script'
                        id: '8b2f53768e4b4774984b913b48137331'
                    }
                    br_ca_before: {
                        table: 'sys_script'
                        id: '0f639c4e247d4af7a2c82ef672ba54da'
                    }
                    br_enforcement_before: {
                        table: 'sys_script'
                        id: '4e0788af68174bd39ba6a22da06d0dc8'
                    }
                    br_finding_after: {
                        table: 'sys_script'
                        id: '0e27370e0f574d20bac50fef1c63d78e'
                    }
                    br_finding_before: {
                        table: 'sys_script'
                        id: '2c81b17d17b34ec386360669e7b6cba3'
                    }
                    job_nightly: {
                        table: 'sysauto_script'
                        id: '59ef8e81f8f94ebc8dd6b8e3da95033e'
                    }
                    job_vantage_export: {
                        table: 'sysauto_script'
                        id: '9d1803de39f1488b960ba5fb7e147a09'
                    }
                    mod_assessments: {
                        table: 'sys_app_module'
                        id: 'b10de7e54d8843e78cbac731ef7d08c8'
                    }
                    mod_cas: {
                        table: 'sys_app_module'
                        id: '1152312af8fb443f9ba2d637e3a988fc'
                    }
                    mod_cas_pending: {
                        table: 'sys_app_module'
                        id: '19dc035670b4428ba8580068a8150292'
                    }
                    mod_catalog: {
                        table: 'sys_app_module'
                        id: 'a49d1131e1e947dcb8c7913b6b1ce597'
                    }
                    mod_drivers: {
                        table: 'sys_app_module'
                        id: '10e80454acfa4bd3860d29d05ce28fd9'
                    }
                    mod_enforcement: {
                        table: 'sys_app_module'
                        id: 'fdc109f0799a4d4db266a52ed12ef74c'
                    }
                    mod_enforcement_open: {
                        table: 'sys_app_module'
                        id: '3c5308e501e14321a6e1105bc1dcb02c'
                    }
                    mod_eqcc: {
                        table: 'sys_app_module'
                        id: '25908b5102464421a6f356c2eeaca5f4'
                    }
                    mod_export_runs: {
                        table: 'sys_app_module'
                        id: 'c566e9f2068647dfb80212d9fc868082'
                    }
                    mod_findings: {
                        table: 'sys_app_module'
                        id: '2e40b803148b40fbb5c0c315ed5d394a'
                    }
                    mod_findings_open: {
                        table: 'sys_app_module'
                        id: 'ba3cd8b951be471392a55dcb83d742bc'
                    }
                    mod_findings_overdue: {
                        table: 'sys_app_module'
                        id: '55e93a32763b4c18be12f48a3adea1b8'
                    }
                    mod_findings_repeat: {
                        table: 'sys_app_module'
                        id: 'c5cdab7a71214673b80dc89cfebc935d'
                    }
                    mod_installations: {
                        table: 'sys_app_module'
                        id: '411e6923908d4e34aea4e69bab95bb81'
                    }
                    mod_new_assessment: {
                        table: 'sys_app_module'
                        id: 'ca3f304dd21d4f91a4ecbbd19c27ccd9'
                    }
                    mod_new_enforcement: {
                        table: 'sys_app_module'
                        id: '3a7f8d0bcdcb41a5a7c9aa714c9bad24'
                    }
                    mod_program_areas: {
                        table: 'sys_app_module'
                        id: 'ed74b8880abb48678401858bea239ed6'
                    }
                    mod_props: {
                        table: 'sys_app_module'
                        id: '6846b9538958470a99557d7dff3925ef'
                    }
                    mod_reports: {
                        table: 'sys_app_module'
                        id: '64cfbac4553440e6a58f9822058678d7'
                    }
                    mod_sep_admin: {
                        table: 'sys_app_module'
                        id: '8af37d00086e4bfca7b0c5327e0937d8'
                    }
                    mod_sep_assess: {
                        table: 'sys_app_module'
                        id: 'e35b30ef4ec3492986089c2fef290d35'
                    }
                    mod_sep_cmd: {
                        table: 'sys_app_module'
                        id: 'eaad5422f89e4d4bbe1e90eeaffecf46'
                    }
                    mod_sep_enf: {
                        table: 'sys_app_module'
                        id: '823fce375d134ba9b6449a9833c5a05b'
                    }
                    mod_sep_vantage: {
                        table: 'sys_app_module'
                        id: '472f30ba56694fb899771ce27316e65f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0d8fde2e4db548f7862e16650abaf3bc'
                    }
                    prop_enforcement_days: {
                        table: 'sys_properties'
                        id: '7d8d12821dc045cdb547335ccf1e9f70'
                    }
                    prop_finalization_days: {
                        table: 'sys_properties'
                        id: '251d6ec6dbc64452894fca582e3bf51f'
                    }
                    prop_sla_major: {
                        table: 'sys_properties'
                        id: 'fb5f786bd9ca4bdea2439655b28927b1'
                    }
                    prop_sla_minor: {
                        table: 'sys_properties'
                        id: '81d942e8a5b443c4bc0cfcabc9d443f4'
                    }
                    prop_sla_significant: {
                        table: 'sys_properties'
                        id: '2da24b6cf92f4ad599248445ef3f35b6'
                    }
                    prop_vantage_enabled: {
                        table: 'sys_properties'
                        id: '83bb60fb2d9f4695b3454dce205c108c'
                    }
                    prop_vantage_endpoint: {
                        table: 'sys_properties'
                        id: 'c12a196882634602bd156700a1e3273a'
                    }
                    prop_vantage_last_run: {
                        table: 'sys_properties'
                        id: 'eaa913e01ffe4a7dbc898e9d8755d1db'
                    }
                    rest_vantage: {
                        table: 'sys_ws_definition'
                        id: '1f101e7a797043129e6b698ae7cf962c'
                    }
                    rest_vantage_catalog: {
                        table: 'sys_ws_operation'
                        id: '5abc21b4bf414645a269f5037344ce6a'
                    }
                    rest_vantage_ingest: {
                        table: 'sys_ws_operation'
                        id: 'ec49ff33c36249b69eb4ba2e3d145fdb'
                    }
                    rest_vantage_product: {
                        table: 'sys_ws_operation'
                        id: '469d0c8671d64fac9955dfb1aa2837f5'
                    }
                    rest_vantage_run: {
                        table: 'sys_ws_operation'
                        id: '8608627201704e0ea455b12763768701'
                    }
                    rest_vantage_v1: {
                        table: 'sys_ws_version'
                        id: '26142e0cb3e44dfab6304b4eabbc99a0'
                    }
                    rl_assessment: {
                        table: 'sys_ui_related_list'
                        id: '4b40967be59040f49712c292698e8468'
                    }
                    rl_assessment_findings: {
                        table: 'sys_ui_related_list_entry'
                        id: 'b7a235e79d5040b388f33bde0af7f567'
                    }
                    rl_enforcement: {
                        table: 'sys_ui_related_list'
                        id: '67a2250722254d3a8d3db9dfb09b64fb'
                    }
                    rl_enforcement_findings: {
                        table: 'sys_ui_related_list_entry'
                        id: '738fb8220f584225aa73ae968eca8f67'
                    }
                    rl_finding: {
                        table: 'sys_ui_related_list'
                        id: 'cbb494fe16354bd58661965c4c427f59'
                    }
                    rl_finding_cas: {
                        table: 'sys_ui_related_list_entry'
                        id: '05161472bf34423cbef03100dfa5393a'
                    }
                    rl_finding_repeats: {
                        table: 'sys_ui_related_list_entry'
                        id: '01c7dc98b4a24614b2961c1a8ac7b9ca'
                    }
                    rl_installation: {
                        table: 'sys_ui_related_list'
                        id: '80c1724b859b46c592cff04b2f3db03c'
                    }
                    rl_installation_assessments: {
                        table: 'sys_ui_related_list_entry'
                        id: '2e44860a44174668a2bff0c41286befa'
                    }
                    rl_installation_enforcement: {
                        table: 'sys_ui_related_list_entry'
                        id: '95c70e6e262945e096c57d4cb5973677'
                    }
                    rl_installation_eqcc: {
                        table: 'sys_ui_related_list_entry'
                        id: 'ce2eb8cd252c4e96a46c25c29ed86373'
                    }
                    rl_installation_findings: {
                        table: 'sys_ui_related_list_entry'
                        id: '511b0d2ca4324c44b4300a101dcbffa0'
                    }
                    rl_program_area: {
                        table: 'sys_ui_related_list'
                        id: '0e44feb670f7414b93d0dc849b894a8b'
                    }
                    rl_program_area_drivers: {
                        table: 'sys_ui_related_list_entry'
                        id: '6a2bae439a9b419d8cd1255d81a407cb'
                    }
                    rpt_by_program_area: {
                        table: 'sys_report'
                        id: 'a228689f20a449b3bc7bc52684c5f751'
                    }
                    rpt_cmd_aging: {
                        table: 'sys_report'
                        id: '8a765c447ca64aedb5f28653c4e58c64'
                    }
                    rpt_cmd_ca_funding: {
                        table: 'sys_report'
                        id: '02c96ccf05664314b74709bea153d209'
                    }
                    rpt_cmd_ca_state: {
                        table: 'sys_report'
                        id: 'b5e6d929ce2c41c1bb508c2e47b0564e'
                    }
                    rpt_cmd_overdue: {
                        table: 'sys_report'
                        id: '7d5da6abc15f4b44beb7b50231086fd7'
                    }
                    rpt_cmd_pending: {
                        table: 'sys_report'
                        id: '15783509eb2f452c9e222dd3da4cffe1'
                    }
                    rpt_cmd_repeat: {
                        table: 'sys_report'
                        id: 'c4568120db6d41e3803aaacd3ff366af'
                    }
                    rpt_enforcement_exposure: {
                        table: 'sys_report'
                        id: '36ecace89fc94e29bd22b9ee4c3210ef'
                    }
                    rpt_enforcement_open: {
                        table: 'sys_report'
                        id: '452412ee578a4c40a53a6667c1390a14'
                    }
                    rpt_open_by_installation: {
                        table: 'sys_report'
                        id: '923621d7e12c4ba9baf92ea2d5e4d4e0'
                    }
                    rpt_risk_ranked: {
                        table: 'sys_report'
                        id: '2bd191cbfa124d9b9f057666970e53bf'
                    }
                    rpt_risk_rating: {
                        table: 'sys_report'
                        id: '52d4169319714263abd6a011d40d23f1'
                    }
                    rpt_root_cause: {
                        table: 'sys_report'
                        id: 'bf4b8474e3da42dca352d929007a2146'
                    }
                    rs_ca: {
                        table: 'sys_report_source'
                        id: '48c2e61379be4e7ca37c10097f0b1f59'
                    }
                    rs_ea: {
                        table: 'sys_report_source'
                        id: 'c7d241af795a43aa911c88f03fadeccb'
                    }
                    rs_finding: {
                        table: 'sys_report_source'
                        id: '09da73c504124c829a0562d31b22610b'
                    }
                    rs_inst: {
                        table: 'sys_report_source'
                        id: '9eb1d65ddc2048a784a624a48ec574d7'
                    }
                    src_server_jobs_nightly_ts: {
                        table: 'sys_module'
                        id: '48740dcd4a814f2c899c638c7c7a86d8'
                    }
                    src_server_lib_dates_ts: {
                        table: 'sys_module'
                        id: '93158f994d7f4ea49e769be809013e15'
                    }
                    src_server_lib_domain_ts: {
                        table: 'sys_module'
                        id: '4c0c0901c0494cda9abc533e0303d24e'
                    }
                    src_server_lib_lifecycle_ts: {
                        table: 'sys_module'
                        id: 'c1fbe7ba0326432fbcbbe84fe1173058'
                    }
                    src_server_lib_logging_ts: {
                        table: 'sys_module'
                        id: '4d48f09569f545b68992ca34ae023c10'
                    }
                    src_server_lib_repeat_ts: {
                        table: 'sys_module'
                        id: '970b0a4745a748358fb03f77f261cf67'
                    }
                    src_server_lib_risk_ts: {
                        table: 'sys_module'
                        id: 'cbc98431d42b44af8b414b6faba632e0'
                    }
                    src_server_lib_security_ts: {
                        table: 'sys_module'
                        id: '7f6698e93b154a6da11c6f507dd75c8b'
                    }
                    src_server_lib_sla_ts: {
                        table: 'sys_module'
                        id: 'bbbc7230b0d541eda9e0e3d76e0765c9'
                    }
                    src_server_lib_validators_ts: {
                        table: 'sys_module'
                        id: '1d15b156f6294f04b16bb18b56779da1'
                    }
                    src_server_lib_vantage_ts: {
                        table: 'sys_module'
                        id: '6c6f53e1029d41a3b72b5c62b3470fa5'
                    }
                    src_server_rest_respond_ts: {
                        table: 'sys_module'
                        id: 'b5d232b11ad743128a5e7cab30f9f087'
                    }
                    src_server_rest_vantageApi_ts: {
                        table: 'sys_module'
                        id: 'aaaa223327704ba4affb59dab01bd0dd'
                    }
                    src_server_rules_assessment_ts: {
                        table: 'sys_module'
                        id: 'a5e261d3e21c41a785a1f02cf219724a'
                    }
                    src_server_rules_config_ts: {
                        table: 'sys_module'
                        id: 'ea2b122e311d4dd6ae73800e4f4c4dbc'
                    }
                    src_server_rules_correctiveAction_ts: {
                        table: 'sys_module'
                        id: '98a70dbfb0524334bb1f2504e497b1ae'
                    }
                    src_server_rules_enforcement_ts: {
                        table: 'sys_module'
                        id: '13534875a0ea4049a95eecf01b127c1c'
                    }
                    src_server_rules_finding_ts: {
                        table: 'sys_module'
                        id: '4343c9d38f16499ebe55046557ee0f47'
                    }
                    src_server_rules_glideSupport_ts: {
                        table: 'sys_module'
                        id: '437aaae780284210bd48f06566da6506'
                    }
                    src_server_services_actions_ts: {
                        table: 'sys_module'
                        id: '6a7e661e5b8d4baea70066f8b3dc4ac8'
                    }
                    src_server_vantage_exporter_ts: {
                        table: 'sys_module'
                        id: '85a0d2cdb0e547fbba645d965e6cc737'
                    }
                    src_server_vantage_mockReceiver_ts: {
                        table: 'sys_module'
                        id: '1165ef08e1d840d4a57f5e3efbceb5ff'
                    }
                    ua_assess_draft: {
                        table: 'sys_ui_action'
                        id: 'f486b69131d04cbcbf32fa2e2b53988f'
                    }
                    ua_assess_finalize: {
                        table: 'sys_ui_action'
                        id: '29ec02193c7a4c1391cbe3ffd3a86183'
                    }
                    ua_assess_start: {
                        table: 'sys_ui_action'
                        id: '15c8b57daf0c43f99af0910ec9d4eef0'
                    }
                    ua_ca_request: {
                        table: 'sys_ui_action'
                        id: 'a0ac30d07951494db49ff21c8fa8ac39'
                    }
                    ua_ca_return: {
                        table: 'sys_ui_action'
                        id: 'dbbdde055be448f985639bcdfe09a78c'
                    }
                    ua_ca_start: {
                        table: 'sys_ui_action'
                        id: '7abbfe9663d840cf9005fe9d903a594f'
                    }
                    ua_ca_verify: {
                        table: 'sys_ui_action'
                        id: 'f90d6d1cfd9947faafc136d5995995b0'
                    }
                    ua_ea_close: {
                        table: 'sys_ui_action'
                        id: '454894772f944554a1b286e55a8d41e7'
                    }
                    ua_ea_contest: {
                        table: 'sys_ui_action'
                        id: '95ea30a12f7f4e39b450524bad5974c5'
                    }
                    ua_ea_draft: {
                        table: 'sys_ui_action'
                        id: 'f55e9a5ac73946f1aa2358c66deece6a'
                    }
                    ua_ea_resolve: {
                        table: 'sys_ui_action'
                        id: '0ab9ec17be5940c7bfd8184e2b9502fa'
                        deleted: true
                    }
                    ua_ea_submit: {
                        table: 'sys_ui_action'
                        id: '9125bac5f4b549dca3933f96cec74b44'
                    }
                    ua_finding_close: {
                        table: 'sys_ui_action'
                        id: 'd7e415f595a94f4abff765ed2424a478'
                    }
                    ua_finding_risk: {
                        table: 'sys_ui_action'
                        id: 'bbb7f9f7a57d406e82012e4d1a99d0d3'
                    }
                    ua_inst_recompute: {
                        table: 'sys_ui_action'
                        id: '74ffa4ddc1f949edb94d4980456a192c'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_form'
                        id: '001982e467e3449591b33fb79ca6dfea'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '002a792387a54494ab19fc8dcf453575'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'repeat_findings'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '0061c7f316f04abf95fa316fc190abe9'
                        key: {
                            name: 'x_cog_env_assessment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '00700a87797d4642bbd37c1de70ab083'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0072dd24e37f41e78bd812a0223d3c82'
                        key: {
                            sys_security_acl: '8523bd7118d04620b3e827631fe2363b'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '008907a5d82844f9b94a05c7b4f9ab35'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00943845118844cc90d34a366e770afc'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'aging_flag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '010637f9a8b145e7b6cb5fbf7fbe60b5'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0109615d9f1343fe8248e0a3fe768e5d'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'days_open'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '010bb4d08af441598b2383e3397313e2'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0113d282d9d34873b6dc6fdc57933ead'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '013a07d6e6be416f92737f10b6702734'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decisions'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '01843ef7da524f25a515ccc508838e36'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '019f8a7212f642cabbd921d3a7895a4b'
                        key: {
                            sys_ui_action: '74ffa4ddc1f949edb94d4980456a192c'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01d8a08ceba84c3dbd5a9eaae7de545a'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02032b690cfe4aeb97ffcf47ba1b45b8'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '024b8101eeef4e7d921539581e77417f'
                        key: {
                            sys_security_acl: '8e266fd5bf9e409e8754a9464c225e56'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '02822937c56d4c9eae4ac99b9bcd96a2'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0291323bb5434d2dbeb5d37ddabd2676'
                        key: {
                            sys_security_acl: 'c017d6d101b347948d2692ef2ac74ba2'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02ddef9747124d5fbbb420d9f6f9c046'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closure_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '03041fc6f8b747dab7b7a7719c56a20c'
                        key: {
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'penalty_proposed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '031f5370746d4cae821d15487eba955a'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'repeat_finding'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '0342225c5a3848368cb5c02ff5b396ad'
                        key: {
                            name: 'x_cog_env_program_area'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0361251c8c4e4b6cb5894055fa64edcd'
                        key: {
                            sys_security_acl: 'e60fe7b45e3645baa712df1327f9fabc'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0382f8e4cd2a4fca806e235ed8e330a8'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'findings_minor'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03c819f3a6c94cb6954866906d3e4ca2'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'epa_region'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '04ad101d6eb24281833224bd1297ecb4'
                        key: {
                            list_id: {
                                id: '0c64abcce5d7463cab835541a08d8ea3'
                                key: {
                                    name: 'x_cog_env_regulatory_driver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'citation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04d2f640e7ed4d22a88640e7ad5ffc86'
                        key: {
                            sys_security_acl: '8e266fd5bf9e409e8754a9464c225e56'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04e11de100854f49a3347522c8836371'
                        key: {
                            sys_security_acl: 'd0d3b4bfd69b432c8df246304fbc3444'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05439d52e0e940dbbfefdecb4a86dd02'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05716b9c95ce4f439fd567833d4bf6ba'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'verified_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '05e7eb24de9e47129a5fbb7e7d80f91b'
                        key: {
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '06084507a11549278ada3488fbee9a5e'
                        key: {
                            sys_security_acl: 'baac8dc8468d485cb984de8fd223ddf5'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '063d44ef74d44840b81b5ae2baaf49fd'
                        key: {
                            name: 'x_cog_env_program_area'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '06542988a460456a8fd4814b2e6dbdf5'
                        key: {
                            sys_security_acl: '888e06b370254825bb5496c88c4143e1'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '065d329c4439418ba5d360c09ecc0aa6'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                            value: 'planned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0834c8ef88de459394762c3190b43897'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0855ea71891a45dfaf3125644a04c9bb'
                        key: {
                            sys_security_acl: '8ab3589e31154cd0b9c4517aef01185f'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '088f112243ad49448d93cccf1c9bafea'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                            value: 'amc'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08ace86973b944b8920e4f0f58ad3160'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'response_due'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08edba75f27a4758be11d490beac1cfc'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '08fcef03a3274ca39de77f5f6ff2267e'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'summary'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '08ffcb649d4a4634aa96a98772a2a2ed'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '09682ba8150b41f99b1f36f1f3f15cde'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0994b0f166f540b9905b16afdf508003'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'regulatory_driver'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09d75a2921cf42e9a8cd95f5973bfd64'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                            value: 'enforcement_actions'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09f46af3aebc4f26a1c800cda1fc3bd6'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closure_justification'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '09f643c5f3414905ba094d3aedd0cae3'
                        key: {
                            name: 'x_cog_env_assessment'
                            caption: 'Notes'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a5916b7486241968f4c75afa4411708'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'overdue_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a860bcc961146d4b9d11f41f1e23716'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'status'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0aa1c58fd7c3421cbd55476ceebbdee5'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'content_hash'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ab51874c0d74c628a2eb5783ef65773'
                        key: {
                            sys_security_acl: '3a6f9886af2f41838fddb93d65c86782'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0ad266e078c3477e9c29e6288f85909f'
                        key: {
                            list_id: {
                                id: '0342225c5a3848368cb5c02ff5b396ad'
                                key: {
                                    name: 'x_cog_env_program_area'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b47346a73584ebdb8ed81338240d6e2'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b4b618af6a444caba14d61726fc541a'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'open_enforcement_actions'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ba6f4103b394e38b271b5ef4d0aa3b6'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'received_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0be7b5ea11df4ae59c6c428e80314da6'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '0c64abcce5d7463cab835541a08d8ea3'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0c6e7f5cc93646d69787eb39804b66d8'
                        key: {
                            sys_security_acl: '2a92aadeabc645f8a10be32f8f81b820'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c88ac98b4164bbaae58e48478780168'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'open_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c984a83d94b497cb2bfc0d70575ae1b'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                            value: 'pending_verification'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ce82888ed9f42e5a97087c926ff92db'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ceb90d1e2c94891bd37fd180b560ff9'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'percent_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0d1a61893a2e4f75a2f3032a75774f54'
                        key: {
                            sys_security_acl: 'f106d18131ca473593919f34abfe43b2'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0d1ca58cd9e24ca282fbf0cfa58ea0dd'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'repeat_findings'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0d2f74181ca84db6959e7a9ee84f146c'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'fiscal_quarter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d7cde3b26bd4865933a240568100383'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'program_area'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0dc87fb823534b24a76f4f214fce1763'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            value: 'sustainment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0dcf5d411c6a4d22b0316c9b1da5381b'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                            value: 'major'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0e15c75f8fe44c3698dc33ec0ba92172'
                        key: {
                            sys_security_acl: 'c017d6d101b347948d2692ef2ac74ba2'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0eb284b6c2e94835aca4a5366cd45750'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ec2446781c4444d8733ff92aa079379'
                        key: {
                            sys_security_acl: '0a1276ceecfe48d8932a13dec660f420'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ef5650b4cee4cd0ab8f76ac20def3f4'
                        key: {
                            sys_security_acl: 'c3fd73ab77944c9185787361ff5781b6'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                        key: {
                            name: 'x_cog_env_installation'
                            caption: 'Risk posture (computed nightly)'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0f4c7222e0674afeb8993cebae9512e4'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'findings_major'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f5fc066f00f467ba4047b15006c21d7'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'last_external_assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '0f61eb07065d496a8dcb8550e6743429'
                        key: {
                            category: 'x_cog_env_finding'
                            prefix: 'EPF'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f6ba3ca91ac40c39cd4eaf476adcd93'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'ust'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0faccb0e004a4bb1a816f6dbb527debb'
                        key: {
                            name: 'x_cog_env_assessment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '10485efb75b442189c949f40e018c521'
                        key: {
                            sys_security_acl: 'f08b09c645de4e1aac56593a81aab602'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '106e3934af414ab48c457add24894539'
                        key: {
                            sys_ui_action: '7abbfe9663d840cf9005fe9d903a594f'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '108d5083010e4351877ee10d09b1beb5'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '10c747253e39492cbee0ce38d610a499'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '113844d7bd874daeaa5a8840f9a54ee3'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '1144cf9f7b594fc6b3b8054a8f44a8cc'
                        key: {
                            sys_ui_action: '454894772f944554a1b286e55a8d41e7'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1181194f609c4a1ebc0bf0c5f61ff690'
                        key: {
                            logical_table_name: 'x_cog_env_finding'
                            col_name_string: 'assessment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '119685ba99ab48e2b358015d06c30559'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'response_lead'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '11c45fc58e2a4d119721cef58ecbe89e'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1293c08cc1e94531abf17f8c4ed2250b'
                        key: {
                            sys_security_acl: '2169bbfdc3cb40efa63088c5177e74dd'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '12a75104ba044dbb9bc37e9fb83ba83e'
                        key: {
                            sys_security_acl: '467f66d85e134a7ab9bb6ad4b8216991'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '12c1fb276ba84f63a164135d664434c5'
                        key: {
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12fae089d2c04e549d8905ba6ec310be'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                            value: 'requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '1314629a482140699b9edf8b5c149267'
                        key: {
                            sys_ui_action: '7abbfe9663d840cf9005fe9d903a594f'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '1324228f7b094615ad6e966cb45af624'
                        key: {
                            name: 'x_cog_env_installation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '13355f4ce92345aeb2cac450d0811f16'
                        key: {
                            sys_ui_action: '74ffa4ddc1f949edb94d4980456a192c'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '136bd67922a549379e47fb98fa61b88b'
                        key: {
                            sys_security_acl: '4de363356f3b462f9ee15deb37c8b059'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '13902d137a9942309bfcda92fb0531c0'
                        key: {
                            sys_security_acl: 'eb53cfd80f8840e2ad913d8e1ce3dc5a'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '13a6dd58295e4bf690bd915d88f2e11e'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'findings_total'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '13d7e7bdd491429ba5425fb26f42a39f'
                        key: {
                            sys_security_acl: '2169bbfdc3cb40efa63088c5177e74dd'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14e4d51b6414422bb1885345ecafb4b5'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'program_area'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1524b18d3e634c33b2a8db2c0d407356'
                        key: {
                            list_id: {
                                id: '0c64abcce5d7463cab835541a08d8ea3'
                                key: {
                                    name: 'x_cog_env_regulatory_driver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1671859c8e024e53ae7aa7d5437bfe84'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'repeat_finding'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '167cdde2fee348d69e17c0f9b444ad8e'
                        key: {
                            sys_security_acl: 'f1177aa915bf43a09b170067fcc252a2'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '16955d2e711c4e9884d6da63e62e4f6a'
                        key: {
                            sys_security_acl: 'fc6ab46b870f475a997af38cb287415d'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16cd5298d98047358755b73f22f0b5f7'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17b6dff979d74eff9799878871924ab2'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '17c55a479ce24494a5282cad1aed9afe'
                        key: {
                            sys_ui_action: 'dbbdde055be448f985639bcdfe09a78c'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '17e7f2dde43a48f1977d4655e1f6b636'
                        key: {
                            sys_security_acl: '2a92aadeabc645f8a10be32f8f81b820'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1868f2fe01834ec9925f34d0d526246b'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18866a5d1c654e43aea0d7b06ccbfa48'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '18989efee2e04c44930360ce398e0949'
                        key: {
                            sys_security_acl: 'a1cb0f325db54f7e97d82954e0c7d1c1'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '18f2aeccd65540608a21b76042f46c0f'
                        key: {
                            sys_security_acl: '888e06b370254825bb5496c88c4143e1'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '18f535c5aad4415bb30982843a7f2e03'
                        key: {
                            sys_security_acl: '00486f0a67d049c5800a49397c9d5a92'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '19a98030c227461797e82962c627a57c'
                        key: {
                            name: 'x_cog_env_finding'
                            caption: 'Repeat and enforcement linkage'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19c50eaf9bf04491a9826b15f215c6de'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closed_by'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1a185c53515d4e3fbaae25195c19b988'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1aff5561baef459c934b273f22d703f7'
                        key: {
                            sys_security_acl: '14a0a1666c954ec480bdc5d35c45fcd6'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1b287634fa494f7490ab076f9288bc41'
                        key: {
                            sys_security_acl: '290606585bdb4105b6b462859f76c560'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '1c30dd7b93c14f72837c35eaf17fef87'
                        deleted: true
                        key: {
                            sys_ui_action: '0ab9ec17be5940c7bfd8184e2b9502fa'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1ce5b5c1abe944fcba9376fed8d50478'
                        key: {
                            sys_security_acl: '4de363356f3b462f9ee15deb37c8b059'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '1cf50045c4c547e981550012811eba20'
                        key: {
                            sys_ui_action: 'f90d6d1cfd9947faafc136d5995995b0'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d05019b41454d5fa60720d9fa74725c'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'epcra'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1d4d4bdce1914c1ab94b3b52ebfc7e01'
                        key: {
                            sys_security_acl: 'f3bdfb50cd414528887e2a5173a82351'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e12390181664017929d41ca119c4e88'
                        key: {
                            sys_security_acl: '46a9013ab4bc4d99bee6a6d4d7f6aebf'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1e1b9c07eb6743a58fcd7275522f736e'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'scope_notes'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1ec0510dc1a040c0ba97bd9e0c23b5d5'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'risk_score'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '1ec5304f87e948a1a4988a06bd960ec8'
                        key: {
                            sys_ui_action: 'f90d6d1cfd9947faafc136d5995995b0'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1f0102d621334ef29ddf55461c78ef9f'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f18f256dc0a4d5cad1fd9edcada2050'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_rating'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f2355d77a6f425d8fe4cb1f5a6af68a'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'assessment_type'
                            value: 'internal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1f57a244ab46463c89ce599fe70a22ed'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessment_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1fb5d6f941c2418e80320e58d9c1c769'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                            value: 'training'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2040241b0df145a5ad10587bd94f54e7'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'installation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2043e7b7dc3c4979b3b91e52a6ef7cec'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'scope_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2162c01cadba4d0d8c21c54f92dab984'
                        key: {
                            sys_security_acl: '829c0c5ee7fb4d6ea64028187ddf4f31'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '21854c77e5b8459a8c3bfad1aee89d18'
                        key: {
                            sys_ui_action: 'd7e415f595a94f4abff765ed2424a478'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '21be9ad2cb5b4259b7af7f779c52e86c'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2208c1cefb564dbe98c85cc16bc3ad8d'
                        key: {
                            sys_security_acl: 'fc6ab46b870f475a997af38cb287415d'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22560586f7d54636b0de027720fb4b24'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'cost_estimate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2296272edce848f7b31c19687ed8a445'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'row_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '22d163fc484a4907be297faba67937e2'
                        key: {
                            sys_ui_action: 'f486b69131d04cbcbf32fa2e2b53988f'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2339a212eaca4abb8642edfea20213f5'
                        key: {
                            sys_security_acl: 'eb53cfd80f8840e2ad913d8e1ce3dc5a'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '235e75bd054b41c69154505397716716'
                        key: {
                            sys_security_acl: '90dd50c62daf4917bcd22d82fa80b204'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '238b18ddce804eb19696a705729233b8'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'triggered_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23d571941b91423faa9c8c878be4f3ad'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'procedure'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '24137e0ef7ee423ba0fd5da0eb6dc463'
                        key: {
                            sys_ui_action: '454894772f944554a1b286e55a8d41e7'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '243d9aad379b4190bcadc219f07c1379'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'reference_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '24495a0f2fba4176bff63454a92940c0'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2477dc7c6a4b4a74a5ed7bbee348ed47'
                        key: {
                            sys_security_acl: 'a6194c5ad3d94930be9488fb4d7e97af'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '24a1cf6fed2245a78c2a7592f2d3f19c'
                        key: {
                            sys_security_acl: '7a32a7ee3a31488286ec225de65825e2'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '24aedd95560241228add5f6fd8202d50'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '24f4c5c583924eb683cd333e775ed004'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'severity'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '24ff3f827fce4aa39544862dfb200278'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'overdue_findings'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '250cb0e547fe42ffa97d3165d5c363b8'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'verification_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25166c8b3acd4ff49a0c332bef9d1cc2'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2551dbc391424f3ea09ac8cfb0302bc7'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            value: 'penalty'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2559890cdab541bb8ae866c4bd5a5e95'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'content_hash'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2575c3650da14257ae2a65bbb6462f26'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'schema_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '258a681cfda3442b911a2798077c3698'
                        key: {
                            sys_security_acl: '3340ea4636d84a5d8a23a8cd5d83a367'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '259e39f34b5c4bd9be00d32c816659af'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'previous_finding'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '262916d4f5a14808a5a16bf162e42a58'
                        key: {
                            sys_security_acl: '62a0ef48071b424bbb39f55d1f2616dc'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26451633f20d43649060aa571406e777'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26aaeceac0d74b97a277c84fadb0ac5a'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '278613e90b2c4a6883e4ee0b57964cfe'
                        key: {
                            sys_ui_form: {
                                id: '24aedd95560241228add5f6fd8202d50'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27b432cb447844faacec02c9523ab6eb'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finished_at'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27b75b931c3345ccb5464527139003f5'
                        key: {
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2803794adcd84123ba74a8d086a45b90'
                        key: {
                            sys_security_acl: '908ca8eb2e4740cbb124081993132d3e'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '280bbbc841554aaf95291564585a1581'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                            value: 'unfunded'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '282b751a45c4461788005b71c8b5ead1'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28bc086a82e24baa8da333b148707aeb'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'response_submitted_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '28c3bbb09e354bc0ac2b9004c30ca541'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28cbaab6c2d64176bc84ff175d9c2e76'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'summary'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28f2924b8b2e4c0c8b475fa266e034c5'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'reference_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '291c7a8976d14f55b1d643fc50533302'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'equipment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '295f3ec28ce64849a05d5c8b83659ff5'
                        key: {
                            name: 'x_cog_env_finding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2974c20c13ad49b2b43c2dfa80866220'
                        key: {
                            sys_ui_action: '95ea30a12f7f4e39b450524bad5974c5'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '297647c9f8e84d4dad9b85c91b7cab9b'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '297a6509ffac4f9483423ba0b83fda5e'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                            value: 'observation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '29c69386232a4e82be00bb52b4dde434'
                        key: {
                            sys_security_acl: 'a6194c5ad3d94930be9488fb4d7e97af'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29d2cccf24234f80a06efb84b7a6a9a1'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'program_area'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '29fa522c9066460a8141e7ea9902d545'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2a01269a5fb2408f9aba95731db09d0c'
                        key: {
                            sys_security_acl: 'f138facdd2a94dd284b84562e79854af'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2ab1ac4284924a6da25290446004315d'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'findings_total'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ac4cf4b652d405ea48981f1d2e786ad'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                            value: 'state'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ac64c51f5754482b4b4b10fd7384c07'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'started_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b6bbdc866c642d69f95b9822fe712e1'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                            value: 'draft_report'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2b92060ebbfe4a33af342dd04d502c49'
                        key: {
                            sys_ui_action: '95ea30a12f7f4e39b450524bad5974c5'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2c5eade09a0042faa1b5ac1899322e9b'
                        key: {
                            sys_security_acl: 'ad67c41a88bc4eee9766b663877c1a4a'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2c6cb0338405474cb6eeaef00ed728d2'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'data_product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ce81ed4e5bd4970a31c18e6414a8ced'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'nepa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2d078b5810534d799f90c8b15e6d3309'
                        key: {
                            sys_security_acl: 'e6c0816906ed43d1be25d92413a3b8cb'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2d5ac06e83db4af693ab27754b6da1d5'
                        key: {
                            sys_security_acl: 'fd490c20e3e541d79f9b589af23a01dc'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2d8f4d425a604e0fa890bbfa2526eeab'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'schema_version'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2da4de5ba6914db0847abebf0932575b'
                        key: {
                            sys_security_acl: '5693e713512d4841a9a1500b28547192'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2db90cdd939849f19ffb8fe8f7b9215b'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2e1351a251db4fdf9e2236c775c0abc1'
                        key: {
                            sys_security_acl: 'f106d18131ca473593919f34abfe43b2'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e30e79da83245379940dd1bcad4f462'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'endpoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e506b4c923744199d20e219301db5c5'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'penalty_final'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f2f8cd1c6aa456d9a37d65a869465e1'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f6efd3a9ff54dbf8e230426dbde2ffc'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'trigger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2f7e4d19f8a844fca9b7675da16e21a5'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'snapshot_taken_at'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2f870fdaaa1c4558846b3a18b1b7b492'
                        key: {
                            sys_security_acl: '00486f0a67d049c5800a49397c9d5a92'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2fbadfd73d584506937788b445447126'
                        key: {
                            sys_security_acl: '8c8f1e4b77d546c29db7fdfed4904c6c'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2fc7f867363d4e61a9309aa51705b480'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                            value: 'army'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2ff194f475d34f0a9fc7e32960104ab3'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'program_area'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3044f4a5d097404594d9b459a72217f5'
                        key: {
                            sys_security_acl: '7043c615807d48a6938f9f4f7e42c0e5'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '313ba67c8f1a484ab1bdca975940146f'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '324867573fc2446588d2aabd999134c2'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'requested_closure_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '325be8426328425f8da6f4862214212d'
                        key: {
                            list_id: {
                                id: '0342225c5a3848368cb5c02ff5b396ad'
                                key: {
                                    name: 'x_cog_env_program_area'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '327a2e4215a94c93966c54306b8afaa7'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'risk_rating_at_meeting'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '32a2c2e6fed34015a9148800567243ab'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'open_findings'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '331baf050ff74c83b8e7bd35e731ac4c'
                        key: {
                            role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                            contains: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '33565498bca7440ebc42ed78e57d0ab1'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installation'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '33777047259845ffb6bc1d0f2067505b'
                        key: {
                            sys_ui_action: '29ec02193c7a4c1391cbe3ffd3a86183'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '33cd7b70741a49a7be2babe3f0c288d8'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'regulator'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34802c6c16c74b10b57a56af92f54f19'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'finalization_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34c6f9b6d1134668964586151bd315eb'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '34c86be47f4748d4b1c7611b5d108664'
                        key: {
                            name: 'x_cog_env_corrective_action'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '34cc78d98cc0424da5b39cb950f2103f'
                        key: {
                            sys_security_acl: 'f1177aa915bf43a09b170067fcc252a2'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '353095d4311d4697a7666b1d53cc20bb'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '354411b5d3db45938e8feb3cd6415c49'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'open_enforcement_actions'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '354786263d1148c8b3154fb57ec0a709'
                        key: {
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3558ab170e8b45b39c973fafa8db6b0f'
                        key: {
                            sys_security_acl: 'e6c0816906ed43d1be25d92413a3b8cb'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3605a52ab23446949509003386c9ccfd'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'overdue_findings'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '365ab9197aa24129bf045ba03fcaa95b'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'action_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '366e33b0a6034457a8d4609b21809bdc'
                        key: {
                            sys_security_acl: '80db1b81bd3d42e4ad6b9c507c5c1a71'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36d549730bf24b2497c63a4c0afe5d58'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'fiscal_quarter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36e12abb139a4c4787cd133ab5ef05cf'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'row_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36e757f4a8054f2cbe70dcaa85825243'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '372015b43a6a4683ac21be65e63eb621'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'end_date'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '372b600695d44c739bf608a1d3ac5cf0'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_submitted_on'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '37b8048cd57b4946b2014635ec419f21'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '37cd3046beb04bbd8ec8bf413154a829'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '3882017bc12c4befbbf61ba83104a58a'
                        key: {
                            logical_table_name: 'x_cog_env_enforcement_action'
                            col_name_string: 'installation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '38bfb82d49d54835b25e92cd0d22877f'
                        key: {
                            sys_security_acl: '290606585bdb4105b6b462859f76c560'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '39cf2a3283a04f8b815dd9838d042254'
                        key: {
                            sys_ui_action: '454894772f944554a1b286e55a8d41e7'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '39d488b3753b46e18aa315e69c03648d'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                            value: 'received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a57184e4c5546d7b0f88331716dc102'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'training'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a57d4f5d8234071a6ad06bb74dae97e'
                        key: {
                            sys_security_acl: '3a77ddb8ddc74cd1857fdc2c1f7e5364'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ae8788c797b40b9b9293c486dedce00'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_repeat'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b0035cebe6948bfabd50aedf1380918'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_significant'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b030254a2cf40bc9db448a21d8bb9c4'
                        key: {
                            sys_security_acl: '90c85a0a0ffe46718f6531b6a7965afb'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3b19022a24d24d2b8e2fadc1b7d1f4cb'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'linked_findings'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b50c516b2cc42598f10b7c9d3edd43f'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'summary'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b7b2929db1e4101aaf29893c0a36f6c'
                        key: {
                            sys_security_acl: '01c5a7ccacd14711903c8944160226a3'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c4cdca9c59b4757bae19590d2f6941d'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3c65d5ed15fd49b3a33cd949eba75aa7'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'started_at'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3cdae9c88be34ccabcfbe22bbed170d1'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_drivers'
                            position: '10'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3dc0c3170dc64e549ce2c35bf45528a6'
                        key: {
                            name: 'x_cog_env_finding'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3dc556db811a40dea3e476be5b14a3b0'
                        key: {
                            sys_security_acl: '6db6d357033c4cd489745cd8e0bc9357'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3e24992a2cda49c1935ad00b4be2cf78'
                        key: {
                            sys_security_acl: '320b71c9039d44feb2156b2d84500614'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e39732a0e8b4958a4b456607f6cce92'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e45cbdac0c542b1a1cc6141a88f07a5'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'program_area'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e6706057d41457ba8d8d52f33cc3988'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'closure_justification'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3ed2c31cc4b54d6081839f18a4f958a2'
                        key: {
                            sys_security_acl: 'e950691408794701985c798db544e3b5'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3f4100e603d648eb92da223b27cb49a9'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'closure_due'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3fc1260d47b54249a643e61e42052ebd'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '401ede52bb254f968dd4f1b7a4103418'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                            value: 'usace'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '402612cc931d41d7811e84c7fffa13bc'
                        key: {
                            sys_security_acl: '5e1758be72f2438b8a58de3737f49ba7'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '403cebc24098404eb0622a276abaabce'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reference_number'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '40589932a6134b75bc12a92ec8902e73'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'action_type'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '406ef8cb739e40ababcfa4d9638e9f2c'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4088712725804c6fa6873cd5fc8866b0'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'installation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '40b64d925ab54ebc9c9c2935eb97e490'
                        key: {
                            sys_security_acl: '39b7cb549ec54ead841793825e9d8d62'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '40fea37813fc49b5b7283ce0d38b95c6'
                        key: {
                            sys_ui_action: 'f55e9a5ac73946f1aa2358c66deece6a'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '41a6280fad7e4a268e792e6f4ec4136f'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4253d86301aa463085eb9bfde44a4f13'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'next_external_due'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '42aea22980c745a0abc8f0238bef1e29'
                        key: {
                            sys_security_acl: 'd0d3b4bfd69b432c8df246304fbc3444'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '430df2016ea842ec990979981ae626cd'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '438c924160ea4f488aa75cf901351dad'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'requested_closure_on'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '43c0a1cfeef64c2fb48cc7af51b6a056'
                        key: {
                            sys_security_acl: '8c8f1e4b77d546c29db7fdfed4904c6c'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '43d501f5483e4deb9d5a2080fdf76937'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_score'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4405a645c9b242f691f3273f67466f26'
                        key: {
                            sys_security_acl: '6b9587ca787747688e11e3fa0f1f13d9'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '440f1e8015844ce6aa4f5fb07484190d'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'message'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '44365f42a6634a2ca1c558840ce44eef'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '447498fbb51047be98e0b40fcb75d38a'
                        key: {
                            sys_security_acl: '74f20e857c65468cb47851d6785a7f53'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4474acc2a16244f592c53fcb4b6f9bc2'
                        key: {
                            sys_security_acl: '7280ee8b7cbf4471ae5918c984a19283'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '44d3aee4a4a44dd3933bf762f0e30f7f'
                        key: {
                            sys_security_acl: '12bdf74b22d94045ba4b61f916ff50df'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '44db4731ecb246bdb8b42bcee3fb5adf'
                        key: {
                            name: 'x_cog_env_finding'
                            caption: 'Finding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '450bed9b0f0c47a485e0b2a098c1e1f0'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '456bb45cf1494592b41ac48f850e4b29'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '45ac0ae60fb943d1943f1cf7ec708451'
                        key: {
                            sys_security_acl: '1d7ee989f5de44899c2c5d1c4320612c'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45c3c38c88ac433ead9be1823237aabd'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'identified_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '45d2c587e0354b82bc2ea672d4416ffd'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45e45fb350db4d248bf3e6e6705dbbd4'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'open_findings'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46af7a3e5c914cff8d329a693b41f213'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '46ce3af3798e45a89a97e9cb4bc295c9'
                        key: {
                            sys_security_acl: '46032701e5304ec2934af1b6ff480b06'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '471dbb5077b34a6eb533d8eaf449653b'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47323b21b4e045f48c79c5546293f288'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'last_external_assessment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47627f64885d42c2b4db92f97a6ce804'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4768ef751a564ee9999c0bc23a87f4db'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4793f0a32c7a4d72969ff3da16580bde'
                        key: {
                            sys_security_acl: '467f66d85e134a7ab9bb6ad4b8216991'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '47e3286a86eb470b89c24cd52ed32a46'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'uic'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '480ea37262ee40079ae506d209ae2b35'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'program_area'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '481cfc5b9e7d4ac481a19e432871890b'
                        key: {
                            sys_security_acl: 'f009a2f05b7240bda2e0bbbe74871c3f'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '487e96ab6c8647b8992dd29bba372719'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garrison_env_chief'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '489393cafaef44e8aadf14644c166261'
                        key: {
                            name: 'x_cog_env_installation'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4900130759474db38404b108d3d7094e'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4966b2661b274c6cad7421f9c3909148'
                        key: {
                            sys_security_acl: '8523bd7118d04620b3e827631fe2363b'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '497b896b98a84fc78119be9bb01ead73'
                        key: {
                            sys_security_acl: 'b3aeed52add143b1ba8e48fc4e613932'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '499264fabc3e4f0b8c609fdf24f338b8'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4992cb82145b4899926c42e49798fb8d'
                        key: {
                            sys_ui_action: 'f90d6d1cfd9947faafc136d5995995b0'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4a0f9247d81e4aa08f8b6395208f2be9'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'closed_on'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a589a54726840789f24373a0c1f433a'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a6f6004a99b4cf68990674f05d90dd9'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            value: 'admin_order'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4aa0d5473e8d4217add51160cf2a4ef7'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4aa702c504304c4487a7505713904450'
                        key: {
                            sys_ui_form: {
                                id: '9b243a7b73e742d4ac714e552208f577'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b2bc5f578754f8b9c2a794381b7b9df'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'overdue_findings'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4bb210d355174c6c9f243991d74180f4'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4bdfe31d3f194e70afe7d510df0a661d'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c6a02d8671744e38f5db9fea2061c8f'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'sdwa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4c7c4ca848d546478af02b3d11b0aad7'
                        key: {
                            sys_ui_form: {
                                id: '0061c7f316f04abf95fa316fc190abe9'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ca01c2db69e4ba287517952b72913a8'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'chair'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d66ef2604434db190796b7409285f5c'
                        key: {
                            sys_security_acl: 'fd490c20e3e541d79f9b589af23a01dc'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d7ac6ad35d540f1bd7df350be42bb1b'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_computed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4e0d7711ff834320a7cf82d9429b96fa'
                        key: {
                            sys_ui_action: 'a0ac30d07951494db49ff21c8fa8ac39'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4e10595902814d0f80b8a2f791a05efb'
                        key: {
                            sys_ui_action: '9125bac5f4b549dca3933f96cec74b44'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e705ead541f48988b1e554a37032fcf'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'epa_region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4eb71a0469de466c9df3f132fbf3daf5'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4ecdcc3a660c40b997178b508f857b2d'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                            value: 'funded'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f0578ac08f8433696f831a7e71593fe'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4f1f5e9233db4818a9595f95a551a50b'
                        key: {
                            sys_ui_action: '29ec02193c7a4c1391cbe3ffd3a86183'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f2f67eb6b284225a5c2ed48f6819bc8'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f7acf8840ab4c18b5dbf775ce0bf153'
                        key: {
                            sys_ui_section: {
                                id: '09f643c5f3414905ba094d3aedd0cae3'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4fabd1b804b048a589e1f95e0bd971f6'
                        key: {
                            sys_security_acl: 'dfcb0212040f4d93a2764c68ab40a1c1'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4fc8ac48363f4bce9f7da31e67e94fae'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_rating'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fd93fad12164556b0a150e050e0f88b'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'previous_finding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fdded385f9643808d8cc9183bd78209'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'closed_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '507791089a6442fe860934d2f7baed25'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'days_open'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '512b9c923a644d7e878c22ca512aec12'
                        key: {
                            list_id: {
                                id: '0c64abcce5d7463cab835541a08d8ea3'
                                key: {
                                    name: 'x_cog_env_regulatory_driver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'statute'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '513a8bfddfa74529954f227ee609b0e7'
                        key: {
                            sys_security_acl: '7043c615807d48a6938f9f4f7e42c0e5'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '516b6987623d46d296567b0394f97268'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '518ec1094a2e41b6ba3e318a539d0766'
                        key: {
                            sys_security_acl: 'f106d18131ca473593919f34abfe43b2'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '52a1ac6f5e3e4818b6d1246031b91242'
                        key: {
                            sys_security_acl: '9944b6c082fe43288117ae0d52d4ff31'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '52a89333d83c40c4a6b31f7103602011'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cost_estimate'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '52d9b0d88149482295e4a15c501e9b78'
                        key: {
                            sys_security_acl: 'a96bb10f5c0949058686564fbef08612'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53430d4b34694df19ceaa20a0925c0fe'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_minor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5345ba43acf44f83b7042b53b82bda10'
                        key: {
                            sys_security_acl: 'cdf1d99b4c044d7c8465786c1facf004'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '53c592eedc23425e93cc6b4a401be3dd'
                        key: {
                            name: 'x_cog_env_finding'
                            caption: 'Closure'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '53cd2ac9faac45cda01fa11e86922a02'
                        key: {
                            sys_security_acl: '8e266fd5bf9e409e8754a9464c225e56'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '53db81c3ae94494ab0a8ebe305eee363'
                        key: {
                            sys_security_acl: '4de363356f3b462f9ee15deb37c8b059'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '53f4ff5b82474b418e73a5e6d93fe938'
                        key: {
                            sys_security_acl: 'c3fd73ab77944c9185787361ff5781b6'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '546c9c63697144b5ba8023df2cfd9318'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5488ccf3333442af905258eb6814af75'
                        key: {
                            sys_security_acl: '7a32a7ee3a31488286ec225de65825e2'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '551bfcab75ae408694940cba2a2c91e5'
                        key: {
                            sys_security_acl: '8ab3589e31154cd0b9c4517aef01185f'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '55573e875c18442099680819f35c1935'
                        key: {
                            sys_ui_action: 'f486b69131d04cbcbf32fa2e2b53988f'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5576fb577c7c4d9da5b9e954d4ac7dc4'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '55ef131a27f841c7bcb46379fbc0293c'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'uic'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '55fb1ef04c8241119cfe8aacc7f8a286'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '560f2175ed3347019dba90848454db52'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5688b9e9947844969206569c5c6af481'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'regulatory_driver'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '56d4a31d94144d1185249a108cdd638e'
                        key: {
                            sys_ui_form: {
                                id: '24aedd95560241228add5f6fd8202d50'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5723b7b20c0c4b97bdbbaf08aa24ba8d'
                        key: {
                            sys_ui_action: 'dbbdde055be448f985639bcdfe09a78c'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57568d950f5f4860aaeec4b1ee305308'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5775d6ae3845428a8a421e4eaa8f09b5'
                        key: {
                            sys_ui_action: 'f55e9a5ac73946f1aa2358c66deece6a'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '578b4fe1e28d45579265d2413be4d7e8'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'assessment_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '57a1d94b2d76459eaad1f6e105c42d43'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'team_lead'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5865133d08de4fe7b206554c97a75a12'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5871d35c6acb46c3953e0cf4ecf32c7d'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'acom'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5879d370d92d422d9f616ab322524d4c'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'triggered_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '589598de721948c780a22ba5dc9e647f'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                            value: 'funded_project'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '589a03b7f04c4f1cb3cdf5fccd0da12a'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '58c4093390a64ba4af205f9ab740d21d'
                        key: {
                            name: 'x_cog_env_installation'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '590dde648a4c4f3898523bcd8398bc76'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5923fbe642f24aa68121abe0a16d6b18'
                        key: {
                            sys_security_acl: '6a06b3743ce244529105323ac423a662'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5968a5c5d23c4d1cafb9c5b295a44f33'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'risk_rating'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59a27a19f3e54a46b5843233058659c3'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'meeting_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '59b119e5b46e49aea890f6d2f82726bb'
                        key: {
                            name: 'x_cog_env_assessment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '59c35e43b2dc4b8c82aad6b46a7394be'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'regulator'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '59dec15baf254732800bf65bd33f9581'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a00d88ea3ae4d4684b0644707fc3fb1'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5a208eedccd6465fb03613180bdda55a'
                        key: {
                            sys_security_acl: '3a77ddb8ddc74cd1857fdc2c1f7e5364'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a2ecbca92e64c5ea3ae705d9bb61ffa'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                            value: 'federal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a461b15bd704d80891e07acb97f2283'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a8520821e784393ab6a2454384b38ac'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a90f9559df04a14a54f65dbb84756e9'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_drivers'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ad54bce88e64565bbd6bed8a6c15364'
                        key: {
                            sys_security_acl: 'fbe3ab055bf747d88630087d39a3a2b3'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ae84aedeac04d3987ddd161c8e5d238'
                        key: {
                            sys_security_acl: 'dfcb0212040f4d93a2764c68ab40a1c1'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b25db5f125d47c783f9e06300edcbcc'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5bcde6bc6aee4841b0a089fd16a02c1f'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5bd7176a5a804582b54f692160eecde6'
                        key: {
                            sys_ui_action: 'dbbdde055be448f985639bcdfe09a78c'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5bf5c9af889746fc886b3339868f4f7d'
                        key: {
                            sys_security_acl: '8523bd7118d04620b3e827631fe2363b'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c2e7d114ff04d17ac33609505656ae6'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'status'
                            value: 'success'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5c432543b5fd4c9b8dfe293ab1f3850c'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'identified_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5cc7422700f043be9f578445bb79532b'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'closed_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d16750828c94cba9c3a4f1d93b65308'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5d1b9c17f7f44de6abeaa4a08fc4a481'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'evidence_attached'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d382f3369ec48f98647aa2c26e59d0c'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            value: 'europe'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d5144c6b84d496dae88f1870186765b'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'endpoint'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5d5e53d8c6ec4de48783daa39d2cace0'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_external_assessment'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d6128592cff47c3a41f3aadbcf09dcc'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'finalized_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5db45f2b9d54427590cbb67b5b857694'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'payload_preview'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5db59d75527f4caa969b306293caa08f'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                            value: 'imcom'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5de35d5fcd874a54be6e1aed6f7b420e'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5dfdef7597b443759f8427b21204781c'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e30dfe0edee4a5dbced52965bad9dd3'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'open_enforcement_actions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e52042b3c65406f9079e4c803b310c0'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ee33b2ccdc04179a3aa581ec6151bf7'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            value: 'noe'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5eef7b6dd84846b7a442618fcd4aeffe'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'started_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ef8283a7973458aa221e4d04943c5db'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5efc6acecc46487fbab18b0132563ed1'
                        key: {
                            sys_security_acl: '9cd5e03089f142b1b50a08c1c030804a'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f534077285a46f699e3f4c21a112634'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f8415160eea4d1aaa1f5f0c90c4aa3f'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'cost_estimate'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6009b959f72749bdb02538c39dc9e0a5'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '60408380c55b4de8bdf588399f166a60'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                            value: 'usar'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '605ea18c63b44cf786823178c414f21c'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '611993a6615f44f0972d4feda38562dc'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            value: 'nov'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6196d4d90b904ba3a83f5c9da0c617b1'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'open_corrective_actions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '61d7476c8dfb4bd58b6cee63aec268ea'
                        key: {
                            sys_security_acl: 'eb53cfd80f8840e2ad913d8e1ce3dc5a'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62901ff78e0a44be8eb46846fc916a3c'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62b5dbc12dfe4ce885e020020bf31b9e'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'regulatory_driver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '62be42f7ceca4145b8d098d3d8ac5a78'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'row_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '630aaaf2640a490db6389e3ce78ce305'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6335d8e1e92f4111978573c9f1cbee6d'
                        key: {
                            sys_ui_action: '454894772f944554a1b286e55a8d41e7'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '638e0a5d2d604eb4abcdac2a1b23eec3'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_on'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '63e5d4a4d2094947b1762348da873a04'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'acom'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '643dc651715e424db05f0be866e3d389'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'assessment_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6463dd4808ff4c9d923b1366f8be792d'
                        key: {
                            sys_security_acl: 'fd490c20e3e541d79f9b589af23a01dc'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '64675284fb3b4a718db56bce8596a7a5'
                        key: {
                            sys_security_acl: '8dfffebc641d486da86bf5160eb05135'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '646b3d7a64e146e8907895e61fa6809d'
                        key: {
                            sys_security_acl: '65ee6e905a374b66ab63ab43c33130ab'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '64769eb260a140dfba71371ed6f01703'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'findings_significant'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64edf503f2dc423db43dd23907617094'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'repeat_finding'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '655a497686304b2bb1d39c968e7ddff3'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '65b9c3cdf2064251925e3b4153b0094a'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            value: 'pacific'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '65be2b77a643486c89926ba76407aaf9'
                        key: {
                            sys_security_acl: 'c3fd73ab77944c9185787361ff5781b6'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6600fcf80cd045359ceb73d03e0941a3'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'verified_on'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '667b3c9d18e0473fbac00d4321ba4f68'
                        key: {
                            sys_ui_form: {
                                id: '001982e467e3449591b33fb79ca6dfea'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '66ea71cae8544c0d9630d293d0ee221e'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'start_date'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67064b56408a47abb11d0a8cbdc224b4'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6768d56234994b508552cbd8a74f03c8'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'imcom_directorate'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '67819e4b7ce34b4fb42d1cf14d515b62'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6781cc229b25469d9ee581e34b63317e'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'program_area'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '679a5464f9574ec0a440215b5534bc3c'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'findings_significant'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '67c9028a6f4e4fcbada349160686d0c8'
                        key: {
                            sys_security_acl: 'd0d3b4bfd69b432c8df246304fbc3444'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '67da4a6b4a86439aa97fdbdb217bce83'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'cwa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '683d37fc244945b48dc44d2a6b275dce'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '686a5a67df6647449806522f1951566c'
                        key: {
                            sys_security_acl: '8ab3589e31154cd0b9c4517aef01185f'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '687fb0cb4fec4f6482ebba49a9118995'
                        key: {
                            sys_security_acl: '74f20e857c65468cb47851d6785a7f53'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '68dd1697bb224226934331a795d11d97'
                        key: {
                            sys_security_acl: '1b5616d9be6d4e20b0b3b16eb330f265'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6964ee72cbdf4737bccaec1ada05c4ff'
                        key: {
                            sys_security_acl: 'f009a2f05b7240bda2e0bbbe74871c3f'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6a2236af451f43a28f7ae02ad452f735'
                        key: {
                            name: 'x_cog_env_program_area'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a4b2b91ad2f4169a4e551e8e2097a67'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closed_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6a64a124c36441ca8e647c84b825efed'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_due'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            caption: 'Enforcement action'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6aa851874d7c4f1782fedd02e50ab216'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6aab1d68f2d24884b905b7cfbfb4f489'
                        key: {
                            list_id: {
                                id: '0342225c5a3848368cb5c02ff5b396ad'
                                key: {
                                    name: 'x_cog_env_program_area'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6aea54827b3e4e22ac385bf89a43bcff'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            caption: 'Vantage export run'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6b31c2c5ef9344b69e21b89f3c9e0da8'
                        key: {
                            name: 'x_cog_env_assessment'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6b7803032faf4ecd9da27f536d2e3c43'
                        key: {
                            sys_ui_action: 'd7e415f595a94f4abff765ed2424a478'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b978355ef25442190124a471b94180c'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'snapshot_taken_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6bae7c371adc4321a5f1a7364538c6f1'
                        key: {
                            sys_security_acl: '9c8664bbdfaa44de888f1014e4c8a648'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6bc3cdce4b3d47409764e78e28abe4b4'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'fiscal_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6bc48a73a4bb43f9bb8a3101065d2300'
                        key: {
                            sys_ui_action: 'f486b69131d04cbcbf32fa2e2b53988f'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c2f114c65af46bc9c5aea802b30d6de'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c5965aa461d4813acc0066cdef051fc'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c88f590b15441b0afa5421180e31dd0'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'allegations'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6cb01e638c9a4562839b344677550afe'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'fiscal_year'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6cf16e6c2ce0462ba608a53f4eaa04df'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e2474e2300b4bc89926790eefafb895'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'response_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e256510db364d8bb308584c6a183e33'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e49308ce5d34d069358631cccbeb751'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_computed_at'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6f20247c437a4c09ad2b2574d0610ffc'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'funding_status'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6f209116624f419280b057458688c11e'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f676ea587794e0192ab9d575bb9d077'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'identified_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6f7abe5b0a4b4011bf5effd87b8fe2a2'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_lead'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6ff47e3cc5d346aea1771144174fb46b'
                        key: {
                            sys_security_acl: 'f106d18131ca473593919f34abfe43b2'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7062ca0bac974ae5a6ce9e541179fb65'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'finalized_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7194e9db1e0941ffb44ad97651922d13'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'ar200'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7195dbde37c14fb18524285246da7116'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'linked_findings'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71c4f394c58845ebb209b1341c1c078e'
                        key: {
                            sys_security_acl: '2169bbfdc3cb40efa63088c5177e74dd'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '724feb10586f4e4b9e7ade9ff6d0aff7'
                        key: {
                            sys_ui_action: 'f90d6d1cfd9947faafc136d5995995b0'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '728c597248a8447eacb7cb72b6aef3a4'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72a08610e64042cfb810e595436a12d4'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'evidence_attached'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '72a11fa01dc24395b2c92cc2713cde30'
                        key: {
                            sys_security_acl: 'ea21cf7b63b941c6a4bdcd755b0a4cee'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72b5983acc874f4b99c15e5c795b9150'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fiscal_year'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '7346af6740ee466e9e43af737aaab17c'
                        key: {
                            sys_ui_action: 'd7e415f595a94f4abff765ed2424a478'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '736a9b11515646dcb9df8cd09975042a'
                        key: {
                            sys_security_acl: '2a92aadeabc645f8a10be32f8f81b820'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '73a98cb9ecfb4239b1044f9fd93304b9'
                        key: {
                            sys_security_acl: 'f9c941265dc847329f0d4f8afb946669'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7422031b717a4a6bb2b6ed44414176d8'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'response_due'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '744c3576868947f4af6cb850b422c3c8'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '74b431e635e24faa9f502da053705941'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'trigger'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '74b71473cce7415787a12e8bffe68ad8'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'repeat_findings'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '74db4e48c28f42c0aecdcd71bab4cd37'
                        key: {
                            list_id: {
                                id: '0c64abcce5d7463cab835541a08d8ea3'
                                key: {
                                    name: 'x_cog_env_regulatory_driver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'regulator_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75062080d65f4371ac0d29708f9a53b7'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7547ffa1235d458a9adbab2271ea1ca3'
                        key: {
                            sys_security_acl: 'e6c0816906ed43d1be25d92413a3b8cb'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7594454aa4f942759df70f8860f75c2f'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7652711428a8424c8d6903c715a7d6a4'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76b4cf710731476c92a265e8c8f164ea'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finalized_on'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77325275a578422586e893e5bb7cf0fa'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'evidence_attached'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '776a703fd10a4eb3b97613008c352309'
                        key: {
                            sys_security_acl: '8dfffebc641d486da86bf5160eb05135'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '77c25dd815c94db083fcb3173515ce69'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '77ee849c62e4412aaab7eadbe11a74b0'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '783b45f0dc4a41d5a68eaf18503f08ea'
                        key: {
                            sys_security_acl: '14a0a1666c954ec480bdc5d35c45fcd6'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '78511670c11e4aa38c8455bfa9737102'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installation'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '78907a09931f4955ab481a77b7985ede'
                        key: {
                            sys_security_acl: '3713ffecd50b441fa6cbc6bf039de322'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '790fdd15d9064426bdf6192a72ccabff'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7925803343eb44bdb5d8c45caf336e3f'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'scope_notes'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '793c905d095f4555a7170198eaa02642'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'finding'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '7943e55856094bd4a9855f73fe729bc0'
                        key: {
                            sys_ui_action: 'a0ac30d07951494db49ff21c8fa8ac39'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a158814c9544513a30ca45b8aa95f23'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'trigger'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a2f7d35658b48dbb067c816d9dffa1b'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '7a4ad394d47d479b8adcfe059e265111'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a531e39471b4c07bd89dffda27d01e5'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a8b85c7147149fabc3e2d75b3833b77'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7af0aa31f71240cc82b5927a091fb875'
                        key: {
                            list_id: {
                                id: '0c64abcce5d7463cab835541a08d8ea3'
                                key: {
                                    name: 'x_cog_env_regulatory_driver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'program_area'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7b0e2bf6236f468fb1bb069d98ccb187'
                        key: {
                            sys_security_acl: 'abed186de7b941b788f56f50d400911d'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b178f16f8494d4dad2e68c96a5af2ac'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b303aeb82084cf4ab03b9a6829ea122'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            value: 'training'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b38766b8d10403b8ceb944794cf1ebc'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                        key: {
                            name: 'x_cog_env.commander'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b6e472cc09544688a2d7b7e05581b63'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'schema_version'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7b81944f8eb74b57a2dbe64461d765b5'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7b8aabe8963d40f3846222caf9416bc0'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'caa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7c42b2c9d2f04cf5958b400063efa891'
                        key: {
                            sys_security_acl: 'f106d18131ca473593919f34abfe43b2'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7c57a2a63b0a4d0cac089a248271e6a4'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'response_lead'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cd0da97dbd24d07af805cfff01cc438'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                            value: 'federal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '7cdd15599848404b8e21235177c7737c'
                        deleted: true
                        key: {
                            sys_ui_action: '0ab9ec17be5940c7bfd8184e2b9502fa'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cef57efb5b4489f813625ec73aff633'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                            value: 'arng'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d2a762978cd4b5090326130da594306'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            value: 'warning'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d60f8d208064df999a58bf9d77f0a69'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d69c49b744e4035a5290bce483703de'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                            value: 'response_drafted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d8e0be43a79481eb3d48fe28155db7b'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verification_notes'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e3bd8e6f39f49b3a13e462a7d5546f7'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_total'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7e43a9ac14fb4be5910d5cf72a4b4eda'
                        key: {
                            sys_security_acl: 'd0b9c41af2bd4b61a2bd380974f2776d'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e88ebd3f8574df59f0aa7bc7e70dc51'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f163fb63cdb4ab899af190fb14733f9'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_repeat'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f2bcf32299845b1a575f826879c4594'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_computed_at'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7f720b34dcc4415bb208375be22aaadd'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '809391b9655d47319b2b446e36795457'
                        key: {
                            sys_security_acl: '2169bbfdc3cb40efa63088c5177e74dd'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8097bad9fd6f45aa8cd47708ce006422'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81cf8e1ef04245728aa1b9343fc146f0'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'penalty_final'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '822a318a02a1491781c0544302cee560'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'commander'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '826cc7a62eb54a7e8c06b86a5ef7fcd5'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                            value: 'consent_order'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '82887298d0cc4d92b1760376708b5f73'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82c43f3c84ad4bff9351b6de72d2a765'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                            value: 'finalized'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82cbb3650b10491383f02282a49eb968'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82e13fade15c47f6a83898723c95ea7a'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '83537d5e6431402a91d581437ff9452b'
                        key: {
                            sys_security_acl: 'e6c0816906ed43d1be25d92413a3b8cb'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '838ca99fb2fa459d9fac1b395cc25d3e'
                        key: {
                            sys_security_acl: '6db6d357033c4cd489745cd8e0bc9357'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '83aefdfa5ada4414bdd6cd5ab11446af'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            caption: 'EQCC meeting'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '844ab664dc6740fd8eee3cca80a8389a'
                        key: {
                            sys_security_acl: '8523bd7118d04620b3e827631fe2363b'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '848a7345d8e044d19f3a6d74495abbc2'
                        key: {
                            sys_security_acl: '7a32a7ee3a31488286ec225de65825e2'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8491581723fb41ea95ce6ec5db919b21'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '851fd2e353884ff891a8d88feebc541b'
                        key: {
                            sys_security_acl: '03966efeb4be48a4b6859166fe554324'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '85511d50d6a544d5966954aeaed3f509'
                        key: {
                            logical_table_name: 'x_cog_env_installation'
                            col_name_string: 'uic'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '858cf2d6b34940cf987fbf12885cd0b2'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '85bba082e50b47daa190cffd571c8683'
                        key: {
                            sys_security_acl: '3a6f9886af2f41838fddb93d65c86782'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85c71a16f91c47f5abfa3ec07bf38cb9'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8665132536724818a5ee58f5510a9b6a'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '869006b3ea1549d1bc2965bd28d81f69'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8704d715adbb4a42b1c29f4daf63a3de'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'enforcement_action'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '87706e6f4b12422b9e1eb1d5fa7368ed'
                        key: {
                            sys_security_acl: '467f66d85e134a7ab9bb6ad4b8216991'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '878328e33aba40998030a5ae53aa68b9'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'identified_on'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8799fdc2b76d4345b752d10d816e5ecf'
                        key: {
                            sys_security_acl: '00486f0a67d049c5800a49397c9d5a92'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '87de3fa266f54841836937517c965f34'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'days_to_respond'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8835953906ef48e5b8d7aad2b41262f7'
                        key: {
                            sys_security_acl: '9944b6c082fe43288117ae0d52d4ff31'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '883f2ae5cd904c97a70824952f3cc95f'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'action_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '886b1d8e0392450d810a54d24d303919'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88e5d8990fdf4a29b0f547e4a6714e57'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'state'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                        key: {
                            name: 'x_cog_env.compliance_officer'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '89a3de6a01474c7d9138778b46c78ee4'
                        key: {
                            list_id: {
                                id: '0342225c5a3848368cb5c02ff5b396ad'
                                key: {
                                    name: 'x_cog_env_program_area'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '89d554ae484c4736975a7c09554b7aca'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'open_findings'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89dc8f826cca49458314764493a82ef8'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'days_to_respond'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a2b4778025b495498e26cec68dacebd'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'tsca'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8a806b6b6d9141e6a848f819967b3fdc'
                        key: {
                            sys_security_acl: '2135c4eb7649490da3029b8d5a125019'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a98ebb987844938aba17a3e35bda489'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b2e3d77b0c944e5b70450d2f3523623'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'repeat_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8be6559eea754f74a6632491f3431ac0'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8c17048d495b4a01b649d2c1a6226406'
                        key: {
                            sys_security_acl: '8c8f1e4b77d546c29db7fdfed4904c6c'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8c1838dad3e3416b9c0e5d26edb3c5fa'
                        key: {
                            name: 'x_cog_env_finding'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8c492c4933e24ee7aae6430c4a8754a4'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                            value: 'procedure_update'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8c9806b5cb5e4bb9bb9598226ede24f4'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8cc0e11b84bd4cf89ae3cead93cf6f6a'
                        key: {
                            sys_security_acl: '14a0a1666c954ec480bdc5d35c45fcd6'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8cfba647050d45f68b833ee654fe923b'
                        key: {
                            sys_security_acl: '80db1b81bd3d42e4ad6b9c507c5c1a71'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d156e9428cc47d9b4fbf0fe076e79e2'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d7bd5081e674d54aa012bef67c59c0e'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'allegations'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '8da784c688a84435875d8936b30d9c97'
                        key: {
                            sys_ui_action: 'd7e415f595a94f4abff765ed2424a478'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8dcae76dd779430b85ce4524a8480c9e'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                            value: 'army'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8ee39a7a47974067a6a266843dc7644c'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8f72f98ae9674428b63620ac9a97b5a3'
                        key: {
                            sys_ui_section: {
                                id: 'f0fc16bd2ee5474b89d2da53bc112322'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Penalty'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'penalty_final'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fd05785d227434aaef34f9d161696a7'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '904169b969624b30a177c63df487fa3a'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verified_on'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90981698246849ea9d2dc65fbe891fa7'
                        key: {
                            sys_security_acl: 'f009a2f05b7240bda2e0bbbe74871c3f'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90dce38bf6634a3e98401ce2aa388755'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closure_due'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '90f671f27f524fd98cd77b4afd8c8f17'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'finalization_due'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9110d7d60a774941bebec3555eb3fe00'
                        key: {
                            sys_security_acl: '364d88c56dae49e7aeaaa47d2f6ba7d0'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '91367256a10249c4807f81de19136370'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '914a62241be14d238d22113f62ef2c4c'
                        key: {
                            sys_security_acl: '320b71c9039d44feb2156b2d84500614'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '91dc6c478b164fecac66f20692cb69cf'
                        key: {
                            sys_ui_action: '9125bac5f4b549dca3933f96cec74b44'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92131cf4ce614402a4127aeab7352cb8'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '92760b09e8ba41b88ea25fdf512036a6'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '927d9cd7a5f84ae9935363b4df519cb8'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'enforcement_action'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '92df36c3fc7d479e9c85ba7a727440e6'
                        key: {
                            sys_security_acl: 'dd222a01910d44eb878cf0d631d1aa72'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9322b68e2ee54c8694c08848f08406b5'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '934f98b97294470dbc7eb2dced2e3775'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '93d9a9876537401b9ef22b080a44d280'
                        key: {
                            sys_security_acl: '7043c615807d48a6938f9f4f7e42c0e5'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9425567e67e240039370304c27199892'
                        key: {
                            sys_security_acl: '88f9ae8366a44c1faf74b67402996fe8'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '946b22501e9043f295afc8a9bb6551d3'
                        key: {
                            sys_security_acl: '03966efeb4be48a4b6859166fe554324'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9476b92abf2e4d86a77d6f8402d1c8d0'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94b5d5aa1b4b4feba3d5bb2fbc0a2a64'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            value: 'none'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94efd4b303734a389eb88958beca7fe8'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'commander'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '950ad6693fd7482d972fb63aca197ba7'
                        key: {
                            sys_security_acl: '03966efeb4be48a4b6859166fe554324'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9523b870324c4af4934492a552b394b4'
                        key: {
                            sys_security_acl: '7043c615807d48a6938f9f4f7e42c0e5'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95243144eb094d7d812cf566f433d473'
                        key: {
                            sys_security_acl: 'c798767d59974c6aabc05449e2990042'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '952e21c169cc4e7eafa4a60fae063c29'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installation'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95741fb134f243c9ba160821285a4727'
                        key: {
                            sys_security_acl: '2de9382d99d24b5098ef8bdc3f729940'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '958a0d071fc5418a9fd570acc7c4499c'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95a3b218d6324b98b3c97520af7a20f1'
                        key: {
                            sys_security_acl: '888e06b370254825bb5496c88c4143e1'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95eba5d73a5d4ee79d67c2e7575a8cb8'
                        key: {
                            sys_security_acl: '8ab3589e31154cd0b9c4517aef01185f'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '960f64acd7d6401e9d05184f71916dea'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'program_area'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '96122de0f0344f6b97786bafb82f954b'
                        key: {
                            sys_security_acl: '888e06b370254825bb5496c88c4143e1'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '96aaa643827c4304bcedf348ae56138b'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '96b86fb9e1514376b6b713b0f7583025'
                        key: {
                            sys_security_acl: 'a6194c5ad3d94930be9488fb4d7e97af'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '96e25a68ca524a3e9e0dc034dbbbedfe'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                            value: 'verified'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '97165429e4334cea9585c533a86c738e'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'funding_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '975ca4cf08fe4110b58082c6c7ffeb89'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_drivers'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97eea0c7e04f40448a9ddaba0aea56eb'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '98079bb1e8724085a6a1a7ec5b8e5c37'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'schema_version'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '984cba0cd2a2461a82a33d18f5526703'
                        key: {
                            sys_security_acl: '8523bd7118d04620b3e827631fe2363b'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '985aab3319a8439396e9a59cdf0d75b8'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                            value: 'risk_accepted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '985c50809af84e7fab3f0fe17b9353ab'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98621705342545dba4ec25ee37f0f246'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'response_submitted_on'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '988aed6f35a84ca193ebcfbbc8f355d9'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'triggered_by'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '98cb2164a69947998ad1d01808c93ce4'
                        key: {
                            name: 'x_cog_env_installation'
                            caption: 'Installation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9920bba02dc745e6b32a500487e9fc3a'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a05658a24a0448196179375b9ea26f8'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_major'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9af3e567f4e1473d84b58802f8c2c764'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'open_findings'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9b243a7b73e742d4ac714e552208f577'
                        key: {
                            name: 'x_cog_env_installation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b245bc18b7441969d081ffc9d8a0587'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b34372298544fc796c23128bbd69a55'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b60931d82844ead88295423fab70711'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'repeat_finding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9b732712a2f64777adad3fe5754ac276'
                        key: {
                            sys_security_acl: '15e973ba47b24242853b58badeba3057'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b866a1736a24536b39ac0019cb8bea7'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9bbf5e96934e463398e62212ee9f3ac4'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9cc62190dc8d4cc08a7514b492c4ae6a'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'open_enforcement_actions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9d6cb7c384a647bea0ec881fc99374b9'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9d6e1c6911ee49e5984b03de11638f62'
                        key: {
                            sys_security_acl: 'a6194c5ad3d94930be9488fb4d7e97af'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9d7cea19b4ae4fb1ab8e47fd24acbbe7'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d8c082f59b349fbb4c5c3d44edc0b89'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'http_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9d8c228344f44124a35553a44b00b072'
                        key: {
                            sys_security_acl: 'fc6ab46b870f475a997af38cb287415d'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d9ba2b7650d428d8abc3fe039c97d9f'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                            value: 'readiness'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9daad84a22ac41a7a7494eda42cd8e7c'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9daca2f9e6c34481af1d5a6fd5943ae2'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e2d3fa8cbb0411b80e3a0dedad9c503'
                        key: {
                            sys_security_acl: '5693e713512d4841a9a1500b28547192'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e5aa637d0114c108324acbfdd7ce9bb'
                        key: {
                            sys_security_acl: 'c3d8d644b90d42f1a12087f895e09744'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ebb643906b444df9d3f210f17dc15f0'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f35b31303b64e06b8217aba011745aa'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f5c41f727b84a27ae0c8977ba8712b5'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9fa9f04004184dcabba98e15791c66c5'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_closure_on'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9fb20d4ec43c4b6db4ddac2c1877a268'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulatory_driver'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9fd527f7f58149b78b4be6a9026c2692'
                        key: {
                            sys_security_acl: '00486f0a67d049c5800a49397c9d5a92'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a02fb714686d46bc81c759e79dc44341'
                        key: {
                            name: 'x_cog_env.assessor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a0737dd1e1f542c5a78bb75a571a20d5'
                        key: {
                            sys_security_acl: '6db6d357033c4cd489745cd8e0bc9357'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a1390c05d8de4b2bb1d898c7b85f4888'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'risk_rating_at_meeting'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a1aa401240514afaa8f9ab9d28079dba'
                        key: {
                            sys_security_acl: '3340ea4636d84a5d8a23a8cd5d83a367'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a2053081b5774f5ca8cb6360644d4a0a'
                        key: {
                            list_id: {
                                id: '0342225c5a3848368cb5c02ff5b396ad'
                                key: {
                                    name: 'x_cog_env_program_area'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a23d3f99ce484de8a96f3495c4994318'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a24fe037046c4ec9ae40e28f614393f8'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulatory_driver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a263e49b405d4f12923ba212290a3327'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2e0ec34849246e8b4e436a14e96be5d'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'uic'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a2f84f6d553045c2864594c76ae08b10'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'oversight'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a38eb16c781d4ed38d3d6ebd8b0eb3ff'
                        key: {
                            sys_security_acl: '5d8b32bb446948998a4df9cbc5e2fe2e'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a3fd523ea9864597bfc5b4027ad9a494'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_rating'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a42ae661ac534f28af81b624ba1fb8af'
                        key: {
                            sys_security_acl: '46032701e5304ec2934af1b6ff480b06'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4787a2fcaae41cca4de6eecf650a1dd'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a514b656cdc54bda832a38fc8fea6f55'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a5686f81329349fab483c35b1f311a61'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a56fc7076d0f417b8e91a57aad900e25'
                        key: {
                            sys_security_acl: '5d8b32bb446948998a4df9cbc5e2fe2e'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a5712ca153b04395a17441bdc23a90af'
                        key: {
                            sys_ui_form: {
                                id: '589a03b7f04c4f1cb3cdf5fccd0da12a'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a5b62de9820d488f851ab5eddd86022a'
                        key: {
                            sys_ui_form: {
                                id: 'bb3e4669c9e94186ba41cbac7f7da47e'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a5e393ddcd3240ee91623db1fa525c0e'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'days_open'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'a5ee4b619ea049ce9ffe6b65901b7bb3'
                        key: {
                            category: 'x_cog_env_corrective_action'
                            prefix: 'ECA'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a657857998d94a46bca04dc404adcc1a'
                        key: {
                            sys_security_acl: 'cdf1d99b4c044d7c8465786c1facf004'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6b0ad09ad0f4df385623fa75aae2e7e'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'response_lead'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a6b8b98d7360470c9cbd28d1b7ff3804'
                        key: {
                            sys_security_acl: '829c0c5ee7fb4d6ea64028187ddf4f31'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6d50bb3d2a94bba9af93b965d7226f5'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a778130794a649cabbbb8fd953d18088'
                        key: {
                            sys_security_acl: '57225586f2ed49d797630594c7c6c2ca'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a7c6307d0fb042499bcda931d0fc1b46'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installation'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'a86a1de68779477cae6d029c688dcb19'
                        key: {
                            sys_ui_action: 'bbb7f9f7a57d406e82012e4d1a99d0d3'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a89021e7ce39459e93970e89f9c96d36'
                        key: {
                            sys_security_acl: 'e60fe7b45e3645baa712df1327f9fabc'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a8bce6bbaca445cfb679c9cb21ebaa4f'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a8fc76a122f94406a1f446917a6aaeda'
                        key: {
                            sys_security_acl: '3340ea4636d84a5d8a23a8cd5d83a367'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a99506c9dddf4853b15a5ebb0119857f'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a9d5c38308c043d19b29a257563e7d52'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aa0318fba199409281eb2d0ebb2ffbcf'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'percent_complete'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa9b9194576d4efd97d2d6d599d386b0'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'esa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab37c0925a3b428dbb180e857e858483'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'trigger'
                            value: 'schedule'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ab554978d206410598bbba9354856920'
                        key: {
                            sys_security_acl: '4de363356f3b462f9ee15deb37c8b059'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ac6e935b099f47cebd04de52881ab770'
                        key: {
                            name: 'x_cog_env.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aca4c2e4d53447538711878d52106af2'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ad09a42eae8e45aabf595b682836ec1e'
                        key: {
                            name: 'x_cog_env_assessment'
                            caption: 'Findings summary'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad1618ee8136459e9593745ab0ee2da3'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closed_on'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad41d22443ba47939d35d64ff54171a4'
                        key: {
                            sys_security_acl: 'c3fd73ab77944c9185787361ff5781b6'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                        key: {
                            name: 'x_cog_env.hqda_analyst'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad873ff8e1cb4e1bb0aef19a7a153ed2'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'adce14bef4474536a35ba7e6252dea55'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae4edfebd51a42a8afbdb614851d5bb2'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'finalization_due'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae9dfe8d06cd49338fb60e3ae8d2f7c6'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'open_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aeae0203bf484e678aae709a7bac8e83'
                        key: {
                            sys_security_acl: 'a6194c5ad3d94930be9488fb4d7e97af'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aee0ae814d1a43ad9f9f5e069c632416'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'enforcement_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af1bc9348c5e40e89aa906d788bc7a5e'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af46693e215941229e9a16cd41691bac'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'installation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'af9fa0749543478f899218fe16f50854'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'chair'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b00778dcbcdc44caa36736b85cf6b459'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b065a2b4cd3f49e8aa31e74ff7739d6e'
                        key: {
                            sys_security_acl: '320b71c9039d44feb2156b2d84500614'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b08b933be5884f4e826f9bbbb53d5307'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'nhpa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b0c054833c2e432bb89a1082c1901719'
                        key: {
                            sys_ui_action: 'f55e9a5ac73946f1aa2358c66deece6a'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b0e3e80edfef4e18bc71dd428effba9e'
                        key: {
                            sys_security_acl: 'fd490c20e3e541d79f9b589af23a01dc'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b10046a47344495abfda5d720dba239b'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b10541bbb5e84ef7b13cc05c9e70618e'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'chair'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b126210476664b2a95c81f3b9cd9b7eb'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'evidence_attached'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b190923875454ce3b827b9518192b0db'
                        key: {
                            sys_security_acl: 'e6c0816906ed43d1be25d92413a3b8cb'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b1cf945ae8e848faa03fcb537512b225'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'findings_repeat'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b24a4622bc104a0f8197a0db0176772d'
                        key: {
                            sys_security_acl: '7043c615807d48a6938f9f4f7e42c0e5'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b24a95bc375f44828f9db8aa94054991'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'aging_flag'
                            value: 'green'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b24e244817ef461bb6af267e9439e4d4'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'program_area'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b28f9b7a189a4a99b5446db0471ede6d'
                        key: {
                            sys_security_acl: '021a3359ded74952a5c6d52cba1011ce'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2cc0ed811144102b29aede07887c409'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'content_hash'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b2e386dde9dd4baf995084773a7e19cd'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'overdue_findings'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b3142e6d12804caf930d48e50560b641'
                        key: {
                            sys_security_acl: 'c017d6d101b347948d2692ef2ac74ba2'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3b67830bb694df8bf1bcbffde4f9bf5'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b41a16380b6242e1b3a182c6e91e4cbf'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b42c5119407142a597a1b1755555ffb9'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'regulator_level'
                            value: 'local'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b502d1765dec4f949090022dc8a1025f'
                        key: {
                            sys_security_acl: 'f9c941265dc847329f0d4f8afb946669'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b54cabfd31a549cfb23d3b1fc9ff30e7'
                        key: {
                            sys_security_acl: '8c8f1e4b77d546c29db7fdfed4904c6c'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b55d7e003dd14f00957ae99eb67b7227'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_rating_at_meeting'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5b31d0e35ab4186a3e3c16c19eac227'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5f4f22e72864ce29600fc294e7f0703'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'data_product'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b60b8b9fe8a4485da6f9818845ed9e53'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b61b652db1ff48eaafe3201be59c576e'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'verified_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b64a3cceaf6c4607a6120cd64c215529'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'next_external_due'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b65aa867ef67431fabb6c1b3b6a60ed9'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'next_external_due'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6a3d5b892e24a71a2351368b8ff3eb5'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b6bce87df7504655ad86c45e9c89740f'
                        key: {
                            sys_security_acl: '908ca8eb2e4740cbb124081993132d3e'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6f9c18e0ba2421cac80a65601d2841b'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'snapshot_taken_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7185f26eae742b9b66437a96616ba0d'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'payload_preview'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b7f659a993cf452d8766943da99c1f58'
                        key: {
                            sys_security_acl: '2135c4eb7649490da3029b8d5a125019'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b831bd96183a42019995632a039805d4'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                            value: 'local'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b85e0e926ba74279ac1b1b590446f5a9'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b885b0e5ec4541ccbf8ffe60b4346a36'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'decisions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b8ccd852fde440399052f894c3095882'
                        key: {
                            sys_ui_action: 'dbbdde055be448f985639bcdfe09a78c'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b90f53b2446545b0883b689ef3dbac36'
                        key: {
                            sys_ui_action: '29ec02193c7a4c1391cbe3ffd3a86183'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ba7f36cc54134c638d69fefb83a1e70f'
                        key: {
                            sys_ui_action: '9125bac5f4b549dca3933f96cec74b44'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bac66df4b3f546e29f3c7260641733ce'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baf15d894ff94508be9f2de7c8cb2ff5'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'baf6db56d1d448a5870fb8a730ebe81a'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'action_type'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'bb3e4669c9e94186ba41cbac7f7da47e'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbb5212baef247afbcc210b18b22a1a6'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'previous_finding'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'bc63767b2fc345da970acdbd0442bc2d'
                        key: {
                            sys_ui_action: '9125bac5f4b549dca3933f96cec74b44'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bccefbeec2af4e35a1fcab5ea87802ef'
                        key: {
                            sys_security_acl: '7a32a7ee3a31488286ec225de65825e2'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'bcd7435cba0f4282aa99391e2b5960d8'
                        key: {
                            role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                            contains: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bd80f82a41d049c89551c43868139fad'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'cost_estimate'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            caption: 'Corrective action'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bd9edd95dc2c43bfa5bd43f45e4a8904'
                        key: {
                            sys_security_acl: '7a32a7ee3a31488286ec225de65825e2'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bdc8faa25da44975914ff35a8aa0a7b2'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bead7f2828d24d0cb81d9c94105dbccb'
                        key: {
                            sys_security_acl: '2169bbfdc3cb40efa63088c5177e74dd'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'beedcfa80a0b44b19c3bf6895f9b5219'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bef5ae9c978942178a0be13e90146738'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'penalty_proposed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf05e3d3fe0541b98e71125ed011fdcd'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf82bb9320504044b8ef512dcfc84e52'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfa6a5f0f29d40c98012e1f0557c340e'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bfb3055bf8874a6b94e5bd40725cc456'
                        key: {
                            sys_ui_form: {
                                id: 'f2319b5353004c689186bfbf9e3a9ad4'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bff4cd7404954de4a0da813c5eb4001c'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'closed_on'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c00eb289d0f1423797b96a328be60554'
                        key: {
                            name: 'x_cog_env_corrective_action'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c023c54b66054ff6ae9e8dfcc8109d22'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c02bac6487e0481dadf37598229aaf8d'
                        key: {
                            sys_security_acl: '7e39314fc89442d884c04ed729fa2662'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c038b50e1e994378b1f1b950eb8e8e95'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'http_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c0a7b0775f434981b6e944f45444854f'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                            value: 'state'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c13a3a49a22c4fc7802667d0a2473946'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c196d288ce22440d98eb624b809f5ea5'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'chair'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c1c9f76c99954c2c8dfe7d0f16fb4e4b'
                        key: {
                            sys_security_acl: '888e06b370254825bb5496c88c4143e1'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c1cb0083fcd74353968a8abe69ce64b8'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fiscal_quarter'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c2041cab903b4f8697479d8ff57a5d00'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c209d5154dae4b17953779dd820463b1'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'open_findings'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c20e2ebc47944ec3ad525d29f7a3f2ea'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'state'
                            value: 'ca_assigned'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c2517ba7e93e454ba60ad2b2a6da76f4'
                        key: {
                            sys_security_acl: '8e266fd5bf9e409e8754a9464c225e56'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c255f5a8795e4f2da40c49bb63af0b17'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c28074c295b84272bf541467cf7358e6'
                        key: {
                            sys_security_acl: '4b1c7f137cee4991b188ca0e600d144a'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c311efaa8e7648d9b3cc3132e496153f'
                        key: {
                            sys_security_acl: 'fdb0b75e73374c0cbc2aab5b2a21ece8'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c36acc208f7f42efb404a4e7295262a2'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c36c93599efb4737b775eed6c0e486c3'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'aging_flag'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3945e33e64f46cdb9556f55e97b5a56'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                            value: 'response_submitted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c3fc8569eae744eabaef57b0ca0762a8'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'meeting_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c475f4074cc744eea949f7e3bda7e24d'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4e7d23cbc2f4a12b08ffed69eb0aa41'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c547e46815a049f5a397da7e6c36dc9e'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'fiscal_year'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c5c0d990655d43eaa462ccd42ed23f6f'
                        key: {
                            sys_security_acl: 'c3d8d644b90d42f1a12087f895e09744'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c5deff7af0cb4342a118352d66350e05'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'action_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6171c80186d4b3c881d1f838089db51'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'team_lead'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c64f65e1cd564f4194f4ca8702915f0e'
                        key: {
                            sys_security_acl: '908ca8eb2e4740cbb124081993132d3e'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c68dec3e52014aed8df59962b55897bf'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'payload_preview'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c6bef12b564b4723abaa2490df491b30'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installation'
                            position: '2'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c6c3d604a8874fdc823bec46737c5f48'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6e547f2f60645ebac6f09db3c4c4450'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'c6f21769e33f4ca6963092d41fb523e0'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c757133049d34053b06d74672ed52853'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c78afd4370cb427ba881f0f1b2af0cf0'
                        key: {
                            sys_security_acl: '3a77ddb8ddc74cd1857fdc2c1f7e5364'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c7b4f76b38bc438cbdc57061dbaa0095'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8532b9cdd584851a28c07500a60a58d'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'aging_flag'
                            value: 'red'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8591989c52c460094632767e2097204'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'garrison_env_chief'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c8c3e7fc010744239345ab09f96d5de2'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c8c7f52bc78c41a983f2e83f326c5795'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'trigger'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c915d22431a34bd88f0539c7216bd2e2'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c9280d9f9246453d968355f582f004b9'
                        key: {
                            sys_security_acl: '5d8b32bb446948998a4df9cbc5e2fe2e'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c9583ccb0b5f47878955dac4f351a78e'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'recordkeeping'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c96fb13463cf45f4a9c07a55c3225133'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'started_at'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c98d8c466647477faf6debec8f648593'
                        key: {
                            sys_security_acl: 'f009a2f05b7240bda2e0bbbe74871c3f'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ca3a6b7a56b5433f9a6ecf5b9fe60fb6'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ca8c1b31d06c415aa3598339affe4a6f'
                        key: {
                            sys_security_acl: '46032701e5304ec2934af1b6ff480b06'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cab5af2acbf041338017941f19a9f35a'
                        key: {
                            sys_security_acl: '94bf62b155c141bc88a05b55b39db449'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cac3b25bcbd04879830badc013eb605b'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'cb704494ef544d1a99476a4bea0327cb'
                        key: {
                            category: 'x_cog_env_enforcement_action'
                            prefix: 'EEA'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cc09aed32a46414bbb331acf1c0c7d11'
                        key: {
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cc1a8ffdcb8342d984c41a9cc1f19747'
                        key: {
                            sys_security_acl: 'b3aeed52add143b1ba8e48fc4e613932'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc6dd7bbafd8485ca8fbb920b1d9d34b'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'garrison_env_chief'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ccbdb2bae473420ab13131446d8e8ebb'
                        key: {
                            sys_ui_action: 'bbb7f9f7a57d406e82012e4d1a99d0d3'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cce010c29f8743019cbf3064df63955c'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                            value: 'immediate_fix'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cd65aeaf456947c19fb56e3571867525'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd7e73d46f7846b1a948221e1daa17dd'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'days_open'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cda4d33ebdfa4b0993bb4b9394ffc6b2'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cee661463b4743c3b156925a6debb591'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'finished_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf3fb8d5154b48b49908cf78015900f6'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cfb6790d3dfe4f639b3957782210a372'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd02abe2ba2b340488b97b2f39691b1e3'
                        key: {
                            list_id: {
                                id: '1324228f7b094615ad6e966cb45af624'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'open_enforcement_actions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd045b13f9ade454d92bf763e805feb0c'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd061d690dff2493794583359e7e92506'
                        key: {
                            sys_ui_section: {
                                id: '19a98030c227461797e82962c627a57c'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Repeat and enforcement linkage'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd17ca25c2d734758bd4886150801b993'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'penalty_proposed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd1c0e63066a6469b8a53dec690855239'
                        key: {
                            sys_security_acl: 'ab9de078225a4f53b7dd4c4569339888'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd1d61d60398345e09448733f9a80ed11'
                        key: {
                            sys_security_acl: '8ab3589e31154cd0b9c4517aef01185f'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd2687061d03e47299e2e855f295c6b1b'
                        key: {
                            sys_security_acl: 'c3d8d644b90d42f1a12087f895e09744'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd294c290e5174139af00ae468ec01030'
                        key: {
                            sys_security_acl: 'a56e8f9f055f43eea1da4f8f0956f533'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd2bc0ce4d23c4feeb871596f791cc87a'
                        key: {
                            sys_ui_form: {
                                id: '589a03b7f04c4f1cb3cdf5fccd0da12a'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2f49d574be2440e9213416ce7816ee6'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'uic'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd2feeea630b14c8caa0c6ffe774bb5a5'
                        deleted: true
                        key: {
                            sys_ui_action: '0ab9ec17be5940c7bfd8184e2b9502fa'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd305119917034b7b89f06c125a436c97'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd30c2dff8168478886b229810d359b82'
                        key: {
                            sys_security_acl: '22ea7a7dae1d43f987fbbe9dec82563f'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd332c6dffe9245aca9e5e3c5e7875144'
                        key: {
                            logical_table_name: 'x_cog_env_corrective_action'
                            col_name_string: 'finding'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd33917b23f78405eb0a9f888946162a3'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd34649c0817a4167887ac4cfc75a40a4'
                        key: {
                            sys_security_acl: '156ec1d7aff94b1aada27cb76e0877b6'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd388b7512cc14507aa137947d6082355'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'percent_complete'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4644ca5c28d443c8c52a3f07ac8bda0'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_minor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd4be868794104b5d91d4ed7f2a4f38d2'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'open_findings'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4c069facf954c7588eec02f7ccc6fed'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4c775a07a644188b06f28000ca42a7b'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4f7624a386649e7a9bc0c1dd498d9db'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'contractor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd561f5a7288042569f9a0f018e98136b'
                        key: {
                            sys_ui_form: {
                                id: 'f2319b5353004c689186bfbf9e3a9ad4'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd5870e4dcb254a019e62e92d02f1d915'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'team_lead'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd59f557e6b9b40d6afd00066616111b2'
                        key: {
                            sys_ui_action: '7abbfe9663d840cf9005fe9d903a594f'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd5de521ccba0477ea49a8473ba6e295e'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'content_hash'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd607d75e61694a8c846839f7bf088ba6'
                        key: {
                            sys_ui_action: '15c8b57daf0c43f99af0910ec9d4eef0'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd60861f3779449c29ac3c639e420b0df'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd619bf69cea7412ab696f20b7ac56ef6'
                        key: {
                            sys_security_acl: '32f07d21c33d45ca8b9ad19d5ab59727'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd62c3d96ce8f41c19a139aabd25fbd7f'
                        key: {
                            sys_security_acl: '6404f17c7b8a4305b40a42e17ea49d9c'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6423c8dc356413d88d6689ec818c4ea'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6d558313b1b475c9915fb181d0d37c8'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'root_cause'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd6e0630a2848406491e517ce309a61c0'
                        key: {
                            sys_security_acl: 'cdf1d99b4c044d7c8465786c1facf004'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd6fe0f353f084b0a9150dc37855f0650'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd7026ab2988a49f68eb194f3e2dff11a'
                        key: {
                            sys_security_acl: 'fd490c20e3e541d79f9b589af23a01dc'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd739e03daf5a4412abbb2eee7a3bdb37'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd772de9f66534727931ae99dbe2efe35'
                        key: {
                            sys_security_acl: '74f20e857c65468cb47851d6785a7f53'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd77e6f4fff114b19a33795746b3db7ee'
                        key: {
                            sys_security_acl: '9944b6c082fe43288117ae0d52d4ff31'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7c41b1bcb2c4bb9b9361b9becd7e375'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd82e1c9a000042cab1b431533cc31320'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd84202d466bd4c6cb33b5fd02a18bd63'
                        key: {
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'findings_repeat'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd86be70e3a6a41aebbdeee113e4e75b9'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'decisions'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd89cb339b9014951bb8fc398d9ac1ed1'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd8c9dfd5dbcb4d18b9f0e6c0697f93d7'
                        key: {
                            sys_security_acl: '39b7cb549ec54ead841793825e9d8d62'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd959dc21119241b3bd2c87dc8e08b8f2'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_significant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd969901af33041cdba6f3f1388af2ecb'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'findings_major'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd9805ea4850d433a9bd2713b7ab8b79f'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'regulator_level'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd9a3d88867da4500b75be30815129572'
                        key: {
                            sys_ui_action: 'f55e9a5ac73946f1aa2358c66deece6a'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9e6d62cf6484157982635d2a7075504'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'da4723abaffc407aa9205147603cc568'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da50693719034c9c853c444da0feafd9'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                            value: 'installation_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'da657b94a28b426a9d26aa3e88815087'
                        key: {
                            sys_ui_action: 'a0ac30d07951494db49ff21c8fa8ac39'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'daa7d49e70364e8ba24efef1023ff7fe'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_rating'
                            value: 'moderate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'db0cd21dc3004aefa63b989d55297f74'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'meeting_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db1fef7b7f67477385ed401965b6859f'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'db379b2619594ca5a4e4eebbc90284d9'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'http_status'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'db4c8db67e2f483fa51e723b0e161120'
                        key: {
                            sys_ui_form: {
                                id: '9b243a7b73e742d4ac714e552208f577'
                                key: {
                                    name: 'x_cog_env_installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db58b50baaa747e2be63b809eeec73f6'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'open_corrective_actions'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'db6e58e26c7d4e0a941725487d6b1e9e'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'days_to_respond'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'dc2019cd31484ee89d912946c14d08af'
                        key: {
                            logical_table_name: 'x_cog_env_finding'
                            col_name_string: 'installation'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dc741ec30cfa4ead9dbd3f6e515b50ba'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'open_enforcement_actions'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'dc9db944a2f3457ba5fc309fb1a3da95'
                        key: {
                            list_id: {
                                id: '7a4ad394d47d479b8adcfe059e265111'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dc9f9bb5c97044abbbaaff0c42e3f6c0'
                        key: {
                            sys_security_acl: '6db6d357033c4cd489745cd8e0bc9357'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dcb73e23d1534bb2a11171e9325c4d41'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'state'
                            value: 'pending_approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dcd69d65ad5949dc8ad4222f6717ff48'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'fifra'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dcec49aa105f4607be9647c0fb69a025'
                        key: {
                            sys_security_acl: '3340ea4636d84a5d8a23a8cd5d83a367'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dcf65a5a6e0646eca1806091163df102'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            value: 'rcra'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dd41fcaac1144e5eb40dce9c563dca6f'
                        key: {
                            sys_security_acl: 'c47bf4a082a94156b980dec9d76bc8ca'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dd778e2375374fec9387fb20956d8efb'
                        key: {
                            sys_security_acl: '9944b6c082fe43288117ae0d52d4ff31'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'ddafec4b480f4776b7cf5187ebabf29c'
                        key: {
                            sys_ui_form: {
                                id: '0061c7f316f04abf95fa316fc190abe9'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '09f643c5f3414905ba094d3aedd0cae3'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Notes'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ddea4946741c45a8a6ba948f894ae750'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'de5bae8c98b84be5b40af891cb24477b'
                        key: {
                            sys_ui_action: '74ffa4ddc1f949edb94d4980456a192c'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de892f1eb61b4eb695442bb9bfe9faa3'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'action_type'
                            value: 'policy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dea69507511f4cc78d58fa0da76802e9'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'citation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e013534bf03e48d2998325615163e339'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e05f7270a7a24c8788c3f5510a5accd2'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_rating'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e099e91272a94ff5aa9b826e552a0217'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'open_enforcement_actions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e09d360951a440b386adf1e539ac9e56'
                        key: {
                            sys_security_acl: '4de363356f3b462f9ee15deb37c8b059'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e0b231dff4df4c4fa7504a6e7688e9f7'
                        key: {
                            list_id: {
                                id: '0c64abcce5d7463cab835541a08d8ea3'
                                key: {
                                    name: 'x_cog_env_regulatory_driver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0cc6245b2c540b1af776949edcef453'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'installation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e0d1b5c5daae4c9bbc497b333759651a'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'funding_status'
                            value: 'not_required'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e17428bcc8a74e6e82b158a78172a953'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1c04ab10db243ce8f3a8fc890576d06'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e1e0f4c8fddc4d9c9e813fdae7611ffc'
                        key: {
                            role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                            contains: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e1f3894ce67d4013b014611360b875da'
                        key: {
                            sys_security_acl: 'b28e560bd0594a408e8ca86056df089a'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e20d648ce3d147cea6821a5c99595efa'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'days_to_respond'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e2279115ab964b0eb40ea1c68818c052'
                        key: {
                            list_id: {
                                id: '295f3ec28ce64849a05d5c8b83659ff5'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'aging_flag'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e228342960ff43fa94e7e1e245243524'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e2578ce5c14b455f8596ef0daa040e9d'
                        key: {
                            sys_security_acl: '829c0c5ee7fb4d6ea64028187ddf4f31'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2ddb278824642f0bfca283d5595f1cd'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'acom'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'e31bae690ee14683bfcf4f2b8ffeda69'
                        key: {
                            sys_ui_action: '15c8b57daf0c43f99af0910ec9d4eef0'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e323129258c24fbca28a214ad0569ed7'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'next_external_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e37eb705922744d4bc57ab5a72882e43'
                        key: {
                            role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                            contains: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e39ef6e0ce6e49d6ba48bfd4a74b049b'
                        key: {
                            sys_security_acl: 'c3fd73ab77944c9185787361ff5781b6'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e3c9d5d1dc69458a95266e1fd02f0d78'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e3cc7c6c76144177a1fe1e22cdfb0eff'
                        key: {
                            sys_security_acl: '1a0a24a3778f491bad065de20b5b6c2c'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            caption: 'Verification'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e4781209722f40ce9a96b073cf412aef'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'overdue_findings'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e48dacb840d143eab436a6d08bc027cb'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e596773f678544cf8a4f6c0ec5b84032'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'closure_due'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e59f0b5048b5408b810315a4a2b5872b'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'aging_flag'
                            value: 'amber'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e5edaed3860e449a861fc9a046e8973f'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'status'
                            value: 'dry_run'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                        key: {
                            name: 'x_cog_env_assessment'
                            caption: 'EPAS assessment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e62e7e9b59204b80bed8d6b9ea27a200'
                        key: {
                            category: 'x_cog_env_assessment'
                            prefix: 'EPA'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e69785ae419248c08114199b71ead316'
                        key: {
                            sys_security_acl: '3340ea4636d84a5d8a23a8cd5d83a367'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e70be0c61aef477382945dacd4184723'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'regulator_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7740420ebfd4650afdc4ddd71e2dc3c'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                            value: 'findings'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7913e62109f46f39573f9dbf0180dc9'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'received_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7c470faf9034845979b89f5c32912f6'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e83485e8225a4faeb247981f8f832dbd'
                        key: {
                            sys_security_acl: '5768d6f169fc4353a11cef2a36baa440'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8565d4282ed45478bd50a2241560b69'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'fiscal_quarter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e860229be578448ab7afe2c50cc2ff33'
                        key: {
                            sys_security_acl: '00486f0a67d049c5800a49397c9d5a92'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e86a9942940f4f61b6e7ec63729e3d59'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'closed_on'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e895af7a97fb45909a6affcdbf0530c2'
                        key: {
                            sys_security_acl: 'c5cc2a36f502411298b48cdb1198b9f4'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e89a9a2dda494a8886cc8d11f617c19d'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'summary'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8bdeba0414744549ee0a0124432750d'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8e0e73d47704367abc10ecc9f43976f'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e96b36c470284937902b8ebf563107f4'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'assessment_type'
                            value: 'external'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e9731525b001476b8045bc47c6615b0d'
                        key: {
                            sys_security_acl: '5768d6f169fc4353a11cef2a36baa440'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e987bf4c917549368dd8a69b1d243830'
                        key: {
                            sys_security_acl: 'f009a2f05b7240bda2e0bbbe74871c3f'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'e9cca9ed98694bebaa2c2423a04c0e36'
                        deleted: true
                        key: {
                            sys_ui_action: '0ab9ec17be5940c7bfd8184e2b9502fa'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9d8a7fb87c847efbf7d567e22c9154f'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9ddc740edc44c81b34a689a333bb0b5'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea5226f249a74180b0f69435709556d4'
                        key: {
                            sys_security_acl: '46a9013ab4bc4d99bee6a6d4d7f6aebf'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea53672ef3d54b84a3681775f27e6c1a'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'finished_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea63799677d2440098ddbb244a75a3e1'
                        key: {
                            sys_ui_section: {
                                id: '0effeeb43ee3423fa7e93fc9b92fc0a1'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Risk posture (computed nightly)'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea739ff2615645dcbae8592d916b16bc'
                        key: {
                            sys_security_acl: '8dfffebc641d486da86bf5160eb05135'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eaf0c03139a149209b9d213184402acd'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'verified_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eaf5abc1f7b9488885b677d7a96cdcf3'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_rating'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eb569bb8224143a692011e86e337f2fd'
                        key: {
                            sys_ui_section: {
                                id: 'e3e1a7f6b4ab468ba091ad475a8b7d14'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Verification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verified_by'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eb61e2ca50b4475791944c1acf5005fa'
                        key: {
                            sys_ui_section: {
                                id: '83aefdfa5ada4414bdd6cd5ab11446af'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    caption: 'EQCC meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'open_corrective_actions'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb84ce32c7d045cfab213b202b0860b1'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'risk_rating_at_meeting'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eba04b345aac4776a85de006b47b9a5c'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'closure_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ebcf0f442aa242269d66fe2b950cdc3c'
                        key: {
                            sys_security_acl: '467f66d85e134a7ab9bb6ad4b8216991'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ebe571772d94417ba28953402fd60bca'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'row_count'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ec8056490699407888dd6aa3e979402b'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'penalty_proposed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ecaf3e30a1f44004a654ef8e099bcf18'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'aging_flag'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ecc20884d890406797ac17403651a8be'
                        key: {
                            sys_ui_section: {
                                id: '6aea54827b3e4e22ac385bf89a43bcff'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    caption: 'Vantage export run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'endpoint'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed228f14ff364d518a0fe6f8185fa60a'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ed34e11072e54f5ba2217db8b3a77357'
                        key: {
                            list_id: {
                                id: 'c6f21769e33f4ca6963092d41fb523e0'
                                key: {
                                    name: 'x_cog_env_vantage_export_run'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'http_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed50fcb06bea4164b2f78a0aa232d92a'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'team_lead'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed977b4b91954a94a4534bca98f25726'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'ee092e5494bb4b569852e42950ad1798'
                        key: {
                            sys_ui_action: '15c8b57daf0c43f99af0910ec9d4eef0'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee50c9f4e5a64883b53bf328677e7381'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee978154148e444ea82261a194f8f402'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                            value: 'significant'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eeaecc8a97914244b60405e60b19666a'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'linked_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'efc2fc3195c34c1285863510d78098f7'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'epa_region'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f02abffa3a114c45a3321eaecf411c37'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f067c59876bc4187bc5347cc1413249e'
                        key: {
                            sys_security_acl: 'e60fe7b45e3645baa712df1327f9fabc'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0a05d59425b44139d9ef332de73778d'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'linked_findings'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f0fc16bd2ee5474b89d2da53bc112322'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            caption: 'Penalty'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f1543eddcb384f17a7d004463ff51353'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'aging_flag'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f156d2aaff334d7fae5e6f697ecfcc83'
                        key: {
                            sys_security_acl: '14a0a1666c954ec480bdc5d35c45fcd6'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f15be312625f493fa9598f0fb26b09ac'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'finding'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f173e8f44a3b4b38abdb06a3839bdac4'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'regulatory_driver'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1e992b78520444e8fcfc93405c2c2d7'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'citation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'f2319b5353004c689186bfbf9e3a9ad4'
                        key: {
                            name: 'x_cog_env_finding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f30bf589b7984fc4904d7687ecd98737'
                        key: {
                            sys_security_acl: 'f1177aa915bf43a09b170067fcc252a2'
                            sys_user_role: {
                                id: '7b3d84fb92a14aec9a609dbc4bcbbb6d'
                                key: {
                                    name: 'x_cog_env.commander'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f338d226367d4f1c9cc20981e87feedb'
                        key: {
                            sys_ui_section: {
                                id: 'e603e557293e4ae9a5e14b43af7ef0ec'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'EPAS assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finalization_due'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f378e3cacd6b4e10bbd5bdf12b907fe6'
                        key: {
                            sys_security_acl: '80db1b81bd3d42e4ad6b9c507c5c1a71'
                            sys_user_role: {
                                id: '8945cd0fa6e64c8b9cd916fab62ab7b4'
                                key: {
                                    name: 'x_cog_env.compliance_officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f393ed0ae73b46a58159a17fdeee4345'
                        key: {
                            sys_security_acl: '2c7e09f3676f48afb5784d8672031374'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f39fa00a6b8f4373bf7231e9f436f273'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f3acbc63ea944b849e21acc486adb7d5'
                        key: {
                            list_id: {
                                id: 'c7dfa14aa37c44bbb736973dcc552fa9'
                                key: {
                                    name: 'x_cog_env_eqcc_meeting'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'open_enforcement_actions'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f3f92d37018d484281c31d7920dcf864'
                        key: {
                            sys_security_acl: '39b7cb549ec54ead841793825e9d8d62'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f4831fdf7dc149e7ba58cacc7f8ca917'
                        key: {
                            list_id: {
                                id: '37cd3046beb04bbd8ec8bf413154a829'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'received_on'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f49437c7ade24071bb85c5217962b1fa'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'state'
                            value: 'contested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4959ca1cc10433baef91e023c83f6c1'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f53566323c854a28875e39165cbc3cf7'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'trigger'
                            value: 'manual'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5d01d2f01ea4aaa995fc3d36382a4b8'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f664adefc499430ebb757392a27e6330'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'owner'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f6d4601766564b1ea68bcd85f4d1d565'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f7392167b88642999a53733f31342181'
                        key: {
                            sys_ui_section: {
                                id: '6aa70ada06b244ac90765bd4dd8ebb6c'
                                key: {
                                    name: 'x_cog_env_enforcement_action'
                                    caption: 'Enforcement action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allegations'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f74aa2eea0194ca79ae983cc7f005547'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f78c4a78ed244b0ba06c14e86ba020ec'
                        key: {
                            name: 'x_cog_env_program_area'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f797428d06974d05beb340b66dd51074'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finding'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7a912a859f84c3c88e647cda714e809'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'percent_complete'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f8265ab3d4204870a071700afcb2b52a'
                        key: {
                            sys_ui_section: {
                                id: 'bd8fcf8e3d3d44a69b5ba4de74241e73'
                                key: {
                                    name: 'x_cog_env_corrective_action'
                                    caption: 'Corrective action'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f832ab466a6f4c04a582330e9549f5ce'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'imcom_directorate'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f86e625627974890ab3d01d00de7d427'
                        key: {
                            sys_security_acl: '80db1b81bd3d42e4ad6b9c507c5c1a71'
                            sys_user_role: {
                                id: 'a02fb714686d46bc81c759e79dc44341'
                                key: {
                                    name: 'x_cog_env.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f879b205d66c49bfbe463ed2690e090e'
                        key: {
                            sys_ui_form: {
                                id: 'f2319b5353004c689186bfbf9e3a9ad4'
                                key: {
                                    name: 'x_cog_env_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '53c592eedc23425e93cc6b4a401be3dd'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Closure'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f94fe8c7c0314e60b59010996bd34a4f'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa12a028573b46949a640729f1105e0d'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'data_product'
                            value: 'corrective_actions'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa3a624220c34f6b9f14dbc8b3d077c6'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'severity'
                            value: 'minor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa4243e75df94f368bf4197cfb828d76'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'assessment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa60c6a56b31495083d3ebdcaed7b67b'
                        key: {
                            sys_security_acl: '90c85a0a0ffe46718f6531b6a7965afb'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa6f1fc206b042078680ffe92966fe7a'
                        key: {
                            name: 'x_cog_env_finding'
                            element: 'root_cause'
                            value: 'resourcing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa95019e36aa48bda87866af7d8f7cdd'
                        key: {
                            sys_security_acl: '6404f17c7b8a4305b40a42e17ea49d9c'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faa18c3b98904031ae651f3699cdae12'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'verification_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faee07c5d5294f0fbe7e50cff800c3f4'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'overdue_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faf99f5dca814b948860fe880b1bbcd9'
                        key: {
                            name: 'x_cog_env_assessment'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fb24c993c05d4fd3bd72c5800b0bbdf5'
                        key: {
                            sys_ui_section: {
                                id: '44db4731ecb246bdb8b42bcee3fb5adf'
                                key: {
                                    name: 'x_cog_env_finding'
                                    caption: 'Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fb3783b14f644bac866f07c2b72db644'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb4e82aa34d243169f08477b4ab8d216'
                        key: {
                            sys_security_acl: '467f66d85e134a7ab9bb6ad4b8216991'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc02b403c7a94f51802141ca2c4b3e00'
                        key: {
                            name: 'x_cog_env_enforcement_action'
                            element: 'installation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc6269413c4f49d2a8f0f3701cc513c1'
                        key: {
                            name: 'x_cog_env_vantage_export_run'
                            element: 'trigger'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fc84d56e0cd04820a92c1f103c816345'
                        key: {
                            sys_security_acl: '516e67d7910f421b8a8174e979eb14db'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fd1d7b62520f40c08ef3b46fa37306bf'
                        key: {
                            sys_security_acl: '2de9382d99d24b5098ef8bdc3f729940'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd4d2e4f49cf4fa5858350e19f9c4b45'
                        key: {
                            name: 'x_cog_env_installation'
                            element: 'risk_rating'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'fd77282956ac40caa7c0452fa5c4a10a'
                        key: {
                            sys_ui_form: {
                                id: '0061c7f316f04abf95fa316fc190abe9'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ad09a42eae8e45aabf595b682836ec1e'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    caption: 'Findings summary'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fdeeda6c95154f7f8f4273fff17aa847'
                        key: {
                            sys_ui_action: '95ea30a12f7f4e39b450524bad5974c5'
                            sys_user_role: {
                                id: 'ad6fa13436a74dcb97bbf86d293e6d21'
                                key: {
                                    name: 'x_cog_env.hqda_analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe5a13964b4a4d36ad9fb25ed0f326ab'
                        key: {
                            name: 'x_cog_env_corrective_action'
                            element: 'finding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fe6e3e1d203f412ba6d5c0911e7d2011'
                        key: {
                            list_id: {
                                id: '59b119e5b46e49aea890f6d2f82726bb'
                                key: {
                                    name: 'x_cog_env_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'fe9bb67e74fb45d084e348eba03fcbf3'
                        key: {
                            category: 'x_cog_env_vantage_export_run'
                            prefix: 'EVX'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fec7a13a3afc43d68ead9f9911887f9b'
                        key: {
                            name: 'x_cog_env_regulatory_driver'
                            element: 'statute'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fef5bf58de7b4bbf98f82c6e4a04d38d'
                        key: {
                            sys_ui_section: {
                                id: '98cb2164a69947998ad1d01808c93ce4'
                                key: {
                                    name: 'x_cog_env_installation'
                                    caption: 'Installation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'commander'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff0035cc17c043639ab191e8758ac982'
                        key: {
                            name: 'x_cog_env_eqcc_meeting'
                            element: 'overdue_findings'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ffbb7a0f40784b528dec03d5d4cd8345'
                        key: {
                            sys_security_acl: 'dfcb0212040f4d93a2764c68ab40a1c1'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ffe6de2f05d64f589675f4b648838918'
                        key: {
                            sys_security_acl: '6410c2773a5e46659326cd379d1ebf17'
                            sys_user_role: {
                                id: 'ac6e935b099f47cebd04de52881ab770'
                                key: {
                                    name: 'x_cog_env.admin'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
