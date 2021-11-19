const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.PG_URL

const sequelize = new Sequelize(URL);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports.sequelize = sequelize;