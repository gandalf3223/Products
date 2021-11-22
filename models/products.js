const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/index.js')


// id,name,slogan,description,category,default_price
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
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

  const product = await Product.findByPk(productID);
  if (product === null) {
    console.log(`${productID} not found in DB`)
  } else {
    console.log(product instanceof Product);
    console.log(product.name, 'was found')
    return product;
  }
}


//function for getting  list of procucts from DB
const getProductList = async function(page, count) {

  //Provides the first index of the page, depends on size of count.
  let start = ((page - 1) * count) //which first index of 'page' to start
  console.log(start)

  const productRecords = await Product.findAll({
      offset: start,  //Skip up till this point
      limit: count,  //fetch after that
    }
  )

  let productList = [];

  if(productRecords === null) {
    console.log('Products were not found in DB')
  } else {
    for (let record of productRecords) {
      productList.push(record.dataValues)
    }

    return productList;
  }

}


module.exports.Product = Product;
module.exports.getProduct = getProduct
module.exports.getProductList = getProductList;


