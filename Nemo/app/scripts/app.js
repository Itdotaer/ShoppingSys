(function() {
    'use sctrict';

    var app = angular.module('app', ['ui.router', 'nemo.nav', 'nemo.footer', 'services']);

    //Router
    app.config(router);
    router.$inject = ['$stateProvider', '$urlRouterProvider'];

    function router($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/app/views/main.html',
                controller: 'mainController'
            })
            .state('goods', {
                url: '/goods',
                templateUrl: '/app/views/goods/goods.html',
                controller: 'goodsController'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: '/app/views/cart/cart.html',
                controller: 'cartController'
            });
    }

    //Constants
    app.constant("DEBUG", false);
})();