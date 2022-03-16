describe('writing data into file',()=>{
    it('test 1 - write data',()=>{
        cy.writeFile('sample.txt','Hello Ruthvika \n')
        cy.writeFile('sample.txt','Hello Shashibhushan',{flag: 'a+'})
    })
})