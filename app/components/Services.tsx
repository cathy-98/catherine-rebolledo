const services = [
  {
    icon: "UI",
    title: "Diseño UX/UI y producto digital",
    description:
      "Diseño interfaces, flujos, formularios, dashboards y experiencias digitales centradas en claridad, funcionalidad y objetivos de negocio.",
    bullets: ["Flujos", "Interfaces", "Dashboards"],
  },
  {
    icon: "WEB",
    title: "Diseño web",
    description:
      "Diseño landing pages, webs corporativas, portafolios y experiencias responsive preparadas para desarrollo o publicación.",
    bullets: ["Landing pages", "Responsive", "Handoff"],
  },
  {
    icon: "VIS",
    title: "Diseño visual y redes sociales",
    description:
      "Creo piezas visuales para marcas, campañas y contenido digital, manteniendo coherencia entre identidad, comunicación y formato.",
    bullets: ["Posts", "Carruseles", "Banners"],
  },
  {
    icon: "UX",
    title: "Mejora de productos y plataformas",
    description:
      "Analizo productos existentes para ordenar flujos, mejorar formularios, reducir fricción y fortalecer la experiencia visual.",
    bullets: ["Auditoria", "Orden", "Mejora"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-wrap">
      <div className="mx-auto max-w-3xl text-center">
        <p className="handwritten text-3xl text-[#eb5d45]">servicios</p>
        <h2 className="mt-2 text-4xl font-black tracking-normal text-[#2f261f] sm:text-5xl">¿En qué puedo ayudarte?</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d9c2ff] text-xs font-black text-[#2f261f]">
              {service.icon}
            </span>
            <h3 className="mt-5 text-2xl font-black text-[#2f261f]">{service.title}</h3>
            <p className="mt-4 text-base leading-8 text-[#5e554f]">{service.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full bg-[#f8f3ea] px-3 py-1.5 text-sm font-semibold text-[#5e554f]">
                  {bullet}
                </span>
              ))}
            </div>
            <a href="#contacto" className="mt-6 inline-flex min-h-11 items-center text-sm font-black text-[#eb5d45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]">
              Conversar sobre esto
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
