const { expect } = require( "chai" )
const request = require( "../../src/baseTest" )
require('dotenv').config()

describe( 'POST - Login', async () => {

    it( "Success", async () => {

        let response = await request.post( '/api/register' )
            .send( {
                email: process.env.EMAIL,
                password: process.env.PASSWORD
            } )
        
        expect( response.status ).to.be.equal( 200 )
        expect( response.body ).have.property("token")


    } )
    
    it.only( "Success another patern", ( done ) => {
        request
            .post( "/api/register" )
            .send( {
                email: process.env.EMAIL,
                password: process.env.PASSWORD
            } )
            .end( ( err, res ) => {
                expect( res.status ).to.equals( 200 )
                expect( res.body ).have.property( "token" )
                done();
	    });
	});


     


})