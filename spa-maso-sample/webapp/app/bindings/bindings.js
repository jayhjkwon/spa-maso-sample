define(['./validate.patient',
        './resizeLeftMain',
        './typeahead',
        './setActive'
    ],
    function (validatePatient, resizeLeftMain, typeahead, setActive) {
        return {
            validatePatient: validatePatient,
            resizeLeftMain: resizeLeftMain,
            typeahead: typeahead,
            setActive: setActive
        };
    }
);