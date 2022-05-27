const { expect } = require( "chai" )
const request = require( "../../src/baseTest.js" )

describe("GET - List Users", async () => {
  
  it( "Success", async () => {
      
      try {
        let res = await request.get( '/api/users?page=2' )
        
        expect( res.status ).to.be.equal( 200 );

      } catch (error) {
        expect.fail(error);
      }
    }
  );

  
  // it("Test-02 - Create User API", async () => {
 
  //   try {
  //     const dataUSer = {
  //       name: "Ozi",
  //       job: "Engineer",
  //     };

  //     let response = await request.post( '/api/users' )
  //       .send( dataUSer )
      
  //     expect( response.status ).to.be.equal( 201 );
  //     expect( response.body.name ).to.be.equal("Ozi")
  //   } catch (error) {
  //     expect.fail(error);
  //   }
  // }
  // );
    
}); 