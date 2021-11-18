const {Sequelize} = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('products_db', 'vinhle', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });
const sequelize = new Sequelize('postgres://vinhle:postgres@localhost:5432/products_db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


debugger;

module.exports.sequelize = sequelize;