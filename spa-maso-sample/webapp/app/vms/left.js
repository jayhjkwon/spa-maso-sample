define(
    ['jquery', 'underscore', 'knockout', 'knockout.mapping', 'data/data', 'infra/util', 'nls/nls', 'models/models', './top', './post/edit', 'amplify', 'infra/config'],
    function ($, _, ko, mapping, data, util, resources, models, top, edit, amplify, config) {
        var
            searchText        = ko.observable(''),
            posts             = ko.observableArray([]),
            filteredPosts     = ko.computed(function () {
                return _.filter(posts(), function (post) {
                    return post.title().toLocaleLowerCase().indexOf(searchText().toLocaleLowerCase()) > -1;
                });
            }),
            postMappingOption = {
                create: function(options) {
                    return new models.Post(options.data);
                }
            },

            getPosts = function (param) {
                $.when(data.deferredRequest('postList', searchText()))
                    .done(function(postList) {
                        mapping.fromJS(postList, postMappingOption, posts);

                        if ($.isFunction(param))
                            param(posts());
                    })
                    .fail(function(data, status) {
                        console.log('error: ' + status);
                    });
            }            
        ;

        if (top) {
            top.searchText.subscribe(function (newValue) {
                searchText(newValue);
            });
        };

        amplify.subscribe(config.topics.postUpdated, function (updatedPost) {
            var post = _.find(posts(), function(post){
                return post.id() === updatedPost.id();
            });

            if (post) {
                post.title(updatedPost.title());
            }
        });

        return {
            posts        : posts,
            getPosts     : getPosts,
            filteredPosts: filteredPosts
        };
    });