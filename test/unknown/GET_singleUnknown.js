 const { expect } = require( 'chai' )
const request = require('../../src/baseTest')

describe("GET - Single unknown", async () => {

    it( "Success", async () => {
      try {
        let res = await request.get( '/api/unknown/2' )
                
          expect( res.status ).to.be.equal( 200 );
          expect(res.body.data.name).to.be.equal("fuchsia rose")

      } catch (error) {
        expect.fail(error);
      }
    }
    )

       
    
} ); 