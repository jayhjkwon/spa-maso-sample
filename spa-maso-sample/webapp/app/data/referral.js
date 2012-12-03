define(
    ['jquery', 'amplify', 'infra/store', 'sammy'],
    function ($, amplify, store, sammy) {
        var
            init = function () {
                amplify.request.define('referrals', 'ajax', {
                    url: 'api/referrals',
                    dataType: 'json',
                    type: 'GET'
                });

                amplify.request.define('referral', 'ajax', {
                    url: 'api/referrals/{id}',
                    dataType: 'json',
                    type: 'GET'
                });

                amplify.request.define('saveReferral', 'ajax', {
                    url: 'api/referrals',
                    dataType: 'json',
                    type: 'POST'
                });
            };


        init();

    }
);