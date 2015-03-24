(function () {
    'use strict';

    angular
        .module('services')
        .factory('goodsService', goodsService);

    goodsService.$inject = ['mockDataService'];

    function goodsService(mockService) {
        var service = {
            getAllGoods: getAllGoods
        };

        return service;

        function getAllGoods() {
            return mockService.allGoods();
        }
    }
})();