const {getStylesList} = require('../models/styles.js');

const productID = 1;
const expectedData =
[
  {
    "style_id": 1,
    "name": "Forest Green & Black",
    "original_price": 140,
      "sale_price": "null",
  },
  {
    "style_id": 2,
    "name": "Desert Brown & Tan",
    "original_price": 140,
    "sale_price": "null",
  },
  {
    "style_id": 3,
    "name": "Ocean Blue & Grey",
    "original_price": 140,
    "sale_price": "100",
  },
  {
    "style_id": 4,
    "name": "Digital Red & Black",
    "original_price": 140,
    "sale_price": "null",
  },
  {
    "style_id": 5,
    "name": "Sky Blue & White",
    "original_price": 140,
    "sale_price": "100",
  },
  {
    "style_id": 6,
    "name": "Dark Grey & Black",
    "original_price": 170,
    "sale_price": "null",

  }
];

describe('Styles', () => {
  test('getStylesList retrieves Styles info from DB with related to a productID and returns them as a list',
  () => {

    return getStylesList(productID)
    .then( (data) => {
      expect(data).toEqual(expectedData);
    })
  })
})