describe('next-blog-nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.get('h2').contains('Hi Chat!');
  });
});
