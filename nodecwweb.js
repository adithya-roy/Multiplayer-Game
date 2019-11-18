var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connection Made!");
  con.query("CREATE DATABASE gamedb", function (err, result) {
    if (err) throw err;
    console.log("Database created!!");
  });
});


var con2 = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "gamedb"
});

con2.connect(function(err) {
  var sql = "CREATE TABLE Players (Name VARCHAR(255), Score int)";
  con2.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
