define(
	['jquery', 'knockout', 'bootstrap'],
	function ($, ko) {
	    ko.bindingHandlers.resizeLeftMain = {
	        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var applyTop = function () {
	                var topHeight = $('#top').height();
	                $('#left').css({ top: topHeight });
	                $('#main').css({ top: topHeight });
	            };

	            applyTop();
	            $(window).resize(function () {
	                applyTop();
	            });
	        }
	    };
	}
);