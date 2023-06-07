/// <reference types="cypress"/>

describe('Get Elements', () => {
    it('Obter elementos de diversas formas', () => {
        cy.visit('/')
            .get('.header-logo');

        cy.get('#top_header')
            .contains('Login'); 
            
        cy.get('#top_header')
            .find('.fa-user');    
    });
})