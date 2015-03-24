(function() {
    angular
        .module('app')
        .controller('mainCtrl', ['$scope', 'demoService', function ($scope, service) {
            $scope.message = "Hello world.";

            $scope.users = [
                { name: 'harry', sex: 'man', info: 'info' },
                { name: 'harry1', sex: 'man2', info: 'info1' }
            ];

            $scope.bindData = {};
            $scope.testClick = function() {
                alert("Hello world.");

                //Load Service
                service.displayInfo("Hello world service.");
            }
    }]);
})();