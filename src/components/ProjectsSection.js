// src/components/ProjectsSection.js
import ProjectsCarousel from './ProjectsCarousel.client';
import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section className="projects-section fade-in">
      <h2 className="projects-title">
      <Link href="/portfolio" className="nav-link">Projetos</Link>
      </h2>
      <ProjectsCarousel />
    </section>
  );
}