define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models'],
    function ($, ko, mapping, data, store, util, resources, models) {
        var
            posts      = ko.observableArray([]),
            searchText = ko.observable(''),

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
            }
        ;
        
        return {
            posts   : posts,
            getPosts: getPosts
        };
    });