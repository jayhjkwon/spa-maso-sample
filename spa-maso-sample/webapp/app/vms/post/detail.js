define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models', '../left'],
    function ($, ko, mapping, data, store, util, resources, models, left) {
        var
            mappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },

            post = ko.observable();

            getPost = function (param) {
                if (!param.id)
                    return;
                // TODO : raise an error message using toastr when no param.id provided

                $.when(data.deferredRequest('postDetail', param.id))
                    .done(function (result) {
                        post(mapping.fromJS(result, mappingOption));
                        if ($.isFunction(param))
                            param(post());
                    })
                    .fail(function (data, status) {
                        console.log('error: ' + status);
                    });
            }
        ;

           left.selectedPost.subscribe(function (newVal) {
                post(newVal);
            });

        return {
            post    : post,
            getPost : getPost
        };
    });