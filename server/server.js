var koa = require('koa');
var route = require('koa-route');

var conn = require('./database/connection');

var app = koa();

require('./middleware/koa-config')(app);

app.use(route.get('/api/stats', getStats));

function *getStats() {
	try {
		var account = yield conn.model('User').find({}).exec();
		this.body = account;
	} catch(err) {
		console.log(err);
	}
}

conn.once('open', function() {
	app.listen(3000);
	console.log('Up and running');
});