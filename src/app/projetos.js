// src/app/projetos/page.js (Next.js 13) ou src/pages/projetos.js (Next.js 12)
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectsCarousel from '../../components/ProjectsCarousel.client';

export default function Projetos() {
  return (
    <div className="projetos-page">
      <Header />
      <main className="projetos-main">
        <h1 className="projetos-title">Meus Projetos</h1>
        <ProjectsCarousel />
      </main>
      <Footer />
    </div>
  );
}