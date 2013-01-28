define(
    ['infra/store', 'knockout', './post/detail', 'nls/nls'],
    function (store, ko, detail, resources) {
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

        if (detail) {
            detail.post.subscribe(function (post) {
                id(post.id());
            });
        }

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