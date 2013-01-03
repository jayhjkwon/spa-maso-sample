define(
    ['jquery', 'amplify'],
    function ($, amplify) {
        var
            init = function () {
                amplify.request.define('tagList', 'ajax', {
                    url: 'api/tags',
                    dataType: 'json',
                    type: 'GET'
                });
            };


        init();

    }
);