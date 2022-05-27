const  {expect} = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'DELETE - User', async () => {

    it( "Success", async () => {

        let response = await request.delete( '/api/users/2' )

        expect( response.status ).to.be.equal( 204 )

    }
    )

     


} )