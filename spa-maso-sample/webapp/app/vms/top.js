define(
    ['knockout', './post/detail', 'nls/nls', 'amplify', 'infra/config'],
    function (ko, detail, resources, amplify, config) {
        var
            labelHome     = resources.labelHome,
            labelNewPost  = resources.labelNewPost,
            labelEditPost = resources.labelEditPost,
            labelChat     = resources.labelChat
        ;

        var 
            searchText    = ko.observable(''),
            id            = ko.observable(''),
            useEnglish    = function () {
                amplify.store(config.storeKeys.locale, 'en', config.storeExpiration);
                window.location.reload();
            },
            useKorean     = function () {
                amplify.store(config.storeKeys.locale, 'ko-kr', config.storeExpiration);
                window.location.reload();
            }
        ;

        amplify.subscribe(config.topics.currentPost, function (post) {
            id(post.id());
        });

        return {
            labelHome     : labelHome,    
            labelNewPost  : labelNewPost, 
            labelEditPost : labelEditPost,
            labelChat     : labelChat,    
            useEnglish    : useEnglish,
            useKorean     : useKorean,
            searchText    : searchText,
            id            : id
        };
    }
);