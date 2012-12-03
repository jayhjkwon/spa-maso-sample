define(
    ['jquery', 'underscore', 'amplify', 'mockJson'],
    function ($, _, amplify, mockJson) {
        var
            init = function () {
                var
                    referralsTemplate = {
                        "referrals|2-20": [
                            {
                                "id|+1": 1,
                                "type": "@TYPE",
                                "referralName": "@REFERRAL_NAME",
                                "documents|1-3" : [
                                    {
                                        "title" : "@LOREM",
                                        "description" : "@LOREM_IPSUM"
                                    }
                                ]
                            }
                        ]
                    },

                    referralTemplate = {
                        "referral|1-1":[
                            {
                                "id|+1": 1,
                                "type": "@TYPE",
                                "referralName": "@REFERRAL_NAME"
                            }
                        ]
                    };


                /* custom mock keywords */
                $.mockJSON.data.TYPE = ['jpg', 'txt', 'pdf', 'ccd'];
                $.mockJSON.data.REFERRAL_NAME = ['Discharge Summary', 'Transfer Summary', 'Lab Results', 'CT Image', 'MR Image'];


                /* define mock http request */
                amplify.request.define('referrals', function (request) {
                    // setTimeout() is just for emulating server execution time
                    setTimeout(function () {
                        var referrals = $.mockJSON.generateFromTemplate(referralsTemplate).referrals;

                        if (request.data) {
                            referrals = _.filter(referrals, function (r) {
                                return r.referralName.toLocaleLowerCase().indexOf(request.data.toLocaleLowerCase()) > -1 ||
                                    r.type.toLocaleLowerCase().indexOf(request.data.toLocaleLowerCase()) > -1
                            });
                        }

                        request.success(referrals);
                    }, 2000);
                });

                amplify.request.define('referral', function (request) {
                    var referral = $.mockJSON.generateFromTemplate(referralTemplate).referral;
                    request.success(referral);
                });

                amplify.request.define('saveReferral', function (request) {
                    var referral = request.data;
                    referral.id = 99999;
                    request.success(referral);
                });

            };

        return { init: init };
    }
);