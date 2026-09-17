"use client";

import { DISPLAY, BODY, MONO, DARK, LIME } from "@/lib/utils";

export default function SocialProof() {
  return (
    <section className="py-20 md:py-12 px-6 md:px-28 bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Area */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: LIME }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest" style={MONO}>
                DIPERCAYA UNTUK MEMBANGUN
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]" style={DISPLAY}>
              Hubungan kerja yang baik dimulai dari proses yang jelas.
            </h2>
            <p className="opacity-70 text-lg leading-relaxed max-w-lg mt-2" style={BODY}>
              Kami menjaga komunikasi, transparansi, dan kualitas pekerjaan sepanjang proses pengembangan. Bagi kami, keberhasilan proyek bukan hanya ketika produk selesai dikirim, tetapi ketika produk tersebut benar-benar dapat digunakan oleh tim dan penggunanya.
            </p>
          </div>

          {/* Metrics Area */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-5xl md:text-6xl font-black mb-3" style={{ ...DISPLAY, color: LIME }}>50+</h3>
              <p className="opacity-70 text-sm leading-relaxed" style={BODY}>
                Proyek yang telah dikerjakan
              </p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-black mb-3" style={DISPLAY}>2021</h3>
              <p className="opacity-70 text-sm leading-relaxed" style={BODY}>
                Sejak berdiri
              </p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-black mb-3" style={DISPLAY}>Puluhan</h3>
              <p className="opacity-70 text-sm leading-relaxed" style={BODY}>
                Klien / Brand mempercayakan bisnisnya
              </p>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl font-black mb-3" style={DISPLAY}>Berbagai</h3>
              <p className="opacity-70 text-sm leading-relaxed" style={BODY}>
                Industri yang telah ditangani
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
