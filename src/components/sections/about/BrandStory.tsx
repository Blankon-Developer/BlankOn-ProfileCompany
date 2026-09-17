"use client";

import { cn, DISPLAY, BODY, MONO, DARK } from "@/lib/utils";

export default function BrandStory() {
  return (
    <section className="py-12 md:py-12 px-6 md:px-28 max-w-8xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
            style={DISPLAY}
          >
            Cerita Kami
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest" style={MONO}>
            Pendekatan Blankon Digital Tech
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="prose prose-lg text-muted-foreground" style={BODY}>
            <p className="leading-relaxed mb-6 font-medium text-foreground text-justify">
              Blankon Digital Tech dibangun dengan satu prinsip sederhana: <strong>teknologi harus memiliki alasan untuk dibuat.</strong>
            </p>
            <p className="leading-relaxed mb-6 text-justify">
              Kami melihat banyak proyek digital dimulai terlalu cepat pada solusi, tanpa cukup memahami masalah yang sebenarnya ingin diselesaikan. Akibatnya, produk dapat terlihat baik secara teknis tetapi tidak selalu menjawab kebutuhan bisnis maupun penggunanya.
            </p>
            <p className="leading-relaxed mb-6 text-justify">
              Kami memilih pendekatan yang berbeda. Sebelum membangun, kami berusaha memahami konteks. Kami berdiskusi mengenai tujuan, memetakan kebutuhan, menentukan prioritas, lalu menerjemahkannya menjadi produk yang dapat digunakan dan dikembangkan.
            </p>
            <p className="leading-relaxed mb-6 text-justify">
              Bagi kami, peran technology partner bukan hanya menyediakan tenaga untuk mengerjakan proyek. Kami ingin menjadi bagian dari proses berpikir dan membantu mengambil keputusan yang tepat bersama Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
