/// <reference types="cypress"/>

describe('Get Text', () => {
    it('obter texto', () => {
        cy.visit('/')
        .get('.header-logo');

        cy.get('.top_header_left > p')
         .then((element) =>{
           console.log(element.text());
         });
    
    });  
});