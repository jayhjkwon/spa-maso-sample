define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', '../left', 'models/models', 'infra/router'],
    function ($, ko, mapping, data, left, models, router) {
        var
            id           = ko.observable(),
            title        = ko.observable(),
            content      = ko.observable(),
            dateCreated  = ko.observable(),
            allTags      = [],  // tag array for typeahead
            tags         = ko.observable(),
            tagText      = ko.computed({
                read: function() {
                    var text      = '';
                    if (tags()) {
                        ko.utils.arrayForEach(tags(), function(tag) {
                            text += tag.tagText + ', ';
                        });
                    }
                    return text;
                },
                write: function(value) {
                    var tagArray = getTagAsArray(value);
                    tags(tagArray);
                }
            }).extend({throttle: 100}),
            
            getAllTags = function (param) {
                $.when(data.deferredRequest('tagList'))
                    .done(function (tagList) {
                        allTags.length = 0;
                        $.map(tagList, function (val) {
                            allTags.push(val.tagText);
                        });

                        if ($.isFunction(param))
                            param(allTags);
                    })
                    .fail(function (data, status) {
                        console.log('error: ' + status);
                    });
            },
            
            getPost = function (param) {
                if (!param.id)
                    return;
                // TODO : raise an error message using toastr when no param.id provided
                
                $.when(data.deferredRequest('postDetail', { id: param.id }))
                    .done(function (result) {
                        id(result.id);
                        title(result.title);
                        content(result.content);
                        dateCreated(result.dateCreated);
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
                    id          : id(),
                    title       : title(),
                    content     : content(),
                    dateCreated : dateCreated(),
                    tags        : tags()
                }))
                .done(function (result) {
                    router.navigateTo('#/post/detail/' + id());
                });
            },
            
            getTagAsArray = function (tagString) {
                if (!tagString) return false;

                var tagArray = [];

                $.map(tagString.split(","), function (val) {
                    if ($.trim(val) !== '')
                        tagArray.push({ tagText: $.trim(val) });
                });
                return tagArray;
            },
            
            resetPost = function () {
                title('');
                content('');
                tags('');
            },

            init = function () {
                //get all tags for typeahead
                getAllTags();
            }
        ;

        init();

        return {
            id          : id,
            title       : title,
            content     : content,
            tags        : tags,
            allTags     : allTags,
            getPost     : getPost,
            updatePost  : updatePost,
            resetPost   : resetPost,
            tagText     : tagText
        };
    });