(function() {
    'use strict';

    angular
        .module('app')
        .directive('summary', summary);

    summary.$inject = [];

    function summary() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'resume/directives/summary/summary.tpl.html',
            controller: 'SummaryCtrl'
        };
    }
})();