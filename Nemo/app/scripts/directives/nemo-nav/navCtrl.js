(function () {
    'use strict';

    angular
        .module('nemo.nav')
        .controller('navController', navController);

    navController.$inject = ['$scope', 'logger', 'DEBUG'];

    function navController($scope, logger, DEBUG) {
        if (DEBUG) logger.logInfo("Nav loaded successed.");
    }
})();