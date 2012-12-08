define(
    ['./validate.patient', './loadingButton', './resizeLeftMain', './typeahead'],
    function (validatePatient, loadingButton, resizeLeftMain, typeahead) {
        return {
            validatePatient: validatePatient,
            loadingButton: loadingButton,
            resizeLeftMain: resizeLeftMain,
            typeahead: typeahead
        };
    }
);