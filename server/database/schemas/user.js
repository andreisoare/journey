var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
	firstName: String,
	lastNamse: String,
	name: String,
	email: String,
	password: String
});

module.exports = AccountSchema;