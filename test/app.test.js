const request = require("supertest");
const {app, server} = require('../app.js')
const {expectedProduct, expectedProductList, expectedStyles} = require('./sampleTestData.js')



jest.setTimeout(10000); //Allow test duration of 10 Seconds


describe('Endpoint API verifiation', () =>{
  test('GET /product/', (done) => {

  request(app)
    .get("/products/1/")
    .expect(200)
    .set('Accept', 'application/json')
    .then(response => {
      expect(response.body).toEqual(expectedProduct)
      done();
    })
    .catch(err => done(err))

  })


  test('GET /product/:productID', (done) => {
    request(app)
      .get("/products/")
      .expect(200)
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.body).toEqual(expectedProductList)
        done();
      })
      .catch(err => done(err))

    })

    test('GET /product/:productID/styles', (done) => {
      request(app)
        .get("/products/1/styles")
        .expect(200)
        .set('Accept', 'application/json')
        .then(response => {
          expect(response.body).toEqual(expectedStyles)
          done();
        })
        .catch(err => done(err))

      })


      test('GET /product/:productID/related', (done) => {
        const expectedRelatedProductIDs = [2, 3, 8, 7]

        request(app)
          .get("/products/1/related")
          .expect(200)
          .set('Accept', 'application/json')
          .then(response => {
            expect(response.body).toEqual(expectedRelatedProductIDs)
            done();
          })
          .catch(err => done(err))
        })


  //Shutdown server after tests have ran
  server.close()
});