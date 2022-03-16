describe('Test suite',{ baseUrl:"https://the-internet.herokuapp.com/upload/" },function(){

    Cypress.config("baseUrl","https://the-internet.herokuapp.com/inputs/")

    it("Test case 1",{"baseUrl":"https://the-internet.herokuapp.com/inputs/"},()=>{
        cy.visit(baseUrl)
    })
})