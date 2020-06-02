const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333;
const routes = require('./routes');


const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'marketlist'
});

mc.connect();

app.use(routes);
app.listen(port);

// console.log('API server started on: '+ port);

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

// var routes = require('./routes');
// routes(app);
