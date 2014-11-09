var config = require('../config/config');
var mongoose = require('mongoose');
var ProfileSchema = require('./schemas/profile');
var EventSchema = require('./schemas/event');
var UserSchema = require('./schemas/user');


function setupConnection(host, name, port) {
	var conn = mongoose.createConnection(host, name, port);
   conn.model('Profile', ProfileSchema);
   conn.model('Event', EventSchema);
   conn.model('User', UserSchema);
   return conn;
};

var defaultConnection = setupConnection(
		config.get('database:host'),
		config.get('database:name'),
		config.get('database:port')
	);

module.exports = defaultConnection;
