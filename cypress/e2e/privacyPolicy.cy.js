it.only('testa a página da politica de privacidade de forma independente', () =>{//testar direto a pag sem passar pela home
    cy.visit('./src/privacy.html')
    
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    cy.contains('p', 'Talking About Testing').should('be.visible')
})