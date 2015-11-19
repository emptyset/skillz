var module = angular.module('ratingControllers', []);

module.controller('RatingController', ['$scope', '$state', '$stateParams', '$location', 'Rating', 
	function ($scope, $state, $stateParams, $location, Rating) {
		Rating.get( { technology: $stateParams.technology }, function(data) {
			$scope.ratings = data;
	
			// TODO: check out http://c3js.org/reference.html#data-json to possibly simplify data consumption
			$scope.chart = c3.generate({
				bindto: '#chart',
				data: {
					onclick: function(d, element) {
						$stateParams.rating = d.x;
						$state.go('developers', $stateParams);
					},
					x: 'rating',
					y: 'count',
					columns: [
						['rating'].concat(data.map( function(p) { return p.rating; } ) ),
						['count'].concat(data.map( function(p) { return p.count; } ) )
					],
					axes: {
						rating: 'x',
						count: 'y'
					},
					type: 'bar'
				},
				bar: {
					width: { ratio: 0.5 }
				},
				axis: {
					x: { 
						min: 0,
						max: 10,
						padding: { left: 0.5, right: 0.5 },
						tick: { fit: false },
						label: { text: 'rating', position: 'outer-middle' } 
					},
					y: { 
						min: 0,
						max: 40,
						padding: { top: 5, bottom: 0 },
						tick: { fit: false },
						label: { text: 'count', position: 'outer-middle' } 
					}
				},
				legend: { show: false },
				padding: { top: 10, bottom: 10 },
				tooltip: {
					format: {
						title: function(d) { return 'rating: ' + d; },
						value: function(value, ratio, id) {
							return value;
						}
					}
				}
			});

		});
	}
]);
