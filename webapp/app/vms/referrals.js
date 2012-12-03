define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models'],
    function ($, ko, mapping, data, store, util, resources, models) {
        var
            saveLabel    = resources.buttonSave, // i18n resources
            buttonSearch = resources.buttonSearch,
            referralName = ko.observable(),
            type         = ko.observable(),
            isBusy       = ko.observable(false),
            searchText   = ko.observable(''),
            referralList = ko.observableArray([]);

        var
            saveReferral = function (callback) {
                $.when(data.deferredRequest('saveReferral', {
                    referralName:referralName(),
                    type:type() })
                ).done(function (value) {
                        referralList.push(mapping.fromJS(value, referralMappingOption));
                        if ($.isFunction(callback))
                            callback();
                    }
                );
            },

            loadReferrals = function (callback) {
                isBusy(true);
                $.when(
                    data.deferredRequest('referrals', searchText())
                ).done(function (referrals) {
                        mapping.fromJS(referrals, referralMappingOption, referralList);

                        if ($.isFunction(callback)) {
                            callback(referralList());
                        }
                    }
                ).fail(function (data, status) {
                        console.log('error: ' + status);
                    }
                ).always(function () {
                        isBusy(false);
                    }
                );
            },

            referralMappingOption = {
                create: function(options){
                    return new models.Referral(options.data);
                }
            },

            onFileNameClick = function(referral){
                alert(referral.fileName());
            };


        isBusy.subscribe(function (newValue) {
            util.toggleActivity(newValue);
        });

        searchText.subscribe(function (newValue) {
            loadReferrals();
        });


        return {
            saveLabel:saveLabel,
            buttonSearch: buttonSearch,
            referralName:referralName,
            type:type,
            saveReferral:saveReferral,
            searchText:searchText,
            referralList:referralList,
            loadReferrals:loadReferrals,
            isBusy:isBusy,
            onFileNameClick:onFileNameClick
        };
    }
);