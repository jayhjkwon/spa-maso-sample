define(
//    ['jquery', 'knockout', 'koActivity'],
    ['jquery', 'knockout', 'activity'],
    function ($, ko) {
        var
            toggleActivity = function (show) {

                //$('#busyindicator').activity(show);
//                $('#busyindicator').activity({segments: 12, steps: 3, width:2, space: 1, length: 3, color: '#030303', speed: 1.5});

                if (show){
                    $('#busyindicator').addClass('modal');
                    //$('#busyindicator img').show().addClass('busy');
                }else{
                    $('#busyindicator').removeClass('modal');
                    //$('#busyindicator img').hide().removeClass('busy');
                }
            };

        return {
            toggleActivity: toggleActivity
        };
    }
);