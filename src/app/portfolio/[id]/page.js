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
# Projetos de Qualidade de Software
Minha jornada na área de Qualidade de Software começou com o Bootcamp da TripleTen, onde desenvolvi e participei de diversos projetos práticos que me permitiram consolidar conhecimentos e habilidades essenciais em QA. Cada projeto teve um foco específico, abordando diferentes tipos de testes e metodologias, contribuindo significativamente para meu aprendizado. Abaixo, apresento um resumo detalhado de cada um:
## Projeto Urban Scooter
### Objetivo do Projeto
Este foi o projeto final do Bootcamp e teve como propósito consolidar todas as etapas do curso, abrangendo desde a análise de requisitos até a execução de testes funcionais e não funcionais. O foco foi garantir a qualidade do Urban Scooter, um sistema de transporte urbano, validando sua estabilidade e conformidade com os requisitos.
### Principais Processos e Testes Realizados
- Análise de Requisitos: Identificação detalhada dos requisitos do sistema, decomposição de funcionalidades e resolução de ambiguidades.
- Testes Funcionais e Não Funcionais: Aplicação de técnicas como particionamento em classes de equivalência e valores-limite.
- Testes de Aplicativos Web: Validação de URLs, solicitações HTTP, gerenciamento de cookies e armazenamento local.
- Testes de Interface do Usuário: Uso do Figma para verificação da interface e testes entre plataformas e navegadores.
- Testes de API: Utilização do Postman para automação de chamadas GET, POST, PUT e DELETE.
- Banco de Dados: Escrita de consultas SQL para validação de dados e integridade das informações.
### Contribuição para minha Formação
Este projeto me proporcionou uma visão ampla do ciclo de testes, permitindo aprofundamento na análise de requisitos e no desenvolvimento de cenários de testes eficazes, além de reforçar meu conhecimento em testes de API e banco de dados.

## Projeto Urban Grocers
### Objetivo do Projeto
O projeto Urban Grocers teve como foco principal a realização de Testes de API. Trabalhamos com a API do sistema utilizando o Swagger, realizando validações completas das chamadas de serviços.
### Principais Processos e Testes Realizados
- Documentação de Testes: Criação de documentação estruturada com os casos de teste.
- Testes de API: Execução de chamadas GET, POST, PUT e DELETE no Postman.
- Verificação de Estrutura JSON: Análise de respostas da API para garantir a conformidade com o esperado.
- Identificação e Reporte de Bugs: Utilização do Jira para documentar e rastrear falhas encontradas.
- Checklists e Casos de Teste: Desenvolvimento de checklists para assegurar a qualidade da API.
### Contribuição para minha Formação
Este projeto me permitiu aprimorar meu conhecimento em testes de integração e API, além de reforçar a importância da documentação de testes e do uso de ferramentas para rastreamento de bugs.
## Projeto Urban Routes
### Objetivo do Projeto
O foco deste projeto foi a elaboração de testes funcionais e de interface do usuário (UI), garantindo que a aplicação atendesse às especificações de design e usabilidade.
### Principais Processos e Testes Realizados
- Análise de Requisitos: Identificação de objetos de teste e mapeamento de funcionalidades.
- Testes Funcionais: Aplicação de técnicas como classes de equivalência e valores-limite.
- Testes de Interface do Usuário: Validação da responsividade e usabilidade do sistema.
- Otimização de Cenários de Teste: Utilização de tabelas de decisão e testes de pares para ampliar a cobertura de testes.
### Contribuição para minha Formação
A experiência adquirida neste projeto me ajudou a entender melhor a importância dos testes de usabilidade e a garantir que a interface estivesse acessível e funcional em diferentes dispositivos e resoluções.
## Conclusão
Cada um desses projetos foi fundamental para consolidar meu conhecimento em Qualidade de Software, permitindo que eu adquirisse experiência prática em diferentes abordagens de testes. Através dessas experiências, desenvolvi habilidades essenciais para atuar como QA, incluindo análise de requisitos, testes funcionais e não funcionais, testes de API, automação e rastreamento de defeitos.
Esses projetos foram a base para meu crescimento na área e continuam sendo uma referência para minha evolução profissional.
 `,

    repository: [
      'https://github.com/LFernandoBernardes/Projeto-Urban-Scooter',
    ] ,// Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/portfolio/tripleten/bootcamp1.png',
      '/images/portfolio/tripleten/bootcamp2.png',
      '/images/portfolio/tripleten/bootcamp3.png',
      '/images/portfolio/tripleten/bootcamp4.png',
      '/images/portfolio/tripleten/bootcamp5.png',

    ],
  //  video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 2,
    name: 'Swaglab',
    description: 'Automação em Cypress e2e',
    image: '/images/swaglab.png',
    longDescription:`
# Teste e2e para o Site Swaglabs 

O objetivo deste projeto é a implementação de qualidade para o site open-souce SwagLabs, o que caracteriza este projeto é como ele foi pensado. Passando por todas as etapas do ciclo de desenvolvimento para simular a implementação de qualidade no modele shift left.

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

    repository: [
      'https://github.com/LFernandoBernardes/SwagLabs_projeto', 
      ], // Link do repositório
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
    id:3,
    name: 'Docunder',
    description: 'Voluntário testes e2e, manual',
    image: '/images/duconder.png',
    longDescription: `

# Projeto Voluntário Docunder

O Docunder é uma plataforma de código aberto desenvolvida para ajudar profissionais de tecnologia a documentar e compartilhar artefatos técnicos de forma colaborativa, simples e intuitiva. O projeto tem como premissa ser gratuito e acessível, incentivando a participação ativa da comunidade.
Desenvolvido voluntariamente por um time multidisciplinar, o Docunder conta com a colaboração de Scrum Masters, Product Owners, UX/UI Designers, Desenvolvedores e QAs, garantindo uma abordagem completa para a entrega de um produto de qualidade.
Arquitetura do Projeto 
### O Docunder é estruturado para garantir escalabilidade, manutenção simplificada e integração contínua. 
A arquitetura utiliza Docker para isolar e gerenciar os diferentes componentes da aplicação, proporcionando um ambiente de desenvolvimento consistente. Os principais elementos incluem:
- Frontend: Desenvolvido em Next.js, proporcionando uma interface moderna e responsiva.
- Backend: Implementado em Nest.js, garantindo alta performance e modularidade.
- Banco de Dados: Utilização do PostgreSQL, um banco de dados robusto e confiável.
Essa divisão arquitetural permite que cada componente funcione de forma independente, facilitando manutenção, escalabilidade e implantação contínua.
Pipeline de Desenvolvimento
O fluxo de desenvolvimento do Docunder é estruturado para garantir qualidade e eficiência, contando com automação e revisão rigorosa do código. O pipeline segue as seguintes etapas:
### 1. Criação de Pull Request
- O fluxo inicia com um desenvolvedor submetendo uma pull request para a branch principal ou de desenvolvimento.
### 2. Execução Automática de Testes
- O GitHub Actions é acionado automaticamente para:
  - Realizar o build do código.
  - Verificar padrões de código através do ESLint.
  - Executar testes automatizados com Cypress.
### 3. Code Review e Testes Manuais
  - Após as validações automáticas, o código passa por revisão por pares (Code Review) por um desenvolvedor e um QA.
  - São realizados testes manuais para garantir a funcionalidade correta.
### 4. Merge e Deploy
  - Com a aprovação, o código é mesclado na branch principal.
  - O Docker Hub recebe uma nova imagem gerada e esta é utilizada no deploy automático da aplicação.

Esse processo estruturado assegura a entrega contínua de novas funcionalidades com segurança e confiabilidade.

## Minha Contribuição no Projeto
Como Analista de Qualidade de Software (QA), minha atuação no projeto Docunder foi fundamental para garantir a qualidade das entregas e estruturar os processos de testes. Minhas principais contribuições foram:
### Planejamento e Estruturação de Testes
- Elaboração do Plano de Testes, definindo as estratégias e abordagens para garantir cobertura eficiente.
- Apresentação da ferramenta Qase.io para documentação e gerenciamento de casos de teste, otimizando a rastreabilidade e execução dos testes.
### Testes Automatizados e Manuais
- Execução de testes manuais para validar novas funcionalidades e identificar possíveis inconsistências.
### Integração com o Processo de Desenvolvimento
- Participação ativa nas reuniões de planejamento para alinhar estratégias de testes com a equipe de desenvolvimento.

## Impacto na Minha Formação como QA
A participação no Docunder agregou significativamente à minha experiência profissional como QA, permitindo-me:
- Aprimorar habilidades em automação de testes com Cypress.
- Trabalhar com pipelines de CI/CD, integrando qualidade ao processo de desenvolvimento.
- Colaborar em um ambiente multidisciplinar, interagindo com diferentes profissionais do setor de tecnologia.
- Aprofundar conhecimentos em ferramentas como Docker, expandindo minha compreensão sobre arquiteturas modernas.
Esse projeto foi essencial para consolidar meu conhecimento em qualidade de software, processos ágeis e automação de testes, fortalecendo minha atuação como profissional de QA.
`,

    repository: 'https://github.com/Organizacao-Docunder', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/logos/docunder_app.webp',
    ],
    // video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 4,
    name: 'OrangemHRM',
    description: 'Testes em Cypress',
    image: '/images/orangemhrm.png',
    longDescription:`
# OrangeHRM
Este projeto de estudo em Garantia de Qualidade de Software (QA) foi desenvolvido para o site open-source OrangeHRM. O objetivo principal foi documentar os requisitos de negócio, elaborar cenários de teste em linguagem Gherkin e implementar testes manuais e automatizados para as páginas de Login e "My Info" > "Personal Details".

## Processo do Projeto
Para garantir um fluxo eficiente e bem documentado, o projeto foi conduzido nas seguintes etapas:
### 1. Documentação de Requisitos e Cenários de Teste
- Levantamento e definição dos requisitos de negócio utilizando Jira.
- Criação de cenários de teste com linguagem Gherkin, também registrados no Jira.
- Organização da documentação no Capacities e Excel para facilitar a gestão e compartilhamento.
- Geração de um PDF consolidado com os requisitos e cenários de teste para referência e disponibilização no repositório do projeto no GitHub.
### 2. Execução de Testes Manuais
- Elaboração e execução de casos de teste manuais para validar as funcionalidades do sistema.
- Registro dos resultados dos testes para documentar falhas e garantir rastreabilidade.
- Avaliação da conformidade da aplicação com os requisitos documentados.
### 3. Automação de Testes End-to-End (E2E)
- Implementação de testes automatizados utilizando Cypress, garantindo a cobertura das funcionalidades críticas do sistema.
- Automção de cenários para:
    - Fluxo de Login.
    - Atualização de dados na página "My Info" > "Personal Details".
- Execução dos testes automatizados para detectar regressões e garantir estabilidade do sistema.
### 4. Estrutura do Repositório
O projeto está organizado para facilitar a navegação e compreensão:
- Documentos/: Contém a documentação dos requisitos, cenários de teste e casos de teste (manuais e automatizados em Gherkin).
- cypress/e2e/: Diretório onde estão localizados os scripts de testes automatizados.
- cypress/pages/: Armazena os Page Objects utilizados nas features de login e gerenciamento de usuário.
- GitHub: Todos os artefatos estão disponíveis no repositório do projeto, incluindo o PDF consolidado.
## Testes Realizados
### Testes Manuais
- Login: Validação de credenciais válidas e inválidas.
- Recuperação de Senha: Testes para a funcionalidade de recuperação de conta.
- Cadastro e Atualização de Dados: Teste de edição de informações pessoais no "My Info".
### Testes Automatizados (Cypress)
- Fluxo de Login: Testes de sucesso e falha ao acessar a plataforma.
- Edição de Dados do Usuário: Validação de campos obrigatórios e formatos aceitos.
- Testes de Regresso: Garante que novas implementações não impactem funcionalidades existentes.
## Conclusão
Este projeto reforçou a importância da Garantia da Qualidade (QA) no desenvolvimento de software, destacando a necessidade de um processo estruturado para documentação, execução e automação de testes.
### O estudo me permitiu aprimorar habilidades essenciais, como:
- Planejamento e documentação de testes.
- Utilização de ferramentas como Jira, Cypress, Capacities e Excel.
- Implementação de testes automatizados para garantir qualidade e eficiência.
Esse projeto foi um grande passo no meu aprendizado e aprimoramento profissional como Analista de Qualidade de Software, consolidando conceitos e práticas fundamentais para a área. Caso tenha dúvidas ou queira saber mais sobre o projeto, sinta-se à vontade para entrar em contato!

    `,

    repository: 'https://github.com/LFernandoBernardes/Cypress_Testes_OrangeHRM', // Link do repositório
    images: [ // Array de imagens para o carrossel
        '/images/portfolio/orangemhrm/orangemhrm1.png',
        '/images/portfolio/orangemhrm/orangemhrm2.png',
        '/images/portfolio/orangemhrm/orangemhrm3.png',
        '/images/portfolio/orangemhrm/orangemhrm4.png',
   
    ],
    video: '/videos/orangemhrm_video.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 5,
    name: 'JavaScript_StarWars',
    description: 'Projeto JavaScript',
    image: '/images/starwars.png',
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
    description: 'Teste com Cucumber em Escrita Gherkin',
    image: '/images/starbugs.png',
    longDescription: `
# Projeto Starbugs - Testes Automatizados

Este projeto de automação de testes foi desenvolvido durante o curso QAx Experience - Cucumber eXperience e tem como objetivo a implementação de testes end-to-end (E2E) para o sistema Starbugs, uma aplicação que simula uma cafeteria online. O projeto foca na automação dos cenários de teste utilizando Cucumber e Ruby, seguindo a abordagem BDD (Behavior-Driven Development) para garantir uma melhor comunicação e alinhamento entre as partes envolvidas no desenvolvimento do sistema.
Objetivos e Processos Realizados

### 1. Automação do fluxo de compra
- Testes de navegação no site Starbugs
- Escolha de um café e adição ao carrinho
- Cadastro do pedido e finalização da compra
### 2. Documentação e implementação de uma nova funcionalidade: Cupom de Desconto
- Levantamento dos requisitos e critérios de aceitação
- Escrita dos cenários de teste em Gherkin
- Desenvolvimento orientado ao comportamento (BDD), garantindo que a aplicação fosse construída conforme as especificações desde o início
- Validação da funcionalidade implementada por meio de testes automatizados
### 3. Execução e análise dos testes
- Implementação de testes automatizados utilizando Cucumber, Capybara e Selenium WebDriver
- Estruturação dos testes com RSpec
- Execução e refinamento dos testes para garantir a cobertura das funcionalidades críticas

## Tecnologias Utilizadas

    - Ruby: Linguagem de programação para escrita dos testes
    - Cucumber: Ferramenta de BDD para definir cenários em Gherkin
    - Capybara: Biblioteca para simular interações do usuário com a aplicação
    - RSpec: Estruturação e execução dos testes automatizados
    - Selenium WebDriver: Automação da interação com navegadores

## Contribuição para minha Formação em QA
Este projeto foi fundamental para o aprimoramento das minhas habilidades na área de Qualidade de Software, permitindo-me aprofundar conhecimentos em automação de testes, BDD e estruturação de testes eficientes.

A prática de documentar requisitos e critérios de aceitação desde o início do desenvolvimento reforçou a importância da comunicação clara entre equipes, garantindo que as funcionalidades fossem construídas corretamente e testadas de maneira eficaz.

### experiência práticade conceitos
- Definição de requisitos e critérios de aceitação
- Escrita de cenários de teste em Gherkin
- Implementação e execução de testes automatizados
- Aplicação da metodologia BDD para melhorar a comunicação e alinhamento entre times

Este projeto reafirmou a importância da automação de testes no ciclo de desenvolvimento de software, destacando a relevância do trabalho de QA para garantir a entrega de produtos com qualidade e confiabilidade.


`,

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
    name: 'Meu Site de Portfólio',
    description: 'Construção deste Site',
    image: '/images/meu_site.png', // Caminho da imagem
    longDescription: `
# Portfólio Pessoal - Este Site
Construi uma plataforma interativa e responsiva que destaca meus trabalhos e conhecimentos. O site foi construído do zero, desde a estruturação do front-end até a implementação de testes automatizados com Cypress e Jest, garantindo qualidade e performance. 

Além de ser uma vitrine profissional, este projeto representou um grande desafio e aprendizado, permitindo-me explorar novas ferramentas e consolidar meus conhecimentos em desenvolvimento e qualidade de software.

### Destaques:

- Tecnologias Modernas: Next.js, React, Swiper, Cypress, Jest.
- Testes Automatizados: Garantia de qualidade com testes e2e e unitários.
- Responsivo e Acessível: Design adaptável para diferentes dispositivos.
- Deploy Automático: Hospedagem na Vercel com integração contínua via GitHub Actions.

Este projeto não apenas demonstra minhas habilidades técnicas, mas também minha capacidade de aprender e aplicar novas tecnologias, algo essencial para minha trajetória como QA.

## Tecnologias Utilizadas
### 1. Linguagens de Programação:
  - JavaScript: Linguagem principal para desenvolvimento do front-end, permitindo interatividade e dinamismo no site.
  - HTML/CSS: Estruturação e estilização do site, garantindo uma interface responsiva e visualmente atraente.
### 2. Frameworks:
  - Next.js: Framework React utilizado para criar aplicações web modernas com renderização do lado do servidor (SSR) e geração estática (SSG). Escolhido por sua performance, SEO aprimorado e facilidade de roteamento dinâmico.
  - React: Biblioteca para construção de interfaces de usuário, utilizada em conjunto com o Next.js para criar componentes reutilizáveis e de alta performance.
### 3. Bibliotecas:
  - Swiper: Biblioteca para criar carousels interativos e responsivos, utilizada para exibir os projetos de forma dinâmica.
  - React Modal: Biblioteca para criação de modais, utilizada para expandir imagens e exibir detalhes dos projetos.
  - CSS Modules: Para estilização modularizada e evitando conflitos de classes CSS.
### 4. Ferramentas de Testes:
  - Cypress: Utilizado para testes end-to-end (e2e), garantindo que todas as funcionalidades do site funcionem conforme o esperado.
  - Jest: Framework de testes unitários, utilizado para testar componentes individuais do React.
  - React Testing Library: Para testes de integração, garantindo que os componentes funcionem corretamente em conjunto.
### 5. Ferramentas de Desenvolvimento:
  - Git/GitHub: Controle de versão e colaboração no código.
  - VSCode: Editor de código utilizado para desenvolvimento.
  - ESLint/Prettier: Para padronização e qualidade do código.
### 6. Hospedagem e CI/CD:
  - Vercel: Plataforma de hospedagem para aplicações Next.js, com integração contínua e deploy automático.
  - GitHub Actions: Para automação de pipelines de CI/CD.
## Sobre o Projeto
### Objetivo: 
Criar um site de portfólio pessoal para exibir projetos, habilidades e experiências como QA.
### Desafios Enfrentados:
- Aprender e aplicar conceitos de desenvolvimento front-end, como React e Next.js, sem experiência prévia.
- Integrar bibliotecas de terceiros (Swiper, React Modal) e garantir que funcionem corretamente.
- Garantir a responsividade e acessibilidade do site.
- Implementar testes automatizados (e2e e unitários) para validar a qualidade do código e das funcionalidades.

### Processos Realizados:
    - Planejamento da estrutura do site e definição de requisitos.
    - Desenvolvimento de componentes reutilizáveis em React.
    - Integração com bibliotecas para carousel e modais.
    - Implementação de rotas dinâmicas com Next.js.
    - Realização de testes manuais e automatizados para garantir a qualidade.
    - Deploy contínuo utilizando Vercel e GitHub Actions.
## Importância do Projeto na Minha Trajetória como QA
### Aprendizado Técnico: 
Ao criar um site do zero, adquiri conhecimentos práticos em desenvolvimento front-end, como React, Next.js e integração de bibliotecas. Isso me permitiu entender melhor o trabalho dos desenvolvedores, facilitando a comunicação e colaboração em projetos futuros.
### Visão de Qualidade: 
Aplicar testes automatizados (Cypress e Jest) em um projeto real me ajudou a consolidar meus conhecimentos em QA, especialmente na criação de casos de teste e na garantia da qualidade do código.
### Portfólio Pessoal: 
Ter um site próprio para exibir meus projetos e habilidades é um diferencial competitivo, demonstrando proatividade e capacidade de aprender novas tecnologias.
### Desafios Superados: 
Enfrentar desafios técnicos e sair da zona de conforto como QA me tornou um profissional mais completo, capaz de contribuir em diferentes etapas do ciclo de desenvolvimento.
## Testes Realizados
### 1. Testes Unitários:
  - Testes para componentes React, garantindo que cada parte do site funcione isoladamente.
### 2. Testes de Integração:
  - Verificação de como os componentes funcionam em conjunto, especialmente no carousel e modais.
### 3. Testes End-to-End (e2e):
  - Testes automatizados com Cypress para validar fluxos completos, como navegação entre páginas e interações com o carousel.
### 4. Testes Manuais:
  - Verificação de responsividade, acessibilidade e usabilidade em diferentes dispositivos e navegadores.

    `,
    repository: 'https://github.com/LFernandoBernardes/meu-portfolio', // Link do repositório
    images: [ // Array de imagens para o carrossel
      // '/images/novo-projeto-1.png',
      // '/images/novo-projeto-2.png',
      // '/images/novo-projeto-3.png',
    ],
    video: '/videos/meu_site.mp4', // Vídeo do projeto (opcional)
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
          {/* <h1>Projeto</h1> */}
          <ReactMarkdown>
            {isExpanded ? project.longDescription : shortDescription}
          </ReactMarkdown>
          <button onClick={toggleExpand} className="read-more-button">
            {isExpanded ? 'Mostrar Menos' : 'Leia Mais'}
          </button>
            
          {/* Link do Repositório */}
          <h2>Veja o Projeto no Github</h2>
          <button class="btn-default">
          <a href={project.repository} target="_blank" rel="noopener noreferrer">
             Ver no GitHub 
          </a>
          </button>
         
        </div>

        {/* Carrossel de Imagens */}
        <div className="project-carousel">
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
