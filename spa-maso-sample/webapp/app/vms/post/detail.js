define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models'],
    function ($, ko, mapping, data, store, util, resources, models) {
        var post =  {}, //ko.observable({}),
            title = ko.observable('title'),
            mappingOption = {
                create: function(options) {
                    return new models.Post(options.data);
                }
            },

            getPost = function (param) {
                //console.log('post id = ' + param.id);
                if (!param.id)
                    return;
                // TODO : raise error message using toastr when no param.id provided
                
                $.when(data.deferredRequest('postDetail', param.id))
                 .done(function (result) {
                     //mapping.fromJS(result, mappingOption, post);
                     //post = mapping.fromJS(result, mappingOption);
                     //post = mapping.fromJS(result);
                     mapping.fromJS(result, {}, post);
                     //post = result;
                     //var p = post().title();
                     //title(p);
                     console.log(result.title === post.title());
                     console.log(ko.isObservable(post.title));
                     var t = '';
                     //if ($.isFunction(param)) 
                     //    param(post());
                 })
                 .fail(function (data, status) {
                     console.log('error: ' + status);
                 });
            }
        ;

        return {
            post   : post,
            title: title,
            getPost: getPost
        };
    });