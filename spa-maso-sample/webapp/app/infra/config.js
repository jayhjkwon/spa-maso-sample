define(
    [],     // config should not have any dependencies
    function () {
        var
            storeExpiration = (1000 * 60 * 60 * 24), // 1 day

            viewPanels = {
                TOP: 'TOP',
                LEFT: 'LEFT',
                TITLES: 'TITLES',
                MAIN: 'MAIN',
                FOOTER: 'FOOTER'
            },

            viewIds = {
                top: '#top-div',
                left: '#left-div',
                titles: '#titles-div',
                referral: '#referral-div',
                patient: '#patient-div',
                document: '#document-div'
            },

            hashes = {
                referral: '#/referrals',
                patient: '#/patients',
                document: '#/documents'
            },

            locale = 'en';  // 'ko-kr' for Korean, 'en' for English

            useMock = true;     // use mock request, not real request

        return {
            viewPanels: viewPanels,
            viewIds: viewIds,
            hashes: hashes,
            storeExpiration: storeExpiration,
            locale: locale,
            useMock: useMock,
        };
    }
);