var passport = require('koa-passport');
var LocalStrategy = require('passport-local').Strategy;
var conn = require('../database/connection');
var co = require('co');

passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
	conn.model('User').findById(id, done);
});

function LocalAuth(email, password, done) {  
  co(function *() {
    try {
      return yield conn.model('User').matchCredentials(email, password);
    } catch (error) {
    	console.log(error);
      return null;
    }
  })(done);
};

passport.use('local', new LocalStrategy({usernameField: 'email'}, LocalAuth));

module.exports = passport;

