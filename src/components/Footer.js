// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2023 [Seu Nome]. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="mailto:seuemail@example.com" className="footer-link">Email</a> {/* Insira seu email aqui */}
        <a href="https://linkedin.com/in/seu-linkedin" className="footer-link">LinkedIn</a> {/* Insira seu LinkedIn aqui */}
        <a href="https://github.com/seu-github" className="footer-link">GitHub</a> {/* Insira seu GitHub aqui */}
        <a href="https://instagram.com/seu-instagram" className="footer-link">Instagram</a> {/* Insira seu Instagram aqui */}
      </div>
    </footer>
  );
}