"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function WhoWeWorkWith() {
  const clients = [
    {
      title: "Business & Corporate",
      desc: "Untuk perusahaan yang membutuhkan website, platform internal, dashboard, atau sistem digital untuk mendukung operasional.",
    },
    {
      title: "Growing Brands",
      desc: "Untuk brand yang ingin membangun pengalaman digital yang lebih baik bagi pelanggan dan bisnisnya.",
    },
    {
      title: "Startup & New Product",
      desc: "Untuk tim yang sedang memvalidasi ide, membangun MVP, atau mempersiapkan produk digital baru.",
    },
    {
      title: "Established Business",
      desc: "Untuk bisnis yang ingin memperbaiki, mengintegrasikan, atau mengembangkan sistem digital yang sudah berjalan.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-border">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-5/12 sticky top-32">
          <div className="inline-flex items-center gap-2 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: LIME }} />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
              UNTUK SIAPA KAMI
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-foreground" style={DISPLAY}>
            Untuk bisnis yang ingin membangun sesuatu dengan serius.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8" style={BODY}>
            Kami bekerja dengan perusahaan, brand, dan tim yang memiliki kebutuhan digital yang jelas maupun ide yang masih perlu dirumuskan.
          </p>
          <div className="p-6 bg-foreground text-background">
            <p className="font-semibold text-sm leading-relaxed mb-4" style={BODY}>
              Belum yakin kebutuhan Anda masuk kategori yang mana? Tidak masalah. Kita bisa mulai dari pembicaraan mengenai masalah yang ingin diselesaikan.
            </p>
            <a href="mailto:hello@blankon.id" className="inline-flex items-center gap-2 text-sm font-bold group" style={{ color: LIME, ...DISPLAY }}>
              Mari Berdiskusi <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="lg:w-7/12 grid sm:grid-cols-2 gap-x-8 gap-y-12">
          {clients.map((client, idx) => (
            <div key={idx} className="flex flex-col gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center bg-muted group-hover:bg-[#84c803] group-hover:text-background transition-colors border border-border text-xl font-black text-foreground" style={DISPLAY}>
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground" style={DISPLAY}>{client.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm" style={BODY}>{client.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
