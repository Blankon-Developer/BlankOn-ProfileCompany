"use client";

import { useState } from "react";
import { LuBotMessageSquare } from "react-icons/lu";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { PiGearSix } from "react-icons/pi";
import {
  ArrowUpRight,
} from "lucide-react";
import { cn, DISPLAY, BODY, MONO } from "@/lib/utils";

const offers = [
  {
    num: "01",
    icon: LuBotMessageSquare,
    title: "Konsultasi Bebas Bersyarat",
    tag: "100% Gratis",
    body: "Ceritakan kebutuhan digital Anda terutama mengenai website, aplikasi, atau sistem enterprise. Tim kami siap mendengar dan memberikan solusi tanpa biaya apapun, tanpa kewajiban lanjut.",
  },
  {
    num: "02",
    icon: TbCurrencyDollarOff,
    title: "Tanpa Biaya Awal",
    tag: "0% Upfront",
    body: "Tidak ada uang yang perlu keluar sebelum project selesai. Kami percaya pada kualitas pekerjaan kami, Anda membayar hanya setelah produk diterima dan disetujui.",
  },
  {
    num: "03",
    icon: GiCheckedShield,
    title: "Garansi Penuh",
    tag: "Bug? Kami Tangani",
    body: "Setiap produk dilindungi garansi perbaikan total. Jika ada masalah setelah delivery, kami tangani sepenuhnya, tanpa biaya tambahan, tanpa negosiasi.",
  },
  {
    num: "04",
    icon: PiGearSix,
    title: "Free Maintenance",
    tag: "Periode Tertentu",
    body: "Setiap project dilengkapi layanan maintenance gratis untuk periode awal. Kami pastikan produk Anda berjalan optimal dan mendapat pembaruan yang diperlukan.",
  },
];

export default function Offers() {
  // Card pertama aktif secara default
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      id="penawaran"
      className="bg-white py-12 dark:bg-black md:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-0">
        {/* Header */}
        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div>
            <p
              className="mb-4 text-[10px] uppercase tracking-widest"
              style={{
                ...MONO,
                color: "var(--accent-color)",
              }}
            >
              — Penawaran Spesial
            </p>

            <h2
              className="text-4xl font-900 leading-[1.05] tracking-tight text-[#0F0F0D] dark:text-white md:text-5xl"
              style={{
                ...DISPLAY,
                fontWeight: 900,
              }}
            >
              Kolaborasi
              <br />
              tanpa risiko.
            </h2>
          </div>

          <div className="flex items-end">
            <p
              className="text-justify text-base leading-relaxed text-[#5a5a58] dark:text-white/50"
              style={BODY}
            >
              Kami sedang berkembang dan ingin membuktikan kualitas kami.
              Semua penawaran ini dirancang agar Anda bisa memulai tanpa
              hambatan apapun.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-px bg-black/10 dark:bg-white/10 md:grid-cols-2">
          {offers.map((o, i) => {
            const Icon = o.icon;
            const isActive = activeCard === i;

            return (
              <article
                key={o.num}
                onMouseEnter={() => setActiveCard(i)}
                className={cn(
                  "group relative min-h-[375px] overflow-hidden",
                  "px-7 py-7 md:px-5 md:py-5",
                  "transition-colors duration-500 ease-out",

                  isActive
                    ? "bg-white dark:bg-black"
                    : "bg-[#FDFDFC] dark:bg-[#111110]"
                )}
              >
                {/* Accent line */}
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-[3px]",
                    "origin-left",
                    "transition-transform duration-500 ease-out",
                    isActive ? "scale-x-100" : "scale-x-0"
                  )}
                  style={{
                    backgroundColor: "var(--accent-color)",
                  }}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  {/* Number */}
                  <span
                    className={cn(
                      "inline-flex h-6 min-w-[42px] items-center justify-center px-2",
                      "border text-[9px] tracking-[0.18em]",
                      "transition-colors duration-300",
                      isActive
                        ? "border-black/40 dark:border-white/40"
                        : "border-black/10 dark:border-white/20",
                      "text-[#0F0F0D] dark:text-white/80"
                    )}
                    style={{
                      ...MONO,
                      fontWeight: 700,
                    }}
                  >
                    {o.num}
                  </span>

                  {/* Icon */}
                  <div
                    className={cn(
                      "relative flex h-10 w-10 items-center justify-center",
                      "border",
                      "transition-all duration-300",
                      isActive
                        ? "border-[var(--accent-color)] text-[var(--accent-color)] rotate-[-4deg]"
                        : "border-black/10 text-[#0F0F0D]/60 dark:border-white/10 dark:text-white/50"
                    )}
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-16 max-w-xl md:mt-10">
                  {/* Tag */}
                  <p
                    className="mb-3 text-[9px] uppercase tracking-[0.22em]"
                    style={{
                      ...MONO,
                      color: "var(--accent-color)",
                    }}
                  >
                    {o.tag}
                  </p>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-[27px] leading-[1.05] tracking-[-0.025em] md:text-[30px]",
                      "text-[#0F0F0D] dark:text-white",
                      "transition-transform duration-500",
                      isActive && "translate-x-1"
                    )}
                    style={{
                      ...DISPLAY,
                      fontWeight: 800,
                    }}
                  >
                    {o.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={cn(
                      "mt-5 max-w-[46ch]",
                      "text-[13px] leading-[1.75] md:text-sm",
                      "transition-colors duration-300",
                      isActive
                        ? "text-[#666662] dark:text-white/50"
                        : "text-[#777773] dark:text-white/40"
                    )}
                    style={BODY}
                  >
                    {o.body}
                  </p>
                </div>

                {/* Footer / CTA */}
                <div className="absolute bottom-7 left-7 right-7 md:bottom-9 md:left-4 md:right-4">
                  <div
                    className={cn(
                      "flex items-center justify-between border-t border-black/8 dark:border-white/8",
                      "pt-2"
                    )}
                  >
                    {/* CTA Text */}
                    <span
                      className={cn(
                        "text-[10px] uppercase tracking-[0.16em]",
                        "transition-colors duration-300",
                        isActive
                          ? "text-[#0F0F0D] dark:text-white"
                          : "text-[#777773] dark:text-white/40"
                      )}
                      style={MONO}
                    >
                      Pelajari lebih
                    </span>

                    {/* CTA Icon */}
                    <span
                      className={cn(
                        "flex h-6 w-6 items-center justify-center",
                        "border",
                        "transition-all duration-300",
                        isActive
                          ? "border-[#0F0F0D] bg-[#84c803] text-white dark:border-white dark:bg-[#F5C700] dark:text-[#0F0F0D]"
                          : "border-black/10 text-[#0F0F0D]/50 dark:border-white/10 dark:text-white/40"
                      )}
                    >
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.5}
                        className={cn(
                          "transition-transform duration-300",
                          isActive &&
                          "translate-x-0.5 -translate-y-0.5"
                        )}
                      />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}