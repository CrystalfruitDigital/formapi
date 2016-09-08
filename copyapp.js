var mysql      = require('mysql');
var fs         = require('fs');
// var phones     = require('json.json');

var colors = ["Black", "White", "Red", "Blue", "Yellow", "Pink", "Purple", "Gray", "Brown", "Green", "Orange"];

var parts = JSON.parse(fs.readFileSync("part_name.json", "utf8"));
var phones = JSON.parse(fs.readFileSync("json.json", "utf8"));


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'inventory'
});

connection.connect(function(err) {
	if (err) console.log(err);
	else console.log("Connection sucessful!");
});

var insertIntoDatabase = function(post) {
	connection.query('INSERT INTO phones_copy SET ?', post, function(err, result) {
		if (err) console.log(err);
		console.log(result);
	});
};


connection.query('SELECT * from phones_copy', function(err, rows, fields) {
  if (err) throw err;
  // else console.log(fields);
});

// TRIPLE FOOOOORRRRRRR LOOP
// SUPER O(n^3)
var counter = 0;
phones.forEach(function(phone) {

	parts.forEach(function(part) {

		if (part["color"] === 1) {
			// Add all the colors

			colors.forEach(function(partColor) {

				// var obj = {
				// 	brand = phone["brand"],
				// 	device = phone["device"],
				// 	part = part["part_name"],
				// 	color = partColor
				// };
				var obj = {};
				obj["brand"] = phone["brand"];
				obj["device_name"] = phone["device"];
				obj["part_name"] = part["part_name"];
				obj["color"] = partColor;
				insertIntoDatabase(obj);
				// console.log(obj);

			});

		} else {
			var obj = {};
			obj["brand"] = phone["brand"];
			obj["device_name"] = phone["device"];
			obj["part_name"] = part["part_name"];
			obj["color"] = null;
			// console.log(obj);
			insertIntoDatabase(obj);
		}
		counter++;

	});

});


// var obj = {};
// obj["brand"] = phones[0]["brand"];
// obj["device_name"] = phones[0]["device"];
// obj["part_name"] = parts[0]["part_name"];
// obj["color"] = "Black";
// console.log(obj);



// insertIntoDatabase(obj);
console.log("-----counter-----:" + counter);
connection.end();



//reading and writing into mysql from json
/* 
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
*/