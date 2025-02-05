// src/components/Header.js
// 'use client'; // Marque o componente como Client Component

// import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu

    return (
      <header className="header">
        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/sobre" className="nav-link">Sobre</Link>
          <Link href="/portfolio" className="nav-link">Projetos</Link>

        </nav>
      </header>
    );
  }



