const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,  //Sequelize.UUID
                              // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: Sequelize.STRING
  },
  slogan:{
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  },
  default_price:{
    type: Sequelize.INTEGER
  },

}, { timestamps: false})

//function for getting record from DB
const getProduct = async function(productID) {

  console.log(productID)
  const product = await Product.findByPk(123);
  if (product === null) {
    console.log(`${productID} not found in DB`)
  } else {
    console.log(product instanceof Product);
    console.log(product.name)
    return product;
  }
  debugger;

}


module.exports.Product = Product;
module.exports.getProduct = getProduct

// id,name,slogan,description,category,default_price
