const {getRelatedProductsList} = require('../models/related.js');

const productID = 1;
const expectedData =
[
  2,
  3,
  8,
  7
]

describe('Related Products', () => {
  test('getRelatedProducts retrieves productIDs releated to provided productIDs from the DB', () => {

    return getRelatedProductsList(productID).then( (data) => {
      expect(data).toEqual(expectedData);
    })
  })

})