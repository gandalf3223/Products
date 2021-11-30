const {getSkusList} = require('../models/skus.js');


const styleID = 1;
const expectedData =
{
  "1": {
      "size": "XS",
      "quantity": 8
  },
  "2": {
      "size": "S",
      "quantity": 16
  },
  "3": {
      "size": "M",
      "quantity": 17
  },
  "4": {
      "size": "L",
      "quantity": 10
  },
  "5": {
      "size": "XL",
      "quantity": 15
  },
  "6": {
      "size": "XL",
      "quantity": 4
  }
}

describe('SKUs', () => {
  test('getSkusList retrieves Skus info for a styleID from DB and returns as a list', () => {

    return getSkusList(styleID).then( (data) => {
      expect(data).toEqual(expectedData);
    })
  })
})