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

connection.query('SELECT * from ecommerce_phone', function(err, rows, fields) {
  if (err) throw err;
  // else console.log(fields);
});

// TRIPLE FOOOOORRRRRRR LOOP
// SUPER O(n^3)

phones.forEach(function(phone) {
	// console.log(val["brand"] + "\n");


	// Create the obj
	// loop throuh adding parts to it, and then colors

	

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
				obj["device"] = phone["device"];
				obj["part"] = part["part_name"];
				obj["color"] = partColor;
				console.log(obj);

			});



		} else {
			// set color to "" or null
			// var obj = {
			// 	"brand" = phone["brand"],
			// 	"device" = phone["device"],
			// 	"part" = part["part_name"],
			// 	"color" = null
			// };
			var obj = {};
				obj["brand"] = phone["brand"];
				obj["device"] = phone["device"];
				obj["part"] = part["part_name"];
				obj["color"] = null;
				console.log(obj);
		}



	});



});






// var post = ;

connection.query('INSERT INTO ecommerce_phone (fields ...) VALUES (values...)', function(err, result) {

});

connection.end();



//reading and writing into mysql from json
/* 
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
*/