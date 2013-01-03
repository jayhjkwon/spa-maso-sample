define(
    ['jquery', 'underscore', 'amplify', 'mockJson', 'moment'],
    function ($, _, amplify, mockJson, moment) {
        var
            init = function () {
                var
                    tagListTemplate = {
                        "tagList|1-20": [
                            {
                                "id|+1": 1,
                                "tagText": "@TAGS"
                            }
                        ]
                    }


                /* custom mock keywords */
                $.mockJSON.data.TAGS = ['jQuery', 'javascript', 'json', 'knockout.js', 'backbone.js', 'underscore', 'angular.js'];
                
                /* define mock http request */
                amplify.request.define('tagList', function (request) {
                    var tagList = $.mockJSON.generateFromTemplate(tagListTemplate).tagList;

                    if (request.data) {
                        tagList = _.filter(tagList, function (param) {
                            return param.tagText.toLocaleLowerCase().indexOf(request.data.toLocaleLowerCase()) > -1;
                        });
                    }

                    request.success(tagList);
                });

            };

        return { init: init };
    }
);