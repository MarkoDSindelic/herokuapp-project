export class loginPage{

   
    webElements={

        username: ()=> cy.get('#username'),
        password: ()=> cy.get('#password'),
        loginBtn: () => cy.get('button.radius'),
        
    } 

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterUsername(username){
        this.webElements.username().type(username)
    }

    enterPassword(password){
        this.webElements.password().type(password)
    }

    clickLogin(){
        this.webElements.loginBtn().click()
    }

}
