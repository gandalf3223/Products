const newrelic = require('newrelic')
const express = require('express');
const app = express();
const port = 3000;
const logger = require('pino')({
  level: 'debug',
})

//Sequelize model functions
const {sequelize} = require('./db/index.js')
const {getProduct, getProductList} = require('./models/products.js')
const {getStylesList} = require('./models/styles.js')
const {getFeatures} = require('./models/features.js')
const {getPhotosList} = require('./models/photos.js')
const {getSkusList} = require('./models/skus.js')
const {getRelatedProductsList} = require('./models/related.js')


//Middleware
const path = require('path')
console.log('------------------------------', path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());


const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/*
API to retrieve specific Product with Product ID
*/
app.get('/products/:productID', (req, res) => {
  let productID = req.params.productID
  let productData = {};

  getProduct(productID)
  .then((result) => {
    productData = result

    return getFeatures(productID)
          .then( (result) => {
            productData.features = result;
            return productData;
          })
          .catch( (error) => {
            logger.error(error);
          })
  })
  .then((result) => {
    res.status(200).send(result)
  })
  .catch((reject) => {
    logger.error(`Get Product info with productID error: ${reject}`)
    res.sendStatus(500)
  })
})


/*
API to retrieve specific Products list,
with possibly page and count queries within URL
*/
app.get('/products/', (req, res) => {

  //API default values for page and count
  //if no query is in request URL string
  let page = 1
  let count = 5

  if (req.query.page) {
    page = parseInt(req.query.page);
  }
  if (req.query.count) {
    count = parseInt(req.query.count);
  }

  getProductList(page, count)
  .then( (result) => {
    console.log('ProductList', result)
    res.status(200).send(result)
  })
  .catch( (error) => {
    res.status(500).send('Error getting product list')

  })
})


/*
API to retrieve specific Styles list,
Includes Phots list and Skus list as property for styles
*/
app.get('/products/:productID/styles', (req, res) => {

  let productID = req.params.productID;
  let  productStyles = {product_id: productID}

  getStylesList(productID)
  .then( (stylesList) => {

    let promisesList = stylesList.map( (style) =>
     getPhotosList(style.style_id)
     .then((photosList) =>  {
       style.photos = photosList
       return getSkusList(style.style_id)
      })
      .then((skusList) => {
        style.sku = skusList;
        return style;
      })
    )

    return Promise.all(promisesList)
           .then((results) => {
             productStyles.results = results
             return productStyles
           })
  })
  .then((result) => {

    res.status(200).send(result)
  })
  .catch( (error) => {
      logger.error(error)
      res.status(500).send('Error getting styles data')
  })
})


/*
API to retrieve specific List of Related products
*/
app.get('/products/:productID/related', (req, res) => {
  let productID = req.params.productID;

  getRelatedProductsList(productID)
  .then( (relatedProductsList) => {
    res.status(200).send(relatedProductsList)
  })
  .catch( (error) => {
    logger.error(error)
    res.status(500).send('Server not able retrieve records')
  })
})

//Exporting for Endpoint testing
module.exports.app = app;
module.exports.server = server;