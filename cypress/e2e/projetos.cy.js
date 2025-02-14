
import { projects } from '../../src/app/portfolio/page';

describe('Página Projetos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/portfolio');
    });

    it('Deve confirmar o título da página', () => {
        cy.get('.portfolio-title').should('exist');
    });
});

describe('Projeto Bootcamp', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/portfolio');
    });

    it('Deve confirmar o título de todos os projetos', () => {
        cy.get('[href="/portfolio/1"] > .project-name').each(($el) => {
          cy.wrap($el).should('be.visible' ,'Bootcamp');
        });
      });
  
      it('Deve confirmar a imagem de todos os projetos', () => {
        cy.get('[href="/portfolio/1"] > .project-image').each(($el) => {
          cy.wrap($el).should('exist');
        });
      });
  
      it('Deve navegar entre os projetos', () => {
        cy.get('[href="/portfolio/1"] > .project-name').first().click();
        cy.url().should('include', '/portfolio/1'); // Ajuste o ID conforme necessário
      });
    });
  
    describe('Página de Cada Projeto', () => {
        beforeEach(() => {
          cy.visit('http://localhost:3000/portfolio/1'); // Ajuste o ID conforme necessário
        });

        it('Deve checar a foto do projeto', () => {
            cy.get('.project-image').should('exist');
        });

        it('Deve confirmar o texto de descrição', () => {
            cy.get('.project-image').should('exist');
        });

        /* ==== Test Created with Cypress Studio ==== */
        it('carouselportfolio', function() {
            /* ==== Generated with Cypress Studio ==== */
            cy.get('.swiper-slide-active > .carousel-image').click();
            cy.get('[style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;"] > div > button').click();
            cy.get('.swiper-button-next').click();
            cy.get('.swiper-button-prev').click();
            cy.get('.swiper-button-prev').click();
            /* ==== End Cypress Studio ==== */
        });

        /* ==== Test Created with Cypress Studio ==== */
        it('Clicar Botão ver mais projetos', function() {
            /* ==== Generated with Cypress Studio ==== */
            cy.get('.see-other-projects').click();
            cy.get('.portfolio-title').click();
            /* ==== End Cypress Studio ==== */
        });
    });
    
