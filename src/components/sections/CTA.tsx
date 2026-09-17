"use client";

import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { DISPLAY, BODY, MONO, LIME, YELLOW, BLACK } from "@/lib/utils";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white dark:bg-black py-10 md:py-16 overflow-hidden relative border-t border-[var(--accent-color)]">
      {/* Lime glow */}
      <div
        className="absolute -bottom-70 left-1/2 -translate-x-1/2 w-full h-[350px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, var(--accent-color) 5% 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-8xl mx-auto px-6 md:px-28 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest" style={MONO}>
                MULAI DARI SINI
              </span>
            </div>

            <h2
              className="text-3xl md:text-3xl font-black leading-[1.1] tracking-tight mb-6 text-balance"
              style={DISPLAY}
            >
              Punya kebutuhan digital?
              <br />
              <span className="text-3xl md:text-2xl font-black leading-[1.1] tracking-tight mb-6 text-balance opacity-60" style={DISPLAY}>Mari bicarakan sebelum memutuskan apa yang harus dibangun.</span>
            </h2>
            <p
              className="opacity-60 text-md leading-relaxed max-w-full md:max-w-full text-justify"
              style={BODY}
            >
              Ceritakan bisnis Anda, masalah yang sedang dihadapi, atau produk yang ingin Anda bangun. Tidak perlu datang dengan requirement yang sempurna. Kami akan membantu memahami kebutuhan tersebut dan menentukan langkah berikutnya.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-between gap-4 px-7 py-4 font-bold text-sm group transition-opacity hover:opacity-90 cursor-pointer"
              style={{ ...DISPLAY, backgroundColor: "var(--accent-color)" }}
            >
              <span className="text-white dark:text-black">Konsultasikan Proyek Anda</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-3 transition-transform text-white dark:text-black"
              />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center justify-between gap-4 border border-transparent hover:border-[var(--accent-color)] px-7 py-4 font-bold text-sm group transition-all"
              style={DISPLAY}
            >
              <span>Chat via WhatsApp</span>
              <FaWhatsapp
                size={24}
                className="opacity-70 group-hover:opacity-100 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
