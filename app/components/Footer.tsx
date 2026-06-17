const footerLinks = [
  { label: "Quién soy", href: "#quien-soy" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid" data-reveal="up">
        <div className="site-footer-brand">
          <a href="#inicio" className="footer-logo" aria-label="Volver al inicio">
            Cath<span>.</span>
          </a>
          <p>
            Diseño experiencias, marcas y piezas digitales con claridad,
            intención visual y criterio práctico.
          </p>
        </div>

        <nav aria-label="Navegación secundaria">
          <h2>Navegación</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Contacto</h2>
          <ul className="footer-contact-list">
            <li>
              <span aria-hidden="true">✉</span>
              <a href="mailto:Cathyrbopas@gmail.com">Cathyrebopas@gmail.com</a>
            </li>
            <li>
              <span aria-hidden="true">⌂</span>
              <span>Santiago, Chile</span>
            </li>
            <li>
              <span aria-hidden="true">in</span>
              <a
                href="https://www.linkedin.com/in/catherine-rebolledo-pastene/"
                target="_blank"
                rel="noreferrer"
              >
                /catherine-rebolledo-pastene
              </a>
            </li>
          </ul>
        </div>

        <p className="site-footer-note">Hecho con ♡ y mucho café.</p>
      </div>

      <p className="site-footer-copy">
        © 2026 Catherine Rebolledo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
