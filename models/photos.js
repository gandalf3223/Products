const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')
const logger = require('pino')({
  level: 'debug',
})

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


const getPhotosList = async function(styleID){
  let photoRecords = await Photo.findAll({
    where: {
      styleId: styleID
    }
  })

  if (photoRecords === null) {
    logger.error('Did not find Photo records in DB')
  } else {
    // logger.info(`Found Photo records in DB`)

    let photosList = [];
    for (let record of photoRecords) {
      photoItem = {
          url: record.dataValues.url,
          thumbnail_url: record.dataValues.thumbnail_url
      }

      photosList.push(photoItem)
    }
    return photosList;
  }

}


module.exports.Photo = Photo;
module.exports.getPhotosList = getPhotosList;