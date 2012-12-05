define(
    ['./validate.patient', './loadingButton'],
    function (validatePatient, loadingButton) {
        return {
            validatePatient: validatePatient,
            loadingButton: loadingButton
        };
    }
);