const { expect } = require( "chai" )
const supertest = require( 'supertest' )

let baseURL = "https://reqres.in"
const request = supertest( baseURL )


describe( 'POST', async () => {



    it( "Test- Post Create User API", async () => {
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