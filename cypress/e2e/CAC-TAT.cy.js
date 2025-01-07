describe('Central de Atendimento ao Cliente TAT', () => {// test suit
  beforeEach(() => {
    cy.visit('./src/index.html')
  })  
  

  it('verifica o título da aplicação', () => {//test case : 2 args : 'string',arrow function
      //should=assertions
   cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')//2 args 'string','string'
  })

  it('preenche os campos obrigatórios e envia o formulário',() => {
    //var
    const longText = Cypress._.repeat('abcdefghijlmno',10)//libi varias funções utilitarias repet 2 arg = string,qtas vzs repetir
    //action
    cy.get('#firstName').type('Fernando')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('fernadosantos@gmail.com.br')
    cy.get('#open-text-area').type(longText, {delay: 0 })//delay objt
    cy.get('button[type="submit"]').click()//seletor css - type

    //result
    cy.get('.success').should('be.visible')
  })

  it('exibi mensagem de erro ao submeter o formulário com um email com formatação invalida',() => {
    
    //action
    cy.get('#firstName').type('Fernando')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('fernadosantos@gmail,com.br')//, formatação invalida
    cy.get('#open-text-area').type('obrigada')//delay objt
    cy.get('button[type="submit"]').click()//seletor css - type

    //result
    cy.get('.error').should('be.visible')
  })

  it('campo telefone continua vazio quando preenchido com um valor não numérico',() => {
    
    cy.get('#phone')
      .type('abcde')
      .should('have.value','')
    
  })

  it('exibe mensagem de erro quando telefone se torna obrigatorio mas nao é preenchido antes do envio do formulário',() => {
    
    cy.get('#firstName').type('Fernando')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('fernadosantos@gmail,com.br')
    cy.get('#open-text-area').type('teste')
    //checkbox
    cy.get('#phone-checkbox').click
    cy.get('button[type="submit"]').click()//seletor css - type
   
    cy.get('.error').should('be.visible')
    
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone',() => {
    
    cy.get('#firstName')
      .type('Fernando')
      .should('have.value', 'Fernando') 
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Santos')
      .should('have.value', 'Santos') 
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('fernadosantos@gmail,com.br')
      .should('have.value', 'fernadosantos@gmail,com.br') 
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789') //type espera string
      .clear()
      .should('have.value', '')
   })

   it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')   
})


  







})