// src/app/projetos/[id]/page.js
import { notFound } from 'next/navigation'; // Para lidar com projetos não encontrados
import Image from 'next/image'; // Componente de imagem otimizada

// Dados dos projetos (pode ser substituído por uma chamada API no futuro)
const projects = [
  {
    id: 1,
    name: 'Bootcamp',
    description: 'Analista QA foco em testes manuais',
    image: '/images/bootcamp.jpg',
    details: 'Detalhes sobre o Bootcamp...',
  },
  {
    id: 2,
    name: 'Swaglab',
    description: 'Automação em Cypress e2e',
    image: '/images/swaglab.jpg',
    details: 'Detalhes sobre o Swaglab...',
  },
  // Adicione mais projetos aqui
  {
    id: 3, // Novo ID
    name: 'Novo Projeto',
    description: 'Descrição do novo projeto',
    image: '/images/novo-projeto.jpg', // Caminho da imagem
    details: 'Detalhes sobre o novo projeto...',
  },

];

export default function ProjectPage({ params }) {
  // Encontra o projeto com base no ID da URL
  const project = projects.find((p) => p.id === Number(params.id));

  // Se o projeto não for encontrado, exibe uma página 404
  if (!project) {
    return notFound();
  }

  return (
    <div className="project-page">
      <h1 className="project-title">{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={400}
        className="project-image"
      />
      <p className="project-description">{project.description}</p>
      <div className="project-details">
        <h2>Detalhes do Projeto</h2>
        <p>{project.details}</p>
      </div>
    </div>
  );
}