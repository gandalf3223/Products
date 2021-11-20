const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')
const logger = require('pino')({
  level: 'debug',
})

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


const getSkusList = async function(styleID) {
  logger.info(styleID)
  let skuRecords = await Sku.findAll({
    where: {
      styleId: styleID
    }
  })

  if (skuRecords === null) {
    logger.error('Sku records were not found in DB')
  } else {
    logger.info(`Found Sku records in DB`)
    let skusList = [];

    for (let record of skuRecords) {
      let skuItem = {
        [record.dataValues.id ]:{
          size: record.dataValues.size,
          quantity : record.dataValues.quantity
        }
      }

      skusList.push(skuItem)
    }

    return skusList;
  }
}


module.exports.Sku = Sku;
module.exports.getSkusList = getSkusList;