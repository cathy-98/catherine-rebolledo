const experienceAreas = [
  "Diseño UX/UI",
  "Producto digital",
  "Diseño visual y redes sociales",
  "Diseño web",
  "Coordinacion de proyectos",
  "Apoyo frontend",
  "Trabajo con equipos multidisciplinarios",
];

export function Experience() {
  return (
    <section id="experiencia" className="section-wrap">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="handwritten text-3xl text-[#7650a5]">recorrido</p>
          <h2 className="mt-2 text-4xl font-black tracking-normal text-[#2f261f] sm:text-5xl">Experiencia</h2>
          <p className="mt-4 text-base leading-8 text-[#5e554f]">
            Una timeline editable para ordenar roles, proyectos y colaboraciones sin inventar empresas, fechas ni cifras.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[#2f261f]/10 bg-white/75 p-6 shadow-[0_18px_45px_rgba(54,43,35,0.08)]">
          <div className="space-y-6 border-l-2 border-dashed border-[#7650a5]/35 pl-6">
            {experienceAreas.map((area, index) => (
              <article key={area} className="relative">
                <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#eb5d45] shadow" />
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b7b72]">Fecha editable · Rol editable {index + 1}</p>
                <h3 className="mt-2 text-xl font-black text-[#2f261f]">{area}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5e554f]">
                  Espacio preparado para describir responsabilidades, contexto del proyecto y equipo involucrado.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
