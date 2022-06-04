var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "broz david"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE go(Id int, Questions Varchar(255), Answer int, Score int)";
  var sql2= "CREATE TABLE come (Questionid int, option Varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table2 created");
});
})
con.connect(function(err){
  let sql=`INSERT INTO PERSONS(FIRSTNAME,LASTNAME,EMAIL,PASSWORD)
  VALUES(${person.FIRSTNAME},${person.LASTNAME},${person.EMAIL},${person.PASSWORD})`
  con.query(sql,function(err,result){
    if(err) console.log(err)
    else console.log(result)
    con.close()
  })
})
