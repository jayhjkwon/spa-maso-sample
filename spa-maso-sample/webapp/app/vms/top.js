define(
    ['infra/store', 'knockout', './post/detail', 'nls/nls', 'amplify', 'infra/config'],
    function (store, ko, detail, resources, amplify, config) {
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
                store.save('locale', 'en');
                window.location.reload();
            },
            useKorean     = function () {
                store.save('locale', 'ko-kr');
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