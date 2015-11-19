var app = angular.module('skillz', [
	'ui.router',

	'developerControllers',
	'ratingControllers',
	'technologyControllers',

	'developerServices',
	'ratingServices',
	'technologyServices'
]);

app.run(['$rootScope', '$state', '$stateParams',
	function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
]);

app.config(['$stateProvider', '$urlRouterProvider', 
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('technologies', {
			url: '/',
			views: {
				'menu@': {
					templateUrl: 'partials/technologies.html',
					controller: 'TechnologyController'
				}
			}
		})
		.state('ratings', {
			url: '/ratings/:technology',
			views: {
				'menu@': {
					templateUrl: 'partials/technologies.html',
					controller: 'TechnologyController'
				},
				'graph@': {
					templateUrl: 'partials/ratings.html',
					controller: 'RatingController'
				}
			}
		})
		.state('developers', {
			url: '/developers/:technology/:rating',
			views: {
				'menu@': {
					templateUrl: 'partials/technologies.html',
					controller: 'TechnologyController'
				},
				'graph@': {
					templateUrl: 'partials/ratings.html',
					controller: 'RatingController'
				},
				'devs@': {
					templateUrl: 'partials/developers.html',
					controller: 'DeveloperController'
				}
			}
		});

	}
]);
