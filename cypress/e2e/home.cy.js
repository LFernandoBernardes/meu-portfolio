// cypress/e2e/navigation.spec.js
describe('Navigation', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000');
    cy.url().should('include', '/localhost:3000');
  })

  it('Deve confirmar o título e subtítulo', () => {
    cy.get('.home-title').should('be.visible' ,'Luiz Fernando Bernardes Borges');
    cy.get('.home-description').should('be.visible', 'Garantia de qualidade não é só testar, é antecipar problemas e melhorar processos' )
  });

  it('Clicar no botão "Sobre mim" e ir para pagina "Sobre"', () => {
    cy.get('.about-button').click(); // Clica no link "Sobre"
    cy.url().should('include', '/sobre'); // Verifica se a URL mudou para a página "Sobre"
    cy.get('h1').contains('Sobre Mim'); // Verifica se o título da página "Sobre" está visível
  });


  it('Deve navegar para a página Projetos ao clicar no link "Projetos"', () => {
    cy.contains('Projetos').click();
    cy.url().should('include', '/portfolio');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it.only('carouselhome', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('.swiper-slide-active > .project-image').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active > .project-image').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active > .project-image').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active > .project-image').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active > .project-image').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active > .project-image').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active > .project-image').click();
    /* ==== End Cypress Studio ==== */
  });
});