define(
    ['./top', './left', './referrals', './post/detail', './post/write', './post/edit'],
    function(top, left, referrals, postDetail, postWrite, postEdit) {
        return {
            top       : top,
            left      : left,
            referrals : referrals,
            postDetail: postDetail,
            postWrite : postWrite,
            postEdit  : postEdit
        };
    }
);