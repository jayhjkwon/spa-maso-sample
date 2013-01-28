define(
	['jquery', 'bootstrap', 'knockout'],
	function ($, bootstrap, ko) {
	    var
            extractor = function (query) {
                var result = /([^,]+)$/.exec(query);
                if (result && result[1])
                    return result[1].trim();
                return '';
            };

	    ko.bindingHandlers.typeahead = {
	        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

	            var source = ko.utils.unwrapObservable(valueAccessor()).source;

	            $(element).typeahead({
	                source: source,
	                updater: function (item) {
	                    $(element).focus();
	                    var allValues = this.$element.val().replace(/[^,]*$/, ' ') + item + ', ';
	                    return allValues;
	                },
	                matcher: function (item) {
	                    var tquery = extractor(this.query);
	                    if (!tquery) return false;
	                    return ~item.toLowerCase().indexOf(tquery);
	                },
	                highlighter: function (item) {
	                    var query = extractor(this.query).replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	                    return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
	                        return '<strong>' + match + '</strong>';
	                    });
	                }
	            });
	        }
	    };
	}
);