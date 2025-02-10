// src/components/HomeSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section className="home-section fade-in">
      <div className="home-content">
        {/* <Image
          src="/images/perfil.jpeg"
          alt="Foto de Perfil"
          width={200}
          height={200}
          className="profile-image"
        /> */}
        <div className="home-text">
          <h1 className="home-title">Luiz Fernando Bernardes</h1>
          <h2 className="home-description">
          Garantia de qualidade não é só testar, é antecipar problemas e melhorar processos. Explore meu portfólio e veja como posso contribuir para o sucesso da sua empresa e fortalecer seu software!
          </h2>
          <Link href="/sobre" className="about-button">
            Sobre mim
          </Link>
        </div>
      </div>
    </section>
  );
}