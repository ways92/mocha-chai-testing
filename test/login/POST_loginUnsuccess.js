const { expect } = require( "chai" )
const request = require( "../../src/baseTest" )
require('dotenv').config()

describe( 'POST - Login', async () => {

    it( "Unsuccess", async () => {
        let response = await request.post( '/api/register' )
            .send( {
                email: process.env.EMAIL
            } )
        
        expect( response.status ).to.be.equal( 400 )
        expect( response.body ).have.property("error")
        

    })

     it( "Unsuccess", async () => {
        let response = await request.post( '/api/register' )
            .send( {
                password: process.env.PASSWORD
            } )
        
        expect( response.status ).to.be.equal( 400 )
        expect( response.body ).have.property("error")
        

    })
    
    it.only( "Empty email", ( done ) => {
        request
            .post( "/api/register" )
            .send( {
                password : process.env.PASSWORD
            } )
            .end( ( err, res ) => {
                expect( res.status ).to.be.equal( 400 )
                expect( res.body ).have.property( "error" )
                expect( res.body.error ).equals( "Missing email or username" )
                done();
	    });
    } );
    
    it.only( "Empty password", ( done ) => {
        request
            .post( "/api/register" )
            .send( {
                email: process.env.EMAIL
            } )
            .end( ( err, res ) => {
                expect( res.status ).to.be.equal( 400 )
                expect( res.body ).have.property( "error" )
                expect( res.body.error ).equals( "Missing password" )
                done()
            } );
	});

    it.only( "Empty email and password", ( done ) => {
        request
            .post( "/api/register" )
            .send()
            .end( ( err, res ) => {
                expect( res.status ).to.be.equal( 400 )
                expect( res.body ).have.property( "error" )
                expect( res.body.error ).equals( "Missing email or username" )
                done()
            } );
	});

     


})