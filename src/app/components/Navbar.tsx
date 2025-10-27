"use client";
import Link from "next/link";
import { useState } from "react";
import IconMenu from "./IconMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/niveles", label: "Oferta Educativa" },
    { href: "/faqs", label: "Faqs" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/vidaestudiantil", label: "Comunidad Mapi 🦝" },
    { href: "/contacto", label: "Contacto" }
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/"
             className="flex items-center gap-3">
              <img src="../logo/logo-celc.png" alt="CELC" className="h-10 w-auto" />
              <span className="text-lg font-bold text-primary">Centro de Estudios Lerdo Contemporáneo</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium hover:text-primaryLight transition">{l.label}
            </Link>
          ))}
          <Link href="/contacto"
            className="ml-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primaryLight transition">
              Inscríbete
            
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md border border-gray-200"
          >
            <IconMenu open={open} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-lightGray">{l.label}
              </Link>
            ))}
            <Link href="/contacto"
               onClick={() => setOpen(false)} className="mt-2 bg-primary text-white px-4 py-2 rounded-md text-center">Inscríbete
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
