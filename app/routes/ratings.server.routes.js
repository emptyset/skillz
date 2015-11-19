var ratings = require('../../app/controllers/ratings.server.controller');

module.exports = function(app) {
	console.log('setting up ratings routes');

	app.use('/ratings/:technology', ratings.query);

	app.route('/ratings*').get(ratings.read);
};
