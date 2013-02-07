define(
    ['jquery', 'jquery-validation', 'knockout', 'nls/nls'],
    function ($, val, ko, resources) {
        ko.bindingHandlers.validatePost = {
            init:function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                $(element).validate(
                    {
                        rules:{
                            title:{
                                required: true,
                                minlength : 5
                            },
                            content:{
                                required:true
                            }
                        },
                        messages:{
                            title:{
                                required: resources.validation.required.title,
                                minlength: resources.validation.minlength.title
                            },
                            content:{
                                required: resources.validation.required.content
                            }
                        },
                        highlight: function(el) {
                            $(el).fadeOut().fadeIn();
                        }
                    }
                );
            }
        };
    }
);