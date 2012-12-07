define(
    ['./validate.patient', './loadingButton', './resizeLeftMain'],
    function (validatePatient, loadingButton, resizeLeftMain) {
        return {
            validatePatient: validatePatient,
            loadingButton: loadingButton,
            resizeLeftMain: resizeLeftMain
        };
    }
);