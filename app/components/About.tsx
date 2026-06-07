import { PortraitDoodle, SparkleIcon } from "./Doodles";

const facts = [
  "Diseño UX/UI",
  "Producto digital",
  "Diseño web",
  "Diseño visual",
  "Diseño y comunicacion digital",
  "Santiago, Chile",
  "Español",
  "Ingles basico",
];

export function About() {
  return (
    <section id="quien-soy" className="section-wrap">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto max-w-sm text-[#2f261f]">
          <div className="absolute -left-6 top-8 rotate-[-10deg] rounded-lg border-2 border-[#eb5d45] px-3 py-1 text-sm font-black uppercase text-[#eb5d45]">
            Inicio
          </div>
          <PortraitDoodle className="h-72 w-72 sm:h-80 sm:w-80" />
          <p className="handwritten -mt-4 text-center text-3xl text-[#7650a5]">
            conectar ideas con personas
          </p>
        </div>
        <div className="relative rounded-[2rem] border border-[#2f261f]/10 bg-white/75 p-6 shadow-[0_18px_45px_rgba(54,43,35,0.08)] sm:p-8">
          <SparkleIcon className="absolute -right-3 -top-3 h-8 w-8 text-[#ffe08a]" />
          <p className="handwritten text-2xl text-[#7650a5]">¿Quién soy?</p>
          <h2 className="mt-2 text-4xl font-black tracking-normal text-[#2f261f] sm:text-5xl">
            Diseño para que lo complejo se pueda recorrer.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#5e554f]">
            <p>
              Soy diseñadora con formación en Diseño y Comunicación Digital. Mi trabajo se mueve entre UX/UI, producto digital, diseño web y comunicación visual. Me interesa entender el problema antes de diseñar, ordenar información compleja y convertirla en experiencias claras, coherentes y fáciles de recorrer.
            </p>
            <p>
              También tengo experiencia creando contenido visual para redes sociales, piezas digitales, sistemas gráficos, presentaciones y material para marcas. Actualmente complemento mi perfil con frontend, herramientas de inteligencia artificial, no-code y automatización.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {facts.map((fact) => (
              <span key={fact} className="rounded-full border border-[#2f261f]/10 bg-[#f8f3ea] px-4 py-2 text-sm font-semibold text-[#5e554f]">
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
