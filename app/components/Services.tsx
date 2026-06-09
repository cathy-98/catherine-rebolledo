const services = [
  {
    label: "Experiencia",
    title: "UX/UI y producto digital",
    description:
      "Ordeno flujos, pantallas y componentes para que una plataforma sea más clara, usable y coherente.",
    value: "Aporte: claridad en procesos complejos y decisiones visuales que ayudan a avanzar.",
    deliverables: ["Flujos", "Wireframes", "UI", "Prototipo"],
    bestFor: "Plataformas, dashboards, formularios y productos internos.",
    accent: "#f4b7a8",
  },
  {
    label: "Presencia",
    title: "Web, marca y landing pages",
    description:
      "Estructuro la historia, el contenido y la estética para que una marca se entienda y se vea consistente.",
    value: "Aporte: dirección visual, jerarquía y una experiencia preparada para comunicar mejor.",
    deliverables: ["Arquitectura", "Identidad visual", "Responsive", "Handoff"],
    bestFor: "Marcas personales, servicios, consultoras y negocios digitales.",
    accent: "#d8c5ff",
  },
  {
    label: "Comunicación",
    title: "Redes y contenido visual",
    description:
      "Diseño piezas, carruseles, presentaciones y sistemas gráficos para que el mensaje no se sienta improvisado.",
    value: "Aporte: coherencia entre marca, tono y piezas de comunicación.",
    deliverables: ["RRSS", "Carruseles", "Banners", "Presentaciones"],
    bestFor: "Campañas, lanzamientos, contenido editorial y material comercial.",
    accent: "#ffe08a",
  },
  {
    label: "Mejora",
    title: "Auditoría y rediseño",
    description:
      "Reviso lo que ya existe, detecto fricción y propongo mejoras visuales, de contenido o experiencia.",
    value: "Aporte: priorizar cambios que ordenan sin rehacer todo desde cero.",
    deliverables: ["Diagnóstico", "Prioridades", "Mejoras UX/UI", "Guía de ajustes"],
    bestFor: "Sitios, productos o marcas que ya existen pero se sienten confusos.",
    accent: "#c9e8d0",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-wrap services-section">
      <div className="services-heading">
        <p className="section-kicker">servicios + aporte</p>
        <h2 className="section-title">Cómo puedo ayudarte</h2>
        <p>
          En vez de separar metodología, aporte y servicio en mil bloques, lo
          resumo aquí: qué puedo hacer, qué valor aporta y qué podrías recibir.
        </p>
      </div>

      <div className="services-showcase">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card"
            style={{ "--service-accent": service.accent } as React.CSSProperties}
          >
            <div className="service-card-top">
              <span>{service.label}</span>
              <small>0{index + 1}</small>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="service-value">{service.value}</p>
            <div className="service-best-for">
              <strong>Ideal para</strong>
              <span>{service.bestFor}</span>
            </div>
            <ul className="service-deliverables">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contacto" className="service-link">
              Conversar sobre esto <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
