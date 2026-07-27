"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritakan kebutuhan Anda. Tidak ada tekanan, tidak ada komitmen. Kami dengar dulu, baru kami berikan solusi terbaik.",
  },
  {
    num: "02",
    title: "Proposal Transparan",
    desc: "Scope kerja, timeline, dan estimasi biaya yang jelas. Tidak ada biaya tersembunyi atau kejutan di tengah pengerjaan.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Tim kami mulai bekerja. Anda mendapat update rutin dan bisa mengikuti perkembangan project kapan saja.",
  },
  {
    num: "04",
    title: "Delivery & Bayar",
    desc: "Produk diserahkan. Anda periksa dan setujui. Baru setelah itu pembayaran dilakukan. Sesederhana itu.",
  },
];

export default function Process() {
  return (
    <section
      id="proses"
      className="py-24 md:py-32 bg-white border-t border-black/8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4"
              style={{ ...MONO, color: "#6b7a00" }}
            >
              — Cara Kerja
            </p>
            <h2
              className="text-4xl md:text-5xl font-900 leading-[1.05] tracking-tight text-[#0F0F0D]"
              style={{ ...DISPLAY, fontWeight: 900 }}
            >
              Proses yang
              <br />
              transparan.
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-base text-[#5a5a58] leading-relaxed"
              style={BODY}
            >
              Dari konsultasi pertama hingga handover, Anda selalu tahu apa yang
              sedang terjadi dan apa langkah selanjutnya.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/8 border border-black/8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="p-8 flex flex-col gap-5 group hover:bg-[#F7F7F4] transition-colors"
            >
              {/* Big number */}
              <span
                className="text-[56px] font-900 leading-none select-none"
                style={{
                  ...DISPLAY,
                  fontWeight: 900,
                  color: i === 0 ? LIME : "rgba(0,0,0,0.07)",
                  WebkitTextStroke:
                    i === 0 ? "0" : "1px rgba(0,0,0,0.12)",
                }}
              >
                {s.num}
              </span>
              <div>
                <h3
                  className="text-base font-700 text-[#0F0F0D] mb-2"
                  style={{ ...DISPLAY, fontWeight: 700 }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[#5a5a58] leading-relaxed text-justify"
                  style={BODY}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
