const {Sequelize} = require('sequelize');
const config = require('../config.js')

if (!config) {
  console.log('Missing config.js file')
}

const sequelize = new Sequelize(config.URL);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports.sequelize = sequelize;