describe('Cadastro', () => {
  it('Cadastro de Livros', () => {
    cy.visit('http://127.0.0.1:8080/')
    
    cy.get('#name').click().type('Livro de Teste')
    cy.get('#isbn').click().type('1234567890')
    cy.get('#purchaseDate').click().type('2025-08-19')

    cy.get('button').click()

    cy.get('.book-info').should('contain', 'Livro de Teste')
    cy.contains('Não leu').should('exist')
    cy.get('.status-select').select('Já leu')
  })
})