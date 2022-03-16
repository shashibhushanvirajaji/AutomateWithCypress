describe('working with shadow dom elements',()=>{

    beforeEach(()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
    })

    it('test case - handling shadow dom',()=>{
        
        cy.get('div#snacktime')
        .shadow()
        .find('input#tea').type('hi havea nice day')
    })
})