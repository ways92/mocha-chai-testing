const  {expect} = require( "chai" )
const request = require( "../../src/baseTest" )


describe( 'POST - Register', async () => {

    it( "Unsuccess", async () => {
        const dataUser = {
            email: "eve.holt@reqres.in"
        }


        let response = await request.post( '/api/register' )
            .send( dataUser )

        expect( response.status ).to.be.equal( 400 )
        expect( response.body.error ).to.be.contain("Missing")

    }
    )

     it( "Unsuccess", async () => {
        const dataUser = {
            password: "pistol"
        }


        let response = await request.post( '/api/register' )
             .send( dataUser )
         
         console.log(response.body.error)

        expect( response.status ).to.be.equal( 400 )
        expect( response.body.error ).to.be.contain("Missing")

    }
    )
     


} )