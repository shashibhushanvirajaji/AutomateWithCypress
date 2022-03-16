/// <reference types='cypress' />

describe('read a file ', ()=>{
    it('first test',()=>{
        cy.fixture('example').then((data)=>{
           cy.log(data.name)
        })
    })
})