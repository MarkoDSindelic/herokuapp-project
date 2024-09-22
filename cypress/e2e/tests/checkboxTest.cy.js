
import { checkboxPage } from "../../pages/checkboxesPage";


describe ('checkbox test', ()=> {

    beforeEach(() => {

        checkboxPage.visitPage('checkboxes')

    });

     
    it('check checkbox1 ', () => {

        checkboxPage.clickCheckboxOne()
        checkboxPage.checkboxOne().should('be.checked')
 
    });

    it('uncheck checkbox1', () => {
        checkboxPage.unclickCheckboxOne()
        checkboxPage.checkboxOne().should('not.be.checked')

    });

    it('uncheck checkbox2', () => {
        checkboxPage.unclickCheckboxTwo()
        checkboxPage.checkboxTwo().should('not.be.checked')
    });

    it('check checkbox2 ', () => {
        checkboxPage.clickCheckboxTwo()
        checkboxPage.checkboxTwo().should('be.checked')
    });


} )