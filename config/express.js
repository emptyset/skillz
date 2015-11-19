var config = require('./config'),
	express = require('express');

module.exports = function() {
	var app = express();

	app.set('views', './app/views');
	app.set('view engine', 'jade');

	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/developers.server.routes.js')(app);
	require('../app/routes/technologies.server.routes.js')(app);
	require('../app/routes/ratings.server.routes.js')(app);

	app.use(express.static('./public'));

	return app;
};
