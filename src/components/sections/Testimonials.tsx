"use client";

import { ArrowRight, Star } from "lucide-react";
import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";

const testimonials = [
  {
    name: "Rizky Firmansyah",
    role: "Co-founder, Tokobaru.id",
    body: "Blankon membuat proses outsourcing sangat mudah. Dari konsultasi awal sampai handover semua jelas dan terstruktur.",
    stars: 5,
    initial: "R",
  },
  {
    name: "Sinta Dewi Rahayu",
    role: "Marketing Director, PT Nusatech",
    body: "Ada bug kecil pasca-launch, langsung ditangani dalam hitungan jam tanpa pertanyaan soal biaya tambahan. Sangat profesional.",
    stars: 5,
    initial: "S",
  },
  {
    name: "Hendra Gunawan",
    role: "Owner, Bakeri Lezat",
    body: "Saya tidak paham teknologi. Tim Blankon sabar menjelaskan semua opsi dan membantu saya membuat keputusan yang tepat.",
    stars: 5,
    initial: "H",
  },
];

export default function Testimonials() {
  return (
    <section
      id="tentang"
      className="py-24 md:py-32 bg-[#F7F7F4] border-t border-black/8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4"
              style={{ ...MONO, color: "#6b7a00" }}
            >
              — Kata Klien
            </p>
            <h2
              className="text-4xl md:text-5xl font-900 leading-[1.05] tracking-tight text-[#0F0F0D]"
              style={{ ...DISPLAY, fontWeight: 900 }}
            >
              Mereka sudah
              <br />
              buktikan.
            </h2>
          </div>
          <a
            href="#penawaran"
            className="inline-flex items-center gap-2 border border-black/15 px-5 py-2.5 text-sm font-semibold text-[#0F0F0D] hover:border-black/30 transition-colors w-fit"
            style={DISPLAY}
          >
            Mulai Perjalanan Anda <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-black/8 p-7 flex flex-col gap-5 group hover:border-black/15 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{
                    ...DISPLAY,
                    fontWeight: 700,
                    backgroundColor: "#3a3a38",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-sm font-600 text-[#0F0F0D]"
                    style={{ ...DISPLAY, fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[9px] text-muted-foreground uppercase tracking-wider"
                    style={MONO}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    style={{ fill: LIME, stroke: "none" }}
                  />
                ))}
              </div>
              <p
                className="text-sm text-[#5a5a58] leading-relaxed flex-1 text-justify"
                style={BODY}
              >
                &quot;{t.body}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
