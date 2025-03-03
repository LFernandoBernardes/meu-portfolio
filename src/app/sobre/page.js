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
              Sou <strong>Luiz Fernando Bernardes Borges</strong>, Analista de Qualidade de Software, graduado em Administração de Empresas. Minha trajetória profissional começou em diferentes áreas, como logística, mercado financeiro e marketing, até entrar para área de Qualidade de Software. Desde então, venho aprimorando minhas habilidades em testes manuais e automatizados, sempre buscando evolução por meio de projetos práticos, voluntariado e desafios reais.
            </p>
            <p className="sobre-description">
              A criação deste site representa um novo passo na minha jornada: um espaço para compartilhar minha experiência, aprendizados e contribuições para a comunidade de Qualidade de Software.
            </p>

            <h2 className="sobre-subtitle">Minha Transição para QA</h2>
            <ul className="sobre-list">
              <li><strong>Bootcamp de Analista de QA - TripleTen</strong> (2024)</li>
              <li><strong>Mentoria Guardiões da Qualidade - Lumestack</strong></li>
              <ul>
                <li>Testes automatizados para aplicações web (<strong>Cypress</strong>), APIs (<strong>Postman</strong>) e mobile (<strong>Appium</strong>)</li>
              </ul>
              <li><strong>Cursos complementares</strong> em Metodologias Ágeis, Automação de Testes e Banco de Dados</li>
            </ul>

            <h2 className="sobre-subtitle">Experiência em Projetos</h2>
            <ul className="sobre-list">
            <li><strong>PrivacyTools</strong></li>
              <ul>
                <li>Atuo como Analista de Qualidade de Software na <strong>PrivacyTools</strong>, garantindo a excelência das soluções de Gestão de Privacidade e Proteção de Dados Pessoais.</li>
                <li>Meu trabalho envolve a realização de <strong>testes manuais</strong>  em atualizações e melhorias do software, assegurando que as funcionalidades atendam aos mais altos padrões de qualidade e conformidade. </li>  
                <li>Com isso, ajudamos empresas a construírem negócios mais responsáveis, fortalecendo a segurança e a transparência na gestão de dados. </li>
                
              </ul>
              <li><strong>Olympus Code</strong></li>
              <ul>
                <li>Testes exploratórios e identificação de bugs críticos em um aplicativo com prazo reduzido</li>
                <li>Participação em reuniões com clientes para definição de requisitos</li>
              </ul>
              <li><strong>Docunder</strong></li>
              <ul>
                <li>Introdução de testes estruturados com <strong>QASE.io</strong></li>
                <li>Aplicação do modelo <strong>Shift Left</strong> com Docker, GitHub e Jira</li>
              </ul>
            </ul>
            <li><strong>Hackathon da TripleTen</strong></li>
              <ul>
                <li>Documentação de requisitos funcionais e não funcionais</li>
                <li>Definição do fluxo de navegação do usuário</li>
                <li>Planejamento e execução de testes funcionais e não funcionais</li>
              </ul>

            <h2 className="sobre-subtitle">Habilidades e Ferramentas</h2>
            <ul className="sobre-list">
              <li><strong>Testes Automatizados:</strong> Cypress, Postman, Appium</li>
              <li><strong>Testes Manuais:</strong> Planejamento e execução de testes funcionais, não funcionais e exploratórios</li>
              <li><strong>Gestão de Testes:</strong> QASE.io, Jira</li>
              <li><strong>Metodologias Ágeis:</strong> Scrum, Kanban</li>
              <li><strong>Infraestrutura e Versionamento:</strong> Docker, GitHub.</li>
            </ul>

            <p className="sobre-description">
              Estou sempre em busca de novos desafios e aprendizados para me tornar um profissional cada vez mais completo. Se quiser saber mais sobre meu trabalho ou trocar experiências, entre em contato!
            </p>
          </div>

        </div>

        {/* Seção de Habilidades */}
        <div className="skills-section">
          <h2 className="skills-title">Habilidades</h2>
          <div className="skills-grid">
            {/* Linguagens  */}
            <div className="skill-category">
              {/* <h3>Linguagens</h3> */}
              <div className="skill-icons">
                <Image src="/images/logos/Javascript_Logo.png" alt="JavaScript" width={70} height={70} />
                <Image src="/images/logos/typescript-Logo.png" alt="TypeScript" width={70} height={70} />
                <Image src="/images/logos/react.png" alt="React" width={70} height={70} />
                <Image src="/images/logos/cypress.png" alt="Cypress" width={70} height={70} />
                <Image src="/images/logos/playwright.png" alt="Playwright" width={70} height={70} />
                <Image src="/images/logos/jest.png" alt="Jest" width={70} height={70} />
                <Image src="/images/logos/postman.png" alt="Postman" width={70} height={70} />
                <Image src="/images/logos/Cucumber.webp" alt="Cucumber" width={70} height={70} />
                <Image src="/images/logos/GitHub-Logo.png" alt="GitHub" width={70} height={70} />
                <Image src="/images/logos/jira.png" alt="Jira" width={70} height={70} />
                <Image src="/images/logos/Docker-Logo.png" alt="Docker" width={70} height={70} />
                <Image src="/images/logos/VSCode-Logo.png" alt="VSCode" width={70} height={70} />
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}