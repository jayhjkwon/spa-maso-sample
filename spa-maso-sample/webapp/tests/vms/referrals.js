require(
    ['infra/config', 'vms/referrals'],
    function (config, vm) {

        module('referral viewModel');  // just represents name of this test module

        asyncTest('loadReferrals function should update referralList property', function () {
            vm.loadReferrals(function (result) {
                ok(result.length > 0);
                ok(vm.referralList().length > 0);
                start();
            });
        });

        asyncTest('saveReferral function should add referral', function () {
            // arrange
            vm.referralName('test');

            // act
            vm.saveReferral(function () {

                // assert
                var addedReferral = vm.referralList()[vm.referralList().length - 1];
                ok(addedReferral.referralName() === 'test');

                start();
            });
        });

    });