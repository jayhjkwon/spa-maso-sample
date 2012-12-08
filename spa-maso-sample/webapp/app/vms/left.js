define(
    ['jquery', 'knockout'],
    function ($, ko) {
        var
            posts = ko.observableArray([]),
            
            getPosts = function () {

            },

            onItemClick = function (item) {

            };

        return {
            posts : posts,
            getPosts: getPosts,
            onItemClick: onItemClick
        };
    });