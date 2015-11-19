var technologies = require('../../app/controllers/technologies.server.controller');

module.exports = function(app) {
	console.log('setting up technology routes');

	app.use('/technologies', technologies.list);

	app.route('/technologies').get(technologies.read);
};
