require(
    ['infra/config', 'vms/post/detail'],
    function (config, vm) {

        module('post-detail viewModel');

        test('1 equal 1', function () {
            ok(1 === 1);
        });

        asyncTest('getPost should return post', function () {
            vm.getPost({id: '1'}, function (result) {
                ok(result != null);
                start();
            });
        });

        asyncTest('saveComment should return comment after saving comment', function () {
            vm.saveComment(function () {
                ok(vm.post().comments().length > 0);
                start();
            });
        });
    });