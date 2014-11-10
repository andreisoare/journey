var conn = require('../database/connection');
var User = conn.model('User');
var bcrypt = require('bcrypt');
var md5 = require('MD5');


var EMAIL = "vladcyb1@gmail.com";
var PASSWORD = "test";
var NAME = "Vlad Berteanu";

var salt = bcrypt.genSaltSync(10);
var password_hash = bcrypt.hashSync(md5(PASSWORD), salt);

var Account = new User({
	email: EMAIL,
	name: NAME,
	password: password_hash,
	firstName: NAME.split(" ")[0],
	lastName: NAME.split(" ")[1]
});

Account.save(function(err, account) {
	if (err) {
		console.log("error: ", err);
	} else {
		console.log("success: ", account);
	}
	process.exit(0);
});