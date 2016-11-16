var app = angular.module("ng-custom-chips",["ngMaterial", "ngAnimate", "ngAria", "ngMessages"]);
app.controller("mainController", function($scope){ 
	console.log("I am inside mainController");
	$scope.delete =function(customId) {
		console.log("I am inside delete");
		console.log(customId);

	}
	$scope.readonly = false;
});