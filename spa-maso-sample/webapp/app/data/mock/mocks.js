define(
    ['./mock.post'],
    function (post) {
        var init = function () {
            post.init();
        };

        return { init: init };
    }
);