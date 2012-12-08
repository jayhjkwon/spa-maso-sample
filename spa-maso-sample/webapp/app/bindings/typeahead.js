define(
	['jquery', 'bootstrap', 'knockout'],
	function ($, bootstrap, ko) {
	    var
	        source = [
	        "ActionScript",
	        "AppleScript",
	        "Asp",
	        "BASIC",
	        "C",
	        "C++",
	        "Clojure",
	        "COBOL",
	        "ColdFusion",
	        "Erlang",
	        "Fortran",
	        "Groovy",
	        "Haskell",
	        "Java",
	        "JavaScript",
	        "Lisp",
	        "Perl",
	        "PHP",
	        "Python",
	        "Ruby",
	        "Scala",
	        "Scheme"
	        ],

            extractor = function (query) {
                var result = /([^,]+)$/.exec(query);
                if (result && result[1])
                    return result[1].trim();
                return '';
            };

	    ko.bindingHandlers.typeahead = {
	        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

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