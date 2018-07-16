
var fs = require('fs');
var shops = require('./../_data/shops.json');
var mkdirp = require('mkdirp');
var YAML = require('json2yaml');

mkdirp("_shops", function (err) {
	if (err) console.error(err)
});

shops.forEach(function(item) {
	console.log(item['idMetier']);
	fs.writeFile('_shops/' + item['idMetier'] + '.md', YAML.stringify(item) + '---', 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	});
});