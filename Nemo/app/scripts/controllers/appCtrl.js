(function () {
    'use strict';

    angular
        .module('app')
        .controller('appController', appController);

    appController.$inject = ['$scope'];

    function appController($scope) {
        $scope.appInfo = {
            appName: 'Shopping Sys',
            copyRight: 'Wicresoft ECOE Team',
            appMenus: [
                { id: 1, name: 'Index', state: 'index' },
                { id: 2, name: 'Goods', state: 'goods' }
            ],
            appSysMenus: [
                { id: 1, name: 'Cart', state: 'cart' }
            ]
        };
    }
})();