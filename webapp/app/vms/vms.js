define(
    ['./top', './left', './titles', './patients', './referrals', './documents'],
    function(top, left, titles, patients, referrals, documents) {
        return {
            top: top,
            left: left,
            titles: titles,
            patients: patients,
            referrals: referrals,
            documents: documents
        };
    }
);