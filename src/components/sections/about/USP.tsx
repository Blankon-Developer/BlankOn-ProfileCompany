"use client";

import { cn, DISPLAY, BODY, MONO } from "@/lib/utils";

export default function USP() {
  const usps = [
    {
      title: "Pemahaman Bisnis",
      desc: "Kami berusaha memahami konteks dan tujuan bisnis sebelum menentukan solusi teknis.",
      number: "01",
    },
    {
      title: "Satu Tim dari Awal",
      desc: "Design, product, dan development bekerja dalam satu proses sehingga keputusan dapat dibuat dengan lebih terarah.",
      number: "02",
    },
    {
      title: "Transparan dalam Proses",
      desc: "Scope, tahapan, prioritas, dan perkembangan proyek dibicarakan secara terbuka agar tidak ada ekspektasi yang berbeda di tengah jalan.",
      number: "03",
    },
    {
      title: "Dibangun untuk Berkembang",
      desc: "Kami mempertimbangkan kebutuhan jangka panjang agar produk tidak cepat menjadi hambatan ketika bisnis dan penggunanya berkembang.",
      number: "04",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 w-fit">
            <span className="w-1.5 h-1.5 rounded-full inline-block bg-foreground" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest" style={MONO}>
              KENAPA BLANKON TECH
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 max-w-3xl text-foreground" style={DISPLAY}>
            Partner yang ikut memikirkan produk, bukan hanya mengerjakan task.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed" style={BODY}>
            Kami percaya hubungan antara client dan technology partner seharusnya bukan sekadar menerima brief lalu mengirimkan hasil. Kami ingin memahami alasan di balik sebuah kebutuhan agar solusi yang dibangun tidak hanya selesai, tetapi memang relevan untuk digunakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {usps.map((usp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 border-l border-border hover:border-foreground transition-colors duration-300">
              <span 
                className="absolute -left-0 top-0 text-[10px] md:text-xs font-bold transform -translate-x-1/2 bg-muted text-foreground py-2" 
                style={MONO}
              >
                {usp.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground" style={DISPLAY}>
                {usp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={BODY}>
                {usp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
