var developers = require('../../app/controllers/developers.server.controller');

module.exports = function(app) {
	console.log('setting up developer routes');

	app.use('/developers', developers.list);
	app.use('/developers/:technology', developers.query);
	app.use('/developers/:technology/:rating', developers.query);

	app.route('/developers*').get(developers.read);
};
