const port = 3000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://lovebag:1@2monalisa@3@4@cluster.xjoe7.mongodb.net/lovebag?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 9 ~ server.listen ~ port", port);
})