import { BasePage } from "./basePage"

export class CheckboxPage{

    webElements = {
        
        checkbox1: () => cy.get('#checkboxes > :nth-child(1)'),
        checkbox2: () => cy.get('#checkboxes > :nth-child(3)')
        
    }

    // testing getting components
    // checkbox(){
    //     return cy.get('#checkboxes > :nth-child(1)')
    // }

    // doSomething(){
    //     this.checkbox().click()
    // }


    clickCheckboxOne(){
        this.webElements.checkbox1().check()
    }

    unclickCheckboxOne(){
        this.webElements.checkbox1().uncheck()
    }

     clickCheckboxTwo(){
        this.webElements.checkbox2().check()
     }

     unclickCheckboxTwo(){
        this.webElements.checkbox2().uncheck()
    }

}