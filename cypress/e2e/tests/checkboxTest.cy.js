import { CheckboxPage } from "../../pages/checkboxesPage";
const checkboxPageObj = new CheckboxPage()

describe ('checkbox test', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + 'checkboxes')
    });

     

    it('check checkbox1 ', () => {
        checkboxPageObj.clickCheckboxOne()
        checkboxPageObj.webElements.checkbox1().should('be.checked')
    });

    it('uncheck checkbox1', () => {
        checkboxPageObj.unclickCheckboxOne()
        checkboxPageObj.webElements.checkbox1().should('not.be.checked')
    });

    it('uncheck checkbox2', () => {
        checkboxPageObj.unclickCheckboxTwo()
        checkboxPageObj.webElements.checkbox2().should('not.be.checked')
    });

    it('check checkbox2 ', () => {
        checkboxPageObj.clickCheckboxTwo()
        checkboxPageObj.webElements.checkbox2().should('be.checked')
    });

} )