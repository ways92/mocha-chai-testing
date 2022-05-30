const { expect } = require( 'chai' )
const request = require('../../src/baseTest')

describe("GET - Single user", async () => {
  
  it( "Success", async () => {
      try {
        let res = await request.get( '/api/users/2' )
                
          expect( res.status ).to.be.equal( 200 );
          expect(res.body.data.last_name).to.be.equal("Weaver")


      } catch (error) {
        expect.fail(error);
      }
    

    })
    
    
}); 