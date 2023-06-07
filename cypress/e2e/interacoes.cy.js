/// <reference types="cypress"/>

describe('Interacoes com elementos', () => {
    it('interacoes', () => {
        cy.visit('/')
         .get('.header-logo');

      cy.get('.form-control')
          .type('victor-lance@cypress.com{enter}');
    
    });  

    it('click', () => {
      cy.visit('/')
       .get('.header-logo');

      cy.get('.fa-user')
        .click();
  });  

  it('double click', () => {
    cy.visit('/')
     .get('.header-logo');

    cy.get('.fa-user')
      .dblclick();
});  

it('click botão direito', () => {
  cy.visit('/')
   .get('.header-logo');

    cy.get('.fa-user')
    .rightclick();
});  

it('Select', () => {
  cy.visit('/')
  .get('.header-logo');

  cy.get('.footer_one_widget')
      .contains('Checkout View Two')
      .click();

  cy.get('#country') 
     .select('Colombia')  

})

it('Checkbox e radio button', () => {
  cy.visit('/')
  .get('.header-logo');

  cy.get('.footer_one_widget')
      .contains('Checkout View One')
      .click();
  
  cy.get('#materialUnchecked')
    .check()
    .uncheck();

  cy.get('#css')  
    .check();

})

});