define(
	['jquery', 'knockout'],
	function ($, ko) {
	    ko.bindingHandlers.setActive = {
	        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            $(element).click(function() {
	                $(this).siblings('li').removeClass('active');
	                $(this).addClass('active');
	            });
	        }
	    };
	}
);