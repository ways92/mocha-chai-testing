const { expect } = require( "chai" )
const request = require( "../../src/baseTest.js" )

describe("GET - List delayed response", async () => {
  
  it( "Success", async () => {
    
      try {
        let res = await request.get( '/api/users?delay=3' )
        
        expect( res.status ).to.be.equal( 200 );

      } catch (error) {
        expect.fail(error);
      }

    
    });
  
    
}); 