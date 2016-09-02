var mysql      = require('mysql');

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
  else console.log(fields);
});


// var post = ;

// connection.query('INSERT INTO ecommerce_phone (fields ...) VALUES (values...)', post, function(err, result) {

// });

connection.end();



//reading and writing into mysql from json
/* 
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
*/