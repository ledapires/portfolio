describe('CadastroInvalido', () => {
  it('Cadastro de Livro Inválido', () => {
    cy.visit('http://127.0.0.1:8080/')
    
    cy.get('button').click()

    cy.get('.book-info').should('not.exist')

  })
})