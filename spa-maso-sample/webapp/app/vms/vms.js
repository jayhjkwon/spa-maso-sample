define(
    ['./top', './left', './titles', './patients', './referrals', './documents', './post/detail'],
    function(top, left, titles, patients, referrals, documents, postDetail) {
        return {
            top: top,
            left: left,
            titles: titles,
            patients: patients,
            referrals: referrals,
            documents: documents,
            postDetail: postDetail
        };
    }
);