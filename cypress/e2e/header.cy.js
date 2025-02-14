
describe('Header', () => {
  
    beforeEach(() =>{
      cy.visit('http://localhost:3000');
      cy.url().should('include', '/localhost:3000');
    })
  
  
    it('Deve checar os elementos no Header', () => {
      cy.get('header').within(() => {
        cy.get('[href="/"]').should('exist');
        cy.get('.nav > [href="/sobre"]').should('exist');
        cy.get('.nav > [href="/portfolio"]').should('exist');
      });
    });
  
    it('Deve navegar para a página Sobre', () => {
      cy.contains('Sobre').click();
      cy.url().should('include', '/sobre');
    });
  
    it('Deve navegar para a página Projetos', () => {
      cy.contains('Projetos').click();
      cy.url().should('include', '/portfolio');
    });
  
    it('Deve navegar para a página Home', () => {
      cy.contains('Home').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });
  });