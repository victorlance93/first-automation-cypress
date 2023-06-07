/// <reference types="cypress"/>

describe('Cadastro de Usuário', () => {
    it('Validar campo nome vazio', () => {
      cy.visit('/')
      .get('.header-logo');

      cy.get('#top_header')
        .contains('Cadastro')
        .click()
      
      cy.get('#login_area')
        .contains('Cadastro de usuário');

      cy.get('#btnRegister')
        .click();

      cy.get('.errorLabel')
      .then((element) =>{
        console.log(element.text())
        expect(element.text()).equal('O campo nome deve ser prenchido');
      }) 

    });

    it('Validar campo email vazio e incorreto', () => {
      cy.visit('/')
        .get('.header-logo');

        cy.get('#top_header')
        .contains('Cadastro')
        .click()  

        cy.get('#login_area')
        .contains('Cadastro de usuário');

        cy.get('#user')
        .type('Victor Lance');

        cy.get('#btnRegister')
        .click();

        cy.get('.errorLabel')
      .then((element) =>{
        console.log(element.text())
        expect(element.text()).equal('O campo e-mail deve ser prenchido corretamente');
      }) 

      cy.get('#email')
      .type('victor.@');

      cy.get('#btnRegister')
        .click();

      cy.get('.errorLabel')
      .then((element) =>{
        console.log(element.text())
        expect(element.text()).equal('O campo e-mail deve ser prenchido corretamente');
      }) 

    });

    it('Validar campo senha vazio e incorreto', () => {
      cy.visit('/')
        .get('.header-logo');

        cy.get('#top_header')
        .contains('Cadastro')
        .click()  

        cy.get('#login_area')
        .contains('Cadastro de usuário');

        cy.get('#user')
        .type('Victor Lance');

        cy.get('#email')
        .type('victor_lance@hotmail.com');

        cy.get('#btnRegister')
        .click();

        cy.get('.errorLabel')
        .then((element) =>{
          console.log(element.text())
          expect(element.text()).equal('O campo senha deve ter pelo menos 6 dígitos');
        }) 

        cy.get('#password')
        .type('1234');

        cy.get('#btnRegister')
        .click();

        cy.get('.errorLabel')
        .then((element) =>{
          console.log(element.text())
          expect(element.text()).equal('O campo senha deve ter pelo menos 6 dígitos');
        }) 




    });

    it('Validar cadastro com sucesso', () => {
      cy.visit('/')
      .get('.header-logo');

      cy.get('#top_header')
        .contains('Cadastro')
        .click()  

        cy.get('#login_area')
        .contains('Cadastro de usuário');

        cy.get('#user')
        .type('Victor Lance');

        cy.get('#email')
        .type('victor_lance@hotmail.com');

        cy.get('#password')
        .type('012345');

        cy.get('#btnRegister')
        .click();

        cy.get('#swal2-title')
        .then((element) =>{
          expect(element.text())
          expect(element).to.be.visible
      })
    })
    
    });
    
  