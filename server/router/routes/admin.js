var route = require('koa-route');
var passport = require('../../middleware/auth');
var thunkify = require('thunkify');


module.exports = function(app) {
	app.use(route.post('/api/web/1/login', function*() {
		var context = this;
		yield* passport.authenticate('local', function*(err, user, info) {
	    if (err) throw err
	    if (user === false) {
	      context.status = 401
	      context.body = { success: false }
	    } else {
	      yield context.login(user)
	      context.body = {user: user}
	    }
	  }).call(this);
	}));
};
