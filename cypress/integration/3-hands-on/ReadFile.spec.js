describe('read file',()=>{

    it('read file ',()=>{
        cy.readFile('sample.txt').then(cy.log)
    })
})