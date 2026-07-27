"use client";

import { ArrowRight } from "lucide-react";
import { DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="bg-[#0F0F0D] py-24 md:py-36 border-t border-white/8 overflow-hidden relative">
      {/* Lime glow */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${LIME}18 0%, transparent 70%)`,
          filter: "blur(32px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p
              className="text-[10px] uppercase tracking-widest mb-5 text-white/30"
              style={MONO}
            >
              — Mulai Sekarang
            </p>
            <h2
              className="text-5xl md:text-7xl font-900 text-white leading-none tracking-tight mb-6"
              style={{ ...DISPLAY, fontWeight: 900 }}
            >
              Tidak ada
              <br />
              alasan untuk
              <br />
              <span style={{ color: LIME }}>menunggu.</span>
            </h2>
            <p
              className="text-white/40 text-lg leading-relaxed max-w-lg text-justify"
              style={BODY}
            >
              Konsultasi gratis, tanpa bayar di depan, risiko nol. Hubungi kami
              hari ini dan wujudkan ide digital Anda bersama Blankon.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
            <a
              href="mailto:halo@blankon.id"
              className="inline-flex items-center justify-between gap-4 px-7 py-4 font-semibold text-sm group transition-opacity hover:opacity-88"
              style={{ ...DISPLAY, backgroundColor: LIME, color: DARK }}
            >
              <span>Hubungi Kami</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center justify-between gap-4 border border-white/12 text-white/60 hover:border-white/25 hover:text-white px-7 py-4 font-semibold text-sm group transition-all"
              style={DISPLAY}
            >
              <span>WhatsApp Kami</span>
              <ArrowRight
                size={15}
                className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </a>
            <p
              className="text-[10px] text-white/20 text-center pt-1"
              style={MONO}
            >
              Respon dalam &lt;24 jam · Tidak ada komitmen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
