const supertest = require( 'supertest' )
let baseURL = "https://reqres.in"
const request = supertest( baseURL );

module.exports = request

