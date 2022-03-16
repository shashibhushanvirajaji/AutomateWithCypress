class LoginPage {

    constructor(){
        this.username = '#userId'
        this.password = '#pass'
    }
    get UserName() {
        return cy.get(this.username)
    }

    // getUserName() {
    //     return cy.get('#userId')   using method to identify web element
    // }
    get Password() {
        return cy.get(this.password)      // using getters to convert method to property
    }
    // getPassword() {  
    //     return cy.get('#pass')   using method to identify web element
    // }
}
const login = new LoginPage()
export default login