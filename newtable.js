var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sirpedco"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE jerry (Id int, Questions Varchar(255), Answer int, Score int)";
  var sql2= "CREATE TABLE tom (Questionid int, option Varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table2 created");
});
})