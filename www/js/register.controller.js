angular.module('starter.controllers')

.controller('RegisterController', ['$scope', '$state', function($scope, $state) {
	
	$scope.name = null;
	$scope.lastName = null;
	$scope.userName = null;
	$scope.password = null;
	$scope.duplicatedPassword = null;
	$scope.validFields = true;

	console.warn('RegisterController');

	$scope.register = function() {

		validateFields();

		if(!$scope.validFields){
			return
		}
		else{
			registerObj = {
				name: $scope.name,
				lastName: $scope.lastName,
				userName: $scope.userName,
				password: $scope.password,
				duplicatedPassword: $scope.duplicatedPassword
			};

			console.log(registerObj);

			//LLAMAR A LA API PARA CREAR EL USUARIO Y SI ESTA TODO BIEN (userName unico) HACER EL STATE.GO A LOGIN

			$state.go('login');
		}			
	};

	validateFields = function() {

		if($scope.name == null || $scope.lastName == null || $scope.userName == null || $scope.password == null || $scope.duplicatedPassword === null) {

			$scope.validFields = false;
			return
		}	
		
		if(!($scope.name.length > 0)){
			$scope.validFields = false;
			return
		}
	
		if(!($scope.lastName.length > 0)){
			$scope.validFields = false;
			return
		}		

	
		if(!($scope.userName.length >= 4)){
			$scope.validFields = false;
			return
		}		

	
		if(!($scope.password.length >= 6)){
			$scope.validFields = false;
			return
		}		

	
		if(!($scope.duplicatedPassword === $scope.password)){
			$scope.validFields = false;
			return
		}

		$scope.validFields = true;

	};

}]);
