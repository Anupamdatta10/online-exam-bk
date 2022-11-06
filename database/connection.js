var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'online_exam'
  });
   
connection.connect(()=>{
    console.log("connection established")
});

module.exports ={connection}
