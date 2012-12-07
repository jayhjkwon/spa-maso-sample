define([
    'text!views/top.html',
    'text!views/left.html',
    'text!views/documents.html',
    'text!views/patients.html',
    'text!views/referrals.html'
    ],
    function (top, left, documents, patient, referral) {
        return {
            top: top,
            left: left,
            documents: documents,
            patient: patient,
            referral: referral
        }
    }
);