const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./db/index.js')

const {Product} = require('./models/products')


////Testing sequelize

//Create Table
Product.sync()

//Create Record
Product.create({

    name: 'rfpname',
    slogan: 'testSlogan',
    description: 'testDesc',
    category: 'testCategory',
    default_price: 100
  })
  .then((resp) =>
  console.log(resp))
  .catch((err) =>
  console.log(err))


Product.findAll().then(products => {
  console.log('-----------------')
  console.log(products)
})



app.get('/', (req, res) =>
  res.send('Hello'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


