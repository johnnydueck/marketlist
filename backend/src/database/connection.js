const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'marketlist'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection; 