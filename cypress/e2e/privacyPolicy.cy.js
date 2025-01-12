it.only('testa a página da politica de privacidade de forma independente', () =>{//testar direto a pag sem passar pela home
    cy.visit('./src/privacy.html')//nova  suite, nao tem describe pq so tem 1 caso teste, testa politica de forma independente visita pag direta 

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')

    cy.contains('p', 'Talking About Testing')
      .should('be.visible')
})