const { expect } = require( 'chai' )
const request = require('../../src/baseTest')

describe("GET - Single user not found", async () => {

    it( "Unsuccess", async () => {
      try {
        let res = await request.get( '/api/users/24' )
                
        expect( res.status ).to.be.equal( 404 );
        expect(res.body).to.be.empty


      } catch (error) {
        expect.fail(error);
      }
    }
    )
    
    
} ); 