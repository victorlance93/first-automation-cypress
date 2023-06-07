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

export default {
 accessRegisterPage(){
      cy.visit('/')
      .get(elements.home.logo);
  
      cy.get(elements.register.top_header)
        .contains(elements.register.pageRegister)
        .click()
      
      cy.get(elements.register.form)
        .contains(elements.register.formCheck);
  }
}