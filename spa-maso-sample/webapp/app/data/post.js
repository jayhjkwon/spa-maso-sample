define(
    ['jquery', 'amplify'],
    function ($, amplify) {
        var
            init = function () {
                amplify.request.define('postList', 'ajax', {
                    url: 'api/posts',
                    dataType: 'json',
                    type: 'GET'
                });

                amplify.request.define('postDetail', 'ajax', {
                    url: 'api/posts/{id}',
                    dataType: 'json',
                    type: 'GET'
                });

                amplify.request.define('savePost', 'ajax', {
                    url: 'api/posts',
                    dataType: 'json',
                    type: 'POST'
                });
                
                amplify.request.define('updatePost', 'ajax', {
                    url: 'api/posts',
                    dataType: 'json',
                    type: 'PUT'
                });
            };


        init();

    }
);