const { expect } = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'POST - Login', async () => {

    it( "Unsuccess", async () => {
        const dataUser = {
            email: "eve.holt@reqres.in",
        }

        let response = await request.post( '/api/register' )
            .send( dataUser )
        
        expect( response.status ).to.be.equal( 400 )
        expect( response.body ).have.property("error")
        

    }
    )

     it( "Unsuccess", async () => {
        const dataUser = {
            password : "cityslicka"
        }

        let response = await request.post( '/api/register' )
            .send( dataUser )
        
        expect( response.status ).to.be.equal( 400 )
        expect( response.body ).have.property("error")
        

    }
    )


     


} )