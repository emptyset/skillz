var Developer = require('mongoose').model('Developer');

exports.read = function(req, res, next) {
	res.json(req.technologies);
};

exports.list = function(req, res, next) {
	Developer.distinct('ratings.technology', function(err, technologies) {
		if (err) {
			return next(err);
		} else {
			req.technologies = technologies;
			next();
		}
	});
};
