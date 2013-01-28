define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', '../left', 'models/models', 'infra/util', 'jquery-validation'],
    function ($, ko, mapping, data, left, models, util, val) {
        var
            title   = ko.observable(),
            content = ko.observable(),
            tags    = ko.observable(),
            allTags = [],

            postMappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },

            writePost = function () {
                if (!$('form').valid()) {
                    return false;
                }

                $.when(data.deferredRequest('savePost', {
                    title  : title(),
                    content: content(),
                    tags: getTagAsArray(tags())
                }))
                .done(function (result) {
                    resetPost();
                    left.posts.unshift(mapping.fromJS(result, postMappingOption));
                });
            },

            getTagAsArray = function (tagString) {
                if (!tagString) return;

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

            getAllTags = function (param) {
                $.when(data.deferredRequest('tagList'))
                    .done(function (tagList) {
                        allTags.length = 0;
                        $.map(tagList, function (val) {
                            allTags.push( val.tagText);
                        });

                        if ($.isFunction(param))
                            param(allTags);
                    })
                    .fail(function (data, status) {
                        console.log('error: ' + status);
                    });
            },

            init = function () {
                //get all tags for typeahead
                getAllTags();  
            }            
        ;

        init();

        return {
            title    : title,
            content  : content,
            tags     : tags,
            allTags  : allTags,
            writePost: writePost,
            resetPost: resetPost
        };
    });