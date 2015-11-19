var module = angular.module('technologyServices', [ 'ngResource' ] );

module.factory('Technology', [ '$resource', 
	function ($resource) {
		return $resource('technologies', { }, {
			get: { method: 'GET', params: { }, isArray: true }
		});
	}]
);
