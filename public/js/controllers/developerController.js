var module = angular.module('developerControllers', []);

module.controller('DeveloperController', ['$scope', '$stateParams', 'Developer', 
	function ($scope, $stateParams, Developer) {
		Developer.get( { technology: $stateParams.technology, rating: $stateParams.rating }, function(data) {
			$scope.developers = data.map(function (d) { return d.name });
		});
	}
]);
