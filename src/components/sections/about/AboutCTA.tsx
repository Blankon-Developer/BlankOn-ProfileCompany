"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";

export default function AboutCTA() {
  return (
    <section className="bg-foreground py-24 md:py-36 overflow-hidden relative border-t border-background/5 text-background">
      {/* Lime glow */}
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${LIME}15 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: LIME }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest" style={MONO}>
                MULAI DARI SINI
              </span>
            </div>
            
            <h2
              className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6"
              style={DISPLAY}
            >
              Punya kebutuhan digital? Mari bicarakan sebelum memutuskan apa yang harus dibangun.
            </h2>
            <p
              className="opacity-60 text-lg leading-relaxed max-w-lg text-justify"
              style={BODY}
            >
              Ceritakan bisnis Anda, masalah yang sedang dihadapi, atau produk yang ingin Anda bangun. Tidak perlu datang dengan requirement yang sempurna. Kami akan membantu memahami kebutuhan tersebut dan menentukan langkah berikutnya.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4">
            <a
              href="mailto:hello@blankon.id"
              className="inline-flex items-center justify-between gap-4 px-7 py-4 font-bold text-sm group transition-opacity hover:opacity-90"
              style={{ ...DISPLAY, backgroundColor: LIME, color: DARK }}
            >
              <span>Konsultasikan Proyek Anda</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center justify-between gap-4 border border-background/12 opacity-70 hover:border-background/30 hover:opacity-100 px-7 py-4 font-bold text-sm group transition-all"
              style={DISPLAY}
            >
              <span>Chat via WhatsApp</span>
              <MessageCircle
                size={16}
                className="opacity-70 group-hover:opacity-100 transition-all"
              />
            </a>
            <p
              className="text-[11px] opacity-30 text-center pt-2"
              style={MONO}
            >
              Tidak ada komitmen untuk konsultasi awal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
