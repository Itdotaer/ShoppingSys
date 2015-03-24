(function() {
    'use strict';

    angular
        .module('services')
        .factory('mockDataService', mockDataService);

    mockDataService.$inject = [];

    function mockDataService() {
        var service = {
            allGoods: allGoods
        };

        return service;

        function allGoods() {
            var goods = [
                { id: 0, goodsName: 'iphone 5s', goodsNum: 'N000001', price: 4999, unit: 'RMB', goodsDescription: '苹果手机描述' },
                { id: 1, goodsName: 'iphone 6', goodsNum: 'N000002', price: 5288, unit: 'RMB', goodsDescription: '苹果手机描述' },
                { id: 2, goodsName: 'iphone 6 plus', goodsNum: 'N000003', price: 5888, unit: 'RMB', goodsDescription: '苹果手机描述' },
                { id: 2, goodsName: 'iphone 7 plus', goodsNum: 'N000004', price: 5888, unit: 'RMB', goodsDescription: '苹果手机描述' },
                { id: 2, goodsName: 'iphone 8 plus', goodsNum: 'N000005', price: 5888, unit: 'RMB', goodsDescription: '苹果手机描述' },
                { id: 2, goodsName: 'iphone 8 plus', goodsNum: 'N000006', price: 5888, unit: 'RMB', goodsDescription: '苹果手机描述' }
            ];

            return goods;
        }
    }
})();