// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
const elements = {
  home: {
    logo : '.header-logo'
  },
    register: {
      top_header: '#top_header',
      pageRegister: 'Cadastro',
      form:'#login_area',
      formCheck: 'Cadastro de usuário'
    }
}

Cypress.Commands.add('accessRegisterPage', () => {
    cy.visit('/')
    .get(elements.home.logo);

    cy.get(elements.register.top_header)
      .contains(elements.register.pageRegister)
      .click()
    
    cy.get(elements.register.form)
      .contains(elements.register.formCheck);
})