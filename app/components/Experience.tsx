import type { CSSProperties } from "react";

const experienceItems = [
  {
    context: "Elitsoft",
    period: "2024 - Actualidad",
    role: "UX/UI Designer, Jefa de Proyecto & enfoque Frontend",
    description:
      "Diseño interfaces, flujos, formularios, dashboards, prototipos y componentes reutilizables en Figma para productos digitales B2B, colaborando con frontend y levantamiento de requerimientos.",
  },
  {
    context: "Diseñadora independiente",
    period: "2024 - Actualidad",
    role: "Freelancer",
    description:
      "Desarrollo y rediseño identidades visuales, contenido digital para redes sociales y piezas promocionales, adaptando mensaje, tono e identidad visual a cada cliente.",
  },
  {
    context: "Plan OK",
    period: "2022 - 2024",
    role: "Customer Support & UX/UI Designer",
    description:
      "Resolví problemas de sistema y atención de usuarios, implementé mejoras en procesos internos y desarrollé identidad visual, manual corporativo y material de capacitación.",
  },
  {
    context: "Dr. Feelgood",
    period: "2020 - 2022",
    role: "Asistente comercial y Administrativa",
    description:
      "Gestioné marketing digital, redes sociales, apoyo a community management, captación de clientes y coordinación de comunicaciones para campañas y pacientes.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="section-wrap" data-reveal="section">
      <div className="mx-auto max-w-3xl text-center" data-reveal="up">
        <p className="section-kicker">recorrido</p>
        <h2 className="section-title">Experiencia</h2>
        <p className="mt-4 text-base leading-8 text-[#5e554f]">
          Lo más relevante de mi recorrido: producto digital, diseño UX/UI, comunicación visual y mejora de procesos.
        </p>
      </div>

      <div className="experience-timeline">
        {experienceItems.map((item, index) => (
          <article
            key={item.role}
            className="experience-row"
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
          >
            <div className="experience-context">
              <h3>{item.context}</h3>
              <p>{item.period}</p>
            </div>
            <div className="experience-marker" aria-hidden="true">
              <span className={index === 1 ? "is-purple" : ""} />
            </div>
            <div className="experience-detail">
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
