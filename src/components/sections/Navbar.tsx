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
    "fixed inset-x-0 top-0 z-50 transition-all duration-500",
    scrolled
      ? [
          "bg-white/50 dark:bg-black/50 backdrop-blur-2xl",
          "border-b border-foreground/[0.06]",
        ]
      : "bg-transparent"
  )}
>
  <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
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
        BlankOn Tech
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
              className="
                relative inline-flex items-center
                px-4 py-2.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-muted-foreground
                transition-colors
                duration-200
                hover:text-foreground
              "
              style={MONO}
            >
              {menu.label}
            </Link>
          ) : (
            <>
              <button
                type="button"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-muted-foreground
                  transition-colors
                  duration-200
                  hover:text-foreground
                "
                style={MONO}
              >
                {menu.label}

                <span
                  className="
                    h-[3px] w-[3px]
                    rounded-full
                    bg-[var(--accent-color)]
                    transition-transform
                    duration-200
                    group-hover:scale-[1.8]
                  "
                />
              </button>

              {/* Dropdown */}
              <div
                className="
                  invisible absolute left-1/2 top-full
                  -translate-x-1/2 translate-y-2
                  pt-3 opacity-0
                  transition-all duration-50
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    relative w-[350px]
                    overflow-hidden
                    border
                    border-foreground/[0.08]
                    bg-white dark:bg-black
                    backdrop-blur-2xl
                    shadow-[0_24px_80px_-32px_rgba(0,0,0,0.35)]
                    dark:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]
                  "
                >
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent-color)]" />

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 pb-4 pt-5">
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.24em]
                        text-muted-foreground
                      "
                      style={MONO}
                    >
                      {menu.eyebrow ?? "NAVIGATION"}
                    </span>

                    <span
                      className="
                        text-[10px]
                        tabular-nums 
                        text-muted-foreground
                      "
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
                        className="
                          group/item
                          relative
                          flex
                          items-center
                          gap-4
                          px-3
                          py-3.5
                          transition-colors
                          duration-200
                          hover:bg-foreground/[0.035]
                          dark:hover:bg-foreground/[0.045]
                        "
                      >
                        {/* Number */}
                        <span
                          className="
                            w-5
                            shrink-0
                            text-[9px]
                            tabular-nums
                            text-muted-foreground/30
                            transition-colors
                            group-hover/item:text-[var(--accent-color)]
                          "
                          style={MONO}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Content */}
                        <span className="min-w-0 flex-1">
                          <span
                            className="
                              block
                              text-[13px]
                              font-medium
                              tracking-[-0.01em]
                              text-foreground
                            "
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
                          className="
                            shrink-0
                            text-muted-foreground/30
                            opacity-0
                            translate-x-2
                            transition-all
                            duration-200
                            group-hover/item:translate-x-0
                            group-hover/item:text-foreground
                            group-hover/item:opacity-100
                          "
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
                          className="
                            text-[10px]
                            font-semibold
                            tracking-[0.14em]
                            text-[var(--accent-color)]
                          "
                          style={DISPLAY}
                        >
                          BlankOn Tech
                        </span>
                      </div>

                      <span
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.14em]
                          text-muted-foreground/40
                        "
                        style={MONO}
                      >
                        2026 © All rights reserved
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
        className="
          group
          inline-flex
          items-center
          gap-2
          border
          border-foreground
          px-4
          py-2.5
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.12em]
          text-foreground
          transition-all
          duration-200
          hover:bg-foreground
          hover:text-background
        "
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
      className="
        flex h-9 w-9
        items-center justify-center
        text-foreground
        lg:hidden
      "
    >
      {open ? (
        <X size={19} strokeWidth={1.5} />
      ) : (
        <Menu size={19} strokeWidth={1.5} />
      )}
    </button>
  </nav>
</header>
  );
}
