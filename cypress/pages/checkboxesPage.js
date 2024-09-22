import { BasePage } from "./basePage"

export class CheckboxPage extends BasePage {

  
    /* Get web elements */

    //get first checkbox
    checkboxOne(){
        return cy.get('#checkboxes > :nth-child(1)')
    }

    //get second checkbox
    checkboxTwo(){
        return cy.get('#checkboxes > :nth-child(3)')
    }


    //interact with elements

    clickCheckboxOne(){
        this.checkboxOne().check()
    }

    unclickCheckboxOne(){
       this.checkboxOne().uncheck()
    }

     clickCheckboxTwo(){
        this.checkboxTwo().check()
     }

     unclickCheckboxTwo(){
        this.checkboxTwo().uncheck()
    }

}

export const checkboxPage = new CheckboxPage()