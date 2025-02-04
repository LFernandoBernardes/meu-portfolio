// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/sobre" className="nav-link">Sobre</Link>
        <Link href="/portfolio" className="nav-link">Projetos</Link>
        <a href="mailto:borgesluizf@outlook.com" className="footer-link">Email</a> {/* Insira seu email aqui */}
        <a href="https://www.linkedin.com/in/luiz-fernando-bernardes-borges-048105301/" className="footer-link">LinkedIn</a> {/* Insira seu LinkedIn aqui */}
        <a href="https://github.com/LFernandoBernardes" className="footer-link">GitHub</a> {/* Insira seu GitHub aqui */}
        <a href="https://www.instagram.com/chiquitohernando/" className="footer-link">Instagram</a> {/* Insira seu Instagram aqui */}
      </nav>
    </header>
  );
}

