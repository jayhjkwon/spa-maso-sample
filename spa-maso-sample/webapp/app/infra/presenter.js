define(
    ['jquery', './util'],
    function ($, util) {
        var
            getView = function (viewId) {
                return $(viewId).get(0);
            },

            hideAllView = function () {
                $('.view').css({
                    display: 'none',
                    marginLeft: 20,
                    marginRight: -20,
                    opacity: 0
                });

                util.toggleActivity(false);
            },

            showView = function (viewId) {
                hideAllView();

                $(viewId).css({
                    display: 'block',
                })
                .animate({
                    marginLeft: 0,
                    marginRight: 0,
                    opacity: 1
                }, 500, 'swing');
            },


            init = function () {
                hideAllView();
            };

        init();

        return {
            showView:showView,
            getView:getView
        };
    }
);