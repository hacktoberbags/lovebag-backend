const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./database');
const app = express();

const { SERVER_PORT = 3000 } = process.env;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

async function initializeServer() {
  await connectToDatabase();
  app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
}

module.exports = initializeServer;