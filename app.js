const express = require('express');
const app = express();
const port = 3000;
const logger = require('pino')({
  level: 'debug',
})

//Sequelize models
const {sequelize} = require('./db/index.js')
const {Product, getProduct, getProductList} = require('./models/products.js')
const {Style, getStylesList} = require('./models/styles.js')
const {Feature, getFeatures} = require('./models/features.js')
const {Photo, getPhotosList} = require('./models/photos.js')
const {Sku, getSkusList} = require('./models/skus.js')
const {Related} = require('./models/related.js')


//middleware
app.use(express.json());

// Feature.sync()

app.get('/', (req, res) =>
  res.send('Hello'))


app.listen(port, () => {
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
    //format Product data
    productData =
    {
      "id": result.id,
      "name": result.name,
      "slogan": result.slogan,
      "description": result.description,
      "category": result.category,
      "default_price": result.default_price.toString()
    }

    getFeatures(productID)
      .then( (result) => {
      // logger.debug(result)
      productData.features = result;
      res.status(200).send(productData)
    })
    .catch((reject) => {
    logger.error(`Get feature with productID error: ${reject}`)
    res.sendStatus(500)
    })

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
Includes Phots list and Skus list
*/
app.get('/products/:productID/styles', (req, res) => {

  let productID = req.params.productID;


  let  productStyles = {product_id: productID}



  getStylesList(productID)
  .then( (result) => {

    let promisesList = result.map( (style) =>
     getPhotosList(style.style_id)

     .then((result) =>  {
       style.photo = result
       return getSkusList(style.style_id)
      })

      .then((result) => {
        style.sku = result;
        return style
      })
    )

    Promise.all(promisesList)
    .then((results) => {
      // logger.debug(results)
      productStyles.results = results
      // return results//
    })
    //for each style, add skus and photos properties
    // for(let style of result){
    //   logger.debug(`${style.style_id}`)

    //   getPhotosList(style.style_id)
    //   .then( (result) => {
    //     // logger.debug(`PHOTOS: ${result}`)
    //     style.photos = result;
    //     return getSkusList(style.style_id)
    //   })
    //   // .then(getSkusList(style.style_id))
    //   .then( (result) => {
    //     // logger.debug(`SKUS: ${result}`)
    //     style.skus = result;
    //     stylesList.push(style)
    //   })

    // }

  })
  .then((x) => {
    logger.debug(`${x}`)
    logger.debug(`${stylesList}`)
    res.status(200).send(stylesList)
  })
  .catch( (error) => {
      logger.error(error)
      res.status(500).send('Error getting styles data')
  })

  //   logger.info(stylesList)
  //   res.status(200).send(stylesList)
  // })
  // .catch( (error) => {
  //   logger.error(error)
  //   res.status(500).send('Error getting styles data')
  // })





  // // Photo list for Styles API response
  // getPhotosList(testStyleID)
  // .then( (result) => {
  //   logger.debug(result)
  // })
  // .catch( (error) => {
  //   logger.error(error)
  // })


  // //Sku list for Styles API response
  // getSkusList(testStyleID)
  // .then( (result) => {
  //   logger.info(result)
  //   res.status(200).send('STYLES API')
  // })
  // .catch( (error) => {
  //   logger.error(error)
  // })



})