const  {expect} = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'POST - Create User', async () => {

    it( "Success", async () => {
        const dataUser = {
            name: "Boaz",
            job: "Marketing"
        }


        let response = await request.post( '/api/users' )
            .send( dataUser )

        expect( response.status ).to.be.equal( 201 )
        expect( response.body.name ).to.be.equal( "Boaz" )

    }
    )

     


} )