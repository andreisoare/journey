var passport = require('koa-passport');
var conn = require('../database/connection');

passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
  done(null, user)
})