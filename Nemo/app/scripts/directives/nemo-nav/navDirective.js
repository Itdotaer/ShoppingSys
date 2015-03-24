(function () {
    'use strict';

    angular
        .module('nemo.nav')
        .directive('nemoNav', nemoNav);

    nemoNav.$inject = [];

    function nemoNav() {
        var directive = {
            restrict: 'E',
            scope: {
                appInfo: '='
            },
            templateUrl: '/app/scripts/directives/nemo-nav/nemo-nav.html',
            controller: 'navController'
        };

        return directive;
    }
})();