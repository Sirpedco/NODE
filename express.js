const express = require('express');
const res  = require('express/lib/response');
const bod = require('body-parser')
const app = express();
const path = require('path');
const { userInfo } = require('cors');
app.use(express.json());
app.use(express.static(__dirname));
app.use(bod());

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "broz david"
});

app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname,"login2.html"));
})
app.post('/register/submit', function(req,res){ 
    console.log("test")
    let person={
        email: req.body.EMAIL,
        password: req.body.PASSWORD,
        firstname: req.body.FIRSTNAME,
        lastname: req.body.LASTNAME,
    }

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO persons(firstname,lastname,email,password) 
        VALUES ('${person.firstname}', '${person.lastname}', '${person.email}', '${person.password}')`;   
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("user added successfully");
          res.send("user added successfully")
      });
      })

    console.log(person)
    
})
app.get("/order",function(req,res){
    res.sendFile(path.resolve(__dirname,"login2.html"));
})
app.post('/order/submit' ,function(req,res){
    console.log("test")
    let person={
        email: req.body.EMAIL,
        password: req.body.PASSWORD,
    }

    con.connect(function(err){
        if (err) throw err;
        let sql=`SELECT * FROM persons WHERE email='${person.email}' AND password='${person.password}';`
        con.query(sql ,function(err,result){
            if (err) throw err
            else{
                if(result.length==0){
                    res.send('user not found')
                }
                else{
                    res.send('login successful')
                }
            }
    });
    })
})

//app.post('/submit' ,function(req,res){
    //res.sendFile(req.body.email);
//})
if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(5000, ()=>console.log(`Server started on port ${port}`));
}