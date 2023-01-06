require('dotenv').config()
const supertest = require( 'supertest' )
let baseURL = process.env.BASE_URL
const request = supertest( baseURL );

module.exports = request

