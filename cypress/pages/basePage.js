 export class BasePage{

    visitPage(value){
        cy.visit(Cypress.env('URL') + `${value}`)
    }
    
    
}
export const basePage = new BasePage()