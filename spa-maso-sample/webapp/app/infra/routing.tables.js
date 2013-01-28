define(
	['vms/vms', './config', 'views/views'],
	function (vms, config, views) {
		return [
            // top
            {
                viewId      : config.viewIds.top,
                view        : views.top,
                viewPanel   : config.viewPanels.TOP,
                viewModel   : vms.top,
            },

            // left
            {
                viewId      : config.viewIds.left,
                view        : views.left,
                viewPanel   : config.viewPanels.LEFT,
                viewModel   : vms.left,
                callback    : vms.left.getPosts
            },

            // post-detail
			{
			    viewId      : config.viewIds.postDetail,
			    view        : views.postDetail,
			    viewPanel   : config.viewPanels.MAIN,
			    viewModel   : vms.postDetail,
			    routes      : [config.hashes.home, config.hashes.postDetail],
			    callback    : vms.postDetail.getPost,
			},

            // post-write
			{
			    viewId      : config.viewIds.postWrite,
			    view        : views.postWrite,
			    viewPanel   : config.viewPanels.MAIN,
			    viewModel   : vms.postWrite,
			    routes      : [config.hashes.postWrite]
			},

            // post-edit
			{
			    viewId      : config.viewIds.postEdit,
			    view        : views.postEdit,
			    viewPanel   : config.viewPanels.MAIN,
                viewModel   : vms.postEdit,
			    routes      : [config.hashes.postEdit],
			    callback    : vms.postEdit.getPost
			}
		];
	}
);