import type { CSSProperties } from "react";

const services = [
  {
    icon: "01",
    title: "Diseño UX/UI y producto digital",
    description:
      "Diseño interfaces, flujos y experiencias digitales claras, intuitivas y fáciles de usar.",
    deliverables: ["Figma", "Flujos", "Investigación", "Sistema de diseño", "Design tokens"],
    accent: "#d8c5ff",
  },
  {
    icon: "02",
    title: "Diseño web",
    description:
      "Creo sitios web modernos, responsive y alineados a tu marca, considerando estructura, contenido y SEO básico.",
    deliverables: ["Webflow", "Framer", "Wix", "WordPress", "Shopify", "Responsive", "SEO básico"],
    accent: "#f7c8d2",
  },
  {
    icon: "03",
    title: "Identidad visual / creación de logos",
    description:
      "Diseño logos, paletas de color, tipografías y lineamientos visuales para que tu marca tenga una presencia clara y coherente.",
    deliverables: ["Logo", "Paleta", "Marca", "Lineamientos"],
    accent: "#ffe08a",
  },
  {
    icon: "04",
    title: "Diseño visual y RRSS",
    description:
      "Creo piezas gráficas, contenido digital y recursos visuales para comunicar tu marca en redes y canales digitales.",
    deliverables: ["Contenido", "RRSS", "Piezas gráficas", "Campañas visuales"],
    accent: "#c9e8d0",
  },
  {
    icon: "05",
    title: "Optimización de plataformas",
    description:
      "Mejoro pantallas, contenido y estructura visual de sitios o sistemas existentes para que sean más claros y fáciles de recorrer.",
    deliverables: ["Auditoría", "Mejora visual", "UX", "SEO on-page básico"],
    accent: "#bfe5ff",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-wrap services-section" data-reveal="section">
      <div className="services-heading" data-reveal="up">
        <p className="section-kicker">servicios</p>
        <h2 className="section-title">¿En qué puedo ayudarte?</h2>
        <p>
          Diseño con intención visual, claridad y estrategia para que tu idea o marca
          se entienda mejor.
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
            data-tilt
          >
            <div className="service-card-top">
              <span>{service.icon}</span>
              <small aria-hidden="true">✦</small>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-deliverables" aria-label="Entregables">
              {service.deliverables.map((item, itemIndex) => (
                <li key={item} style={{ "--tag-delay": `${itemIndex * 45}ms` } as CSSProperties}>
                  {item}
                </li>
              ))}
            </ul>
            <a className="service-link" href="#contacto">
              Ver más detalles <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
