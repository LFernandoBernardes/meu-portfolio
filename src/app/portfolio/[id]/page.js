// app/portfolio/[id]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProjectCarousel from '../../../components/ProjectCarousel';
import Header from '../../../components/Header'; // Importe o Header
import Footer from '../../../components/Footer'; // Importe o Footer

const projects = [
  {
    id: 1,
    name: 'Bootcamp',
    description: 'Analista QA foco em testes manuais',
    image: '/images/bootcamp.jpg',
    details: 'Detalhes sobre o Bootcamp...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 2,
    name: 'Swaglab',
    description: 'Automação em Cypress e2e',
    image: '/images/swaglab.png',
    details: 'Detalhes sobre o Swaglab...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 3,
    name: 'Duconder',
    description: 'Voluntário testes e2e, manual',
    image: '/images/duconder.jpg',
    details: 'Detalhes sobre o Duconder...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 4,
    name: 'OrangemHRM',
    description: 'Testes em Cypress',
    image: '/images/orangemhrm.jpg',
    details: 'Detalhes sobre o OrangemHRM...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  {
    id: 5,
    name: 'JavaScript_StarWars',
    description: 'Projeto JavaScript',
    image: '/images/javascript_starwars.png',
    details: 'Detalhes sobre o JavaScript_StarWars...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)

  },
  {
    id: 6,
    name: 'L5Network',
    description: 'Testes de navegação e interação no site e2e',
    image: '/images/l5network.jpg',
    details: 'Detalhes sobre o L5Network...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
  // Novo Projeto completo 
  {
    id: 7, // Novo ID (único)
    name: 'Novo Projeto',
    description: 'Descrição do novo projeto',
    image: '/images/novo-projeto.jpg', // Caminho da imagem
    details: 'Detalhes sobre o novo projeto...',
    technologies: ['React', 'Next.js', 'Node.js'], // Tecnologias usadas
    repository: 'https://github.com/seu-usuario/novo-projeto', // Link do repositório
    images: [ // Array de imagens para o carrossel
      '/images/novo-projeto-1.jpg',
      '/images/novo-projeto-2.jpg',
      '/images/novo-projeto-3.jpg',
    ],
    video: '/videos/novo-projeto.mp4', // Vídeo do projeto (opcional)
  },
];

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === Number(params.id));

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
          width={800}
          height={400}
          className="project-image"
        />
        <p className="project-description">{project.description}</p>

        {/* Detalhes do Projeto */}
        <div className="project-details">
          <h2>Detalhes do Projeto</h2>
          <p>{project.details}</p>

          {/* Tecnologias Usadas */}
          <h3>Tecnologias Usadas</h3>
          <ul className="technologies-list">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          {/* Link do Repositório */}
          <h3>Repositório</h3>
          <a href={project.repository} target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </div>

        {/* Carrossel de Imagens */}
        <div className="project-carousel">
          <h2>Arquitetura do Projeto</h2>
          <ProjectCarousel images={project.images} video={project.video} />
        </div>

        {/* Vídeo do Projeto (opcional) */}
        {project.video && (
          <div className="project-video">
            <h2>Vídeo do Projeto</h2>
            <video controls width="800" height="450">
              <source src={project.video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        )}
      </main>
      <Footer /> {/* Adicione o Footer */}
    </div>
  );
}