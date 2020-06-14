const express = require('express');

const LogonController = require('./controllers/LogonController');
const SessionController = require('./controllers/sessionController');
const ProfileController = require('./controllers/ProfileController');
const NovoProdutoController = require('./controllers/NovoProdutoController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);


routes.get('/produtos', NovoProdutoController.index);
routes.post('/produtos', NovoProdutoController.create);
routes.delete('/produto/:id', NovoProdutoController.delete);

routes.get('/users', LogonController.index);

module.exports = routes;