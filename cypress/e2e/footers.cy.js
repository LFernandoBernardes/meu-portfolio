describe('Footer', () => {

    beforeEach(() =>{
        cy.visit('http://localhost:3000');
        cy.url().should('include', '/localhost:3000');
      })


    it('Deve checar os elementos no Footer', () => {
      cy.get('footer').within(() => {
        cy.contains('2025 Luiz Fernando Bernardes Borges').should('exist');
      });
    });

    it('Deve navegar para o Email', () => {
      cy.get('footer').within(() => {
        cy.contains('Email').should('have.attr', 'href', 'mailto:borgesluizf@outlook.com');
      });
    });

    it('Deve navegar para o LinkedIn', () => {
      cy.get('footer').within(() => {
        cy.contains('LinkedIn')
        .click()
        .should('have.attr', 'href', 'https://www.linkedin.com/in/luiz-fernando-bernardes-borges-048105301/');
      });
    });

    it('Deve navegar para o GitHub', () => {
      cy.get('footer').within(() => {
        cy.contains('Github')
        .click()
        .should('have.attr', 'href', 'https://github.com/LFernandoBernardes');
      });
    });

    it('Deve navegar para o Instagram', () => {
      cy.get('footer').within(() => {
        cy.contains('Instagram')
        .click()
        .should('have.attr', 'href', 'https://www.instagram.com/chiquitohernando/');
      });
    });
  });