describe('working with web elements commands',()=>{

    beforeEach(()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
    })

    it('find single element',()=>{
        cy.get('#userId').type('shashi bhushan',{force:true})
        cy.get('#pass').type('hellow wo')
    })

    it.only('checking multiple check boxes',()=>{
        cy.get('input[type="checkbox"][name="chkSelectRow[]"]').click({multiple:true})
    })
    
})