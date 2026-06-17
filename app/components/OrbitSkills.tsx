"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import Image from "next/image";
import { skills } from "@/app/data/skills";
import type { Skill } from "@/app/types";

const skillFolders = [
  {
    id: "ux-studio",
    folderStyle: "blue",
    preview: "docs",
    label: "UX/UI Studio",
    stamp: "UX",
    accent: "#d8c5ff",
    title: "UX/UI Studio",
    description:
      "Para ordenar pantallas, flujos, arquitectura, formularios y sistemas visuales antes de construir.",
    skillIds: ["figma", "prototipado", "arquitectura", "investigacion", "sistemas", "formularios"],
  },
  {
    id: "web-front",
    folderStyle: "purple",
    preview: "docs",
    label: "Web + Front",
    stamp: "</>",
    accent: "#bfe5ff",
    title: "Web y Frontend",
    description:
      "Para diseñar sitios, prototipos publicables y conversar mejor con desarrollo cuando toca llevarlo a código.",
    skillIds: ["web", "frontend", "framer", "nocode"],
  },
  {
    id: "visual-brand",
    folderStyle: "red",
    preview: "photos",
    label: "Visual + Marca",
    stamp: "♡",
    accent: "#f7c8d2",
    title: "Visual, marca y RRSS",
    description:
      "Para dar forma a identidad, piezas digitales, contenido visual y comunicación de marca.",
    skillIds: ["visual", "rrss"],
  },
  {
    id: "lab",
    folderStyle: "blue",
    preview: "docs",
    label: "Lab",
    stamp: "✧",
    accent: "#ffe08a",
    title: "IA y procesos",
    description:
      "Para idear, documentar, ordenar procesos y preparar flujos que después pueden conectarse a automatizaciones.",
    skillIds: ["ia", "automatizacion"],
  },
];

function getUniqueItems(items: Skill[], key: "tools" | "abilities") {
  return Array.from(new Set(items.flatMap((skill) => skill[key])));
}

export function OrbitSkills() {
  const [activeFolderId, setActiveFolderId] = useState(skillFolders[0].id);
  const activeFolder =
    skillFolders.find((folder) => folder.id === activeFolderId) ?? skillFolders[0];

  const activeSkills = useMemo(
    () =>
      activeFolder.skillIds
        .map((id) => skills.find((skill) => skill.id === id))
        .filter((skill): skill is Skill => Boolean(skill)),
    [activeFolder],
  );

  const tools = getUniqueItems(activeSkills, "tools");
  const abilities = getUniqueItems(activeSkills, "abilities");
  const appliedIn = Array.from(new Set(activeSkills.flatMap((skill) => skill.projects)));

  return (
    <section id="habilidades" className="section-wrap skills-folder-section" data-reveal="section">
      <div className="skills-tabs-heading" data-reveal="up">
        <p className="skills-kicker">mi día a día</p>
        <h2 className="skills-heading">Habilidades</h2>
        <p>
          Una colección ordenada por tipo de trabajo. Presiona una carpeta y se despliegan
          las herramientas que uso y dónde suelen aparecer.
        </p>
      </div>

      <div className="skills-folder-gallery">
        <div className="skills-folder-grid" role="tablist" aria-label="Carpetas de habilidades">
          {skillFolders.map((folder) => (
            <button
              key={folder.id}
              id={`skill-folder-tab-${folder.id}`}
              type="button"
              role="tab"
              aria-selected={activeFolder.id === folder.id}
              aria-controls={`skill-folder-panel-${folder.id}`}
              className={`skills-folder-item folder-${folder.folderStyle} ${activeFolder.id === folder.id ? "is-active" : ""}`}
              style={
                {
                  "--folder-accent": folder.accent,
                  "--reveal-delay": `${skillFolders.indexOf(folder) * 90}ms`,
                } as CSSProperties
              }
              data-reveal="card"
              onClick={() => setActiveFolderId(folder.id)}
            >
              <span className="skills-folder-number">
                {String(skillFolders.indexOf(folder) + 1).padStart(2, "0")}
              </span>
              <span className="skills-folder-icon" aria-hidden="true">
                <Image
                  className="skills-folder-back"
                  src="/assets/glassy-folder-back.svg"
                  width={213}
                  height={213}
                  alt=""
                  unoptimized
                />
                <span className={`skills-folder-preview skills-folder-preview-${folder.preview}`}>
                  {folder.preview === "photos" ? (
                    <>
                      <Image
                        className="skills-folder-photo skills-folder-photo-1"
                        src="/assets/folders/photo-stack-1.png"
                        width={736}
                        height={484}
                        alt=""
                      />
                      <Image
                        className="skills-folder-photo skills-folder-photo-2"
                        src="/assets/folders/photo-stack-2.png"
                        width={736}
                        height={414}
                        alt=""
                      />
                      <Image
                        className="skills-folder-photo skills-folder-photo-3"
                        src="/assets/folders/photo-stack-3.png"
                        width={736}
                        height={1104}
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      {[1, 2, 3].map((index) => (
                        <span key={index} className={`skills-folder-doc skills-folder-doc-${index}`}>
                          <i />
                          <Image
                            src={`/assets/folders/doc-signature-${index}.svg`}
                            width={52}
                            height={15}
                            alt=""
                            unoptimized
                          />
                        </span>
                      ))}
                    </>
                  )}
                </span>
                <Image
                  className="skills-folder-front"
                  src="/assets/glassy-folder-front.png"
                  width={212}
                  height={160}
                  alt=""
                />
              </span>
              <strong>{folder.label}</strong>
            </button>
          ))}
        </div>

        <div
          id={`skill-folder-panel-${activeFolder.id}`}
          className="skills-folder-detail"
          role="tabpanel"
          aria-labelledby={`skill-folder-tab-${activeFolder.id}`}
          style={{ "--folder-accent": activeFolder.accent } as CSSProperties}
          data-reveal="sheet"
        >
          <div className="skills-folder-sheet-visual">
            <div className="skills-tool-stamps" aria-label="Herramientas">
              {tools.map((tool) => (
                <span key={tool}>
                  <strong>{tool.slice(0, 2)}</strong>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-folder-sheet-body">
            <div className="skills-folder-copy">
              <p>carpeta abierta</p>
              <h3>{activeFolder.title}</h3>
              <span>{activeFolder.description}</span>
            </div>

            <div className="skills-folder-notes">
              <div>
                <h4>Se usa para</h4>
                <p>{abilities.slice(0, 5).join(" · ")}</p>
              </div>
              <div>
                <h4>Lo muestro en</h4>
                <p>{appliedIn.slice(0, 3).join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
