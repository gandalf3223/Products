const {Sequelize} = require('sequelize');
const config = require('../config.js')

if (!config) {
  console.log('Missing config.js file')
}

const sequelize = new Sequelize(config.URL, {
  //  // disable logging; default: console.log
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log(`SUCCESS: Connection to ${config.db_name} database at ${config.postgres_ip} established! \n`);
    sequelize.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports.sequelize = sequelize;