const port = 3000;
const express = require('express');
const cors = require('cors');
const server = express();
const routes = require('./routes');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'lovebags_db',
})

server.use(cors());
server.use(express.json());
server.use(routes);

db.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("🚀 ~ MYSQL Connected...")
    }
});

server.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 9 ~ server.listen ~ port", port);
})