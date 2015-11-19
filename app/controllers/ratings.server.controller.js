var Developer = require('mongoose').model('Developer');

exports.query = function(req, res, next) {
	var t = req.params.technology;
	console.log('query: t = ' + t);

	// NOTE: the working query as run in mongo against database
	// db.developers.aggregate([
	// 		{ $unwind: '$ratings' }, 
	// 		{ $match: { 'ratings.technology': 'javascript' } }, 
	// 		{ $project: { '_id':false, 'rating':'$ratings.rating' } }, 
	// 		{ $group: { '_id':'$rating', 'count': { $sum: 1 } }},
	// 		{ $project: { '_id':false, 'rating':'$_id', 'count': 1 } }
	// ])
	
	Developer.aggregate([
	 		{ '$unwind': '$ratings' }, 
	 		{ '$match': { 'ratings.technology': t } }, 
	 		{ '$project': { '_id':false, 'rating':'$ratings.rating' } }, 
	 		{ '$group': { '_id':'$rating', 'count': { $sum: 1 } } },
	 		{ '$project': { '_id':false, 'rating':'$_id', 'count': 1 } },
			{ '$sort': { 'rating': 1 } }
		], function(err, ratings) {
			if (err) {
				//console.log("err = " + err);
				next(err);
			} else {
				//console.log("ratings.query: ratings.length = " + ratings.length);
				//console.log("ratings.query: ratings.rating = " + ratings.map(function(p) { return p.rating; }));
				//console.log("ratings.query: ratings.count = " + ratings.map(function(p) { return p.count; }));
				req.ratings = ratings; 
				next();
			}
		});
};

exports.read = function(req, res, next) {
	res.json(req.ratings);
};
