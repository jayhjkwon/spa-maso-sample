define(
	['jquery', 'bootstrap', 'knockout'],
	function ($, bootstrap, ko) {
	    ko.bindingHandlers.loadingButton = {
	        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	        	$(function(){
		        	setTimeout(function(){
		                $(element).button('loading');
		            }, 2000);
		        });
	        }
	    };
	}
);