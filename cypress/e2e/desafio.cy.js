/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';


const screens = ['desktop', 'iphone-x', 'samsung-s10','ipad-2']
const user_data = require('../fixtures/user_create.json');
const invalid_data = require('../fixtures/user_create_invalid.json');

screens.forEach(element => {
  describe('Cadastro de Usuário', () => {
    beforeEach('Acessando a página de registro', () => {
    
    if(element != 'desktop'){
      cy.viewport(element)
    }
     
      home_page.accessRegisterPage();
    })
  
      it('Validar campo nome vazio', () => {
        register_page.saveRegister();
        register_page.checkMessage('O campo nome deve ser prenchido');
      });
  
      it('Validar campo email vazio e incorreto', () => {
        register_page.fillName(user_data.name)
        register_page.saveRegister();
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente');
        
        register_page.fillEmail(invalid_data.invalid_email);
        register_page.saveRegister();
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente');
      });
  
      it('Validar campo senha vazio e incorreto', () => {
        register_page.fillName(user_data.name);
        register_page.fillEmail(user_data.email);
        register_page.saveRegister();
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
      
        register_page.fillPassword(invalid_data.invalid_password);
        register_page.saveRegister();
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
      });
  
      it('Validar cadastro com sucesso', () => {
        register_page.fillName(faker.person.fullName());
        register_page.fillEmail(faker.internet.email());
        register_page.fillPassword(faker.internet.password());
        register_page.saveRegister();
        register_page.successMessage();
      })
      
      });
});

    
  