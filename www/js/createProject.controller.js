angular.module('starter.controllers')

.controller('CreateProjectController', ['$scope', '$state', function($scope, $state) {

	$scope.newProject = {
		clientId: null,
		coveredArea: null,
		duration: null,
		endDate: null,
		fees: null,
		name: null,
		payment: null,
		price: null,
		projectAdress: {
			city: null,
			neighborhood: null,
			number: null,
			province: null,
			street: null,
			zipCode: null,
		},
		startDate: null,
		tasks: [],
		totalArea: null,
		type: null,
	};

	$scope.newProject.tasks = [];

	$scope.newTask = {
		name: null,
		weight: null
	};

	$scope.addTask = function(){		
		if($scope.newTask.name != null && $scope.newTask.weight != null)
		$scope.newProject.tasks.push($scope.newTask);
		$scope.newTask = {
			name: null,
			weight: null
		};
	};

	$scope.deleteTask = function(index) {
		$scope.tasks.splice(index, 1);
	}

	$scope.saveProject = function() {
		console.log($scope.newProject)
	}

}]);
