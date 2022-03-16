describe('working with drop down',function(){

    // beforeEach(()=>{
    //     cy.visit('https://the-internet.herokuapp.com/dropdown')
    // })
    it.skip('cypress way - drop selection',()=>{

       

        cy.get("#dropdown").select("Option 1").find('option:selected').invoke('text').should('eq','Option 1')
        
    })

    specify.skip('select value using optionvalue',()=>{
        cy.get('#dropdown').select('2')
    })

    it('drop down',()=>{
        cy.visit('https://semantic-ui.com/modules/dropdown.html')
        cy.get('.menu.transition.visible').select('Choice 1')
    })
})