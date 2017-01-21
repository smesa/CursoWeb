'use strict';

/**
 * @ngdoc service
 * @name ibm4App.itemService
 * @description
 * # itemService
 * Service in the ibm4App.
 */
angular.module('ibm4App')
  .service('itemService', function ($http,$q) {
    this.getItems = function(){
    	
    	var deferred = $q.defer();

    	var req = $http({
    		method: 'GET',
    		url: 'data.json'
    	});

    	req.then(function(data){
    		deferred.resolve(data.data);
    	},function(err){
    		deferred.reject(err);
    	})

    	return deferred.promise;
    }

    this.getItemDetail = function(id){

    }

  });
