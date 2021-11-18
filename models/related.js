const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')


// id,current_product_id,related_product_id
const Related = sequelize.define('related', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  current_product_id:{
    type: Sequelize.INTEGER
  },
  related_product_id:{
    type: Sequelize.TEXT
  },
},{ timestamps: false,})



module.exports.Related = Related;
