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
          <h1 className="home-title">Luiz Fernando Bernardes Borges</h1>
          <h2 className="home-description">
         Garantia de qualidade é antecipar problemas e melhorar processos. Explore meu portfólio saiba como posso contribuir em projetos de Qualidade de Software!
          </h2>
          <Link href="/sobre" className="about-button">
            Sobre mim
          </Link>
        </div>
      </div>
    </section>
  );
}