(function() {
    angular
        .module('app')
        .factory('demoService', ['$http', function ($http) {

        var service = {
            displayInfo: function(inputData) {
                return inputData + "(Harry Hu)";
            }
        };

        return service;
    }]);
})();