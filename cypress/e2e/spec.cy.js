// cypress/e2e/navigation.spec.js
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Visita a página inicial
    cy.visit('http://localhost:3000');

    // Clica no link "Sobre"
    cy.get('.about-button').click();

    // Verifica se a URL mudou para a página "Sobre"
    cy.url().should('include', '/sobre');

    // Verifica se o título da página "Sobre" está visível
    cy.get('h1').contains('Sobre Mim');
  });
});