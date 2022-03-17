
describe('using get api call',()=>{

    it.skip('fetching all users',()=>{
        cy.request({
            url:"https://reqres.in/api/users?page=2",
            method:"GET"            
        }).then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    })
    it.skip('fetching all users using query parameter cy api',()=>{
        cy.api({
            url:"https://reqres.in/api/users",
            method:"GET",
            qs:{
                page:2
            }            
        }).then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    })
    it.only('fetching data using path parameter',()=>{
        cy.api({
            url:"https://reqres.in/api/users/2",
            method:"GET"
        }).then(resp=>{
            expect(response.status).to.be.equal(200)
        })
    })

})