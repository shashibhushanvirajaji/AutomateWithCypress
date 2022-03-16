describe(' checking accessibility ',()=>{
    beforeEach(()=>{
        cy.visit('http://demowebshop.tricentis.com/')
        cy.injectAxe();
    })
    it('checking accessibility',()=>{
       // cy.checkA11y();  checking accessibility for entire document
  //     cy.checkA11y('img')   // checking accessibility issues for only images
       //cy.checkA11y({exclude:['button','img']}) //excluding one or more tags
       cy.customCheckA11Y()
    })
})