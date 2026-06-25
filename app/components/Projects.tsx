import type { CSSProperties } from "react";
import Image from "next/image";
import { projects } from "@/app/data/skills";

const visualIdentityItems = [
  {
    title: "Creación de logos",
    description: "Diseño de logotipos, versiones de uso y recursos visuales base para marcas.",
    tags: ["Logo", "Marca", "Paleta"],
    accent: "#f7c8d2",
  },
  {
    title: "Identidad visual",
    description: "Definición de estilo visual, colores, tipografías y aplicaciones digitales.",
    tags: ["Identidad", "Color", "Lineamientos"],
    accent: "#d8c5ff",
  },
  {
    title: "Piezas gráficas",
    description: "Diseño de contenido visual para redes, presentaciones y comunicación digital.",
    tags: ["RRSS", "Contenido", "Diseño visual"],
    accent: "#ffe08a",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="section-wrap projects-showcase-section" data-reveal="section">
      <div className="projects-showcase-heading" data-reveal="up">
        <p className="section-kicker">Proyectos</p>
        <h2 className="section-title">Selección de trabajos</h2>
        <p>
          Una vitrina breve para mostrar criterio, rango y forma de resolver.
          Lo demás vive mejor como archivo completo en Behance.
        </p>
      </div>

      <div className="projects-showcase-grid">
        {projects.map((project, index) => (
          <a
            id={project.id}
            key={project.id}
            href={project.projectUrl ?? "#contacto"}
            className={`showcase-project-card showcase-project-card-${index + 1}`}
            style={
              {
                "--project-accent": project.accent,
                "--reveal-delay": `${index * 110}ms`,
              } as CSSProperties
            }
            data-reveal="project"
            data-tilt
            target={project.projectUrl ? "_blank" : undefined}
            rel={project.projectUrl ? "noreferrer" : undefined}
            aria-label={
              project.projectUrl
                ? `Ver ${project.title} en Behance`
                : `Conversar sobre ${project.title}`
            }
          >
            <div className="showcase-project-cover" aria-hidden="true">
              {project.coverImage ? (
                <Image
                  className="showcase-project-image"
                  src={project.coverImage}
                  alt=""
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                  priority={index === 0}
                />
              ) : (
                <>
                  <span className="showcase-orb showcase-orb-one" />
                  <span className="showcase-orb showcase-orb-two" />
                  <span className="showcase-frame showcase-frame-main" />
                  <span className="showcase-frame showcase-frame-side" />
                  <span className="showcase-line showcase-line-one" />
                  <span className="showcase-line showcase-line-two" />
                </>
              )}
            </div>

            <div className="showcase-project-label">
              <span>{project.category}</span>
              <strong>{project.title}</strong>
            </div>

            <div className="showcase-project-overlay">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="showcase-project-result">{project.outcome}</p>
              <small>
                {project.projectUrl ? "Ver en Behance" : "Ver más detalles"} <span aria-hidden="true">↗</span>
              </small>
            </div>
          </a>
        ))}
      </div>

      <div className="projects-showcase-footer" data-reveal="up">
        <p>
          También desarrollo exploraciones de identidad visual, logos y piezas gráficas
          para marcas que necesitan verse más claras y coherentes.
        </p>
        <a
          href="https://www.behance.net/cathyrbolledo"
          target="_blank"
          rel="noreferrer"
        >
          Ver archivo completo <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="identity-showcase" data-reveal="section">
        <div className="identity-showcase-heading" data-reveal="up">
          <p className="section-kicker">marca visual</p>
          <h3>Identidad visual y logos</h3>
          <p>
            También diseño logos, paletas y piezas gráficas para marcas que buscan una
            presencia visual clara, coherente y con personalidad.
          </p>
        </div>

        <div className="identity-card-grid" aria-label="Servicios de identidad visual">
          {visualIdentityItems.map((item, index) => (
            <article
              key={item.title}
              className="identity-card"
              data-reveal="card"
              data-tilt
              style={
                {
                  "--identity-accent": item.accent,
                  "--reveal-delay": `${index * 90}ms`,
                } as CSSProperties
              }
            >
              <div className="identity-card-visual" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <ul aria-label={`Tags de ${item.title}`}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
