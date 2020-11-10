describe('button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=button--primary')
  });

  it('is a button', () => {
    cy.get('button').should('exist');
  })
})
