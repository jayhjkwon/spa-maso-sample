define(
    [],     // config should not have any dependencies
    function () {
        var
            storeExpiration = (1000 * 60 * 60 * 24), // 1 day

            viewPanels = {
                TOP : 'TOP',
                LEFT: 'LEFT',
                MAIN: 'MAIN'
            },

            viewIds = {
                top       : '#top-div',
                left      : '#left-div',
                referral  : '#referral-div',
                postDetail: '#section-post-detail',
                postWrite : '#section-post-write',
                postEdit  : '#section-post-edit'
            },

            hashes = {
                home      : '#/',
                referral  : '#/referrals',
                postDetail: '#/post/detail/:id',
                postWrite : '#/post/write',
                postEdit  : '#/post/edit/:id'
            },

            locale = 'en',  // 'ko-kr' for Korean, 'en' for English

            useMock = true;     // use mock request, not real request

        var test = 'test';

        return {
            viewPanels     : viewPanels,
            viewIds        : viewIds,
            hashes         : hashes,
            storeExpiration: storeExpiration,
            locale         : locale,
            useMock        : useMock,
        };
    }
);