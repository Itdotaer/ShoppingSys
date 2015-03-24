(function () {
    'use strict';

    angular
        .module('services')
        .factory('cartService', cartService);

    cartService.$inject = ['logger', 'DEBUG'];

    function cartService(logger, DEBUG) {
        var initQty = 1;
        var goods = [];

        var service = {
            allGoods: allGoods,
            addGoods: addGoods,
            addQty: addQty,
            removeGoods: removeGoods
        };

        return service;

        function allGoods() {
            return goods;
        }

        function addGoods(addedGoods) {
            var index = findGoods(addedGoods.goodsNum);

            if (index != -1) {
                goods[index].qty += initQty;
            } else {
                addedGoods.qty = initQty;
                goods.push(addedGoods);
            }
        }

        function addQty(goodsNum, qty) {
            var index = findGoods(goodsNum);
            if (index != -1) {
                goods[index].qty += qty;
            }
        }

        function removeGoods(goodsNum) {
            var index = findGoods(goodsNum);

            if (index != -1) {
                goods.splice(index, 1);
            }
        }

        function findGoods(goodsNum) {
            var index = -1;

            goods.forEach(function(oneGoods, indx) {
                if (goodsNum == oneGoods.goodsNum) {
                    index = indx;
                }
            });

            return index;
        }
    }
})();