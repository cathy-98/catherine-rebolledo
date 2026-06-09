"use client";

import { useRef, useState } from "react";
import type { DragEvent } from "react";

const projectTypes = [
  "UX/UI",
  "Diseño web",
  "Producto digital",
  "Automatización / Lab",
  "Aún no lo sé",
];

export function Contact() {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const updateFileName = (files: FileList | null) => {
    setFileName(files?.[0]?.name ?? "");
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (fileInputRef.current && event.dataTransfer.files.length > 0) {
      fileInputRef.current.files = event.dataTransfer.files;
      updateFileName(event.dataTransfer.files);
    }
  };

  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <form
        className="contact-card"
        action="mailto:Cathyrbopas@gmail.com"
        method="post"
        encType="text/plain"
        data-automation-ready="true"
        data-lab-flow="brief-intake"
      >
        <input type="hidden" name="origen" value="portfolio-contact" />

        <div className="contact-intro">
          <span className="contact-spark" aria-hidden="true">✦</span>
          <p className="section-kicker">conversemos</p>
          <h2 id="contact-title">
            ¿Tienes una <span>idea</span> y no sabes cómo ordenarla?
          </h2>
          <p>
            Cuéntame qué quieres diseñar, ordenar o automatizar. Yo te ayudo a
            bajarlo a una experiencia clara, visual y funcional.
          </p>
          <div className="contact-cta-actions" aria-label="Acciones de contacto">
            <a className="contact-pill contact-pill-primary" href="mailto:Cathyrbopas@gmail.com">
              Hablemos <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-pill contact-pill-secondary"
              href="https://www.linkedin.com/in/catherine-rebolledo-pastene/"
              target="_blank"
              rel="noreferrer"
            >
              Ver LinkedIn <span aria-hidden="true">in</span>
            </a>
          </div>
          <span className="contact-chat-doodle" aria-hidden="true">
            <span>···</span>
          </span>
        </div>

        <div className="contact-fields">
          <label>
            Nombre
            <input name="nombre" type="text" placeholder="Tu nombre" autoComplete="name" />
          </label>
          <label>
            Correo
            <input
              name="correo"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
            />
          </label>
          <label>
            Tipo de proyecto
            <select name="tipo_de_proyecto" defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="contact-message-field">
            Mensaje
            <textarea
              name="mensaje"
              rows={5}
              placeholder="¿Qué quieres ordenar, diseñar o automatizar?"
            />
          </label>
          <label
            className="contact-file-drop"
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              name="archivo_referencia"
              type="file"
              onChange={(event) => updateFileName(event.currentTarget.files)}
            />
            <span aria-hidden="true">↥</span>
            <strong>Adjuntar archivo o referencia</strong>
            <small>
              {fileName || "PDF, imagen, brief o captura. También puedes arrastrarlo aquí."}
            </small>
          </label>
        </div>

        <button type="submit" className="contact-submit">
          Enviar idea <span aria-hidden="true">♡</span>
        </button>
      </form>
    </section>
  );
}
