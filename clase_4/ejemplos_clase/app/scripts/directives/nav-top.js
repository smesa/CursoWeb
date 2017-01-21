'use strict';

/**
 * @ngdoc directive
 * @name ibm4App.directive:navTop
 * @description
 * # navTop
 */
angular.module('ibm4App')
  .directive('navTop', function () {
    return {
      templateUrl: 'scripts/directives/nav-top.html',
      restrict: 'E'
    };
  });
