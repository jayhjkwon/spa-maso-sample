define(
    ['./top', './left', './referrals', './post/detail'],
    function(top, left, referrals, postDetail) {
        return {
            top: top,
            left: left,
            referrals: referrals,
            postDetail: postDetail
        };
    }
);