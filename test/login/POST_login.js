const { expect } = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'POST - Login', async () => {

    it( "Success", async () => {
        const dataUser = {
            email: "eve.holt@reqres.in",
            password : "cityslicka"
        }

        let response = await request.post( '/api/register' )
            .send( dataUser )
        
        expect( response.status ).to.be.equal( 200 )
        expect( response.body ).have.property("token")


    }
    )

     


} )