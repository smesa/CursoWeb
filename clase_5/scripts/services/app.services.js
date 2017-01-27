angular.module('app.services',[])

    .service('productsService', function($http, $q){
        
        this.getProducts = function(){
        
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
            
        
    })