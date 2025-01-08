//Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {// 2 args nome comando customizado,arrow function
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {//recebe obj
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)    
    cy.get('button[type="submit"]').click()
})