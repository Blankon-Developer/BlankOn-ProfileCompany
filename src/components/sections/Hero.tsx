"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative bg-[#F7F7F4] pt-[60px] overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 items-center min-h-[86vh] py-20 md:py-0">
          {/* ── Left: copy ────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-8 w-fit opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: LIME }}
              />
              <span
                className="text-[11px] text-muted-foreground uppercase tracking-widest"
                style={MONO}
              >
                Menerima klien baru
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[clamp(44px,7vw,80px)] font-black leading-none tracking-[-2px] text-[#0F0F0D] mb-6 opacity-0 animate-fade-up"
              style={{ ...DISPLAY, animationDelay: "200ms" }}
            >
              Solusi digital
              <br />
              untuk bisnis
              <br />
              <span className="relative inline-block">
                yang serius.
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[6px] pointer-events-none"
                  style={{ backgroundColor: LIME }}
                />
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-[#4a4a47] text-base md:text-lg leading-relaxed mb-10 max-w-[420px] opacity-0 animate-fade-up text-justify"
              style={{ ...BODY, animationDelay: "300ms" }}
            >
              Blankon membangun website dan aplikasi dari skala startup hingga
              enterprise dengan konsultasi gratis, tanpa biaya di muka, dan
              garansi perbaikan penuh.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14 opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <a
                href="#penawaran"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold group transition-opacity hover:opacity-85"
                style={{ ...DISPLAY, backgroundColor: DARK, color: "#fff" }}
              >
                Lihat Penawaran
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 border border-black/15 text-[#0F0F0D] hover:border-black/30 px-6 py-3.5 text-sm font-semibold transition-colors"
                style={DISPLAY}
              >
                Eksplorasi Layanan
              </a>
            </div>
          </div>

          {/* ── Right: value prop composition ─────────────── */}
          <div className="hidden md:flex flex-col gap-4 justify-center py-16">
            {/* Main card */}
            <div className="bg-white border border-black/8 p-6 shadow-sm">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p
                    className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1"
                    style={MONO}
                  >
                    Cara kami bekerja
                  </p>
                  <h3
                    className="text-lg font-700 text-[#0F0F0D]"
                    style={{ ...DISPLAY, fontWeight: 700 }}
                  >
                    Dari ide ke produk,
                    <br />
                    tanpa risiko.
                  </h3>
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: LIME }}
                >
                  <ArrowUpRight size={15} color={DARK} />
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { num: "01", text: "Konsultasi gratis, tanpa batas" },
                  { num: "02", text: "Tidak ada biaya di muka" },
                  { num: "03", text: "Bayar hanya setelah produk selesai" },
                  {
                    num: "04",
                    text: "Garansi perbaikan & free maintenance",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-center gap-3 py-2.5 border-t border-black/6 first:border-t-0"
                  >
                    <span
                      className="text-[9px] font-semibold w-6 h-5 flex items-center justify-center shrink-0"
                      style={{ ...MONO, backgroundColor: LIME, color: DARK }}
                    >
                      {item.num}
                    </span>
                    <span className="text-sm text-[#3a3a38]" style={BODY}>
                      {item.text}
                    </span>
                    <Check
                      size={13}
                      className="ml-auto shrink-0 text-muted-foreground/40"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Two mini stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-black/8 p-5 shadow-sm">
                <p
                  className="text-3xl font-900 text-[#0F0F0D] leading-none mb-1"
                  style={{ ...DISPLAY, fontWeight: 900 }}
                >
                  Rp 0
                </p>
                <p
                  className="text-[10px] text-muted-foreground leading-snug"
                  style={MONO}
                >
                  Biaya untuk
                  <br />
                  memulai
                </p>
              </div>
              <div className="p-5 shadow-sm" style={{ backgroundColor: LIME }}>
                <p
                  className="text-3xl font-900 text-[#0F0F0D] leading-none mb-1"
                  style={{ ...DISPLAY, fontWeight: 900 }}
                >
                  100%
                </p>
                <p
                  className="text-[10px] leading-snug"
                  style={{ ...MONO, color: "#3a4a00" }}
                >
                  Garansi
                  <br />
                  perbaikan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
