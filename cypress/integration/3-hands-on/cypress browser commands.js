describe('working with windows',function(){
  
  it.only('get hash host',()=>{
    cy.visit('https://www.google.co.in')
   cy.log( cy.hash())
    cy.log(cy.location('host'))
    cy.log(cy.location('hostname'))
    cy.log(cy.location('port'))


  })
    it(' reload using window command',function(){
        cy.visit('https://www.google.co.in')
        cy.window().should((win)=>{
            win.location.reload()
        })
    })
    it('reload using cy object',()=>{
        cy.visit('https://www.google.co.in')
        cy.reload()
    })

    it('navigate back ward using window command',()=>{
        cy.visit('https://www.google.co.in')
        cy.get('.gLFyf').type('shashibhushan{enter}')
        cy.window().should((win)=>{
            win.history.back();
        })
    } )

    it('navigate forward ward using window command',()=>{
        cy.visit('https://www.google.co.in')
        cy.get('.gLFyf').type('shashibhushan{enter}')
        cy.window().should((win)=>{
            win.history.back()
            win.history.forward()
        })
    } )

    it('navigate back using cy object',()=>{
        cy.visit('https://www.google.co.in')
        cy.get('.gLFyf').type('shashibhushan{enter}')
        cy.go('back')
    })

    it('navigate forward using cy object',()=>{
        cy.visit('https://www.google.co.in')
        cy.get('.gLFyf').type('shashibhushan{enter}')
        cy.go('back')
        cy.go('forward')
    })
})