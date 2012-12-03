/**
 * data context for the data modules
 *
 * @class data
 * @constructor
 */

define(
    ['./referral', './patient'],
    function(referral, patient) {
        var
            /**
             * test property
             *
             * @property test
             * @type {String}
             * @default "test"
             */
            test = 'test',

            /**
             * Wrapper method for amplify define methods
             * implements jQuery Deferred Object
             *
             * @method deferredRequest
             * @param {String} resourceId resourceId of each amplify definitions
             * @param {Object} data parameter to pass ajax method
             * @return {Object} jQuery Deferred Object with its result
             */
            deferredRequest = function (resourceId, data) {
                return new $.Deferred(function (dfd) {
                    amplify.request({
                        resourceId: resourceId,
                        data: data,
                        success: dfd.resolve,
                        error: dfd.reject
                    });
                }).promise();
            };


        return {
            deferredRequest: deferredRequest
        };
    }
);
