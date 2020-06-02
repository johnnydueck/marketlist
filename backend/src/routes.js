const express = require('express');

const LogonController = require('./controllers/LogonController');

const routes = express.Router();

routes.get('/users', LogonController.index);

module.exports = routes;