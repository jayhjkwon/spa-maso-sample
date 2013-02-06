(function () {
    requirejs.config({
        config: {
            i18n: {
                locale: 'en'    // note that this locale config does not affect on default locale, this is just for clearing i18N plugin bug, default locale configuration is available in infra/config.js
            }
        },

        paths: {
            'bootstrap' : './jam/bootstrap/docs/assets/js/bootstrap',
            'sammy'     : './jam/sammy/sammy',
        },

        shim: {
            'bootstrap'         : ['jquery'],
            'amplify'           : { deps: ['jquery'], exports: 'amplify' },
            'sammy'             : { deps: ['jquery'], exports: 'Sammy' },
            'jquery-validation' : ['jquery'],
            'mockJson'          : ['jquery'],
            'underscore'        : { exports: '_' },
        }
    });

    require([
        'domReady!', // exclamation mark is a RequireJS plugin feature
        'jquery',
        'infra/router',
        'infra/config',
        'infra/routing.tables',
        'bindings/bindings',
        'data/mock/mocks',
        'bootstrap'
    ],
        function (dom, $, router, config, tables, bindings, mocks, bootstrap) {
            var
                init = function () {
                    if (config.useMock) {
                        mocks.init();
                        $('#noticePopup').modal();
                    }                    
                };

            init();
            router.run(tables);
        }
    );
})();