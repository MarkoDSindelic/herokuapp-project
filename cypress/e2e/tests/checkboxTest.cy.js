
import { BasePage } from "../../pages/basePage";

//Can you avoid this?
const basePage = new BasePage()


describe ('checkbox test', ()=> {

    beforeEach(() => {
        cy.visit(Cypress.env('URL') + 'checkboxes')
    });

     
    it('check checkbox1 ', () => {

        basePage.pages.checkboxPage.clickCheckboxOne()
        basePage.pages.checkboxPage.webElements.checkbox1().should('be.checked')
 
    });

    it('uncheck checkbox1', () => {
        basePage.pages.checkboxPage.unclickCheckboxOne()
        basePage.pages.checkboxPage.webElements.checkbox1().should('not.be.checked')

    });

    it('uncheck checkbox2', () => {
        basePage.pages.checkboxPage.unclickCheckboxTwo()
        basePage.pages.checkboxPage.webElements.checkbox2().should('not.be.checked')
    });

    it('check checkbox2 ', () => {
        basePage.pages.checkboxPage.clickCheckboxTwo()
        basePage.pages.checkboxPage.webElements.checkbox2().should('be.checked')
    });

} )