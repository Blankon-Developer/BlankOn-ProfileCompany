"use client";

import { DISPLAY, BODY, MONO } from "@/lib/utils";

export default function Problem() {
  return (
    <section className="py-20 md:py-12 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
              KENAPA BLANKON TECH?
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1]"
            style={DISPLAY}
          >
            " <br className="text-xl" />
            Teknologi seharusnya menyelesaikan masalah,
            bukan menambahnya.
          </h2>
        </div>

        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="prose prose-lg text-muted-foreground" style={BODY}>
            <p className="leading-relaxed mb-6">
              Kami memahami bahwa membangun produk digital bukan hanya soal memilih teknologi atau menulis kode. Ada tujuan bisnis yang harus dicapai, pengguna yang harus dipahami, dan keputusan yang perlu dibuat sejak awal.
            </p>
            <p className="leading-relaxed mb-8">
              Karena itu, kami memulai setiap proyek dengan memahami konteksnya terlebih dahulu. Setelah itu, kami membantu menerjemahkannya menjadi produk yang terstruktur, mudah digunakan, dan siap dikembangkan.
            </p>

            <div className="p-6 border-l-4 bg-muted" style={{ borderColor: "var(--accent-color)" }}>
              <p className="font-bold text-foreground text-lg m-0 leading-relaxed" style={DISPLAY}>
                " <br className="text-xl" />
                Anda membawa kebutuhan dan tujuan bisnisnya. Kami membantu menerjemahkannya menjadi produk digital.
                <br className="text-xl" /> " 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
