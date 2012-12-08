define([
    'text!views/top.html',
    'text!views/left.html',
    'text!views/documents.html',
    'text!views/patients.html',
    'text!views/referrals.html',
    'text!views/post/detail.html',
    'text!views/post/edit.html',
    'text!views/post/write.html'
],
    function (top, left, documents, patient, referral, postDetail, postEdit, postWrite) {
        return {
            top: top,
            left: left,
            documents: documents,
            patient: patient,
            referral: referral,
            postDetail: postDetail,
            postEdit: postEdit,
            postWrite: postWrite
        };
    }
);