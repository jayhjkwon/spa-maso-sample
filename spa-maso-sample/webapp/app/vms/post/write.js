define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', '../left', 'models/models'],
    function ($, ko, mapping, data, left, models) {
        var
            title   = ko.observable(),
            content = ko.observable(),
            tags    = ko.observable(),

            postMappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },

            writePost = function () {
                $.when(data.deferredRequest('savePost', {
                    title: title(),
                    content: content(),
                    tags: tags()
                }))
                .done(function(result){
                    left.posts.unshift(mapping.fromJS(result, postMappingOption));
                });
            },

            resetPost = function () {
                title('');
                content('');
                tags('');
            }
        ;

        return {
            title    : title,
            content  : content,
            tags     : tags,
            writePost: writePost,
            resetPost: resetPost
        };
    });