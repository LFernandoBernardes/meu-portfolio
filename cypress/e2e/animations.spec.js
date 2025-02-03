describe('Animations', () => {
  
    it('should have hover effects on images', () => {
      cy.visit('http://localhost:3000'); // Visita a página inicial
  
      // Verifica o efeito de hover nas imagens
      cy.get('.profile-image').trigger('mouseover'); // Simula o hover
      cy.get('.profile-image').should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)'); // Verifica o zoom
    });
  
    it('should have hover effects on buttons', () => {
      cy.visit('http://localhost:3000'); // Visita a página inicial
  
      // Verifica o efeito de hover nos botões
      cy.get('.about-button').trigger('mouseover'); // Simula o hover
      cy.get('.about-button').should('have.css', 'background-color', 'rgb(241, 196, 15)'); // Verifica a cor de fundo
    });

    
    it('should have fade-in animation on elements', () => {
        cy.visit('http://localhost:3000'); // Visita a página inicial
    
        // Verifica se os elementos com a classe 'fade-in' estão visíveis
        cy.get('.fade-in').each(($el) => {
          cy.wrap($el).should('be.visible'); // Verifica se o elemento está visível
        });
      });
  });