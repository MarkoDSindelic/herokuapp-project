
import { checkboxPage } from "../../pages/checkboxesPage";


describe ('checkbox test', ()=> {

    beforeEach(() => {

        checkboxPage.visitPage('checkboxes')

    });

     
    it('check checkbox 1 ', () => {

        checkboxPage.checkCheckbox(1)
        checkboxPage.checkboxOne().should('be.checked')
 
    });

    it('uncheck checkbox 1', () => {
        checkboxPage.uncheckCheckbox(1)
        checkboxPage.checkboxOne().should('not.be.checked')

    });

    it('uncheck checkbox 2', () => {
        checkboxPage.uncheckCheckbox(2)
        checkboxPage.checkboxTwo().should('not.be.checked')
    });

    it('check checkbox 2 ', () => {
        checkboxPage.checkCheckbox(2)
        checkboxPage.checkboxTwo().should('be.checked')
    });


} )