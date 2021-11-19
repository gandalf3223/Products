const { Sequelize, DataTypes, Op } = require('sequelize');
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
      product_id: {
        [Op.eq]: 2
     }
    }
  });
  if (featureRecords === null) {
    // console.log(featureRecords)
    logger.error(featureRecords)
  } else {
    // console.log(featureRecords)
    let featureList = []
    // logger.info(featureRecords);
    for (let featureItem of featureRecords) {
      let featureInfoItem = {
        feature: featureItem.dataValues.feature,
        value: featureItem.dataValues.value
      }
      featureList.push(featureInfoItem)
    }
    logger.info(featureList)
    return featureList;
  }

}

module.exports.Feature = Feature;
module.exports.getFeatures = getFeatures;
