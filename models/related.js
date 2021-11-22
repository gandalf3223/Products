const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')
const logger = require('pino')(
  { level: 'debug', }
 )


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


const getRelatedProductsList = async function(productID) {

  let relatedProductRecords = await Related.findAll({
    where : {
      current_product_id: productID,
    }
  })

  if (relatedProductRecords ===  null) {
    logger.error('Not able to find Related products record from DB')
  } else {
    logger.info(`Found relatedProduct records in DB`)

    let relatedProductsList = [];
    for (let record of relatedProductRecords){
      relatedProductsList.push(parseInt(record.dataValues.related_product_id))
    }
    return relatedProductsList
  }
}

module.exports.Related = Related;
module.exports.getRelatedProductsList = getRelatedProductsList;