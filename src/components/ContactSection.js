// src/components/ContactSection.js
export default function ContactSection() {
    return (
      <section className="contact-section">
        <h2 className="contact-title">Contato</h2>
        <div className="contact-links">
          <a href="mailto:seuemail@example.com" className="contact-link">Email</a>
          <a href="https://linkedin.com/in/seu-linkedin" className="contact-link">LinkedIn</a>
          <a href="https://github.com/seu-github" className="contact-link">GitHub</a>
          <a href="https://instagram.com/seu-instagram" className="contact-link">Instagram</a>
        </div>
      </section>
    );
  }