const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')


//id,product_id,feature,value
const Feature = sequelize.define('feature', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id:{
    type: Sequelize.INTEGER
  },
  feature:{
    type: Sequelize.TEXT
  },
  value: {
    type: Sequelize.TEXT
  },
}, { timestamps: false})


module.exports.Feature = Feature;

