angular.module('clase5',['ngResource','ngRoute','app.controllers','app.directives', 'app.services'])
	.config(function ($routeProvider) {

		$routeProvider
			.when('/', {
		        templateUrl: 'views/main.html',
		        controller: 'MainCtrl',
		        controllerAs: 'main'
		    })
			.when('/checkout',{
				templateUrl: 'views/checkout.html',
				controller: 'CheckOutCtrl',
				controllerAs: 'checkout'
			})
			.otherwise({
		    	redirectTo: '/'
		    });
	})