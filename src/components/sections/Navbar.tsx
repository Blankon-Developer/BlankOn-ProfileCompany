"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, Menu } from "lucide-react";
import { cn, DISPLAY, MONO, LIME, DARK } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Layanan", "Penawaran", "Proses", "Tentang"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-black/8"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-[60px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="text-[11px] font-bold px-2 py-1 tracking-wider"
            style={{ ...MONO, backgroundColor: LIME, color: DARK }}
          >
            BLK
          </span>
          <span
            className="text-sm font-700 tracking-tight text-foreground"
            style={{ ...DISPLAY, fontWeight: 700 }}
          >
            BLANKON
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-[11px] text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
                style={MONO}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#penawaran"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 transition-opacity hover:opacity-85"
            style={{ ...DISPLAY, backgroundColor: DARK, color: "#fff" }}
          >
            Mulai Gratis <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-black/8 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[11px] text-muted-foreground uppercase tracking-widest"
              style={MONO}
            >
              {l}
            </a>
          ))}
          <a
            href="#penawaran"
            onClick={() => setOpen(false)}
            className="w-fit inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold"
            style={{ ...DISPLAY, backgroundColor: DARK, color: "#fff" }}
          >
            Mulai Gratis <ArrowRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}
