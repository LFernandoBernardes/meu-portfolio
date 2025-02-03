// src/components/ContactSection.js
export default function ContactSection() {
    return (
      <section className="contact-section">
        <h2 className="contact-title">Contato</h2>
        <div className="contact-links">
        <a href="mailto:borgesluizf@outlook.com" className="footer-link">Email</a> {/* Insira seu email aqui */}
        <a href="https://www.linkedin.com/in/luiz-fernando-bernardes-borges-048105301/" className="footer-link">LinkedIn</a> {/* Insira seu LinkedIn aqui */}
        <a href="https://github.com/LFernandoBernardes" className="footer-link">GitHub</a> {/* Insira seu GitHub aqui */}
        <a href="https://www.instagram.com/chiquitohernando/" className="footer-link">Instagram</a> {/* Insira seu Instagram aqui */}
      </div>
      </section>
    );
  }