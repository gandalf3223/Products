const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,  //Sequelize.UUID
                              // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: Sequelize.STRING(20)
  },
  slogan:{
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  },
  default_price:{
    type: Sequelize.INTEGER
  },
})


module.exports.Product = Product;

// id,name,slogan,description,category,default_price
