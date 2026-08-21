"use client";

import { DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="penawaran" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: LIME }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest font-semibold" style={MONO}>
                PEKERJAAN KAMI
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6" style={DISPLAY}>
              Beberapa hal yang telah kami bangun.
            </h2>
            <p className="opacity-70 text-lg leading-relaxed max-w-xl" style={BODY}>
              Setiap proyek memiliki konteks, tantangan, dan kebutuhan yang berbeda. Kami membagikan proses dan hasil pekerjaan kami agar Anda dapat melihat bagaimana kami bekerja, bukan hanya apa yang kami tawarkan.
            </p>
          </div>
        </div>

        {/* Placeholder Case Study */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Placeholder */}
          <div className="aspect-[4/3] bg-background/5 border border-background/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,120,120,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-pulse" />
            <span className="font-bold opacity-20 text-2xl tracking-widest uppercase" style={DISPLAY}>Product Mockup</span>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2" style={DISPLAY}>Nama Proyek</h3>
              <p className="opacity-50 text-sm font-semibold tracking-widest uppercase" style={MONO}>Client: Nama Klien</p>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-sm font-bold mb-2 uppercase tracking-widest opacity-40" style={MONO}>Challenge</h4>
                <p className="opacity-80 leading-relaxed text-sm" style={BODY}>Apa masalah atau kebutuhan yang ingin diselesaikan?</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 uppercase tracking-widest opacity-40" style={MONO}>Approach</h4>
                <p className="opacity-80 leading-relaxed text-sm" style={BODY}>Bagaimana Blankon Tech memahami dan merancang solusinya?</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 uppercase tracking-widest opacity-40" style={MONO}>Solution</h4>
                <p className="opacity-80 leading-relaxed text-sm" style={BODY}>Apa yang kami bangun secara teknis?</p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-2 uppercase tracking-widest opacity-40" style={MONO}>Result</h4>
                <p className="opacity-80 leading-relaxed text-sm" style={BODY}>Apa perubahan atau hasil yang dicapai setelah produk digunakan?</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 font-bold text-sm mt-4 group w-fit pb-1 border-b border-transparent hover:border-background transition-colors"
              style={DISPLAY}
            >
              Lihat Studi Kasus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
