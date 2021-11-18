//id,productId,name,sale_price,original_price,default_style
const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')

const Style = sequelize.define('style', {
  id: {
    type: Sequelize.INTEGER,  //Sequelize.UUID
                              // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)
    primaryKey: true,
    autoIncrement: true,
  },
  productId:{
    type: Sequelize.INTEGER,
  },
  name:{
    type: Sequelize.TEXT
  },
  sale_price: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  original_price: {
    type: Sequelize.INTEGER
  },
  default_style:{
    type: Sequelize.BOOLEAN
  },
}, { timestamps: false})


module.exports.Style = Style;