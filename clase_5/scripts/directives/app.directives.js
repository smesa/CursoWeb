angular.module('app.directives',[])
    .directive('navTop',function(){
        return {
            templateUrl: 'scripts/directives/nav-top.html',
            restrict:'E',
            controller: 'NavTopCtrl'
        }   
    })

