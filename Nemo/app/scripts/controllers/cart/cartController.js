(function () {
    'use strict';

    angular
        .module('app')
        .controller('cartController', cartController);

    cartController.$inject = ['$scope', 'logger', 'cartService', 'DEBUG'];

    function cartController($scope, logger, cartService, DEBUG) {
        $scope.cartGoods = [];

        init();

        function init() {
            $scope.cartGoods = cartService.allGoods();
            if(DEBUG) logger.logSuccess("Successed get goods from cart.");
        }

        $scope.addQty = function (oneGoods, qty) {
            cartService.addQty(oneGoods, qty);
            if (DEBUG) logger.logSuccess("Successed add qty(" + qty + ") goods(" + oneGoods.goodsNum + ") to cart.");
        }

        $scope.removeOneGoods = function (oneGoods) {
            cartService.removeGoods(oneGoods.goodsNum);
            if (DEBUG) logger.logSuccess("Successed remove goods from cart.");
        }

        $scope.totalPrice = function () {
            var totalPrice = 0;

            $scope.cartGoods.forEach(function(oneGoods) {
                totalPrice += oneGoods.qty * oneGoods.price;
            });

            if (DEBUG) logger.logSuccess("Successed calculate total price of all cart's goods.");

            return totalPrice;
        }
    }
})();