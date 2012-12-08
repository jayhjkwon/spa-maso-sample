define(['./validate.patient',
        './loadingButton',
        './resizeLeftMain',
        './typeahead',
        './setActive'
    ],
    function (validatePatient, loadingButton, resizeLeftMain, typeahead, setActive) {
        return {
            validatePatient: validatePatient,
            loadingButton: loadingButton,
            resizeLeftMain: resizeLeftMain,
            typeahead: typeahead,
            setActive: setActive
        };
    }
);