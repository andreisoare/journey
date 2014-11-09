var nconf = require('nconf');
var path = require('path');


nconf.env();

if (nconf.get('NODE_ENV') == 'development') {
	nconf.file(path.join(__dirname, 'config.json'));
} else {
	nconf.file(path.join(__dirname, 'config.json'));
}

module.exports = nconf;
