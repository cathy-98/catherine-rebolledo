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

export function OrbitSkills() {
  const [selected, setSelected] = useState<Skill | null>(null);
  const [trail, setTrail] = useState<Trail | null>(null);
  const [paused, setPaused] = useState(true);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastButtonRef = useRef<HTMLButtonElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const trailKeyRef = useRef(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selected) {
        setSelected(null);
        setPaused(true);
        lastButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const selectSkill = (skill: Skill, button: HTMLButtonElement) => {
    lastButtonRef.current = button;
    setSelected(skill);
    setPaused(true);

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
    setPaused(true);
    lastButtonRef.current?.focus();
  };

  const renderOrbit = (orbit: "inner" | "outer") => {
    const items = skills.filter((skill) => skill.orbit === orbit);
    return items.map((skill, index) => {
      const angle = (360 / items.length) * index;
      return (
        <button
          key={skill.id}
          type="button"
          className={`orbit-card orbit-card-${orbit} ${selected?.id === skill.id ? "is-selected" : ""}`}
          style={{ "--angle": `${angle}deg`, "--accent": skill.accent } as React.CSSProperties}
          onClick={(event) => selectSkill(skill, event.currentTarget)}
          aria-expanded={selected?.id === skill.id}
          aria-controls="skill-detail-panel"
        >
          <span className="orbit-icon">{skill.icon}</span>
          <span>{skill.name}</span>
        </button>
      );
    });
  };

  return (
    <section id="habilidades" className="section-wrap overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <p className="handwritten text-3xl text-[#eb5d45]">Skills</p>
        <h2 className="mt-2 text-4xl font-black tracking-normal text-[#2f261f] sm:text-5xl">Habilidades que orbitan</h2>
        <p className="mt-4 text-base leading-8 text-[#5e554f]">
          Estas son algunas de las capacidades, herramientas y áreas que forman parte de mi trabajo diario.
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div
          ref={orbitRef}
          className={`orbit-stage ${paused || selected ? "is-paused" : ""}`}
          onMouseEnter={() => setPaused(false)}
          onMouseLeave={() => !selected && setPaused(true)}
        >
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />
          <div className="orbit-center">
            <span>Diseño UX/UI</span>
            <small>Claridad · Función · Experiencia</small>
          </div>
          <div className="orbit-layer orbit-layer-inner">{renderOrbit("inner")}</div>
          <div className="orbit-layer orbit-layer-outer">{renderOrbit("outer")}</div>
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
