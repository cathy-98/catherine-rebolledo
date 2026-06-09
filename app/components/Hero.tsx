import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="figma-hello-hero mx-auto">
        <div className="hero-separated-doodles" aria-hidden="true">
          <Image className="hero-piece hero-piece-idea" src="/figma/hero-layer-idea.svg" alt="" width={268} height={123} priority />
          <Image className="hero-piece hero-piece-sun" src="/figma/hero-layer-sol.svg" alt="" width={239} height={217} priority />
          <Image className="hero-piece hero-piece-cloud" src="/figma/hero-layer-curves.svg" alt="" width={664} height={491} priority />
          <Image className="hero-piece hero-piece-pointer" src="/figma/hero-layer-curve.svg" alt="" width={248} height={243} priority />
          <Image className="hero-piece hero-piece-window" src="/figma/hero-layer-iheuei.svg" alt="" width={420} height={360} priority />
          <Image className="hero-piece hero-piece-heart" src="/figma/hero-layer-vdbvj.svg" alt="" width={390} height={362} priority />
          <Image className="hero-piece hero-piece-planet" src="/figma/hero-layer-uhbisb.svg" alt="" width={632} height={432} priority />
          <Image className="hero-piece hero-piece-ux" src="/figma/hero-layer-abubage.svg" alt="" width={268} height={123} priority />
          <Image className="hero-piece hero-piece-proto" src="/figma/hero-layer-fihugeuwhgrui.svg" alt="" width={320} height={150} priority />
          <Image className="hero-piece hero-piece-visual" src="/figma/hero-layer-nsvksnkss.svg" alt="" width={320} height={150} priority />
          <Image className="hero-piece hero-piece-star" src="/figma/hero-layer-kdhdvd.svg" alt="" width={220} height={220} priority />
          <Image className="hero-piece hero-piece-scribble" src="/figma/hero-layer-fhhfs.svg" alt="" width={220} height={180} priority />
          <Image className="hero-piece hero-piece-mini" src="/figma/hero-layer-hiauggs.svg" alt="" width={220} height={180} priority />
        </div>

        <div className="hero-scene-core">
          <Image
            className="hero-scene-image"
            src="/figma/hero-girl.svg"
            alt="Ilustracion central de Catherine"
            width={814}
            height={1031}
            priority
          />
        </div>

        <div className="hero-top-copy">
          <h1>
            Hola, soy <span>Cath</span>
          </h1>
          <p>
            Diseño cosas que <strong>funcionan</strong> y se <strong>sienten bien</strong>.
          </p>
        </div>

        <p className="hero-left-note">
          Marcas, productos y
          <br />
          comunicación digital
          <br />
          con intención visual.
        </p>

        <div className="hero-cta-pill">
          <a className="hero-primary-link" href="#proyectos">
            <span>Ver proyectos</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="hero-secondary-link" href="#contacto">
            <span>Conversemos</span>
            <span aria-hidden="true">♡</span>
          </a>
        </div>
      </div>
    </section>
  );
}
