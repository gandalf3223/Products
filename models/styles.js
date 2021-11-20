//id,productId,name,sale_price,original_price,default_style
const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')
const logger = require('pino')(
 { level: 'debug', }
)


const Style = sequelize.define('style', {
  id: {
    type: Sequelize.INTEGER,
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


const getStylesList = async function(productID){

  let styleRecords = await Style.findAll({
    where: {
      productId: productID
    }
  })


  if ( styleRecords === null ) {
    logger.error(`Not able to find Style record from DB`)
  } else {
    logger.info(`Style records were found with productID: ${productID}`)

    let  styleList = [];
    for (let record of styleRecords) {

      let styleItem = {
        style_id: record.dataValues.id,
        name: record.dataValues.name,
        original_price: record.dataValues.original_price,
        sale_price: record.dataValues.sale_price
      }

      styleList.push(styleItem)
    }

    return styleList;
  }
}

module.exports.Style = Style;
module.exports.getStylesList = getStylesList;