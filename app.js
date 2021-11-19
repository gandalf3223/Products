const express = require('express');
const app = express();
const port = 3000;
const logger = require('pino')({
  level: 'debug',
})

//Sequelize models
const {sequelize} = require('./db/index.js')
const {Product, getProduct, getProductList} = require('./models/products.js')
const {Style} = require('./models/styles.js')
const {Feature} = require('./models/features.js')
const {Photo, getPhotosList} = require('./models/photos.js')
const {Sku} = require('./models/skus.js')
const {Related} = require('./models/related.js')

//middleware
app.use(express.json());



app.get('/', (req, res) =>
  res.send('Hello'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.get('/products/:productID', (req, res) => {

  let productID = req.params.productID
  getProduct(productID)
  .then((result) => {
    //format Product data
    let productData =
    {
      "id": result.id,
      "name": result.name,
      "slogan": result.slogan,
      "description": result.description,
      "category": result.category,
      "default_price": result.default_price.toString()
    }
    res.status(200).send(productData)
  })
  .catch((reject) => {
    console.log('Get product with ID error', reject)
    res.sendStatus(500)
  })
})



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



app.get('/products/:productID/styles', (req, res) => {
  // debugger;
  let productID = req.params.productID;

  let testStyleID = 2 //Sample testing




  //Photo list for Styles API response
  getPhotosList(testStyleID)
  .then( (result) => {
    logger.debug(result)
  })
  .catch( (error) => {
    logger.error(error)
  })


  res.status(200).send('STYLES API')
})