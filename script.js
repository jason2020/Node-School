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

var fs = require("fs");

var file = fs.readdir(process.argv[2], function(err, list) {
	console.log(list);
});



