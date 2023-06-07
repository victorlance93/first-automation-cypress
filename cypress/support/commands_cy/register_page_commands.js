/// <reference types="cypress"/>

//Elements
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '.errorLabel',
        sucessTitle: '#swal2-title'
    }
}

//Functions
Cypress.Commands.add('saveRegister', () =>{
    cy.get(elements.buttons.register)
        .click();
});

Cypress.Commands.add('fillEmail', (email) =>{
    cy.get(elements.fields.email)
        .type(email);
});

Cypress.Commands.add('fillName', (name) =>{
    cy.get(elements.fields.name)
        .type(name);
});

Cypress.Commands.add('fillPassword', (password) =>{
    cy.get(elements.fields.password)
        .type(password);
});

Cypress.Commands.add('checkMessage', (message) =>{
    cy.get(elements.messages.error)
    .then((element) =>{
      console.log(element.text())
      expect(element.text()).equal(message);
    }) 
});

Cypress.Commands.add('successMessage', (message) =>{
    cy.get(elements.messages.sucessTitle, {timeout: 3000})
        .then((element) =>{
          expect(element.text())
          expect(element).to.be.visible
      })
});

