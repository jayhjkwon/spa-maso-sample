define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', '../left', 'models/models', 'infra/util', 'jquery-validation'],
    function ($, ko, mapping, data, left, models, util, val) {
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
                var t = tagString.split(','),
                    tagArray = [];
                if (t.length>1) t.pop();    // remove the last array element
                for (var i = 0; i < t.length; i++) {
                    tagArray.push({ tagText: util.trim(t[i]) });
                }

                return tagArray;
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