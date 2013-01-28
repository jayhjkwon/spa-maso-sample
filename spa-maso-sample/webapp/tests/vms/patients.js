require(
    ['infra/config', 'vms/patients'],
    function (config, vm) {

        module('patients viewModel');

        asyncTest('loadPatients function should return true', function () {
            vm.loadPatients(function (result) {
                ok(result === true);
                start();
            });
        });
    });