define(['infra/store', 'infra/config', 'i18n!./resources', 'i18n!./ko-kr/resources'],
    function (store, config, en, kr) {
        var resources = function () {
            var
                locale = store.fetch('locale') || config.locale;

            if (locale === 'en') {
                return en;
            } else if (locale === 'ko-kr') {
                return kr;
            } else {
                return en;
            }
        };

        return resources();
    }
);