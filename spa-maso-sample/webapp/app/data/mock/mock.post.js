define(
    ['jquery', 'underscore', 'amplify', 'mockJson', 'moment'],
    function ($, _, amplify, mockJson, moment) {
        var
            init = function () {
                var
                    postListTemplate = {
                        "postList|1-20": [
                            {
                                "id|+1"             : 1,
                                "title"             : "@TITLES",
                                "content|10-30"     : "@LOREM_IPSUM",
                                "dateCreated"       : "@DATE_YYYY-@DATE_MM-@DATE_DD @TIME_HH:@TIME_MM",
                                "tags|1-5"          : [{ "tagText" : "@TAGS" }],
                                "comments|0-5"      : [
                                    {
                                        "commenterName"     : "@MALE_FIRST_NAME",
                                        "commentTime"       : "@DATE_YYYY-@DATE_MM-@DATE_DD @TIME_HH:@TIME_MM",
                                        "commentText"       : "@LOREM_IPSUM"
                                    }
                                ]
                            }
                        ]
                    },

                    postDetailTemplate = {
                        "post": 
                            {
                                "id"                : "@NUMBER",
                                "title"             : "@TITLES",
                                "content|10-30"     : "@LOREM_IPSUM",
                                "dateCreated"       : "@DATE_YYYY-@DATE_MM-@DATE_DD @TIME_HH:@TIME_MM",
                                "tags|1-5"          : [{ "tagText" : "@TAGS" }],
                                "comments|0-5"      : [
                                    {
                                        "commenterName"     : "@MALE_FIRST_NAME",
                                        "commentTime"       : "@DATE_YYYY-@DATE_MM-@DATE_DD @TIME_HH:@TIME_MM",
                                        "commentText"       : "@LOREM_IPSUM"
                                    }
                                ]
                            }
                        
                    };


                /* custom mock keywords */
                $.mockJSON.data.TAGS = ['jQuery', 'javascript', 'json', 'knockout.js', 'backbone.js', 'underscore', 'angular.js'];
                $.mockJSON.data.TITLES =
                    [
                        'Updating my Windows Phone App to Windows Phone 8',
                        'Reactive Extensions (Rx) is now Open Source',
                        'A Few New Things Coming To JavaScript',
                        'Writing Fast, Memory-Efficient JavaScript',
                        'Understanding MVVM – A Guide For JavaScript Developers',
                        'Building Mobile JavaScript WebApps With Backbone.js',
                        'Knockout 2.1.0 released',
                        'Node.js development with WebMatrix 2 and Express',
                        'Greenfield vs Brownfield Projects',
                        'Node.js on Azure with Glenn Block',
                        'Knockout.js with Steven Sanderson',
                        'Design Patterns in Javascript with Addy Osmani',
                        'Can HTML5 and JavaScript Really Replace Flash?'
                    ];


                /* define mock http request */
                amplify.request.define('postList', function (request) {
                    var postList = $.mockJSON.generateFromTemplate(postListTemplate).postList;

                    if (request.data) {
                        postList = _.filter(postList, function (param) {
                            return param.title.toLocaleLowerCase().indexOf(request.data.toLocaleLowerCase()) > -1;
                        });
                    }

                    request.success(postList);
                });

                amplify.request.define('postDetail', function (request) {
                    setTimeout(function() {
                        var post = $.mockJSON.generateFromTemplate(postDetailTemplate).post;
                        post.id = request.data.id;
                        request.success(post);
                    }, 100);
                });

                amplify.request.define('savePost', function (request) {
                    var post = request.data;
                    post.id = 99999;
                    post.dateCreated = new Date();
                    request.success(post);
                });
                
                amplify.request.define('updatePost', function (request) {
                    var post = request.data;
                    post.id = 99999;
                    post.dateCreated = new Date();
                    request.success(post);
                });

                amplify.request.define('saveComment', function (request) {
                    var comment = request.data;
                    comment.id = 99999;
                    comment.commentTime = new Date();
                    request.success(comment);
                });

            };

        return { init: init };
    }
);