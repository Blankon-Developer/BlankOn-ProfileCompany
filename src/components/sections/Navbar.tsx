"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn, DISPLAY, MONO, BODY } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const menuItems = [
    {
      label: "Layanan & Solusi",
      eyebrow: "EXPLORE",
      items: [
        {
          name: "Layanan Kami",
          description: "Solusi digital untuk kebutuhan bisnis.",
          href: "/layanan",
        },
        {
          name: "Solusi Dari Kami",
          description: "Teknologi yang disesuaikan dengan industri.",
          href: "/solusi",
        },
        {
          name: "Proses Kerja Kami",
          description: "Bagaimana kami mengubah ide menjadi produk.",
          href: "/proses",
        },
        {
          name: "Harga yang ditawarkan",
          description: "Paket dan investasi untuk proyek Anda.",
          href: "/harga",
        },
      ],
    },
    {
      label: "Karya",
      href: "/portofolio",
    },
    {
      label: "Perusahaan",
      eyebrow: "COMPANY",
      items: [
        {
          name: "Tentang Kami",
          description: "Kenali tim dan cara kami bekerja.",
          href: "/tentang",
        },
        {
          name: "Investasi",
          description: "Peluang berinvestasi & bermitra strategis.",
          href: "/investasi",
        },
        {
          name: "Karier",
          description: "Bergabung dan tumbuh bersama kami.",
          href: "/karier",
        },
        {
          name: "Blog",
          description: "Insight seputar teknologi dan bisnis.",
          href: "/blog",
        },
      ],
    },
    {
      label: "Bantuan",
      eyebrow: "SUPPORT",
      items: [
        {
          name: "FAQ",
          description: "Jawaban untuk pertanyaan yang sering muncul.",
          href: "/faq",
        },
        {
          name: "Kontak",
          description: "Mari bicarakan kebutuhan digital Anda.",
          href: "/kontak",
        },
      ],
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/50 dark:bg-black/50 backdrop-blur-xl border-b border-white/75 dark:border-black/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/BlankOn Logo.svg"
            alt="BlankOn Logo"
            width={32}
            height={32}
            className="object-contain block dark:hidden"
          />
          <Image
            src="/BlankOn Logo Dark-Mode.svg"
            alt="BlankOn Logo"
            width={32}
            height={32}
            className="object-contain hidden dark:block"
          />
          <span
            className="text-md font-700 tracking-tight text-foreground"
            style={{ ...MONO, fontWeight: 900 }}
          >
            BlankOn Tech
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-9">
          {menuItems.map((menu) => (
            <li key={menu.label} className={menu.items ? "group relative" : ""}>
              {menu.href ? (
                <Link
                  href={menu.href}
                  className="text-[11px] text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors py-4 inline-block"
                  style={MONO}
                >
                  {menu.label}
                </Link>
              ) : (
                <>
                  <span
                    className="inline-flex items-center gap-1.5 py-4 text-[11px] uppercase tracking-widest text-muted-foreground transition-colors duration-200 group-hover:text-foreground cursor-pointer"
                    style={MONO}
                  >
                    {menu.label}

                    <span
                      className="h-3 w-0.5 rounded-full bg-muted-foreground/30 transition-all duration-200 group-hover:scale-125"
                      style={{ backgroundColor: "var(--accent-color)" }}
                    />
                  </span>

                  {/* Dropdown */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 invisible translate-y-[-6px] scale-[0.98] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out">
                    <div className="relative w-[320px] overflow-hidden rounded-xl border border-black/[0.07] dark:border-white/[0.09] bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">

                      {/* Header */}
                      <div className="px-5 pt-5 pb-3">
                        <span
                          className="text-[10px] tracking-[0.22em] font-semibold text-muted-foreground/80"
                          style={MONO}
                        >
                          {menu.eyebrow ?? "NAVIGATION"}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="px-2 pb-2">
                        {menu.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group/item relative flex items-start gap-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-black/[0.035] dark:hover:bg-white/[0.045]"
                          >
                            {/* indicator */}
                            <span
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-border transition-all duration-200 group-hover/item:bg-[var(--accent-color)] group-hover/item:scale-125"
                            />
                            <span className="flex min-w-0 flex-col">
                              <span
                                className="text-[13px] font-medium tracking-[-0.01em] text-foreground"
                              >
                                {item.name}
                              </span>
                              <span className="mt-1 text-[11px] leading-[1.5] text-muted-foreground transition-colors group-hover/item:text-muted-foreground/80">
                                {item.description}
                              </span>
                            </span>
                            {/* arrow */}
                            <ArrowRight
                              size={13}
                              strokeWidth={1.5}
                              className="ml-auto mt-1 shrink-0 text-muted-foreground/30 opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-foreground"
                            />
                          </Link>
                        ))}
                      </div>
                      {/* Bottom line */}
                      <div className="h-px bg-black/[0.05] dark:bg-white/[0.06]" />
                      <div className="px-5 py-3">
                        <span className="text-[10px] tracking-[0.16em] font-bold text-muted-foreground" style={BODY}>
                          <span style={{ color: "var(--accent-color)" }}>BlankOn Tech</span> | All rights reserved
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* CTA & Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="/mulai"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 transition-opacity hover:opacity-85 bg-foreground text-background"
            style={DISPLAY}
          >
            Mulai Gratis <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-1"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
          {menuItems.map((menu) => (
            <div key={menu.label} className="flex flex-col gap-3">
              {menu.href ? (
                <Link
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className="text-[11px] text-foreground uppercase tracking-widest font-semibold"
                  style={MONO}
                >
                  {menu.label}
                </Link>
              ) : (
                <>
                  <span
                    className="text-[11px] text-foreground uppercase tracking-widest font-semibold"
                    style={MONO}
                  >
                    {menu.label}
                  </span>
                  <div className="flex flex-col gap-3 pl-4 border-l border-border/50">
                    {menu.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-muted-foreground"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <ThemeToggle />
            <a
              href="/mulai"
              onClick={() => setOpen(false)}
              className="w-fit inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold bg-foreground text-background"
              style={DISPLAY}
            >
              Mulai Gratis <ArrowRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
