describe('CadastroInvalido', () => {
    beforeEach(() => {
      cy.visit('/') 
    })

  it('Cadastro de Livro Inválido', () => {
   
    cy.get('button').click()

    cy.get('.book-info').should('not.exist')

  })
})