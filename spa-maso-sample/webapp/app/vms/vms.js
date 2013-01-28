define(
    ['./top', './left', './post/detail', './post/write', './post/edit'],
    function(top, left, postDetail, postWrite, postEdit) {
        return {
            top       : top,
            left      : left,
            postDetail: postDetail,
            postWrite : postWrite,
            postEdit  : postEdit
        };
    }
);