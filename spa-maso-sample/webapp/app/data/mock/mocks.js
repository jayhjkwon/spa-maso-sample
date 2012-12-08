define(
    ['./mock.referral', './mock.post'],
    function (referral, post) {
        var init = function () {
            referral.init();
            post.init();
        };

        return { init: init };
    }
);