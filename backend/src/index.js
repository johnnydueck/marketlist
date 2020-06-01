const express = require('express');

app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3333;


const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'marketlist'
});

mc.connect();

app.listen(port);

console.log('API server started on: '+ port);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);
