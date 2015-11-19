var path = require('path');
exports.render = function(req, res) {
	res.sendFile(path.resolve('public/index.html'));
};
