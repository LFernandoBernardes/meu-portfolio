// src/components/ProjectsSection.js
import ProjectsCarousel from './ProjectsCarousel.client';

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Meus Projetos que trabalhei</h2>
      <ProjectsCarousel />
    </section>
  );
}