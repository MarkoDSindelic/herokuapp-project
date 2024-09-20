export class CheckboxPage {

    webElements = {
        checkbox: () => cy.get('input[type=checkbox]'),
        checkbox1: () => cy.get('#checkboxes > :nth-child(1)'),
        checkbox2: () => cy.get('#checkboxes > :nth-child(3)')
        
    }



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