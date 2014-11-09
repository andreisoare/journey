var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var conn = require('./database/connection');

var app = koa();

app.use(logger());

app.use(route.get('/api/stats', getStats));

function *getStats() {
	try {
		var account = yield conn.model('Account').find({}).exec();
		this.body = account;
	} catch(err) {
		console.log(err);
	}
}

conn.once('open', function() {
	app.listen(3000);
	console.log('Up and running');
});