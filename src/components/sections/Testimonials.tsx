"use client";

import { Star } from "lucide-react";
import { DISPLAY, BODY, MONO } from "@/lib/utils";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Founder, KopiKita",
    body: "Awalnya kami cukup khawatir menggunakan tim eksternal. Tapi Blankon sangat komunikatif dan transparan sejak awal. Progress pekerjaan juga selalu kami terima dengan jelas.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Maya Anggraini",
    role: "Operations Manager, Arunika Group",
    body: "Yang paling saya suka dari Blankon adalah respons timnya. Setiap kali ada pertanyaan atau kendala, selalu ada yang membantu dan memberikan solusi dengan cepat.",
    stars: 5,
    initial: "M",
  },
  {
    name: "Fajar Ramadhan",
    role: "CEO, Kreasi Digital Nusantara",
    body: "Kami membutuhkan website yang bisa berkembang mengikuti bisnis. Tim Blankon tidak hanya mengerjakan sesuai brief, tapi juga memberikan masukan yang sangat membantu.",
    stars: 5,
    initial: "F",
  },
  {
    name: "Nadia Putri",
    role: "Marketing Manager, Loka Fashion",
    body: "Proses dari desain sampai development terasa sangat rapi. Revisi juga ditangani dengan baik sehingga kami bisa mendapatkan hasil yang sesuai dengan kebutuhan brand.",
    stars: 5,
    initial: "N",
  },
  {
    name: "Bagas Saputra",
    role: "Owner, Rumah Properti",
    body: "Sebelumnya kami kesulitan mencari developer yang bisa memahami kebutuhan bisnis. Blankon berhasil menerjemahkan kebutuhan kami menjadi website yang jauh lebih mudah digunakan.",
    stars: 5,
    initial: "B",
  },
  {
    name: "Citra Lestari",
    role: "Product Manager, Finova",
    body: "Komunikasinya enak dan proses kerjanya terstruktur. Kami selalu tahu apa yang sedang dikerjakan dan apa yang perlu kami siapkan dari sisi internal.",
    stars: 5,
    initial: "C",
  },
];


export default function Testimonials() {
  return (
    <section
      id="tentang"
      className="py-24 md:py-12 bg-white dark:bg-black"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
              <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
                KATA KLIEN KAMI
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-foreground" style={DISPLAY}>
              Dampak nyata,
              <br />
              bukan sekadar janji.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:max-w-sm text-justify" style={BODY}>
            Jangan hanya percaya kata-kata kami. Dengarkan apa yang dikatakan klien tentang pengalaman mereka bekerja sama dengan BlankOn Digital Tech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-transparent border border-border p-8 flex flex-col gap-6 group hover:border-[var(--accent-color)] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white dark:text-black shrink-0 transition-colors group-hover:bg-[var(--accent-color)] group-hover:text-black dark:group-hover:text-white"
                  style={{
                    ...DISPLAY,
                    backgroundColor: "var(--accent-color)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-base font-bold text-foreground"
                    style={DISPLAY}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mt-1"
                    style={MONO}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="transition-colors group-hover:fill-[var(--accent-color)] group-hover:text-[var(--accent-color)]"
                    style={{ fill: "var(--accent-color)", stroke: "none" }}
                  />
                ))}
              </div>
              <p
                className="text-sm text-muted-foreground leading-relaxed flex-1 text-justify"
                style={BODY}
              >
                &quot;{t.body}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
