angular.module('starter.services',[])
	.service('prueba', ['$http',function ($http) {
		this.suma = function(var1,var2){
			var result = parseInt(var1) + parseInt(var2)
			return result
		}
	}])