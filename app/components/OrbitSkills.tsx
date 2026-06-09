"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/app/data/skills";
import type { Skill } from "@/app/types";
import { SkillDetailPanel } from "./SkillDetailPanel";

type Trail = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  key: number;
};

const featuredSkillIds = [
  "figma",
  "prototipado",
  "arquitectura",
  "visual",
  "frontend",
  "framer",
  "ia",
  "investigacion",
  "sistemas",
];

const shortLabels: Record<string, string> = {
  arquitectura: "Arquitectura",
  investigacion: "Investigación",
  sistemas: "Sistemas de diseño",
  visual: "Diseño visual",
};

const orbitSymbols: Record<string, string> = {
  arquitectura: "⌘",
  figma: "✣",
  framer: "✎",
  frontend: "</>",
  ia: "✧",
  investigacion: "⌕",
  prototipado: "▱",
  sistemas: "❖",
  visual: "◉",
};

export function OrbitSkills() {
  const [selected, setSelected] = useState<Skill | null>(null);
  const [trail, setTrail] = useState<Trail | null>(null);
  const [isHoveringOrbit, setIsHoveringOrbit] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastButtonRef = useRef<HTMLButtonElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const trailKeyRef = useRef(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selected) {
        setSelected(null);
        setIsHoveringOrbit(false);
        lastButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const selectSkill = (skill: Skill, button: HTMLButtonElement) => {
    lastButtonRef.current = button;
    setSelected(skill);
    setIsHoveringOrbit(false);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panel = panelRef.current;
    if (!panel || reduceMotion) return;

    const buttonRect = button.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    setTrail({
      startX: buttonRect.left + buttonRect.width / 2,
      startY: buttonRect.top + buttonRect.height / 2,
      endX: panelRect.left + Math.min(panelRect.width * 0.45, 220),
      endY: panelRect.top + 90,
      key: (trailKeyRef.current += 1),
    });
    window.setTimeout(() => setTrail(null), 650);
  };

  const closePanel = () => {
    setSelected(null);
    setIsHoveringOrbit(false);
    lastButtonRef.current?.focus();
  };

  const featuredSkills = featuredSkillIds
    .map((id) => skills.find((skill) => skill.id === id))
    .filter((skill): skill is Skill => Boolean(skill));

  const renderOrbit = () => {
    return featuredSkills.map((skill, index) => {
      const angle = (index / featuredSkills.length) * Math.PI * 2 - Math.PI / 2;
      const x = 50 + Math.cos(angle) * 35;
      const y = 50 + Math.sin(angle) * 40;
      return (
        <button
          key={skill.id}
          type="button"
          className={`orbit-card ${selected?.id === skill.id ? "is-selected" : ""}`}
          style={
            {
              "--accent": skill.accent,
              "--float-delay": `${index * -0.55}s`,
              left: `${x}%`,
              top: `${y}%`,
            } as React.CSSProperties
          }
          onClick={(event) => selectSkill(skill, event.currentTarget)}
          aria-expanded={selected?.id === skill.id}
          aria-controls="skill-detail-panel"
        >
          <span className="orbit-icon">{orbitSymbols[skill.id] ?? skill.icon}</span>
          <span>{shortLabels[skill.id] ?? skill.name}</span>
        </button>
      );
    });
  };

  return (
    <section id="habilidades" className="section-wrap overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <p className="skills-kicker">orbitando en mi día a día</p>
        <h2 className="skills-heading">Skills</h2>
        <p className="mt-4 text-base leading-8 text-[#5e554f]">
          Creo en el diseño como una herramienta para hacer la vida un poco mas clara,
          mas accesible y mas humana. Estas son algunas herramientas y capacidades que orbitan mi trabajo diario.
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div
          ref={orbitRef}
          className={`orbit-stage ${!isHoveringOrbit || selected ? "is-paused" : ""}`}
          onMouseEnter={() => setIsHoveringOrbit(true)}
          onMouseLeave={() => setIsHoveringOrbit(false)}
        >
          <div className="orbit-ring orbit-ring-guide" />
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />
          <svg className="orbit-lines" viewBox="0 0 760 620" aria-hidden="true">
            <ellipse className="orbit-line orbit-line-solid" cx="380" cy="310" rx="305" ry="170" transform="rotate(16 380 310)" />
            <ellipse className="orbit-line" cx="380" cy="310" rx="330" ry="250" transform="rotate(-13 380 310)" />
            <ellipse className="orbit-line" cx="380" cy="310" rx="255" ry="140" transform="rotate(-2 380 310)" />
            <ellipse className="orbit-line" cx="380" cy="310" rx="230" ry="285" transform="rotate(17 380 310)" />
          </svg>
          <div className="orbit-center">
            <small>centro</small>
            <span>Diseño UX/UI</span>
          </div>
          <div className="orbit-layer">{renderOrbit()}</div>
        </div>
        <SkillDetailPanel skill={selected} panelRef={panelRef} onClose={closePanel} />
      </div>
      {trail ? (
        <span
          key={trail.key}
          className="shooting-star"
          style={
            {
              "--sx": `${trail.startX}px`,
              "--sy": `${trail.startY}px`,
              "--tx": `${trail.endX - trail.startX}px`,
              "--ty": `${trail.endY - trail.startY}px`,
            } as React.CSSProperties
          }
        />
      ) : null}
    </section>
  );
}
