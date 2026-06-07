import { PortraitDoodle } from "./Doodles";

export function Contact() {
  return (
    <section id="contacto" className="section-wrap pb-16">
      <div className="grid items-center gap-8 rounded-[2rem] border border-[#2f261f]/10 bg-white/80 p-6 shadow-[0_18px_45px_rgba(54,43,35,0.08)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="handwritten text-3xl text-[#7650a5]">conversemos</p>
          <h2 className="mt-2 text-4xl font-black tracking-normal text-[#2f261f] sm:text-5xl">
            ¿Tienes una idea y no sabes cómo ordenarla?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5e554f]">
            Podemos convertirla en una experiencia clara, visual y funcional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:Cathyrbopas@gmail.com" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#eb5d45] px-6 text-sm font-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f261f]">
              Hablemos
            </a>
            <a href="https://www.linkedin.com/in/catherine-rebolledo-pastene/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#2f261f]/20 bg-white px-6 text-sm font-black text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]">
              LinkedIn
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-[#5e554f] sm:grid-cols-3">
            <span>Correo: Cathyrbopas@gmail.com</span>
            <span>Santiago, Chile</span>
            <span>Disponible para proyectos</span>
          </div>
        </div>
        <div className="mx-auto text-[#2f261f]">
          <PortraitDoodle className="h-64 w-64" />
          <p className="handwritten text-center text-2xl text-[#eb5d45]">de idea a interfaz</p>
        </div>
      </div>
    </section>
  );
}
