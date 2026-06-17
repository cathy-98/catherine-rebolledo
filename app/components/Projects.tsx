import type { CSSProperties } from "react";
import { projects } from "@/app/data/skills";

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
            href="#contacto"
            className={`showcase-project-card showcase-project-card-${index + 1}`}
            style={
              {
                "--project-accent": project.accent,
                "--reveal-delay": `${index * 110}ms`,
              } as CSSProperties
            }
            data-reveal="project"
            aria-label={`Conversar sobre ${project.title}`}
          >
            <div className="showcase-project-cover" aria-hidden="true">
              <span className="showcase-orb showcase-orb-one" />
              <span className="showcase-orb showcase-orb-two" />
              <span className="showcase-frame showcase-frame-main" />
              <span className="showcase-frame showcase-frame-side" />
              <span className="showcase-line showcase-line-one" />
              <span className="showcase-line showcase-line-two" />
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
                Ver proyecto <span aria-hidden="true">↗</span>
              </small>
            </div>
          </a>
        ))}
      </div>

      <div className="projects-showcase-footer" data-reveal="up">
        <p>Logos, piezas sueltas y exploraciones visuales pueden vivir fuera de esta landing.</p>
        <a
          href="https://www.behance.net/cathyrbolledo"
          target="_blank"
          rel="noreferrer"
        >
          Ver archivo completo <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
