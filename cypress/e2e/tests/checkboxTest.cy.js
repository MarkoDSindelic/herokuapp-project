import { CheckboxPage } from "../../pages/checkboxesPage";
const checkboxPageObj = new CheckboxPage()

describe ('checkbox test', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + 'checkboxes')
    });

    
    
    
    it('checkbox click', () => {
        checkboxPageObj.clickCheckbox()
        checkboxPageObj.webElements.checkbox().should('be.checked')
    });

    it('checkbox unclick', () => {
        checkboxPageObj.unclickCheckbox()
        checkboxPageObj.webElements.checkbox().should('not.be.checked')
    });


} )