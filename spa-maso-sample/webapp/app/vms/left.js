define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models', 'infra/presenter', 'infra/config'],
    function ($, ko, mapping, data, store, util, resources, models, presenter, config) {
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
                if (config.viewIds.postDetail !== presenter.currentViewId())
                    return true;    // --> This will allow default event proceed so that you can navigate url as in href attribute
            }
        ;
        
        return {
            posts        : posts,
            getPosts     : getPosts,
            onItemClick  : onItemClick,
            selectedPost: selectedPost
        };
    });