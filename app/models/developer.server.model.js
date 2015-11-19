var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DeveloperSchema = new Schema({
	name: String,
	ratings: [
		{
			technology: String,
			rating: Number
		}
	]
});

mongoose.model('Developer', DeveloperSchema);
