// src/components/Footer.js

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Luiz Fernando Bernardes Borges. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="mailto:borgesluizf@outlook.com" className="footer-link">Email: borgesluizf@outlook.com</a> {/* Insira seu email aqui */}
        <a href="https://www.linkedin.com/in/luiz-fernando-bernardes-borges-048105301/" className="footer-link">LinkedIn</a> {/* Insira seu LinkedIn aqui */}
        <a href="https://github.com/LFernandoBernardes" className="footer-link">Github</a> {/* Insira seu GitHub aqui */}
        <a href="https://www.instagram.com/chiquitohernando/" className="footer-link">Instagram</a> {/* Insira seu Instagram aqui */}
      </div>
    </footer>
  );
}