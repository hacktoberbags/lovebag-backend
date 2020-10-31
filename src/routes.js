const express = require('express');
const BagController = require('./controllers/BagController');

const routes = express.Router();

routes.get('/bags', BagController.show);

module.exports = routes;