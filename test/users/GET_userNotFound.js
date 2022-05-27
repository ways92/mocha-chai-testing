const { expect } = require( 'chai' )
const request = require('../../src/baseTest')

describe("GET - Single user", async () => {

    it( "Unsuccess", async () => {
      try {
        let res = await request.get( '/api/users/24' )
                
          expect( res.status ).to.be.equal( 404 );


      } catch (error) {
        expect.fail(error);
      }
    }
    )
    
    
} ); 