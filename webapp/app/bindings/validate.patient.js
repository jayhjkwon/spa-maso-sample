define(
    ['jquery', 'jquery-validation', 'knockout', 'nls/nls'],
    function ($, val, ko, resources) {
        ko.bindingHandlers.validatePatient = {
            init:function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                $(element).validate(
                    {
                        rules:{
                            firstName:{
                                required:true,
                                minlength: 2
                            },
                            lastName:{
                                required:true,
                                minlength: 2
                            }
                        },
                        messages:{
                            firstName:{
                                required: resources.validationFirstNameRequired,
                                minlength: resources.validationFirstNameLength
                            },
                            lastName:{
                                required: resources.validationLastNameRequired,
                                minlength: resources.validationLastNameLength
                            }
                        },
                        success: function(label) {
                            label.text(resources.validationOK).addClass('valid');
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