var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	firstName: String,
	lastNamse: String,
	name: String,
	email: String,
	password: String
});

UserSchema.methods.comparePassword = function *(password) {  
  return yield bcrypt.compare(password, this.password);
};

UserSchema.statics.matchCredentails = function *(email, password) {  
  var user = yield this.findOne({ 'email': email }).exec();

  if (!user) throw new Error('User not found');

  if (yield user.comparePassword(password))
    return user;

  throw new Error('Password does not match');
};

module.exports = UserSchema;