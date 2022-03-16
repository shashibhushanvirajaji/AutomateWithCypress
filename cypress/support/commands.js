// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => { 
     cy.log("from logic method")
     cy.log(email)
     cy.log(password)
     })

 Cypress.Commands.add('ccommand',()=>{cy.log("from custom command")})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('gettext',{prevSubject:'element'},(prevSubj)=>{
    //return prevSubj.text()
    cy.wrap(prevSubj.text())
})
Cypress.Commands.add('getCellValue', (row,col)=>{
    cy.get('table#resultTable>tbody>tr:nth-child(${row})>td:nth-child(${col})').then(($el) =>{
        return $el.text()
    })
})

Cypress.Commands.add('customCheckA11Y',()=>{
    const severityIconIndicators ={
        "minor":"🟠",
        "moderate":"🟡",
        "serious":"🔴",
        "critical":"⭕"
    }
    function callback(violations) {

        violations.forEach(violation => {
            const nodes = Cypress.$(
                violation.nodes.map((node)=>node.target).join(",")
            );
        
        Cypress.log({
            name: '${severityIndicatorIcons[violation.impact]} AllY',
            consoleProps: () => violation,
            $el: nodes,
            message: '[${violation.help}](${violation.helpUrl})',
          });
    violation.nodes.forEach(({ target }) => {
            Cypress.log({
              name: "ℹ▶",
              consoleProps: () => violation,
              $el: Cypress.$(target.join(",")),
              message: target,
            });
          });
        }); 
        }
        cy.checkA11y(null, null, callback)
})
    
     
    
    

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//}
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';