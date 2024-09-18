export class SecurePage{

    webElements = {

        loginMsg: () => cy.get('#flash'),
        logoutBtn: () => cy.contains('Logout')

    }

    clickLogoutBtn(){

        this.webElements.logoutBtn().click()
    }

}