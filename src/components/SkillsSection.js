// src/components/SkillsSection.js
import Image from 'next/image';

export default function SkillsSection() {
  return (
    <div className="skills-section fade-in">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {/* Linguagens */}
        <div className="skill-category">
          <h3>Linguagens</h3>
          <div className="skill-icons">
            <Image src="/images/Javascript-Logo.png" alt="JavaScript" width={50} height={50} />
            <Image src="/images/typescript-Logo.png" alt="TypeScript" width={50} height={50} />
          </div>
        </div>
        {/* Ferramentas de Testes */}
        <div className="skill-category">
          <h3>Ferramentas de Testes</h3>
          <div className="skill-icons">
          <Image src="/images/Cucumber.webp" alt="Cucumber" width={50} height={50} />
            <Image src="/images/cypress.png" alt="Cypress" width={50} height={50} />
            <Image src="/images/playwright.png" alt="Playwright" width={50} height={50} />
            <Image src="/images/jest.png" alt="Jest" width={50} height={50} />
            <Image src="/images/postman.png" alt="Postman" width={50} height={50} />
            <Image src="/images/Cucumber.webp" alt="Cucumber" width={50} height={50} />
          </div>
        </div>
        {/* Outras Ferramentas */}
        <div className="skill-category">
          <h3>Outras Ferramentas</h3>
          <div className="skill-icons">
            <Image src="/images/GiitHub-Logo.png" alt="GitHub" width={50} height={50} />
            <Image src="/images/jira.png" alt="Jira" width={50} height={50} />
            <Image src="/images/Docker-Logo.png" alt="Docker" width={50} height={50} />
            <Image src="/images/VSCode-Logo.png" alt="VSCode" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}