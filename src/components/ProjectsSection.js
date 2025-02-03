// src/components/ProjectsSection.js
import ProjectsCarousel from './ProjectsCarousel.client';

export default function ProjectsSection() {
  return (
    <section className="projects-section fade-in">
      <h2 className="projects-title">Meus Projetos</h2>
      <ProjectsCarousel />
    </section>
  );
}