const typeorm = require('typeorm');
const Bag = require('../src/model/Bag');

const {
  DB_HOST='localhost',
  DB_PORT=5432,
  DB_USERNAME='postgres',
  DB_PASSWORD='root',
  DB_NAME='postgres',
} = process.env;


function connectToDatabase() {
  return typeorm.createConnection({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Bag],
  });
}

module.exports = connectToDatabase;