
describe('handling custom commands',()=>{

    it.skip('handling custom commands',()=>{
        cy.ccommand()
        cy.login("shashi","adfads")
    })

    it.skip('hanlding custom child command',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        //cy.get('table#resultTable')
        cy.get('p.site-description').gettext().then(cy.log)
    })
    it.only('get cell data',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.getCellValue(2,3).then(cy.log)
    })

})