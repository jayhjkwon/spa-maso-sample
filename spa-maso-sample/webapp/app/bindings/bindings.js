define(
    ['./slider', './button', './validate.patient'],
    function (slider, button, validatePatient) {
        return {
            slider: slider,
            button: button,
            validatePatient: validatePatient
        };
    }
);