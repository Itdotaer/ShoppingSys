(function () {
    'use strict';

    angular
        .module('app')
        .controller('goodsController', goodsController);

    goodsController.$inject = ['$scope', 'logger', 'goodsService', 'cartService', 'DEBUG'];

    function goodsController($scope, logger, goodsService, cartService, DEBUG) {
        $scope.goods = [];

        init();

        function init() {
            $scope.goods = goodsService.getAllGoods();
            if (DEBUG) logger.logSuccess("Successed get goods from mock data.");
        }

        $scope.addToCart = function (goods) {
            cartService.addGoods(goods);
            logger.logSuccess("Successed! You can click 'Cart' to see your order.");
        }
    }
})();