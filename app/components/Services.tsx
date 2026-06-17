import type { CSSProperties } from "react";

const services = [
  {
    icon: "01",
    title: "Experiencias digitales",
    description:
      "Diseño interfaces, flujos, formularios, arquitectura y sistemas visuales para productos o plataformas que necesitan sentirse claras.",
    value: "Para productos, dashboards, procesos internos, MVPs y mejoras de UX/UI.",
    deliverables: ["UX/UI", "Flujos", "Prototipos", "Design system", "Handoff"],
    accent: "#d8c5ff",
  },
  {
    icon: "02",
    title: "Web, marca y comunicación",
    description:
      "Ordeno identidad visual, sitios web, piezas digitales y contenido para que una marca comunique con coherencia en distintos canales.",
    value: "Para marcas nuevas, rediseños, landing pages, RRSS, campañas y presentaciones.",
    deliverables: ["Logo", "Web", "Paleta", "RRSS", "Contenido"],
    accent: "#f7c8d2",
  },
  {
    icon: "03",
    title: "Optimización y criterio visual",
    description:
      "Reviso pantallas, contenidos y estructuras existentes para detectar fricción, mejorar jerarquía y dejar una ruta accionable.",
    value: "Para equipos o negocios que ya tienen algo funcionando, pero sienten que no está claro.",
    deliverables: ["Auditoría", "Mejoras UI", "SEO básico", "Procesos", "Brief"],
    accent: "#ffe08a",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-wrap services-section" data-reveal="section">
      <div className="services-heading" data-reveal="up">
        <p className="section-kicker">servicios</p>
        <h2 className="section-title">Cómo puedo aportar</h2>
        <p>
          Tres formas de trabajar conmigo, desde una interfaz hasta una marca o una
          mejora visual más estratégica.
        </p>
      </div>

      <div className="services-showcase" aria-label="Servicios disponibles">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card"
            style={
              {
                "--service-accent": service.accent,
                "--reveal-delay": `${index * 110}ms`,
              } as CSSProperties
            }
            data-reveal="card"
          >
            <div className="service-card-top">
              <span>{service.icon}</span>
              <small aria-hidden="true">✦</small>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="service-value">{service.value}</p>
            <ul className="service-deliverables" aria-label="Entregables">
              {service.deliverables.map((item, itemIndex) => (
                <li key={item} style={{ "--tag-delay": `${itemIndex * 45}ms` } as CSSProperties}>
                  {item}
                </li>
              ))}
            </ul>
            <a className="service-link" href="#contacto">
              Conversar servicio <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
