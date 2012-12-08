define(
    ['jquery', 'knockout'],
    function ($, ko) {
        var
            updatePost = function (param) {
                console.log('post id = ' + param.id);
            };

        return {
            updatePost: updatePost
        };
    });