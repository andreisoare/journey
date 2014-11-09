var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');

var app = koa();

app.use(logger());
app.use(route.get('/api/stats', getStats));

function *getStats() {
	this.body = {foo: 'bar'};
}

app.listen(3000);
