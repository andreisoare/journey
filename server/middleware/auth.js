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

function UserAuth(username, password, done) {  
  co(function *() {
    try {
      return yield User.matchCredentials(username, password);
    } catch (error) {
      return null;
    }
  })(done);
};

passport.use(new LocalStrategy(UserAuth));

module.exports = passport;

