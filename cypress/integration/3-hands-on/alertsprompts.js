describe('handling alerts promts confirm dialog and window',()=>{

    beforeEach(()=>{
         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('checking alert',()=>{

        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',alertText=>{
            cy.log(alertText)
        })
       
    })
})