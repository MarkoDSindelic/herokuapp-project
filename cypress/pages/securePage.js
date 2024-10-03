import { BasePage } from "./basePage"

class SecurePage extends BasePage {

    /* Get web elements */

    //login message
    loginMsg(){
        return cy.get('#flash')
    }

    //logout button
    logoutBtn(){
        return cy.contains('Logout')
    }

    /* securePage Methods */
    clickLogoutBtn(){

        this.webElements.logoutBtn().click()
    }

}

export const securePage = new SecurePage()