export class CheckboxPage {

    webElements = {
        checkbox: () => cy.get('input[type=checkbox]')
        
    }


    clickCheckbox(){
    
        this.webElements.checkbox().check()
           
    }

    unclickCheckbox(){
        
        this.webElements.checkbox().uncheck() 
    }
}