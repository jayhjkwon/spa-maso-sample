define(
    ['jquery', 'knockout', 'knockout.mapping', 'data/data', 'infra/util', 'nls/nls', 'models/models', 'moment', 'amplify', 'infra/config'],
    function ($, ko, mapping, data, util, resources, models, moment, amplify, config) {
        var
            post          = ko.observable(),
            commenterName = ko.observable(),
            commentText   = ko.observable(),
            mappingOption = {
                create: function (options) {
                    return new models.Post(options.data);
                }
            },
            
            getPost = function (param, callback) {
                if (!param.id)
                    return;
                // TODO : raise an error message using toastr when no param.id provided

                $.when(data.deferredRequest('postDetail', { id: param.id }))
                    .done(function (result) {
                        post(mapping.fromJS(result, mappingOption));

                        amplify.publish(config.topics.currentPost, post());

                        if ($.isFunction(callback))
                            callback(post());
                    })
                    .fail(function (data, status) {
                        console.log('error: ' + status);
                    });
                
            },

            saveComment = function (callback) {
                $.when(data.deferredRequest('saveComment', {
                    commenterName: commenterName(),
                    commentText  : commentText()
                }))
                .done(function (result) {
                    post().comments.push(new models.Comment({
                        commenterName   : result.commenterName,
                        commentText     : result.commentText,
                        commentTime     : result.commentTime
                    }));

                    if ($.isFunction(callback))
                        callback();
                });
            }
        ;

        return {
            commenterName   : commenterName,
            commentText     : commentText,
            saveComment     : saveComment,
            post            : post,
            getPost         : getPost
        };
    });