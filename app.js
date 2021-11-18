const express = require('express');
const app = express();
const port = 3000;

//Sequalize models
const {sequelize} = require('./db/index.js')
const {Product, getProduct} = require('./models/products.js')
const {Style} = require('./models/styles.js')
const {Feature} = require('./models/features.js')
const {Photo} = require('./models/photos.js')
const {Sku} = require('./models/skus.js')
const {Related} = require('./models/related.js')

//middleware
app.use(express.json());

//TODO: Remove model imports, move to controller

////Testing sequelize//////
//Create Table
//Product.sync()

//Create Record
// Product.create({

//     name: 'rfpname',
//     slogan: 'testSlogan',
//     description: 'testDesc',
//     category: 'testCategory',
//     default_price: 100
//   })
//   .then((resp) =>
//   console.log(resp))
//   .catch((err) =>
//   console.log(err))


// Product.findAll().then(products => {
//   console.log('-----------------')
//   console.log(products)
// })



app.get('/', (req, res) =>
  res.send('Hello'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//40344
app.get('/products/:productID', (req, res) => {
  // debugger;
  let productID = req.params.productID
  //get DB record

  getProduct(productID).then((result) => console.log('RUTRNED::::', result.name))
  res.sendStatus(200)

})



