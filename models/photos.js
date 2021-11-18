const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')


// id,styleId,url,thumbnail_url
const Photo = sequelize.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  styleId:{
    type: Sequelize.INTEGER
  },
  url:{
    type: Sequelize.TEXT
  },
  thumbnail_url: {
    type: Sequelize.TEXT
  },
}, { timestamps: false})


module.exports.Photo = Photo;
