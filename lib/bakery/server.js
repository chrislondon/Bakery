/**
 * Bakery -> CLI
 */

var server = module.exports = function(options) {
	var bakery = require('../bakery');

	bakery.cli('watch');

	var connect = require('connect');
	
	connect.createServer(
		connect['static'](options.webroot)
	).listen(options.port);

	console.log('Server connected at http://localhost:' + options.port + ' ...');
};