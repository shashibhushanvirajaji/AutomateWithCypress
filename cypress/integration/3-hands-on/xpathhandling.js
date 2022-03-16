describe('handling xpath',()=>{

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/inputs")
    })

    it('handle xpath',()=>{
        cy.xpath(".//input[@type='number']").type('1232323',{force:true})
    })
})