// app/portfolio/page.js
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header'; // Importe o Header
import Footer from '../../components/Footer'; // Importe o Footer


const projects = [
  {
    id: 1,
    name: 'Bootcamp',
    description: 'Analista QA foco em testes manuais',
    image: '/images/bootcamp.png',
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
  {
    id: 2,
    name: 'Swaglab',
    description: 'Automação em Cypress e2e',
    image: '/images/swaglab.png',
    details: 'Detalhes sobre o novo projeto...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.png',
      '/images/novo-projeto-2.png',
      '/images/novo-projeto-3.png',
    ],
    // video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 3,
    name: 'Duconder',
    description: 'Voluntário testes e2e, manual',
    image: '/images/duconder.png',
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
  {
    id: 4,
    name: 'OrangemHRM',
    description: 'Testes em Cypress',
    image: '/images/orangemhrm.png',
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
  {
    id: 5,
    name: 'JavaScript_StarWars',
    description: 'Projeto JavaScript',
    image: '/images/javascript_starwars.png',
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
  {
    id: 6,
    name: 'L5Network',
    description: 'Testes de navegação e interação no site e2e',
    image: '/images/l5network.png',
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

// 

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <Header /> {/* Adicione o Header */}
      <main>
        <h1 className="portfolio-title">Meu Portfólio</h1>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`} className="project-card">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="project-image"
              />
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer /> {/* Adicione o Footer */}
    </div>
  );
}