define(
    ['./mock.referral'],
    function (referral) {
        var init = function () {
            referral.init();
        };

        return { init: init };
    }
);