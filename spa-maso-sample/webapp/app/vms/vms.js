define(
    ['./post/detail', './post/write', './post/edit', './top', './left'],
    function (postDetail, postWrite, postEdit, top, left) {
        return {
            top       : top,
            left      : left,
            postDetail: postDetail,
            postWrite : postWrite,
            postEdit  : postEdit
        };
    }
);