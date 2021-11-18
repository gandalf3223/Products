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

//   {
//     "id": 1,
//     "name": "Camo Onesie",
//     "slogan": "Blend in to your crowd",
//     "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//     "category": "Jackets",
//     "default_price": "140"
// },
  getProduct(productID)
  .then((result) => {
    console.log('RUTRNED::::', result.name)
    //format data,
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


  // res.sendStatus(200)

})



