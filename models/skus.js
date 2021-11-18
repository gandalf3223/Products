const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')


// id,styleId,size,quantity
const Sku = sequelize.define('sku', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  styleId:{
    type: Sequelize.INTEGER
  },
  size:{
    type: Sequelize.STRING(10)
  },
  quantity: {
    type: Sequelize.INTEGER
  },
}, { timestamps: false})


module.exports.Sku = Sku;
