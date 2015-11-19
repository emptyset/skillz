var module = angular.module('developerServices', [ 'ngResource' ] );

module.factory('Developer', [ '$resource', 
	function ($resource) {
		return $resource('developers/:technology/:rating', { }, {
			get: { method: 'GET', params: { technology: 'technology', rating: 'rating' }, isArray: true }
		});
	}]
);
