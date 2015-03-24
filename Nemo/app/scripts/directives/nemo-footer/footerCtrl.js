(function () {
    'use strict';

    angular
        .module('nemo.footer')
        .controller('footerController', footerController);

    footerController.$inject = ['$scope', 'logger', 'DEBUG'];

    function footerController($scope, logger, DEBUG) {
        $scope.currentTime = new Date();

        if (DEBUG) logger.logInfo("Footer loaded successed.");
    }
})();