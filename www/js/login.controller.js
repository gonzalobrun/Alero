angular.module('starter.controllers')

.controller('LoginController', ['$scope', '$state', function($scope, $state) {

	console.warn('LoginController');

	$scope.goToRegister = function() {
		console.log('heyyyy');
	};

}]);
