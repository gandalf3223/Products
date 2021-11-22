const {getFeatures} = require('../models/features.js')

const productID = 1;

describe('Features', () => {
  test('Verify getFeatures returns features info from DB as list', ()=> {

    let expectedData =  [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
    return getFeatures(productID)
    .then( (data) => {
      expect(data).toEqual(expectedData);
    })
  })
})