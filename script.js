/* Challenge 1
console.log("HELLO WORLD");
*/

/* Challenge 2
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
}

console.log(sum);
*/

/* Challenge 3
var fs = require('fs'),
	buf = fs.readFileSync(process.argv[2]),
	newlines = buf.toString().split('\n').length - 1;

console.log(newlines);
*/

/* Challenge 4
var fs = require('fs');
var newline;
var file = fs.readFile(process.argv[2], function (err, data) {
	newlines = data.toString().split('\n').length - 1;
	console.log(newlines);
});
*/


/* Challenge 5
var fs = require("fs");
var path = require("path");

var filter = "." + process.argv[3];

var file = fs.readdir(process.argv[2], function(err, list) {
	for (var i = 0; i < list.length; i++) {
		var type = path.extname(list[i]);
		if (type === filter) {
			console.log(list[i]);
		}
	}
});
*/

/* Challenge 6
var fs = require("fs");
var path = require("path");

module.exports = function(dir, filter, callback) {
	var filter = "." + filter;

	fs.readdir(dir, function(err, list) {
		var filteredList = [];
		if (err) {
			return callback(err)
		} else {
			for (var i = 0; i < list.length; i++) {
				var type = path.extname(list[i]);
				if (type === filter) {
					filteredList.push(list[i]);
				}
			}
	    	callback(null, filteredList);
		}
	});
};
*/

/* Challenge 7
var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
	var response = res.setEncoding("utf8")
	response.on("data", function(data){
		console.log(data);
	});
});
*/






