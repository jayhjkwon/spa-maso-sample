define(
    ['jquery', 'underscore', 'knockout', 'sammy', './config', './presenter', 'amplify'],
    function ($, _, ko, sammy, config, presenter, amplify) {
        var
            app = Sammy(function () { }),

            navigateTo = function (url) {
                app.setLocation(url);
            },

            registerTables = function (tables) {
                _.each(tables, function (table) {
                    // attach the view to the panels
                    switch (table.viewPanel) {
                        case config.viewPanels.TOP:
                            $('#top').append(table.view);
                            break;
                        case config.viewPanels.LEFT:
                            $('#left').append(table.view);
                            break;
                        case config.viewPanels.MAIN:
                            $('#main').append(table.view);
                            break;
                    }

                    // register route
                    if (table.routes) {
                        _.each(table.routes, function (route) {
                            app.get(route, function (context) {
                                presenter.showView(table.viewId);
                                if (table.callback) {
                                    table.callback(context.params);
                                }
                                amplify.store(config.storeKeys.lastUrl, context.path, config.storeExpiration);
                            });
                        });
                    } else {
                        if (table.callback)
                            table.callback();
                    }

                    // apply viewModel binding
                    if (table.viewModel && table.viewId)
                        ko.applyBindings(table.viewModel, presenter.getView(table.viewId));     // table.view is just string, not HTML element, so use presenter.getView method instead of table.view
                });
            },

            run = function (routingTables) {
                registerTables(routingTables);

                // first use hash url if user provided, otherwise use url stored in client, otherwise use home url
                app.run( app.getLocation() || amplify.store(config.storeKeys.lastUrl) || config.hashes.home);
            };


        return {
            run: run,
            navigateTo: navigateTo
        };
    });