describe('Página Sobre', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/sobre');
    });

    it('Deve checar a foto de perfil', () => {
        cy.get('.sobre-image').should('exist');
    });

    it('Deve confirmar o título e subtítulo', () => {
        cy.get('.sobre-title').should('be.visible' ,'Sobre mim');
        cy.get('.sobre-text > :nth-child(2)').should('be.visible', 'Sou Luiz Fernando Bernardes Borges, Analista de Qualidade de Software,' )
      });

    it('Deve checar as imagens das habilidades', () => {
        cy.get('[alt="JavaScript"]').should('exist');
        cy.get('[alt="TypeScript"]').should('exist');
        cy.get('[alt="React"]').should('exist');
        cy.get('[alt="Cypress"]').should('exist');
        cy.get('[alt="Jest"]').should('exist');
        cy.get('[alt="Postman"]').should('exist');
        cy.get('[alt="Cucumber"]').should('exist');
        cy.get('[alt="GitHub"]').should('exist');
        cy.get('[alt="Jira"]').should('exist');
        cy.get('[alt="Docker"]').should('exist');
        cy.get('[alt="VSCode"]').should('exist');
      });
    });
