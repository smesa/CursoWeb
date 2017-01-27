angular.module('app.controllers',[])
	.controller('MainCtrl', ['productsService', function ($products) {
        var page = this
		$products.getProducts().then(function(data){
            page.products = data
        },function(err){
            console.log(err)
        })
	}])
    .controller('CheckOutCtrl',function(){
    
    })
    .controller('NavTopCtrl', function(){
        $(".dropdown-button").dropdown();
    })