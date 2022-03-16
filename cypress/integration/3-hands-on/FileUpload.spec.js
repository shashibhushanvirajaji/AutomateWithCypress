describe('uploading file',()=>{

    it.skip(' single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
       // cy.get("#file-upload").attachFile("gmail.jpg")
      
       // file upload by over riding name of the file 
       cy.get("#file-upload").attachFile({
           filePath:"gmail.jpg",
           fileName:"GmailIcon"
       })

       
    })

    it.only(' drag and drop feature',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('div#drag-drop-upload').attachFile("gmail.jpg",{ subjectType: 'drag-n-drop' })
        cy.get('#drag-drop-upload > .dz-preview > .dz-success-mark').should('exist')
    })


})