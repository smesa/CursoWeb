'use strict';

/**
 * @ngdoc overview
 * @name ibm4App
 * @description
 * # ibm4App
 *
 * Main module of the application.
 */
angular.module('ibm4App', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize'])

  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl',
        controllerAs: 'confirm'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  });
