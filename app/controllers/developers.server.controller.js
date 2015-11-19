var Developer = require('mongoose').model('Developer');

exports.query = function(req, res, next) {
	var t = req.params.technology;
	var r = req.params.rating ? req.params.rating : 0;
	console.log('query: t = ' + t);
	console.log('query: r = ' + r);
	var query = Developer.find(
		{ ratings: { $elemMatch: { 'technology': t, 'rating': r } } 
		},
		function (err, developers) {
			if (err) {
				return next(err);
			} else {
				req.developers = developers;
				next();
			}
		});
};

exports.read = function(req, res, next) {
	//console.log('read: req.developers.length = ' + req.developers.length);
	res.json(req.developers);
};

exports.list = function(req, res, next) {
	Developer.find({}, function(err, developers) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			req.developers = developers;
			next();
		}
	});
};
