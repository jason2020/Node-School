var runScript = require('./script.js');

var file = process.argv[2];
var filter = process.argv[3];


runScript(file, filter, function(err, list) {
	if (err) {
    	return console.error('There was an error:', err)
	} else {

		for (var i = 0; i < list.length; i++) {
			console.log(list[i]);
		}
	}
});
