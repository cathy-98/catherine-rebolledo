import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="figma-hero mx-auto">
        <div className="figma-search" aria-hidden="true">
          <Image src="/figma/search-icon.svg" alt="" width={56} height={54} priority />
        </div>

        <div className="figma-hero-copy">
          <h1>
            <span>Catherine</span>
            Rebolledo
          </h1>
          <p className="figma-role">Diseñadora y comunicadora digital</p>
          <p className="figma-tags">
            UX/UI,
            <br />
            contenido web
            <br />y más
          </p>
        </div>

        <Image
          className="figma-character"
          src="/figma/portfolio-character.png"
          alt="Ilustracion de Catherine Rebolledo"
          width={926}
          height={926}
          priority
        />

        <div className="figma-bubble" aria-label="Nota personal">
          <p>
            Menos es <strong>más</strong>...
            <br />
            salvo cuando
            <br />
            hablamos de café
            <br />y buenas ideas.
          </p>
        </div>
        <span className="figma-dot figma-dot-1" aria-hidden="true" />
        <span className="figma-dot figma-dot-2" aria-hidden="true" />
        <span className="figma-dot figma-dot-3" aria-hidden="true" />
      </div>
    </section>
  );
}
