const  {expect} = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'PUT - Update User', async () => {

    it( "Success", async () => {
        const dataUser = {
            name: "PUT",
            job: "Sales"
        }

        let response = await request.put( '/api/users/2' )
            .send( dataUser )

        expect( response.status ).to.be.equal( 200 )
        expect( response.body.name ).to.be.equal( "PUT" )

    }
    )

     


} )