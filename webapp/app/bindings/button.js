define(
	['jquery', 'jquery-ui', 'knockout', 'nls/nls'],
	function ($, jqueryui, ko, resources) {
	    ko.bindingHandlers.button = {
	        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var labelText = ko.utils.unwrapObservable(valueAccessor()).labelText;

	            $(element).text(labelText).button();

	            //handle disposal (if KO removes by the template binding)
	            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
	                $(element).button("destroy");
	            });
	        }
	    };
	}
);