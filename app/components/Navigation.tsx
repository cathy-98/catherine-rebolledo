"use client";

import { useState } from "react";

const navItems = [
  ["Quién soy", "#quien-soy"],
  ["Habilidades", "#habilidades"],
  ["Proyectos", "#proyectos"],
  ["Experiencia", "#experiencia"],
  ["Servicios", "#servicios"],
  ["Lab", "#lab"],
  ["Contacto", "#contacto"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2f261f]/10 bg-[#f8f3ea]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8" aria-label="Navegacion principal">
        <a href="#inicio" className="handwritten text-2xl font-semibold text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]">
          Cath.
        </a>
        <button
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2f261f]/20 bg-white px-4 text-sm font-semibold text-[#2f261f] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45] lg:hidden"
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
            <a key={href} href={href} className="text-sm font-medium text-[#5e554f] transition hover:text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]">
              {label}
            </a>
          ))}
          <a href="#contacto" className="rounded-full bg-[#d9c2ff] px-5 py-2.5 text-sm font-bold text-[#2f261f] shadow-[0_8px_20px_rgba(68,44,99,0.16)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb5d45]">
            Conversemos
          </a>
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-[#2f261f]/10 bg-[#f8f3ea] px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="min-h-11 rounded-full px-4 py-3 text-sm font-semibold text-[#2f261f] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb5d45]">
                {label}
              </a>
            ))}
            <a href="#contacto" onClick={closeMenu} className="mt-2 min-h-11 rounded-full bg-[#d9c2ff] px-4 py-3 text-center text-sm font-bold text-[#2f261f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb5d45]">
              Conversemos
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
