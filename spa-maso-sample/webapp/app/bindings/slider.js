define(
	['jquery', 'jquery-ui', 'knockout'],
	function ($, jqueryui, ko) {
        'use strict';

        ko.bindingHandlers.slider = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                $(element).slider();

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(element).slider("destroy");
                });
            }
        };
	}
);