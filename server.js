process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	express = require('./config/express'),
	mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();

module.exports = app;
