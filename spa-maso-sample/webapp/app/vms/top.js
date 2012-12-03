define(
    ['nls/nls', 'infra/store'],
    function (resources, store) {
        var
            referralLabel = resources.navReferral,
            patientLabel = resources.navPatient,
            documentLabel = resources.navDocument;

        var
            useEnglish = function () {
                store.save('locale', 'en');
                window.location.reload();
            },

            useKorean = function () {
                store.save('locale', 'ko-kr');
                window.location.reload();
            };

        return {
            referralLabel:referralLabel,
            patientLabel:patientLabel,
            documentLabel:documentLabel,
            useEnglish:useEnglish,
            useKorean:useKorean
        }
    }
);