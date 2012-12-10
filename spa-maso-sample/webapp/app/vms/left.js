define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models'],
    function ($, ko, mapping, data, store, util, resources, models) {
        var
            posts        = ko.observableArray([]),
            selectedPost = ko.observable(),
            searchText   = ko.observable(''),

            postMappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },
        
            getPosts = function (param) {
                $.when(data.deferredRequest('postList', searchText()))
                 .done(function (postList) {
                     mapping.fromJS(postList, postMappingOption, posts);

                     if ($.isFunction(param))
                         param(posts());
                 })
                 .fail(function (data, status) {
                     console.log('error: ' + status);
                 });
            },

            onItemClick = function (item) {
                selectedPost(item);
                console.log('test' + selectedPost);
            }
        ;
        
        return {
            posts        : posts,
            getPosts     : getPosts,
            onItemClick  : onItemClick,
            selectedPost: selectedPost
        };
    });