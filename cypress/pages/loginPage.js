import { BasePage } from "./basePage";

class LoginPage extends BasePage {
  /*  Getting the web elements */

  //get username field
  usernameField() {
    return cy.get("#username");
  }

  //get password field
  passwordField() {
    return cy.get("#password");
  }

  //get login button
  loginBtn() {
    return cy.get("button.radius");
  }

  /* LoginPage methods */

  enterUsername(username) {
    this.usernameField().clear().type(username);
  }

  enterPassword(password) {
    this.passwordField().clear().type(password);
  }

  clickLogin() {
    this.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
