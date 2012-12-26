define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', '../left', 'models/models', 'infra/router'],
    function ($, ko, mapping, data, left, models, router) {
        var
            title    = ko.observable(),
            content  = ko.observable(),
            tags     = ko.observable(),
            tagText  = ko.computed(function () {
                var text = '';
                if (tags()) {
                    ko.utils.arrayForEach(tags(), function(tag) {
                        text += tag.tagText + ', ';
                    });
                }
                return text;
            }),
            
            mappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },
            
            getPost = function (param) {
                if (!param.id)
                    return;
                // TODO : raise an error message using toastr when no param.id provided
                
                $.when(data.deferredRequest('postDetail', { id: param.id }))
                    .done(function (result) {
                        title(result.title);
                        content(result.content);
                        tags(result.tags);

                        if ($.isFunction(param))
                            param(post());
                    })
                    .fail(function (data, status) {
                        console.log('error: ' + status);
                    });
            },
            
            updatePost = function (param) {
                $.when(data.deferredRequest('updatePost', {
                    title  : title(),
                    content: content(),
                    tags   : tagText()
                }))
                .done(function (result) {
                    router.navigateTo('#');
                });
            },
            
            resetPost = function () {
                title('');
                content('');
                tags('');
            }
        ;

        return {
            title       : title,
            content     : content,
            tags        : tags,
            getPost     : getPost,
            updatePost  : updatePost,
            resetPost   : resetPost,
            tagText     : tagText
        };
    });