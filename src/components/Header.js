// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/sobre" className="nav-link">Sobre</Link>
        <Link href="/projetos" className="nav-link">Projetos</Link>
      </nav>
    </header>
  );
}