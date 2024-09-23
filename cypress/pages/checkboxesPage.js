import { BasePage } from "./basePage"

export class CheckboxPage extends BasePage {

  
    /* --- Get web elements --- */

    //get first checkbox
    checkboxOne(){
        return cy.get('#checkboxes > :nth-child(1)')
    }

    //get second checkbox
    checkboxTwo(){
        return cy.get('#checkboxes > :nth-child(3)')
    }

     /* --- Interact with elements --- */

    //check checkbox
    checkCheckbox(num){
        if (num == 1) {
            this.checkboxOne().check()
        }
        if(num == 2) {
            this.checkboxTwo().check()
        }
    }

    //uncheck checkbox 
    uncheckCheckbox(num){
        if (num == 1) {
            this.checkboxOne().uncheck()
        }
        if(num == 2) {
            this.checkboxTwo().uncheck()
        }
    }

   

}

export const checkboxPage = new CheckboxPage()