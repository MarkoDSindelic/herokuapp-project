
import { BasePage } from "../../pages/basePage";

const basePage = new BasePage()

describe('login test automation', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('URL')+'login')
    });
    
    

    it('valid login test', ()=> {

        cy.fixture('validLoginData').then( value => {
            basePage.pages.loginPage.enterUsername(value.username)
            basePage.pages.loginPage.enterPassword(value.password)
        })
        basePage.pages.loginPage.clickLogin()
        
        basePage.pages.securePage.webElements.loginMsg().should('contain', 'You logged into a secure area!')

    })

    it('invalid username login test', () => {
        
        cy.fixture('invalidLoginData').then( value => {
            basePage.pages.loginPage.enterUsername(value.username)
        })

        cy.fixture('validLoginData').then( value => {
            basePage.pages.loginPage.enterPassword(value.password)
        })
        
        basePage.pages.loginPage.clickLogin()

        cy.get('#flash').should('contain','Your username is invalid!')
        
    });

    it('invalid password login test', () => {

        cy.fixture('validLoginData').then(value => {
            basePage.pages.loginPage.enterUsername(value.username)
        })

        cy.fixture('invalidLoginData').then( value => {
            basePage.pages.loginPage.enterPassword(value.password)
        })
        
        basePage.pages.loginPage.clickLogin()

        cy.get('#flash').should('contain','Your password is invalid!')
        
    });

    it('empty username login test', () => {
        
        cy.fixture('validLoginData').then( value => {
            basePage.pages.loginPage.enterPassword(value.password)
        })
        
        basePage.pages.loginPage.clickLogin()

        cy.get('#flash').contains('Your username is invalid!')
        
    });

    it('empty password login test', () => {
        
        cy.fixture('validLoginData').then(value => {
            basePage.pages.loginPage.enterUsername(value.username)
        })

        basePage.pages.loginPage.clickLogin()

        cy.get('#flash').contains('Your password is invalid!')
        
    });

    

})
