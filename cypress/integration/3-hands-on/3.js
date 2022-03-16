context('test suite',()=>{

    specify('test case',()=>{
        cy.visit('https://www.google.co.in')
        cy.get('.gLFyf').type('shashibhushan{enter}')
        //cy.log('test case using context and specify ')
        //cy.contains('shashi bhuhan')
    })

    it('second test case',function(){  // use function, if you want to this keyword
        cy.log(this.test.title)
        cy.log(this.test.parent.title)
    })
})