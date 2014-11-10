var koa = require('koa');
var route = require('koa-route');

var conn = require('./database/connection');

var app = koa();

require('./middleware/koa-config')(app);
require('./router/routes/admin')(app);

conn.once('open', function() {
	app.listen(3000);
	console.log('Up and running');
});