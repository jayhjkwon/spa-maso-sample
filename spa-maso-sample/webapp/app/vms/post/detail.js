define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/store', 'infra/util', 'nls/nls', 'models/models'],
    function ($, ko, mapping, data, store, util, resources, models) {
        var
            mappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },
            post = ko.observable(),
            
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

        return {
            post   : post,
            getPost: getPost
        };
    });