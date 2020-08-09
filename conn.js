var mysql = require('mysql');
var con = mysql.createConnection({
 host: "localhost",
 user: "adisaput_db",
 password: "Qwerty!@#",
 database: "adisaput_db"
});
con.connect(function (err){
 if(err) throw err;
});
module.exports = con;
