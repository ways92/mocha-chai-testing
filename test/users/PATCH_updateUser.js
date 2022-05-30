const  {expect} = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'PATCH - Update User', async () => {

    it( "Success", async () => {
        const dataUser = {
            name: "PATCH"
        }

        let response = await request.patch( '/api/users/2' )
            .send( dataUser )

        expect( response.status ).to.be.equal( 200 )
        expect( response.body.name ).to.be.equal( "PATCH" )

    })

     


})