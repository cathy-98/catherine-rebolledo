import Image from "next/image";
import { CharacterInteraction } from "./CharacterInteraction";

export function About() {
  return (
    <section id="quien-soy" className="about-figma-section" data-reveal="section">
      <Image className="about-doodle about-doodle-sun" src="/figma/hero-sun.svg" alt="" width={81} height={87} data-parallax="0.045" />
      <Image className="about-doodle about-doodle-heart" src="/figma/hero-heart.svg" alt="" width={63} height={52} data-parallax="-0.035" />
      <Image className="about-doodle about-doodle-flower" src="/figma/hero-flower.svg" alt="" width={52} height={44} data-parallax="0.05" />
      <div className="about-arrows" aria-hidden="true">
        <Image src="/figma/about-arrow-left.svg" alt="" width={728} height={51} />
        <Image src="/figma/about-arrow-right.svg" alt="" width={728} height={51} />
      </div>

      <div className="about-figma-grid">
        <div className="about-illustration" data-reveal="left">
          <Image className="about-hello" src="/figma/about-hello.svg" alt="" width={145} height={124} />
          <CharacterInteraction className="about-character-interaction" />
        </div>

        <div className="about-copy" data-reveal="right">
          <div className="about-title-row">
            <Image className="about-question about-question-left" src="/figma/about-question-left.svg" alt="" width={46} height={89} />
            <h2>Quién soy</h2>
            <Image className="about-question about-question-right" src="/figma/about-question-right.svg" alt="" width={52} height={99} />
          </div>
          <div className="about-text">
            <p>
              Hola, soy <strong>Catherine Rebolledo</strong>, Soy bastante observadora, detallista y de las que necesita entender bien algo antes de empezar a mover cosas. Me gusta ordenar, probar y ajustar hasta que todo se sienta claro y coherente.
Fuera del computador, paso mucho tiempo con mi gata, corro de vez en cuando y una visita a algún cerro siempre ayuda a despejar la cabeza. 
            </p>
            <p>
             <strong>  Menos es más... </strong> excepto cuando hablamos de café y buenas ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
