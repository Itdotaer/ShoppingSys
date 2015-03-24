(function () {
    'use strict';

    angular
        .module('app')
        .controller('userController', userController);

    userController.$inject = ['$scope', 'logger', 'cartService', 'DEBUG'];

    function userController($scope, logger, userService, DEBUG) {
        $scope.user = [];

        init();

        function init() {
            //
        }
    }
})();