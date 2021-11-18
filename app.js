const express = require('express');
const app = express();
const port = 3000;
const {sequelize} = require('./db/index.js')

const {Product} = require('./models/products.js')
const {Style} = require('./models/styles.js')
const {Feature} = require('./models/features.js')
const {Photo} = require('./models/photos.js')
const {Sku} = require('./models/skus.js')
const {Related} = require('./models/related.js')


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


