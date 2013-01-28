/**
 * data context for the data modules
 *
 * @class data
 * @constructor
 */

define(
    ['./post', './tag'],
    function () {
        var
            deferredRequest = function (resourceId, data) {
                return new $.Deferred(function (dfd) {
                    amplify.request({
                        resourceId: resourceId,
                        data      : data,
                        success   : dfd.resolve,
                        error     : dfd.reject
                    });
                }).promise();
            };


        return {
            deferredRequest: deferredRequest
        };
    }
);
