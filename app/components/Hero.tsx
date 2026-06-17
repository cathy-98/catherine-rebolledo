"use client";

import Image from "next/image";
import type { CSSProperties, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

const initialHeroMotion = {
  active: 0,
  x: 50,
  y: 50,
  tiltX: 0,
  tiltY: 0,
};

const heroDoodles = [
  { id: "idea", className: "hero-piece-idea", src: "/figma/hero-layer-idea.svg", width: 268, height: 123 },
  { id: "sun", className: "hero-piece-sun", src: "/figma/hero-layer-sol.svg", width: 239, height: 217 },
  { id: "cloud", className: "hero-piece-cloud", src: "/figma/hero-layer-curves.svg", width: 664, height: 491 },
  { id: "pointer", className: "hero-piece-pointer", src: "/figma/hero-layer-curve.svg", width: 248, height: 243 },
  { id: "window", className: "hero-piece-window", src: "/figma/hero-layer-iheuei.svg", width: 420, height: 360 },
  { id: "heart", className: "hero-piece-heart", src: "/figma/hero-layer-vdbvj.svg", width: 390, height: 362 },
  { id: "planet", className: "hero-piece-planet", src: "/figma/hero-layer-uhbisb.svg", width: 632, height: 432 },
  { id: "ux", className: "hero-piece-ux", src: "/figma/hero-layer-abubage.svg", width: 268, height: 123 },
  { id: "proto", className: "hero-piece-proto", src: "/figma/hero-layer-fihugeuwhgrui.svg", width: 320, height: 150 },
  { id: "visual", className: "hero-piece-visual", src: "/figma/hero-layer-nsvksnkss.svg", width: 320, height: 150 },
  { id: "star", className: "hero-piece-star", src: "/figma/hero-layer-kdhdvd.svg", width: 220, height: 220 },
  { id: "scribble", className: "hero-piece-scribble", src: "/figma/hero-layer-fhhfs.svg", width: 220, height: 180 },
  { id: "mini", className: "hero-piece-mini", src: "/figma/hero-layer-hiauggs.svg", width: 220, height: 180 },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ ...initialHeroMotion });
  const currentRef = useRef({ ...initialHeroMotion });
  const [doodleOffsets, setDoodleOffsets] = useState<Record<string, { x: number; y: number }>>({});
  const dragRef = useRef<{
    id: string;
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      const scene = sceneRef.current;

      if (scene) {
        const current = currentRef.current;
        const target = targetRef.current;
        current.active += (target.active - current.active) * 0.12;
        current.x += (target.x - current.x) * 0.12;
        current.y += (target.y - current.y) * 0.12;
        current.tiltX += (target.tiltX - current.tiltX) * 0.1;
        current.tiltY += (target.tiltY - current.tiltY) * 0.1;

        scene.style.setProperty("--hero-tilt-x", `${current.tiltX.toFixed(3)}deg`);
        scene.style.setProperty("--hero-tilt-y", `${current.tiltY.toFixed(3)}deg`);
        scene.style.setProperty("--hero-hover-y", `${(-current.active * 4).toFixed(2)}px`);
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(-1, rect.top / window.innerHeight));
      hero.style.setProperty("--hero-parallax", `${(-progress * 18).toFixed(2)}px`);
      hero.style.setProperty("--hero-doodle-a", `${(-progress * 9).toFixed(2)}px`);
      hero.style.setProperty("--hero-doodle-b", `${(progress * 14).toFixed(2)}px`);
      hero.style.setProperty("--hero-doodle-c", `${(-progress * 20).toFixed(2)}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    targetRef.current = {
      active: 1,
      x,
      y,
      tiltX: (50 - y) * 0.045,
      tiltY: (x - 50) * 0.04,
    };
  };

  const handlePointerLeave = () => {
    targetRef.current = {
      ...targetRef.current,
      active: 0,
      tiltX: 0,
      tiltY: 0,
    };
  };

  const handleDoodlePointerDown = (id: string, event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const origin = doodleOffsets[id] ?? { x: 0, y: 0 };
    dragRef.current = {
      id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: origin.x,
      originY: origin.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDoodlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const nextX = drag.originX + event.clientX - drag.startX;
    const nextY = drag.originY + event.clientY - drag.startY;
    setDoodleOffsets((current) => ({
      ...current,
      [drag.id]: { x: nextX, y: nextY },
    }));
  };

  const handleDoodlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    dragRef.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <section id="inicio" className="hero-section" data-reveal="hero">
      <div ref={heroRef} className="figma-hello-hero mx-auto" data-parallax="0.025">
        <div className="hero-separated-doodles">
          {heroDoodles.map((doodle, index) => {
            const offset = doodleOffsets[doodle.id] ?? { x: 0, y: 0 };

            return (
              <button
                key={doodle.id}
                type="button"
                className={`hero-piece ${doodle.className}`}
                style={
                  {
                    "--drag-x": `${offset.x}px`,
                    "--drag-y": `${offset.y}px`,
                  } as CSSProperties
                }
                aria-label={`Mover doodle ${index + 1}`}
                onPointerDown={(event) => handleDoodlePointerDown(doodle.id, event)}
                onPointerMove={handleDoodlePointerMove}
                onPointerUp={handleDoodlePointerUp}
                onPointerCancel={handleDoodlePointerUp}
              >
                <Image src={doodle.src} alt="" width={doodle.width} height={doodle.height} priority draggable={false} />
              </button>
            );
          })}
        </div>

        <div
          ref={sceneRef}
          className="hero-scene-core"
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
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
          UX/UI, marca,
          <br />
          web y contenido
          <br />
          con criterio visual.
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
