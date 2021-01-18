const express = require('express');
const routes = express.Router();
const BagController = require('./controller/BagController');

routes.get('/', (req,res) => {
    
    return res.json({ message: `API for the lovebag store website.
    https://github.com/hacktoberbags/lovebag-backend` });
});

routes.get('/bags', BagController.index);
routes.post('/bags', BagController.store);



module.exports = routes;