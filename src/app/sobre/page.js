// src/app/Sobre/page.js
import Image from 'next/image'; // Componente de imagem otimizada
import Header from '../../components/Header'; // Componente do cabeçalho
import Footer from '../../components/Footer'; // Componente do rodapé

export default function Sobre() {
  return (
    <div className="sobre-page">
      <Header />
      <main className="sobre-main">
        <div className="sobre-content">
          {/* Foto */}
          <Image
            src="/images/perfil.jpeg" // Caminho da foto
            alt="Foto Sobre"
            width={300}
            height={300}
            className="sobre-image"
          />
          {/* Texto Criativo */}
          <div className="sobre-text">
            <h1 className="sobre-title">Sobre Mim</h1>
            <p className="sobre-description">
              Desde que descobri minha paixão por garantir a qualidade de software, tenho me dedicado a aprender e aplicar as melhores práticas de teste. Como Analista de QA Junior, já tive a oportunidade de trabalhar em diversos projetos, desde testes manuais até automação com Cypress. Acredito que a qualidade é um reflexo da atenção aos detalhes e do compromisso com a excelência. Fora do trabalho, sou um entusiasta de [seus hobbies], o que me ajuda a manter um equilíbrio saudável entre vida profissional e pessoal.
            </p>
          </div>
        </div>
        {/* Seção de Habilidades */}
        <div className="skills-section">
          <h2 className="skills-title">Habilidades</h2>
          <div className="skills-grid">
            {/* Linguagens */}
            <div className="skill-category">
              <h3>Linguagens</h3>
              <div className="skill-icons">
                <Image src="/images/logos/Javascript_Logo.png" alt="JavaScript" width={50} height={50} />
                <Image src="/images/logos/typescript-Logo.png" alt="TypeScript" width={50} height={50} />
              </div>
            </div>
            {/* Ferramentas de Testes */}
            <div className="skill-category">
              <h3>Ferramentas de Testes</h3>
              <div className="skill-icons">
                <Image src="/images/cypress.png" alt="Cypress" width={50} height={50} />
                <Image src="/images/playwright.png" alt="Playwright" width={50} height={50} />
                <Image src="/images/jest.png" alt="Jest" width={50} height={50} />
                <Image src="/images/postman.png" alt="Postman" width={50} height={50} />
              </div>
            </div>
            {/* Outras Ferramentas */}
            <div className="skill-category">
              <h3>Outras Ferramentas</h3>
              <div className="skill-icons">
                <Image src="/images/logos/GitHub-Logo.png" alt="GitHub" width={50} height={50} />
                <Image src="/images/jira.png" alt="Jira" width={50} height={50} />
                <Image src="/images/logos/Docker-Logo.png" alt="Docker" width={50} height={50} />
                <Image src="/images/logos/VSCode-Logo.png" alt="VSCode" width={50} height={50} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}