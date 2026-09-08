import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Protocolo", href: "#protocolo" },
  { label: "Corpo Médico", href: "#corpo-medico" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "glass border-b border-teal/10 py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2" aria-label="Clínica Gorini — Início">
          <span className="font-heading text-2xl tracking-tight text-teal">Gorini</span>
          <span className="hidden sm:block w-8 h-px bg-gold" />
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Medicina Estética
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-onyx/70 hover:text-teal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agendar"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-white bg-teal hover:bg-teal-700 px-5 py-3 rounded-full transition-colors"
          >
            Agendar Avaliação
          </a>
        </div>

        <button
          className="md:hidden p-2 text-teal"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-teal/10 mt-3">
          <div className="px-6 py-5 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-onyx/80 hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white bg-teal px-5 py-3 rounded-full"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}