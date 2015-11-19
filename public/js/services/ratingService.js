var module = angular.module('ratingServices', [ 'ngResource' ] );

module.factory('Rating', [ '$resource', 
	function ($resource) {
		return $resource('ratings/:technology', { }, {
			get: { method: 'GET', params: { technology: 'technology' }, isArray: true }
		});
	}]
);
