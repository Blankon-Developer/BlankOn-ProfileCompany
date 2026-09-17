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

  type MenuItem = {
    label: string;
    href?: string;
    eyebrow?: string;
    items?: {
      name: string;
      description: string;
      href: string;
    }[];
  };

  const menuItems: MenuItem[] = [
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
      eyebrow: "PORTFOLIO",
      items: [
        {
          name: "API Management & System Integration",
          description: "Solusi API management dan system integration yang dirancang untuk kebutuhan bisnis Anda.",
          href: "/portofolio/api-management-system-integration",
        },
        {
          name: "Blockchain",
          description: "Solusi blockchain untuk kebutuhan yang membutuhkannya.",
          href: "/portofolio/blockchain",
        },
        {
          name: "Cloud Computing",
          description: "Infrastruktur digital yang siap mendukung kebutuhan produk.",
          href: "/portofolio/cloud-computing",
        },
        {
          name: "Creative Content & Digital Media",
          description: "Konten kreatif dan media digital untuk kebutuhan bisnis Anda.",
          href: "/portofolio/creative-content-digital-media",
        },
        {
          name: "Data Science",
          description: "Mengubah data menjadi informasi yang dapat digunakan.",
          href: "/portofolio/data-science",
        },
        {
          name: "Game Development",
          description: "Pengalaman interaktif yang menggabungkan hiburan dan teknologi.",
          href: "/portofolio/game-development",
        },
        {
          name: "Internet of Things",
          description: "Menghubungkan perangkat, data, dan sistem.",
          href: "/portofolio/internet-of-things",
        },
        {
          name: "Machine Learning / Artificial Intelligence",
          description: "Machine Learning / Artificial Intelligence yang diterapkan pada kebutuhan bisnis yang jelas.",
          href: "/portofolio/machine-learning-ai",
        },
        {
          name: "Mobile Development",
          description: "Aplikasi mobile yang dirancang mengikuti kebutuhan.",
          href: "/portofolio/mobile-development",
        },
        {
          name: "Quality Assurance (QA) / Testing",
          description: "Quality Assurance (QA) / Testing yang dirancang mengikuti kebutuhan.",
          href: "/portofolio/quality-assurance-qa-testing",
        },
        {
          name: "Web Development",
          description: "Website dan aplikasi web untuk kebutuhan bisnis nyata.",
          href: "/portofolio/web-development",
        },
      ],
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? ["bg-white/50 dark:bg-black/50 backdrop-blur-2xl", "border-b border-foreground/[0.06]"]
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-8xl items-center justify-between px-6 lg:px-28">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <div className="relative flex h-8 w-8 items-center justify-center">
            <Image
              src="/BlankOn Logo.svg"
              alt="BlankOn"
              width={30}
              height={30}
              className="block object-contain dark:hidden"
            />
            <Image
              src="/BlankOn Logo Dark-Mode.svg"
              alt="BlankOn"
              width={30}
              height={30}
              className="hidden object-contain dark:block"
            />
          </div>

          <span
            className="text-[13px] font-black tracking-[-0.02em] text-foreground"
            style={MONO}
          >
            BlankOn Digital Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {menuItems.map((menu) => (
            <li
              key={menu.label}
              className={menu.items ? "group relative" : ""}
            >
              {menu.href ? (
                <Link
                  href={menu.href}
                  className=" relative inline-flex items-center px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  style={MONO}
                >
                  {menu.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    style={MONO}
                  >
                    {menu.label}

                    <span
                      className="h-[3px] w-[3px] rounded-full bg-[var(--accent-color)] transition-transform duration-200 group-hover:scale-[1.8]"
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-50 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <div
                      className="relative w-[350px] overflow-hidden border border-foreground/[0.08] bg-white dark:bg-black backdrop-blur-2xl shadow-[0_24px_80px_-32px_rgba(0,0,0,0.35)] dark:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]"
                    >
                      {/* Top accent */}
                      <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent-color)]" />

                      {/* Header */}
                      <div className="flex items-center justify-between px-5 pb-4 pt-5">
                        <span
                          className="text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground"
                          style={MONO}
                        >
                          {menu.eyebrow ?? "NAVIGATION"}
                        </span>

                        <span
                          className="text-[10px] tabular-nums text-muted-foreground"
                          style={MONO}
                        >
                          {String(menu.items?.length ?? 0).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="px-2 pb-2">
                        {menu.items?.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group/item relative flex items-center gap-4 px-3 py-3.5 transition-colors duration-200 hover:bg-foreground/[0.035] dark:hover:bg-foreground/[0.045]"
                          >
                            {/* Number */}
                            <span
                              className="w-5 shrink-0 text-[9px] tabular-nums text-muted-foreground/30 transition-colors group-hover/item:text-[var(--accent-color)]"
                              style={MONO}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Content */}
                            <span className="min-w-0 flex-1">
                              <span
                                className="block text-[13px] font-medium tracking-[-0.01em] text-foreground"
                              >
                                {item.name}
                              </span>

                              <span className="mt-1 block text-[10px] leading-[1.5] text-muted-foreground/70">
                                {item.description}
                              </span>
                            </span>

                            <ArrowRight
                              size={13}
                              strokeWidth={1.5}
                              className="shrink-0 text-muted-foreground/30 opacity-0 translate-x-2 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:text-foreground group-hover/item:opacity-100"
                            />
                          </Link>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="border-t border-foreground/[0.06]">
                        <div className="flex items-center justify-between px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/BlankOn Logo.svg"
                              alt="BlankOn"
                              width={16}
                              height={16}
                              className="block object-contain dark:hidden"
                            />

                            <Image
                              src="/BlankOn Logo Dark-Mode.svg"
                              alt="BlankOn"
                              width={16}
                              height={16}
                              className="hidden object-contain dark:block"
                            />

                            <span
                              className="text-[10px] font-semibold tracking-[0.14em] text-[var(--accent-color)] uppercase"
                              style={DISPLAY}
                            >
                              BlankOn Digital Tech
                            </span>
                          </div>

                          <span
                            className="text-[8px] uppercase tracking-[0.14em] text-muted-foreground"
                            style={MONO}
                          >
                            All rights reserved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="/mulai"
            className="group inline-flex items-center gap-2 border border-foreground px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
            style={MONO}
          >
            Mulai
            <ArrowRight
              size={12}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center text-foreground lg:hidden"
        >
          {open ? (
            <X size={19} strokeWidth={1.5} />
          ) : (
            <Menu size={19} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute inset-x-0 top-[72px] z-50 lg:hidden border-b border-foreground/[0.08] bg-background/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        <div className="flex max-h-[calc(100dvh-72px)] flex-col overflow-y-auto">
          <nav className="px-6 pb-8 pt-3">
            {menuItems.map((menu, index) => (
              <div
                key={menu.label}
                className={cn(
                  "group py-5",
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0",
                  "transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                )}
                style={{
                  transitionDelay: open ? `${index * 45 + 80}ms` : "0ms",
                }}
              >
                {menu.href ? (
                  <Link
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4"
                  >
                    <span
                      className="w-5 shrink-0 text-[9px] font-medium text-muted-foreground/50"
                      style={MONO}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[clamp(1.45rem,7vw,2rem)] font-medium leading-none tracking-[-0.045em] text-foreground transition-opacity duration-200 group-hover:opacity-60">
                      {menu.label}
                    </span>
                  </Link>
                ) : (
                  <>
                    <div className="flex items-baseline gap-4">
                      <span
                        className="w-5 shrink-0 text-[9px] font-medium text-muted-foreground/50"
                        style={MONO}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                        style={MONO}
                      >
                        {menu.label}
                      </span>
                    </div>

                    <div className="ml-9 mt-4 flex flex-col">
                      {menu.items?.map((item, itemIndex) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "relative py-2.5",
                            "text-[15px] font-medium",
                            "tracking-[-0.015em]",
                            "text-foreground/65",
                            "transition-all duration-200",
                            "hover:pl-1 hover:text-foreground",
                          )}
                        >
                          <span>{item.name}</span>

                          <span
                            className={cn(
                              "ml-2 inline-block",
                              "text-[9px] align-top",
                              "text-muted-foreground/40",
                            )}
                            style={MONO}
                          >
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom control */}
          <div className="sticky bottom-0 mt-auto border-t border-foreground/[0.08] bg-background/95 px-6 py-4 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <ThemeToggle />

              <Link
                href="/mulai"
                onClick={() => setOpen(false)}
                className={cn("group inline-flex items-center gap-3 bg-foreground px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-background transition-transform duration-200 active:scale-[0.98]",)}
                style={MONO}
              >
                <span>Mulai</span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
