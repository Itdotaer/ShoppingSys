(function () {
    'use strict';

    angular
        .module('nemo.footer')
        .directive('nemoFooter', nemoFooter);

    nemoFooter.$inject = [];

    function nemoFooter() {
        var directive = {
            restrict: 'E',
            scope: {
                appInfo: '='
            },
            templateUrl: '/app/scripts/directives/nemo-footer/nemo-footer.html',
            controller: 'footerController'
        };

        return directive;
    }
})();