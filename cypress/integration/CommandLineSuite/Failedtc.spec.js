describe(' wantedlt failing',()=>{

    it('wanted',()=>{
        cy.visit('https://www.google.co.in/')
        cy.url().should('include','Google')
    })
})