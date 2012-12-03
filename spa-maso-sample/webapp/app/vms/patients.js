define(
    ['jquery','infra/config', 'infra/router', 'knockout', 'knockout.mapping', 'jquery-validation'],
    function ($, config, router, ko, mapping, val) {

        var
            firstName = ko.observable(),
            lastName = ko.observable();

        var
            loadPatients = function (callback) {
                callback(true);
            },

            savePatient = function(){
                if (!$('#patientForm').valid()) {
                    return false;
                }else{
                    alert('success');
                    // do ajax call
                }
            },

            goToDocument = function () {
                router.navigateTo(config.hashes.document);
            };

        return {
            firstName: firstName,
            lastName: lastName,
            goToDocument: goToDocument,
            loadPatients: loadPatients,
            savePatient: savePatient
        };
    }
);