const capabilityGroups = [
  {
    title: "UX/UI y producto digital",
    accent: "#d9c2ff",
    items: ["Investigacion", "Arquitectura", "User flows", "Wireframes", "Prototipos", "Interfaces", "Responsive", "Dashboards", "Sistemas de diseno"],
  },
  {
    title: "Diseno web y prototipado",
    accent: "#bfe5ff",
    items: ["Landing pages", "Webs corporativas", "Portafolios", "Framer", "Webflow", "Design-to-code", "Componentes reutilizables"],
  },
  {
    title: "Diseno visual y comunicacion",
    accent: "#ffe08a",
    items: ["RRSS", "Posts", "Carruseles", "Banners", "Presentaciones", "Campanas", "Direccion de arte", "Editorial digital"],
  },
  {
    title: "Tecnologia y herramientas",
    accent: "#c9e8d0",
    items: ["Figma", "FigJam", "Notion", "ClickUp", "Jira", "VS Code", "GitHub", "Tailwind", "IA aplicada", "No-code"],
  },
];

export function Capabilities() {
  return (
    <section className="section-wrap">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="handwritten text-3xl text-[#7650a5]">lo que puedo aportar</p>
          <h2 className="mt-2 text-4xl font-black tracking-normal text-[#2f261f] sm:text-5xl">Capacidades agrupadas con sentido</h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-[#5e554f]">
          No se trata de una lista infinita de herramientas, sino de combinar criterio, estructura visual y tecnologia cuando ayuda.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {capabilityGroups.map((group) => (
          <article key={group.title} className="rounded-[1.5rem] border border-[#2f261f]/10 bg-white/75 p-6 shadow-[0_14px_35px_rgba(54,43,35,0.07)]">
            <span className="mb-5 block h-2 w-20 rounded-full" style={{ backgroundColor: group.accent }} />
            <h3 className="text-xl font-black text-[#2f261f]">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-[#f8f3ea] px-3 py-1.5 text-sm font-semibold text-[#5e554f]">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
