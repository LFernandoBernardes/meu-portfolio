// app/portfolio/[id]/page.js

'use client'; // Marque o componente como Client Component

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProjectCarousel from '../../../components/ProjectCarousel';
import Header from '../../../components/Header'; // Importe o Header
import Footer from '../../../components/Footer'; // Importe o Footer
import ReactMarkdown from 'react-markdown'; // Importe o react-markdown
import Link from 'next/link'; // Importe o Link do Next.js

const projects = [
  {
    id: 1,
    name: 'Bootcamp',
    description: 'Analista QA foco em testes manuais',
    image: '/images/bootcamp.png',
    longDescription: `

Este projeto foi desenvolvido durante um **bootcamp intensivo** de qualidade de software. 
O foco principal foi em testes manuais, onde aprendi a:

    - Criar casos de teste;
    - Executar testes funcionais;
    - Reportar bugs de forma eficiente.

### Ferramentas Utilizadas
    - **Jira** para gerenciamento de tarefas;
    - **Confluence** para documentação.
  `,
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.png',
      '/images/novo-projeto-2.png',
      '/images/novo-projeto-3.png',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 2,
    name: 'Swaglab',
    description: 'Automação em Cypress e2e',
    image: '/images/swaglab.png',
    longDescription:

      `Projeto de estudo para o site open-source SwagLabs. 

O objetivo deste projeto é a implementação de qualidade para o site, abordando cada etapa do projeto.

Foi testado o ciclo e2e para dois usuário do site o com a aplicação rodando correta e outra com a aplicação com bugs.

Abaixo trago mais detalhes sobre os processos realizados:

### 1 Planejamento e Documentação:

Ferramenta: Jira 

Processo: Iniciei o projeto com um planejamento, organizando as sprints através de entregas, documentando os requisitos e critérios de aceitação. 

Essa documentação foi fundamental para alinhar expectativas e garantir que todos os testes fossem direcionados e precisos.

### 2 Planejamento, Criação e Execução dos Testes Manuais:

Ferramenta: QASE

Processo: Desenvolvi e organizei os planos de testes, suites e casos de testes manualmente. A execução destes permitiu validar funcionalidades críticas do SwagLabs, especialmente diferenciando os comportamentos entre os perfis standard_user e problem_user. Subi todos os casos de testes manuais que desenvolvi, no github. Essa documentação serve como um guia para futuras manutenções.

### 3 Planejamento, Criação e Execução dos Testes Automatizados:

Ferramenta:VSCode | Cypress 

Processo: Avançando no projeto, criei e executei testes automatizados para as features críticas como Login e testes e2e dos perfis {standard_user e problem_user}. A automação desses testes visa garantir a estabilidade e eficiência da aplicação, especialmente em futuros ciclos de desenvolvimento. Esses testes foram integrados ao CI, assegurando que a qualidade fosse mantida continuamente.

### 4 Bug Report no QASE Vinculado ao GitHub:

Ferramenta: QASE + GitHub 

Processo: Ao identificar bugs, utilizei o QASE para gerar relatórios detalhados e os vinculei ao GitHub via Issues. Essa integração facilitou a rastreabilidade e resolução dos problemas encontrados, mantendo tudo centralizado e organizado. 

### 5 Relatórios de Testes pelo Cypress Cloud:

Ferramenta: Cypress Cloud 

Processo: Após a execução dos testes automatizados, compilei relatórios detalhados usando o Cypress Cloud. Este é um conhecimento que adquiri do curso "Cypress, do Zero à Nuvem" da escola online Talking About Testing, onde aprendi como integrar um projeto Cypress com o serviço Cypress Cloud. 

### Por que isso é importante?

Cada etapa desse processo, apoiada por ferramentas como Jira, QASE, Cypress e GitHub, reflete meu compromisso com a excelência em QA. Esta experiência demonstra minha habilidade em utilizar as melhores ferramentas disponíveis para garantir que o produto final atenda as expectativas.
   `,

    technologies: [ // Tecnologias usadas
      { name: 'VSCode', logo: '/images/logos/VSCode-Logo.png' },

    ],
    repository: 'https://github.com/LFernandoBernardes/SwagLabs_projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/portfolio/swaglabs/swaglab2.jpg',
      '/images/portfolio/swaglabs/swaglab3.jpg',
      '/images/portfolio/swaglabs/swaglab4.jpg',
      '/images/portfolio/swaglabs/swaglab5.jpg',
      '/images/portfolio/swaglabs/swaglab6.jpg',
      '/images/portfolio/swaglabs/swaglab7.jpg',
      '/images/portfolio/swaglabs/swaglab8.jpg',
      '/images/portfolio/swaglabs/swaglab9.jpg',
      '/images/portfolio/swaglabs/swaglab10.jpg',
      '/images/portfolio/swaglabs/swaglab11.jpg',
      '/images/portfolio/swaglabs/swaglab12.jpg',
      '/images/portfolio/swaglabs/swaglab13.jpg',
      '/images/portfolio/swaglabs/swaglab14.jpg',
    ],
    video: '/videos/swaglab.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 3,
    name: 'Duconder',
    description: 'Voluntário testes e2e, manual',
    image: '/images/duconder.png',
    details: 'Detalhes sobre o Duconder...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.png',
      '/images/novo-projeto-2.png',
      '/images/novo-projeto-3.png',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 4,
    name: 'OrangemHRM',
    description: 'Testes em Cypress',
    image: '/images/orangemhrm.png',
    details: 'Detalhes sobre o OrangemHRM...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.png',
      '/images/novo-projeto-2.png',
      '/images/novo-projeto-3.png',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 5,
    name: 'JavaScript_StarWars',
    description: 'Projeto JavaScript',
    image: '/images/javascript_starwars.png',
    longDescription: `
Projeto realizado através do curso da QAx ministrado pelo Fernando Papito.
O projeto foca no aprendizado de JavaScript voltado especificamente para QAs.
    
### O que foi aprendido:

Conceitos basicos de programação, introdução ao desenvolvimento web, criação de uma pagina com os personagens do Star Wars.

### Star Wars Lego

Foi feito uma pagina com os personagens do Star Wars abordando os principais conceitos de lógicos por trás da elaboração de sites.


### Aprendi a trabalhar com: 
- Javascrit, HTML e CSS.
- variáveis, 
- constantes, 
- funções, 
- arrays, 
- objetos, 
- loops, 
- operadores, 
- controle de fluxo.

### Introdução ao desenvolvimento web: 
Além do JavaScript, tivemos uma introdução prática a HTML e CSS, complementando nossa base para a criação de aplicações.

Criação de uma WebApp com Vue.js: Colocamos em prática o que aprendemos desenvolvendo uma aplicação web utilizando o framework Vue.js.
   
    `,

    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/LFernandoBernardes/JavaScript_StarWars', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/portfolio/starwars/starwars1.png',
      '/images/portfolio/starwars/starwars2.png',
      '/images/portfolio/starwars/starwars3.png',
      '/images/portfolio/starwars/starwars4.png',

    ],
    video: '/videos/starwars.mp4', // Vídeo do projeto (opcional)

  },
  {
    id: 6,
    name: 'Starbugs',
    description: 'Testes de navegação e interação no site e2e',
    image: '/images/starbugs.png',
    longDescription: `
O projeto utilizou ferramentas como Cucumber e a linguagem Ruby para automatizar cenários de testes definidos em Gherkin. O estudo foi aplicado ao website Starbugs, uma simulação de cafeteria online, com o objetivo de testar e validar o processo de compra. Este projeto faz parte do curso de BDD da QAx. 

### O que foi trabalhado e aprendido
- Implementação de testes E2E para validar o fluxo de compra de um café.
- Utilização de Cucumber e Ruby para automação de cenários de testes escritos em Gherkin.
- Documentação e definição de critérios de aceite para uma nova funcionalidade: cupom de desconto.
- Aplicação do BDD (Behavior-Driven Development) para garantir que o desenvolvimento seguisse os critérios de aceite desde o início do projeto.
- Melhoria na comunicação entre times através da documentação em Gherkin, permitindo que desenvolvedores implementassem funcionalidades conforme especificado.

### Tecnologias utilizadas e suas aplicações
- Ruby: Linguagem de programação utilizada para escrever os testes automatizados.
- Capybara: Framework para simular interações do usuário com a aplicação.
- RSpec: Framework de testes para executar e validar os cenários definidos.
- Cucumber: Ferramenta para escrita de testes em linguagem natural (Gherkin), facilitando a compreensão dos cenários de teste.
- Selenium WebDriver: Biblioteca para interação com o navegador e execução dos testes automatizados.

Este estudo permitiu explorar a importância da automação de testes e do BDD para melhorar a qualidade do software. Ao documentar e definir critérios de aceite desde o início, foi possível garantir que o desenvolvimento seguisse as especificações corretamente. O processo também demonstrou como a escrita de testes em Gherkin facilita a comunicação entre times e assegura a entrega de um produto alinhado às expectativas do usuário.
  

`,
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/LFernandoBernardes/Starbugs-cucumber', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/portfolio/starbugs/starbugs1.png',
      '/images/portfolio/starbugs/starbugs2.png',
      '/images/portfolio/starbugs/starbugs3.png',
      '/images/portfolio/starbugs/starbugs4.png',
      '/images/portfolio/starbugs/starbugs5.png',
    ],
    video: '/videos/starbugs.mp4', // Vídeo do projeto (opcional)
  },
  // Novo Projeto completo 
  {
    id: 7, // Novo ID (único)
    name: 'Novo Projeto',
    description: 'Descrição do novo projeto',
    image: '/images/novo-projeto.png', // Caminho da imagem
    details: 'Detalhes sobre o novo projeto...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.png',
      '/images/novo-projeto-2.png',
      '/images/novo-projeto-3.png',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
];

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === Number(params.id));
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão do texto

  if (!project) {
    return notFound();
  }

  // Função para alternar entre texto expandido e resumido
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Trecho resumido da descrição (primeiros 500 caracteres)
  const shortDescription = project.longDescription.slice(0, 250) + '...';

  if (!project) {
    return notFound();
  }

  return (
    <div className="project-page">
      <Header /> {/* Adicione o Header */}
      <main>
        <h1 className="project-title">{project.name}</h1>
        <Image
          src={project.image}
          alt={project.name}
          width={300}
          height={300}
          className="project-image"
        />
        {/* <p className="project-description">{project.description}</p> */}

        {/* Descrição Longa */}
        <div className="project-long-description">
          <h1>Sobre o Projeto</h1>
          <ReactMarkdown>
            {isExpanded ? project.longDescription : shortDescription}
          </ReactMarkdown>
          <button onClick={toggleExpand} className="read-more-button">
            {isExpanded ? 'Mostrar Menos' : 'Leia Mais'}
          </button>

          {/* Tecnologias Usadas */}
          <h2>Tecnologias Usadas</h2>
          <ul className="technologies-list">
            {project.technologies.map((tech, index) => (
              <li key={index}>
                {/* {tech}</li> */}
                <img
                  src={tech.logo} // Caminho da logo
                  alt={tech.name} // Nome da tecnologia como texto alternativo
                  className="technology-logo"
                />
              </li>
            ))}
          </ul>

          {/* Link do Repositório */}
          <button class="btn-default">
          <a href={project.repository} target="_blank" rel="noopener noreferrer">
             Ver no GitHub 
          </a>
          </button>
         
        </div>

        {/* Carrossel de Imagens */}
        <div className="project-carousel">
          <h1>Fotos de projeto</h1>
          <ProjectCarousel images={project.images} video={project.video} width="800" height="450" />
        </div>

        {/* Vídeo do Projeto (opcional) */}
        {project.video && (
          <div className="project-video">
            <h1>Vídeo do Projeto</h1>
            <video controls width="800" height="450">
              <source src={project.video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        )}
        
        {/* Botão para ver outros projetos */}
        <div className="other-projects-button">
          <Link href="/portfolio" className="see-other-projects">
            Veja Meus Outros Projetos
          </Link>
        </div>
      </main>
      <Footer /> {/* Adicione o Footer */}
    </div>
  );
}