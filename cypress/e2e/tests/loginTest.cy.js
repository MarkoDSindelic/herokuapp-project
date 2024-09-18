import { loginPage } from "../../pages/loginPage"
import logiData from "../../fixtures/loginData.json"
import { SecurePage } from "../../pages/securePage"

const securePageObjs = new SecurePage()
const loginObj = new loginPage()

describe('test automation', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        cy.log("I run now!")
    });
    
    

    it('valid login test', ()=> {

        //loginObj.openURL()
        loginObj.enterUsername(logiData.username)
        loginObj.enterPassword(logiData.password)
        loginObj.clickLogin()

        securePageObjs.webElements.loginMsg().contains('You logged into a secure area!')

        securePageObjs.clickLogoutBtn()

        // need to find a way to change this line in all the tests
        cy.get('#flash').contains('You logged out of the secure area!')
    })

    it('invalid username login test', () => {
        
        //loginObj.openURL()
        loginObj.enterUsername(logiData.invalidUsername)
        loginObj.enterPassword(logiData.password)
        loginObj.clickLogin()

        cy.get('#flash').contains('Your username is invalid!')
        
    });

    it('invalid password login test', () => {
        
        //loginObj.openURL()
        loginObj.enterUsername(logiData.username)
        loginObj.enterPassword(logiData.invalidPassword)
        loginObj.clickLogin()

        cy.get('#flash').contains('Your password is invalid!')
        
    });

    it('empty username login test', () => {
        
        //loginObj.openURL()
        loginObj.enterUsername(" ")
        loginObj.enterPassword(logiData.password)
        loginObj.clickLogin()

        cy.get('#flash').contains('Your username is invalid!')
        
    });

    it('empty password login test', () => {
        
        //loginObj.openURL()
        loginObj.enterUsername(logiData.username)
        loginObj.enterPassword(" ")
        loginObj.clickLogin()

        cy.get('#flash').contains('Your password is invalid!')
        
    });

    

})