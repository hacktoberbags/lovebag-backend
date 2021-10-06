const express = require('express');
const routes = express.Router();
const BagController = require('./controller/BagController');
const UserController = require('./controller/UserController');
const CartController = require('./controller/CartController');

routes.get('/', (req,res) => {
    return res.json({ message: `API for the lovebag store website.
    https://github.com/hacktoberbags/lovebag-backend` });
});

routes.get('/bags', BagController.indexUser);
routes.get('/bags/adm', BagController.indexAdm);
routes.post('/bags/adm', BagController.store);

routes.post('/user', UserController.store);

routes.post('/bags/:bagId/cart', CartController.store);

module.exports = routes;