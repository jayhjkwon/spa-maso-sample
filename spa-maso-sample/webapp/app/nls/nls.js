define(['amplify', 'infra/config', 'i18n!./resources', 'i18n!./ko-kr/resources'],
    function (amplify, config, en, kr) {
        var resources = function () {
            var
                locale = amplify.store(config.storeKeys.locale) || config.locale;

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