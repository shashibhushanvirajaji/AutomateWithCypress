describe('hjandling test data',()=>{

    it.skip('Data handling using external fixture file',()=>{
        
        cy.fixture('example').then(userDetails=>{
            cy.log(userDetails.name)
            cy.log(userDetails.password)
        })
    })     

})

describe('handling data with before each',()=>{
    let userDetails

    beforeEach(()=>{
        cy.fixture('example').then(user=>{
            userDetails=user
        })
    })

    it.skip('making user of before each local variable',()=>{
        cy.log(userDetails.name)
        cy.log(userDetails.password)
        cy.log(userDetails.company)
    })
})


describe('handling data with before each and this keyword',()=>{

    
    beforeEach(function(){
        cy.fixture('example').then(user=>{
            this.userDetails=user
        })
    })

    it.skip('handling data with before each and this keyword',function(){
       cy.log(this.userDetails.name)
       cy.log(this.userDetails.password)
       cy.log(this.userDetails.company)
       
    })
})
    

describe('handling data with before each and alias ',()=>{
    beforeEach(function(){
        cy.fixture('example').as("userDetails")
    })

    it.skip('handling data with before each and alias',function(){
       cy.log(this.userDetails.name)
       cy.log(this.userDetails.password)
       cy.log(this.userDetails.company)
       
    })
})
    
describe('handling data - Multiple Data - Reading data from multiple files ',()=>{

    const availableFixtures = [
        {
            "name":"logincredentails",
            "context":1
        },
        {
            "name":"logincredentails1",
            "context":2
        }
    ]
    availableFixtures.forEach((afixture)=>{
       
describe(""+afixture.context,()=>{
    beforeEach(function(){
        cy.fixture(afixture.name).as("userDetails")
    })

    it.skip("Read data from "+afixture.name,function(){
       cy.log(this.userDetails.name)
       cy.log(this.userDetails.password)       
       
    })
})
    })
   
})

describe('reading multiple set of data from same file',()=>{

    it.only('reading multiple set of data from same file',()=>{

        cy.fixture('example1').then(userDetails=>{
            userDetails.forEach(userDetail=>{
                cy.log(userDetail.name)
                cy.log(userDetail.password)
                cy.log(userDetail.company)
            })
        })
    })
})