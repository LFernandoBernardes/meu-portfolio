// src/pages/index.js (sua página personalizada)
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';


export default function Home() {
  return (
    <div className="home-page">
      <Head>
        <title>Meu Portfólio - Analista de QA</title>
        <meta name="description" content="Portfólio de um Analista de Qualidade de Software" />
      </Head>
      <Header />
      <main>
        <HomeSection />
        <ProjectsSection />
        {/* <ContactSection /> */}

      </main>
      <Footer />
    </div>
  );
}