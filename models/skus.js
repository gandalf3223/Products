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


const getSkusList = async function(StyleID) {

  let skuRecords = await Sku.findAll({
    while: {
      styleId: StyleID,
    }
  })

  if (skuRecords === null) {
    logger.error('Sku records were not found in DB')
  } else {
    let skusList = [];
    for (let record of skuRecords) {
      let skuItem = {
        [record.dataValues.id ]:{
          size: record.dataValues.size,
          quantity : record.dataValues.quantity
        }
      }
      // logger.debug(skusList)
      skusList.push(skuItem)
      return skusList;
    }
  }
}


module.exports.Sku = Sku;
module.exports.getSkusList = getSkusList;