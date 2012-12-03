(function () {
    requirejs.config({
        config: {
            i18n: {
                locale: 'en'    // note that this locale config does not affect on default locale, this is just for clearing i18N plugin bug, default locale configuration is available in infra/config.js
            }
        }
    });

    require([
        'domReady!', // exclamation mark is a RequireJS plugin feature
        'jquery',
        'infra/router',
        'infra/config',
        'infra/routing.tables',
        'bindings/bindings',
        'data/mock/mocks'
    ],
        function (dom, $, router, config, tables, bindings, mocks) {
            var
                init = function () {

                    if (config.useMock) {
                        mocks.init();
                        
                    }
                };

            init();

            router.run(tables);
        }
    );
})();