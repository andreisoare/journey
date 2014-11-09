var session = require('koa-sess');
var bodyParser = require('koa-bodyparser');
var config = require('../config/config');
var passport = require('./auth');
var logger = require('koa-logger');


module.exports = function(app) {
   app.use(logger());	
   app.keys = config.get('app:keys');
   app.use(session({}));
   app.use(bodyParser());
   app.use(passport.initialize());
   app.use(passport.session());
}