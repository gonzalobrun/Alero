angular.module('starter.controllers')

.controller('RegisterController', ['$scope', function($scope) {

	console.warn('RegisterController');

	$scope.goToRegister = function() {
		console.log('heyyywewey');
	};

}]);
