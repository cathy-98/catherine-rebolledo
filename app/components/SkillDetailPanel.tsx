"use client";

import type { Skill } from "@/app/types";

type SkillDetailPanelProps = {
  skill: Skill | null;
  panelRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
};

export function SkillDetailPanel({ skill, panelRef, onClose }: SkillDetailPanelProps) {
  return (
    <aside
      id="skill-detail-panel"
      ref={panelRef}
      className={`skill-panel ${skill ? "skill-panel-open" : ""}`}
      aria-live="polite"
      aria-hidden={!skill}
    >
      {skill ? (
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b7b72]">Habilidad seleccionada</p>
              <h3 className="mt-2 text-3xl font-black text-[#2f261f]">{skill.name}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2f261f]/15 bg-white text-xl font-bold text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]"
              aria-label="Cerrar detalle de habilidad"
            >
              ×
            </button>
          </div>
          <p className="mt-5 text-base leading-7 text-[#5e554f]">{skill.description}</p>
          <div className="mt-6 grid gap-5">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.14em] text-[#7650a5]">Qué sé hacer</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {skill.abilities.map((item) => (
                  <span key={item} className="rounded-full bg-[#f8f3ea] px-3 py-1.5 text-sm font-semibold text-[#5e554f]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.14em] text-[#7650a5]">Herramientas relacionadas</h4>
              <p className="mt-2 text-sm leading-7 text-[#5e554f]">{skill.tools.join(" · ")}</p>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.14em] text-[#7650a5]">Aplicado en</h4>
              <p className="mt-2 text-sm leading-7 text-[#5e554f]">{skill.projects.join(" · ")}</p>
            </div>
          </div>
          <a
            href={`#${skill.relatedProjectId}`}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2f261f] px-5 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]"
          >
            Ver proyecto relacionado
          </a>
        </div>
      ) : null}
    </aside>
  );
}
