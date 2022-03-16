import login from "./Pages/loginPage.js";
describe('Using page object ', () => {
    it.skip(' using page object', () => {
        
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        login.UserName.type('shashibhushan', { force: true })
        login.Password.type('adfadf', { force: true })

    })
})

describe('Using page objects through json file', () => {
    it.only(' using page object through json file', () => {
        const login = require('../3-hands-on/JsonPages/loginpage_locators')
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get(login.username).type('shashi',{force:true})

    })
})