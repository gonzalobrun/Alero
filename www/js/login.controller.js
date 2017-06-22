angular.module('starter.controllers')

.controller('LoginController', ['$scope', '$state', function($scope, $state) {
	
	console.log('LoginController');

	$scope.userName = null; 
	$scope.password = null;
	$scope.validFields = true;

	$scope.login = function() {

		validateFields();

		if(!$scope.validFields){
			return
		}
		else {
			loginObj = {
				userName: $scope.userName,
				password: $scope.password
			}

			//ACA MAGIA PARA LOGUEAR AL USER. NO TENGO CHOTA IDEA DE VARIABLES DE SESSION EN ESTO

			console.log(loginObj);
		}

	};

	validateFields = function(){
		if($scope.userName === null || $scope.password === null){
			$scope.validFields = false;
			return
		}

		if(!($scope.userName.length > 0)){
			$scope.validFields = false;
			return
		}

		if(!($scope.password.length > 0)){
			$scope.validFields = false;
			return
		}

		$scope.validFields = true;
	};

	$scope.goToRegister = function() {
		$state.go('register');
	};

	

}]);
