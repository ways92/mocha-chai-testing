const { expect } = require( 'chai' )
const request = require('../../src/baseTest')

describe("GET - List unknown", async () => {
  
  it( "Success", async () => {
      try {
        let res = await request.get( '/api/unknown' )
                
          expect( res.status ).to.be.equal( 200 );


      } catch (error) {
        expect.fail(error);
      }
    
    })

       
    
}); 