define(
    ['./mock.post', './mock.tag'],
    function (post, tag) {
        var init = function () {
            post.init();
            tag.init();
        };

        return { init: init };
    }
);