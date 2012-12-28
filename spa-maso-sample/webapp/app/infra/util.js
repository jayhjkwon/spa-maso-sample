define(
    ['jquery', 'knockout'],
    function ($, ko) {
        var
            toggleActivity = function (show) {

                if (show) {
                    $('#busyindicator').addClass('modal');
                } else {
                    $('#busyindicator').removeClass('modal');
                }
            },

            trim = function (str) {
                return str.replace(/^\s+|\s+$/g, '');
            }
        ;

        return {
            toggleActivity: toggleActivity,
            trim: trim
        };
    }
);