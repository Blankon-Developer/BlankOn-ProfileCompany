"use client";

import { cn, DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";

export default function VisionMission() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Visi */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-none inline-block" style={{ backgroundColor: LIME }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest" style={MONO}>
                Visi
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight" style={DISPLAY}>
              Menjadi pionir solusi digital yang <span style={{ color: LIME }}>mendefinisikan ulang</span> standar industri.
            </h3>
            <p className="opacity-70 text-lg leading-relaxed mt-4" style={BODY}>
              Kami membayangkan dunia di mana teknologi dapat diakses, dinikmati, dan memberdayakan semua lapisan bisnis tanpa batasan kompleksitas teknis.
            </p>
          </div>

          {/* Misi */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-none inline-block" style={{ backgroundColor: LIME }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest" style={MONO}>
                Misi
              </span>
            </div>
            
            <ul className="flex flex-col gap-8 mt-2">
              <li className="flex gap-4">
                <span className="text-xl font-bold opacity-30" style={MONO}>01</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={DISPLAY}>Inovasi Tanpa Henti</h4>
                  <p className="opacity-70 leading-relaxed text-sm" style={BODY}>Membangun produk digital dengan teknologi terkini yang memberikan keunggulan kompetitif nyata bagi klien.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-xl font-bold opacity-30" style={MONO}>02</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={DISPLAY}>Desain Fungsional</h4>
                  <p className="opacity-70 leading-relaxed text-sm" style={BODY}>Menyajikan antarmuka yang tidak hanya memanjakan mata, tetapi juga intuitif dan mudah digunakan.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-xl font-bold opacity-30" style={MONO}>03</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={DISPLAY}>Kemitraan Jangka Panjang</h4>
                  <p className="opacity-70 leading-relaxed text-sm" style={BODY}>Bertindak sebagai rekan yang terus mendampingi pertumbuhan klien dari tahap ideasi hingga pasca-peluncuran.</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
