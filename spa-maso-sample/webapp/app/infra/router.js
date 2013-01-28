define(
    ['jquery', 'underscore', 'knockout', 'sammy', './config', './presenter'],
    function ($, _, ko, sammy, config, presenter) {
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
                app.run(config.hashes.home);
            };


        return {
            run: run,
            navigateTo: navigateTo
        };
    });