import { projects } from "@/app/data/skills";
import { ArrowDoodle } from "./Doodles";

export function Projects() {
  return (
    <section id="proyectos" className="section-wrap">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Proyectos</p>
        <h2 className="section-title">Proyectos seleccionados</h2>
        <p className="mt-4 text-base leading-8 text-[#5e554f]">
          Una muestra de cómo puedo ordenar marca, interfaz y comunicación según
          el problema que tenga cada proyecto.
        </p>
      </div>
      <div className="mt-12 grid gap-8">
        {projects.map((project, index) => (
          <article
            id={project.id}
            key={project.id}
            className={`project-card ${index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}
          >
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b7b72]">{project.category}</p>
              <h3 className="mt-3 text-3xl font-black text-[#2f261f] sm:text-4xl">{project.title}</h3>
              <p className="mt-3 text-sm font-bold text-[#7650a5]">{project.role} · {project.year}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e554f]">{project.description}</p>
              <div className="project-insight">
                <strong>Enfoque</strong>
                <p>{project.outcome}</p>
              </div>
              <p className="project-fit">{project.fit}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#f8f3ea] px-3 py-1.5 text-sm font-semibold text-[#5e554f]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex items-center gap-4">
                <a href="#contacto" className="rounded-full bg-[#2f261f] px-5 py-3 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]">
                  Quiero algo similar
                </a>
                <span className="handwritten text-xl text-[#eb5d45]">{project.note}</span>
              </div>
            </div>
            <div className="project-visual" style={{ "--accent": project.accent } as React.CSSProperties}>
              <div className="mock-browser">
                <div className="mock-dots"><span /><span /><span /></div>
                <div className="mock-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <ArrowDoodle className="absolute bottom-5 right-6 h-10 w-36 text-[#2f261f]/40" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
