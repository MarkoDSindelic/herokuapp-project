import { BasePage } from "./basePage"

class LoginPage extends BasePage {

   
    // webElements={

    //     username: ()=> cy.get('#username'),
    //     password: ()=> cy.get('#password'),
    //     loginBtn: () => cy.get('button.radius'),
        
    // } 

    /*  Getting the web elements */

    //get username field
    usernameField(){
        return cy.get('#username')
    }

    //get password field
    passwordField(){
        return cy.get('#password')
    }

    //get login button
    loginBtn(){
        return cy.get('button.radius')
    }
    


    /* Defining LoginPage methods */

    enterUsername(username){
        this.usernameField().type(username)
    }

    enterPassword(password){
        this.passwordField().type(password)
    }

    clickLogin(){
        this.loginBtn().click()
    }

}

export const loginPage = new LoginPage()
