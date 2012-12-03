define(['jquery', 'knockout', 'knockout.mapping', './document'],
    function ($, ko, mapping, Document) {
        var
            Referral = function (data) {
                var self = this;

                mapping.fromJS(data, {
                    'documents':{
                        create:function (options) {
                            return new Document(options.data);
                        }
                    }
                }, self);

                self.fileName = ko.computed(function () {
                    return self.referralName() + '.' + self.type();
                });
            };

        return Referral;
    });

