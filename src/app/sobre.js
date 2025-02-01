// src/app/sobre/page.js (Next.js 13) ou src/pages/sobre.js (Next.js 12)
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Sobre() {
  return (
    <div className="sobre-page">
      <Header />
      <main className="sobre-main">
        <div className="sobre-content">
          <Image
            src="/images/foto-sobre.jpg" // Insira o caminho da sua foto aqui
            alt="Foto Sobre"
            width={300}
            height={300}
            className="sobre-image"
          />
          <div className="sobre-text">
            <h1 className="sobre-title">Sobre Mim</h1>
            <p className="sobre-description">
              Desde que descobri minha paixão por garantir a qualidade de software, tenho me dedicado a aprender e aplicar as melhores práticas de teste. Como Analista de QA Junior, já tive a oportunidade de trabalhar em diversos projetos, desde testes manuais até automação com Cypress. Acredito que a qualidade é um reflexo da atenção aos detalhes e do compromisso com a excelência. Fora do trabalho, sou um entusiasta de [seus hobbies], o que me ajuda a manter um equilíbrio saudável entre vida profissional e pessoal.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}