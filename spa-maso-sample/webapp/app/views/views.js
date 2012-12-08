define([
    'text!views/top.html',
    'text!views/left.html',
    'text!views/referrals.html',
    'text!views/post/detail.html',
    'text!views/post/edit.html',
    'text!views/post/write.html'
],
    function (top, left, referral, postDetail, postEdit, postWrite) {
        return {
            top: top,
            left: left,
            referral: referral,
            postDetail: postDetail,
            postEdit: postEdit,
            postWrite: postWrite
        };
    }
);