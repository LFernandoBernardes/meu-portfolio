// src/components/HomeSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section className="home-section">
      <div className="home-content">
        <Image
          src="/images/foto-perfil.jpg"
          alt="Foto de Perfil"
          width={200}
          height={200}
          className="profile-image"
        />
        <div className="home-text">
          <h1 className="home-title">Olá, eu sou Luiz</h1>
          <p className="home-description">
            Sou um Analista de QA Junior com experiência em testes manuais e automação. Trabalho com ferramentas como Cypress, Selenium, e Postman. Além disso, tenho conhecimentos em JavaScript e Python. Nos meus projetos, busco sempre garantir a qualidade e a usabilidade dos produtos.
          </p>
          <p className="home-hobbies">
            No meu tempo livre, gosto de [seus hobbies].
          </p>
          <Link href="/sobre" className="about-button">
            Saiba mais sobre mim
          </Link>
        </div>
      </div>
    </section>
  );
}