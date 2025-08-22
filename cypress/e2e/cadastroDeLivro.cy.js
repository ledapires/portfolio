describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Cadastro de Livros', () => {
    cy.fixture('registrosLivros').then((livros) => {
        cy.get('#name').click().type(livros.livroValido.name)
        cy.get('#isbn').click().type(livros.livroValido.isbn)
        cy.get('#purchaseDate').click().type(livros.livroValido.purchaseDate)
    })

    cy.get('button').click()

    cy.get('.book-info').should('contain', 'Livro de Teste')
  })
})