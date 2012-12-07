define(
	['vms/vms', './config', 'views/views'],
	function (vms, config, views) {
		return [
            // top
            {
                viewId: config.viewIds.top,
                view: views.top,
                viewPanel: config.viewPanels.TOP,
                viewModel: vms.top,
            },

            // left
            {
                viewId: config.viewIds.left,
                view: views.left,
                viewPanel: config.viewPanels.LEFT,
                viewModel: vms.left,
            },

            
			// referral
			{
                viewId: config.viewIds.referral,
                view: views.referral,
                viewPanel: config.viewPanels.MAIN,
                viewModel: vms.referrals,
                route: config.hashes.referral,
                //callback: vms.referrals.loadReferrals,
			},

			// patient
			{
                viewId: config.viewIds.patient,
                view: views.patient,
                viewPanel: config.viewPanels.MAIN,
                viewModel: vms.patients,
                route: config.hashes.patient,
                callback: vms.patients.loadPatients,
			},

			// document
			{
                viewId: config.viewIds.document,
                view: views.documents,
                viewPanel: config.viewPanels.MAIN,
                viewModel: vms.document,
                route: config.hashes.document,
			}
		];
	}
);