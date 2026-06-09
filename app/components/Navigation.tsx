"use client";

import { useState } from "react";

const cvPath = "/cv/cv_crp_2026.pdf";

const navItems = [
  ["Quién soy", "#quien-soy"],
  ["Habilidades", "#habilidades"],
  ["Proyectos", "#proyectos"],
  ["Servicios", "#servicios"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-5 z-50 px-4">
      <nav className="floating-nav pointer-events-auto mx-auto flex items-center justify-between" aria-label="Navegacion principal">
        <a href="#inicio" className="floating-brand handwritten focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d35db]">
          Cath
        </a>
        <button
          className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-[#7640b8]/25 bg-white/65 px-4 text-sm font-semibold text-[#2f261f] shadow-sm backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d35db] lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Cerrar" : "Menu"}
        </button>
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 whitespace-nowrap text-base font-medium text-[#2f261f]/80 transition hover:text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d35db]">
              {label}
            </a>
          ))}
          <a href={cvPath} download className="nav-cv-link shrink-0 whitespace-nowrap text-base font-semibold text-[#724899] transition hover:text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d35db]">
            CV
          </a>
          <a href="#contacto" className="shrink-0 whitespace-nowrap rounded-lg bg-[#8d35db] px-4 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(103,51,166,0.22)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d35db]">
            Contacto
          </a>
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="pointer-events-auto mx-auto mt-3 max-w-sm rounded-[22px] border border-[#7640b8]/25 bg-white/80 p-3 shadow-[0_18px_60px_rgba(65,38,94,0.15)] backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="min-h-11 rounded-2xl px-4 py-3 text-sm font-semibold text-[#2f261f] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d35db]">
                {label}
              </a>
            ))}
            <a href={cvPath} download onClick={closeMenu} className="mt-2 min-h-11 rounded-2xl border border-[#7640b8]/35 px-4 py-3 text-center text-sm font-bold text-[#724899] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d35db]">
              Descargar CV
            </a>
            <a href="#contacto" onClick={closeMenu} className="min-h-11 rounded-2xl bg-[#8d35db] px-4 py-3 text-center text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d35db]">
              Contacto
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
