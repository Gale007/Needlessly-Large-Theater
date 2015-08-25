//ruin the adc's day code!
//this will be going over ap carrys gold differences and how soon they get their power spike

angular.module('ViewChanger',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when("/",{templateUrl:""})
		.when("/",{templateUrl:""})
		.when("/",{templateUrl:""})
		.when("/",{templateUrl:""})
	})
	.controller("changeController", changeController);

function changeController($scope){

	$scope.Info = "";
}

