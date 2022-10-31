var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'sql12.freemysqlhosting.net',
    user     : 'sql12530712',
    password : 'icBgcRxIv7',
    database : 'sql12530712'
  });
   
connection.connect(()=>{
    console.log("connection established")
});

module.exports ={connection}
