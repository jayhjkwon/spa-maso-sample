define(
    ['jquery', 'jquery-validation', 'knockout', 'nls/nls'],
    function ($, val, ko, resources) {
        ko.bindingHandlers.validatePost = {
            init:function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                $(element).validate(
                    {
                        rules:{
                            title:{
                                required:true
                            },
                            content:{
                                required:true
                            }
                        },
                        messages:{
                            title:{
                                required: resources.validationTitleRequired
                            },
                            content:{
                                required: resources.validationContentRequired
                            }
                        },
                        success: function(label) {
                            //label.text(resources.validationOK).addClass('valid');
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