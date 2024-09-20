import { CheckboxPage } from "./checkboxesPage";
import { LoginPage } from "./loginPage";
import { SecurePage } from "./securePage";

export class BasePage{

    pages = {

        loginPage: new LoginPage(),
        checkboxPage: new CheckboxPage(),
        securePage: new SecurePage(),

    }
}