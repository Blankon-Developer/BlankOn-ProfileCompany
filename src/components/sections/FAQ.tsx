"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah bisa mulai dari ide yang belum matang?",
      a: "Bisa. Tidak semua proyek datang dengan requirement yang sudah lengkap. Kami dapat membantu memetakan ide, kebutuhan, dan prioritas sebelum menentukan apa yang perlu dibangun."
    },
    {
      q: "Apakah BlankOn Tech hanya mengerjakan development?",
      a: "Tidak. Kami dapat terlibat sejak tahap product discovery, UI/UX design, hingga development dan pengembangan lanjutan, tergantung kebutuhan proyek."
    },
    {
      q: "Apakah bisa mengembangkan sistem yang sudah ada?",
      a: "Bisa. Kami dapat membantu melakukan pengembangan, perbaikan, integrasi, maupun penyesuaian terhadap sistem yang sudah berjalan setelah memahami kondisi teknis dan kebutuhannya."
    },
    {
      q: "Apakah ada biaya untuk konsultasi awal?",
      a: "Konsultasi awal dapat dilakukan tanpa biaya untuk memahami kebutuhan dan melihat apakah kebutuhan tersebut sesuai dengan layanan yang kami tawarkan."
    },
    {
      q: "Berapa lama sebuah proyek dikerjakan?",
      a: "Waktu pengerjaan bergantung pada kompleksitas, scope, dan kebutuhan masing-masing proyek. Setelah kebutuhan awal dipahami, kami dapat memberikan estimasi tahapan dan timeline yang lebih realistis."
    },
    {
      q: "Apakah ada garansi setelah proyek selesai?",
      a: "Kami memberikan dukungan dan perbaikan sesuai cakupan serta ketentuan yang disepakati dalam proyek. Detailnya dibicarakan sebelum pekerjaan dimulai."
    },
  ];

  return (
    <section className="py-20 md:py-12 px-6 md:px-28 max-w-8xl mx-auto bg-white dark:bg-black">
      <div className="text-center mb-16 md:mb-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-6 w-fit">
          <span className="w-1.5 h-1.5 rounded-full inline-block bg-foreground" style={{ backgroundColor: "var(--accent-color)" }} />
          <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
            PERTANYAAN UMUM (FAQ)
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-foreground" style={DISPLAY}>
          Sebelum kita mulai, mungkin Anda ingin tahu beberapa hal.
        </h2>
      </div>

      <Accordion.Root type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <Accordion.Item 
            key={i} 
            value={`item-${i}`}
            className="border-b border-border overflow-hidden"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger 
                className="flex flex-1 items-center justify-between py-6 text-left font-bold text-lg hover:text-[#84c803] dark:hover:text-[#F5C700] transition-colors group [&[data-state=open]>svg]:rotate-45 text-foreground"
                style={DISPLAY}
              >
                {faq.q}
                <Plus size={20} className="text-muted-foreground group-hover:text-[#84c803] dark:group-hover:text-[#F5C700] transition-transform duration-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pb-6 pt-0 leading-relaxed" style={BODY}>
                {faq.a}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
