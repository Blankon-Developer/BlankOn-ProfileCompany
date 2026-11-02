"use client";

import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, ArrowUpRight, HelpCircle, Sparkles, Calendar, MessageSquare, BookOpen } from "lucide-react";
import { AiOutlineFileText } from "react-icons/ai";
import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { servicesFAQData } from "@/lib/services-faq-data";

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

  const serviceCategories = Object.values(servicesFAQData);

  return (
    <section className="py-16 md:py-16 px-6 md:px-28 max-w-8xl mx-auto bg-white dark:bg-black space-y-24">
      {/* ─────────────────────────────────────────────────────────────
          1. PERTANYAAN UMUM TENTANG KEMITRAAN DENGAN BLANKON
          ───────────────────────────────────────────────────────────── */}
      <div className="space-y-12">
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 w-fit">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)] px-2 py-1 border border-[var(--accent-color)] rounded-full"
              style={MONO}
            >
              <Sparkles className="h-3.5 w-3.5 rounded-full" />
              PERTANYAAN UMUM (Terkait Kolaborasi)
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4 text-foreground max-w-3xl"
            style={DISPLAY}
          >
            Sebelum kita mulai, mungkin Anda ingin tahu beberapa hal mendasar.
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl text-center" style={BODY}>
            Jawaban langsung seputar model kolaborasi, jaminan garansi, dan fleksibilitas pengerjaan proyek di BlankOn Digital Tech.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="w-full border-t border-border">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="border-b border-border overflow-hidden group"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger
                  className="flex flex-1 items-center justify-between py-6 text-left font-bold text-base md:text-lg hover:text-[#84c803] dark:hover:text-[#F5C700] transition-colors group [&[data-state=open]>svg]:rotate-45 text-foreground cursor-pointer"
                  style={DISPLAY}
                >
                  <span className="pr-4">{faq.q}</span>
                  <Plus
                    size={20}
                    className="text-muted-foreground group-hover:text-[#84c803] dark:group-hover:text-[#F5C700] transition-transform duration-300 shrink-0"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-6 pt-0 text-xs md:text-sm leading-relaxed text-justify max-w-4xl" style={BODY}>
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. DIREKTORI TANYA JAWAB SPESIFIK BERDASARKAN LAYANAN
          ───────────────────────────────────────────────────────────── */}
      <div className="space-y-10 pt-8 border-t border-[var(--accent-color)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]"
              style={MONO}
            >
              <Sparkles className="h-3.5 w-3.5" />
              DIREKTORI TANYA JAWAB TERKAIT LAYANAN KAMI
            </span>
            <h2
              className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground"
              style={DISPLAY}
            >
              Pelajari Tanya Jawab Spesifik Sesuai Kebutuhan Anda
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
              Setiap kategori layanan memiliki cakupan teknis, integrasi sistem, dan skema biaya yang berbeda. Pilih salah satu bidang di bawah untuk membaca edukasi tanya jawab lengkapnya:
            </p>
          </div>

          <div className="text-xs text-muted-foreground font-mono" style={MONO}>
            TERSEDIA 11 KATEGORI LAYANAN
          </div>
        </div>

        {/* Grid 11 Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((item) => (
            <div
              key={item.slug}
              className="p-6 border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-5 transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-lg group relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-mono font-bold text-[var(--accent-color)] px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10"
                    style={MONO}
                  >
                    LAYANAN {item.id}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {item.faqs.length} Pertanyaan
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-foreground leading-snug group-hover:text-[var(--accent-color)] transition-colors"
                  style={DISPLAY}
                >
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed text-justify" style={BODY}>
                  {item.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                <Link
                  href={`/faq/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground group-hover:text-[var(--accent-color)] transition-colors cursor-pointer"
                  style={MONO}
                >
                  <span>BUKA TANYA JAWAB</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href={`/layanan/${item.relatedServiceSlug}`}
                  title="Lihat spesifikasi layanan lengkap"
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. KONSULTASI LANGSUNG (BOTTOM CTA CARD)
          ───────────────────────────────────────────────────────────── */}
      <div className="border border-foreground bg-card p-6 md:p-10 space-y-6 relative overflow-hidden shadow-xl">
        <div className="space-y-3 max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/40 bg-[var(--accent-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-color)]"
            style={MONO}
          >
            KONSULTASI LANGSUNG
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight" style={DISPLAY}>
            Tidak Menemukan Jawaban yang Anda Cari?
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
            Tim teknis dan Solution Architect kami siap mendiskusikan kondisi spesifik sistem Anda tanpa komitmen awal. Jadwalkan sesi diskusi 1-on-1 daring (Google Meet) atau tatap muka langsung di kantor kami.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/kontak/jadwal-temu"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all hover:opacity-90 shadow-md cursor-pointer"
            style={{
              ...DISPLAY,
              backgroundColor: "var(--accent-color)",
              color: "black",
            }}
          >
            <Calendar className="h-4 w-4 text-black" />
            <span>Jadwalkan Janji Temu Konsultasi</span>
            <ArrowUpRight className="h-4 w-4 text-black" />
          </Link>

          <Link
            href="/mulai"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-background hover:border-foreground/40 font-semibold text-xs md:text-sm text-foreground transition-colors cursor-pointer"
            style={BODY}
          >
            <AiOutlineFileText className="h-4 w-4 text-foreground" />
            <span>Kirim Pesan Formulir</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
