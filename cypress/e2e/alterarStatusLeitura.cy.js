describe('Cadastro', () => {
    beforeEach(() => {
       cy.visit('/') 
    })

  it('Cadastro de Livros', () => {
    
    cy.fixture('registrosLivros').then((livro) => {
      cy.get('#name').click().type(livro.livroValido.name)
      cy.get('#isbn').click().type(livro.livroValido.isbn)
      cy.get('#purchaseDate').click().type(livro.livroValido.purchaseDate)
    })

    cy.get('button').click()

    cy.get('.book-info').should('contain', 'Livro de Teste')
    cy.contains('Não leu').should('exist')
    cy.get('.status-select').select('Já leu')
  })
})