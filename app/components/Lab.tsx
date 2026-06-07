const labItems = [
  "Generador de brief",
  "Diagnostico UX rapido",
  "Checklist para crear una web",
  "Recursos para emprendedores",
  "Experimentos con IA",
  "Herramientas para ordenar proyectos digitales",
];

export function Lab() {
  return (
    <section id="lab" className="section-wrap">
      <div className="rounded-[2rem] border border-[#2f261f]/10 bg-[#2f261f] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="handwritten text-3xl text-[#ffe08a]">Lab</p>
            <h2 className="mt-2 text-4xl font-black tracking-normal sm:text-5xl">Diseño, tecnología e IA en pequeño formato.</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Un espacio donde combino diseño, tecnología e inteligencia artificial para crear pequeñas herramientas, recursos y experimentos.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {labItems.map((item, index) => (
              <article key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <p className="text-lg font-black">{item}</p>
                <span className="mt-4 inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-[#ffe08a]">
                  {index < 2 ? "En desarrollo" : "Proximamente"}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
