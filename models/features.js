const { Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../db/index.js')
const logger = require('pino')({
  level: 'debug'
})

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



const getFeatures = async function(productID){
  let featureRecords = await Feature.findAll({
    where: {
      product_id : productID
    }
  });

  if (featureRecords === null) {
    logger.error(featureRecords)
  } else {
    let featureList = []

    for (let record of featureRecords) {
      let featureInfoItem = {
        feature: record.dataValues.feature,
        value: record.dataValues.value
      }
      featureList.push(featureInfoItem)
    }
    // logger.info(`Successfully retrieved Feature info from DB`)
    return featureList;
  }
}

module.exports.Feature = Feature;
module.exports.getFeatures = getFeatures;
