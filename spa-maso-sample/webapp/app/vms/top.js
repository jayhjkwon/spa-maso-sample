define(
    ['nls/nls', 'infra/store', 'knockout', './post/detail'],
    function (resources, store, ko, detail) {
        var
            searchText = ko.observable(''),
            id         = ko.observable(''),
            
            useEnglish = function () {
                store.save('locale', 'en');
                window.location.reload();
            },

            useKorean = function () {
                store.save('locale', 'ko-kr');
                window.location.reload();
            }
        ;

        detail.post.subscribe(function (post) {
            id(post.id());
        });

        return {
            useEnglish   : useEnglish,
            useKorean    : useKorean,
            searchText   : searchText,
            id           : id
        };
    }
);