define(
    ['jquery', 'knockout'],
    function ($, ko) {
        var
            toggleActivity = function (show) {

                if (show){
                    $('#busyindicator').addClass('modal');
                }else{
                    $('#busyindicator').removeClass('modal');
                }
            };

        return {
            toggleActivity: toggleActivity
        };
    }
);