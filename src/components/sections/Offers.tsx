"use client";

import {
  ArrowUpRight,
  MessageSquare,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import { cn, DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";

const offers = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Konsultasi Bebas",
    tag: "100% Gratis",
    body: "Ceritakan kebutuhan digital Anda terutama mengenai website, aplikasi, atau sistem enterprise. Tim kami siap mendengar dan memberikan solusi tanpa biaya apapun, tanpa kewajiban lanjut.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Tanpa Biaya Awal",
    tag: "0% Upfront",
    body: "Tidak ada uang yang perlu keluar sebelum project selesai. Kami percaya pada kualitas pekerjaan kami, Anda membayar hanya setelah produk diterima dan disetujui.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Garansi Penuh",
    tag: "Bug? Kami Tangani",
    body: "Setiap produk dilindungi garansi perbaikan total. Jika ada masalah setelah delivery, kami tangani sepenuhnya, tanpa biaya tambahan, tanpa negosiasi.",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Free Maintenance",
    tag: "Periode Tertentu",
    body: "Setiap project dilengkapi layanan maintenance gratis untuk periode awal. Kami pastikan produk Anda berjalan optimal dan mendapat pembaruan yang diperlukan.",
  },
];

export default function Offers() {
  return (
    <section
      id="penawaran"
      className="py-24 md:py-32 bg-white border-t border-black/8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4"
              style={{ ...MONO, color: "#6b7a00" }}
            >
              — Penawaran Spesial
            </p>
            <h2
              className="text-4xl md:text-5xl font-900 leading-[1.05] tracking-tight text-[#0F0F0D]"
              style={{ ...DISPLAY, fontWeight: 900 }}
            >
              Kolaborasi
              <br />
              tanpa risiko.
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-base text-[#5a5a58] leading-relaxed text-justify"
              style={BODY}
            >
              Kami sedang berkembang dan ingin membuktikan kualitas kami. Semua
              penawaran ini dirancang agar Anda bisa memulai tanpa hambatan
              apapun.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {offers.map((o, i) => {
            const Icon = o.icon;
            const isMain = i === 0;
            return (
              <div
                key={o.num}
                className={cn(
                  "p-8 border flex flex-col gap-6 group transition-colors duration-200",
                  isMain
                    ? "border-black/15 bg-[#F7F7F4]"
                    : "border-black/8 bg-white hover:bg-[#F7F7F4]"
                )}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[9px] font-700 px-2.5 py-1 tracking-widest text-justify"
                    style={{
                      ...MONO,
                      fontWeight: 700,
                      backgroundColor: LIME,
                      color: DARK,
                    }}
                  >
                    {o.num}
                  </span>
                  <div
                    className={cn(
                      "w-9 h-9 flex items-center justify-center border transition-all duration-200",
                      isMain
                        ? "border-black/15 text-[#0F0F0D]"
                        : "border-black/10 text-muted-foreground group-hover:border-black/20 group-hover:text-[#0F0F0D]"
                    )}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <p
                    className="text-[10px] uppercase tracking-widest mb-2"
                    style={{ ...MONO, color: "#6b7a00" }}
                  >
                    {o.tag}
                  </p>
                  <h3
                    className="text-2xl font-800 text-[#0F0F0D] mb-3 leading-tight"
                    style={{ ...DISPLAY, fontWeight: 800 }}
                  >
                    {o.title}
                  </h3>
                  <p
                    className="text-sm text-[#5a5a58] leading-relaxed text-justify"
                    style={BODY}
                  >
                    {o.body}
                  </p>
                </div>

                <div
                  className="mt-auto flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer w-fit group/lnk transition-colors"
                  style={MONO}
                >
                  Pelajari lebih
                  <ArrowUpRight
                    size={12}
                    className="group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
