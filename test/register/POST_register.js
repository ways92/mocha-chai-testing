const { expect } = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'POST - Register', async () => {

    it( "Success", async () => {
        const dataUser = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        let response = await request.post( '/api/register' )
            .send( dataUser )
        
        expect( response.status ).to.be.equal( 200 )
        expect( response.body ).have.property("token")
        

    }
    )

     


} )