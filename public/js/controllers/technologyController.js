var module = angular.module('technologyControllers', []);

module.controller('TechnologyController', ['$scope', 'Technology', 
	function ($scope, Technology) {
		$scope.technologies = Technology.get();
	}
]);
