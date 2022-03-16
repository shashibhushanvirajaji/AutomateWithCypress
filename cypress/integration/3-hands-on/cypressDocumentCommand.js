context('working on document comamnds',()=>{

    it('test case1',()=>{
        cy.visit('https://www.google.co.in')
        cy.title().then( txt=>{
            expect(txt).to.contains('Google')
        })
    })

    it('getting height and width',()=>{
        cy.visit('https://www.google.co.in')
        
        cy.document().should(doc =>{
            const docObj = Cypress.$(doc)
            cy.log(docObj.height())
            cy.log(docObj.width())
        })
    })

    it('setting viewport',()=>{
       
        cy.viewport(450,800)
        cy.visit('https://www.google.co.in')
    })

    it('set  cookies',()=>{
        cy.setCookie('company','home')
        cy.getCookie('company')
        .should('have.a.property','value','home')
    })

    


})