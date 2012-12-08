define(
    ['jquery', 'knockout'],
    function ($, ko) {
        var
            postTitle = ko.observable(''),

            getPost = function (param) {
                console.log('post id = ' + param.id);
            };

        return {
            postTitle: postTitle,
            getPost: getPost
        };
    });