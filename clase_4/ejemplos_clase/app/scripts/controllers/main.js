'use strict';

/**
 * @ngdoc function
 * @name ibm4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ibm4App
 */
angular.module('ibm4App')
  .controller('MainCtrl',['itemService', function ($items) {

  	var page = this;

	$items.getItems().then(function(data){
		page.products = data
	},function(err){
		console.log(err)
	})

  }]);
