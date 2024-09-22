import { loginPage } from "../../pages/loginPage";
import { securePage } from "../../pages/securePage";

describe('login test automation', ()=> {

    beforeEach(() => {
        loginPage.visitPage('login')
    });
    
    

    it('valid login test', ()=> {

        cy.fixture('validLoginData').then( value => {
            loginPage.enterUsername(value.username)
            loginPage.enterPassword(value.password)
        })

        loginPage.clickLogin()

        // cy.login(loginPage, loginPage)
        //     loginPage.clickLogin()
        
        securePage.loginMsg().should('contain', 'You logged into a secure area!')
        securePage.clickLogoutBtn()
        cy.get('#flash').should('contain','You logged out of the secure area!')

    })

    it('invalid username login test', () => {
        
        cy.fixture('invalidLoginData').then( value => {
            loginPage.enterUsername(value.username)
        })

        cy.fixture('validLoginData').then( value => {
            loginPage.enterPassword(value.password)
        })
        
         loginPage.clickLogin()

        cy.get('#flash').should('contain','Your username is invalid!')
        
    });

    it('invalid password login test', () => {

        cy.fixture('validLoginData').then(value => {
            loginPage.enterUsername(value.username)
        })

        cy.fixture('invalidLoginData').then( value => {
           loginPage.enterPassword(value.password)
        })
        
        loginPage.clickLogin()

        cy.get('#flash').should('contain','Your password is invalid!')
        
    });

    it('empty username login test', () => {
        
        cy.fixture('validLoginData').then( value => {
            loginPage.enterPassword(value.password)
        })
        
        loginPage.clickLogin()

        cy.get('#flash').contains('Your username is invalid!')
        
    });

    it('empty password login test', () => {
        
        cy.fixture('validLoginData').then(value => {
            loginPage.enterUsername(value.username)
        })

        loginPage.clickLogin()

        cy.get('#flash').contains('Your password is invalid!')
        
    });

    

})
