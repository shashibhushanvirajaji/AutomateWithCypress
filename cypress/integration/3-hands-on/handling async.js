
describe('async ',()=>{

    let me = 'heelow'
    it('from it block',(done)=>{
        cy.visit('https://www.google.co.in').then(()=>{
            me = cy.title
        }).catch(function(err){
            done()
        })
       
    })
    console.log(me)
})