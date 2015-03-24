(function() {
    angular
        .module('app', ['ui.router'])

        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');

            $stateProvider
                .state('index', {
                    url: '/index',
                    templateUrl: 'main.html',
                    controller: 'state1Ctrl'
                })
                .state('state1', {
                    url: '/state1',
                    templateUrl: 'state1.html',
                    controller: 'mainCtrl'
            });
    }]);
})();