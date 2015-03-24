(function() {
    angular
        .module('app')
        .controller('state1Ctrl', ['$scope', function ($scope) {
            $scope.message = "State1 Controller.";
    }]);
})();