import { BasePage } from "./basePage"

class SecurePage extends BasePage {

    webElements = {

        loginMsg: () => cy.get('#flash'),
        logoutBtn: () => cy.contains('Logout')

    }
    /* Get web elements */

    //login message
    loginMsg(){
        return cy.get('#flash')
    }

    logoutBtn(){
        return cy.contains('Logout')
    }


    clickLogoutBtn(){

        this.webElements.logoutBtn().click()
    }

}

export const securePage = new SecurePage()