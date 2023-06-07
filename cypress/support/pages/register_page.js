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
export default{
    //Functions
saveRegister(){
    cy.get(elements.buttons.register)
        .click();
},

fillEmail(email){
    cy.get(elements.fields.email)
        .type(email)
},

fillName(name){
    cy.get(elements.fields.name)
        .type(name);
},

fillPassword(password){
    cy.get(elements.fields.password)
        .type(password);
},

checkMessage(message){
    cy.get(elements.messages.error)
    .then((element) =>{
      console.log(element.text())
      expect(element.text()).equal(message);
    }) 
},

successMessage(){
    cy.get(elements.messages.sucessTitle, {timeout: 3000})
        .then((element) =>{
          expect(element.text())
          expect(element).to.be.visible
      })
}
}