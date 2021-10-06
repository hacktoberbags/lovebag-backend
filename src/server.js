const port = 3000;
const express = require('express');
const cors = require('cors');
const server = express();
const routes = require('./routes');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: 'src/.env' });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
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