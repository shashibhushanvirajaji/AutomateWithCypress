describe('handling framees',()=>{

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })

    it.skip('first test case = handling frame using java script way',()=>{
        cy.get('iframe#mce_0_ifr').within( ($fr) =>{
               const myframe = $fr.get()
               myframe.contentDocument.body.getElementsByTagName('p')[0].textContent = "hello"
        })
    })

    it('using jquery way',()=>{
        cy.get('iframe#mce_0_ifr').within(($frame)=>{
            const body = $frame.contents().find('body#tinymce')
            cy.wrap(body).clear().type('test')
        })
    })
})