"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Layers,
  HelpCircle,
  Calendar,
  MessageSquare,
  Sparkles,
  Users,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { AiOutlineFileText } from "react-icons/ai";
import { ServiceDetailData } from "@/lib/services-data";
import { DISPLAY, BODY, MONO } from "@/lib/utils";

interface ServiceDetailClientProps {
  service: ServiceDetailData;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION & BREADCRUMB
          ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-8xl px-6 lg:px-28 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
            style={MONO}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>KEMBALI KE KATALOG LAYANAN</span>
          </Link>

          <div className="flex items-center gap-3" style={MONO}>
            <span className="text-muted-foreground/60 hidden sm:inline">/</span>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 text-[var(--accent-color)] font-semibold">
              KODE LAYANAN: {service.id} / 11
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-28 py-12 md:py-16 space-y-20">
        {/* ─────────────────────────────────────────────────────────────
            2. HERO SECTION / PENGENALAN ESENSIAL
            ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]"
                style={MONO}
              >
                <Sparkles className="h-3.5 w-3.5" />
                {service.eyebrow}
              </span>
              <h1
                className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]"
                style={DISPLAY}
              >
                {service.headline}
              </h1>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed text-muted-foreground text-justify"
              style={BODY}
            >
              {service.overview.summary}
            </p>

            {/* Target Audiens Card */}
            <div className="p-4 border border-[var(--accent-color)] bg-card/60 backdrop-blur-xs flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" style={MONO}>
                  Profil Organisasi yang Tepat:
                </p>
                <p className="text-xs md:text-sm text-foreground font-medium" style={BODY}>
                  {service.targetAudience}
                </p>
              </div>
            </div>

            {/* Tags Spesialisasi */}
            <div className="pt-2 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md border border-border bg-muted/40 text-[11px] font-mono text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border shadow-lg group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-widest opacity-80 font-mono" style={MONO}>
                  STANDAR KUALITAS BLANKON
                </p>
                <p className="text-sm font-semibold tracking-wide" style={DISPLAY}>
                  Solusi Teruji & Didukung Praktisi Berpengalaman
                </p>
              </div>
            </div>

            {/* Peran Fundamental */}
            <div className="p-4 border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-color)] uppercase" style={MONO}>
                <ShieldCheck className="h-4 w-4" />
                Pentingnya Peran Bagi Bisnis:
              </div>
              <p className="text-xs leading-relaxed text-foreground" style={BODY}>
                {service.overview.fundamentalRole}
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. EDUKASI KONSEP KUNCI (KEY CONCEPTS)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Pondasi Pemahaman
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              3 Konsep Penting yang Perlu Diketahui Calon Klien
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              Memahami cara kerja mendasar teknologi ini membantu Anda membuat keputusan investasi perangkat lunak yang objektif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.overview.keyConcepts.map((item, idx) => (
              <div
                key={item.term}
                className="p-6 border border-border bg-card space-y-3 transition-colors hover:border-[var(--accent-color)] group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--accent-color)]" style={MONO}>
                    0{idx + 1}.
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[var(--accent-color)]/50 group-hover:bg-[var(--accent-color)] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-foreground" style={DISPLAY}>
                  {item.term}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground text-justify" style={BODY}>
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. KAPAN & MENGAPA BUTUH (SCENARIOS & BUSINESS IMPACT)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Studi Masalah & Solusi
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              {service.whyNeedIt.title}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              {service.whyNeedIt.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {service.whyNeedIt.scenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 border border-foreground/30 bg-card/60 backdrop-blur-xs grid grid-cols-1 lg:grid-cols-12 gap-5 items-center"
              >
                {/* Kolom Masalah */}
                <div className="lg:col-span-4 space-y-1.5 pb-4 lg:pb-0 lg:border-r border-border lg:pr-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-red-600 dark:text-red-400 uppercase" style={MONO}>
                    <span>Kendala Saat Ini:</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
                    {item.problem}
                  </p>
                </div>

                {/* Kolom Solusi BlankOn */}
                <div className="lg:col-span-4 space-y-1.5 pb-4 lg:pb-0 lg:border-r border-border lg:pr-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--accent-color)] uppercase" style={MONO}>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Solusi Rekayasa BlankOn:</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground leading-relaxed font-medium" style={BODY}>
                    {item.solution}
                  </p>
                </div>

                {/* Kolom Dampak Bisnis (Impact) */}
                <div className="lg:col-span-4 space-y-1.5 bg-[var(--accent-color)]/5 p-3.5 rounded-lg border border-[var(--accent-color)]/80">
                  <div className="text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-wide" style={MONO}>
                    Dampak Terukur Bagi Klien:
                  </div>
                  <p className="text-xs text-foreground leading-relaxed font-semibold" style={BODY}>
                    {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. RUANG LINGKUP & DELIVERABLES (HASIL NYATA)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Ruang Lingkup Pengerjaan
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Cakupan Hasil Kerja & Deliverables Layanan
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              Setiap proyek dikerjakan dengan batasan deliverable yang jelas, transparan, dan dapat diverifikasi oleh tim internal Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.deliverables.map((deliv, idx) => (
              <div
                key={deliv.title}
                className="p-6 border border-border bg-card flex flex-col justify-between gap-5 transition-all hover:border-[var(--accent-color)] hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent-color)]" style={MONO}>
                      PILAR 0{idx + 1}
                    </span>
                    <Layers className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug" style={DISPLAY}>
                    {deliv.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed text-justify" style={BODY}>
                    {deliv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider" style={MONO}>
                    Fitur & Modul Utama:
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground" style={BODY}>
                    {deliv.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. TAHAPAN ALUR KERJA (METODOLOGI KITA)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Metodologi Implementasi
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              4 Tahap Eksekusi Proyek yang Terstruktur
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              Kami menerapkan alur kerja Agile bertahap yang menjaga visibilitas kemajuan proyek bagi manajemen Anda di setiap minggunya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.workflow.map((item) => (
              <div
                key={item.step}
                className="p-5 border border-border bg-card/60 backdrop-blur-xs space-y-3 relative group hover:border-[var(--accent-color)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-[var(--accent-color)] font-mono" style={MONO}>
                    {item.step}
                  </span>
                  <Workflow className="h-4 w-4 text-muted-foreground/60" />
                </div>
                <h3 className="text-sm font-bold text-foreground" style={DISPLAY}>
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify" style={BODY}>
                  {item.desc}
                </p>
                <div className="pt-3 border-t border-border/80">
                  <p className="text-[10px] font-mono text-[var(--accent-color)] uppercase font-semibold">
                    Output:
                  </p>
                  <p className="text-[11px] text-foreground font-medium mt-0.5 leading-snug" style={BODY}>
                    {item.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. STANDAR TEKNOLOGI & TOOLING
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Ekosistem Teknologi
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Standar Tooling & Framework Industri
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              Kami hanya menggunakan pustaka dan arsitektur yang terbukti stabil, didukung komunitas global, dan mudah dirawat jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.techStack.map((stack) => (
              <div key={stack.category} className="p-4 border border-border bg-card space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-color)]" style={MONO}>
                  {stack.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((it) => (
                    <span
                      key={it}
                      className="px-2.5 py-1 rounded border border-border bg-muted/60 text-xs font-medium text-foreground"
                      style={BODY}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. TANYA JAWAB EDUKATIF (FAQ)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Pertanyaan Umum
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Hal yang Kerap Ditanyakan Calon Klien
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              Klarifikasi cepat mengenai alur kolaborasi, kepemilikan aset, dan jaminan keamanan proyek Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 border border-border bg-card space-y-2.5"
              >
                <div className="flex items-start gap-2.5 text-foreground font-bold text-sm" style={DISPLAY}>
                  <HelpCircle className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <h4>{faq.q}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6 text-justify" style={BODY}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. CALL TO ACTION & TAUTAN INTEGRASI
            ───────────────────────────────────────────────────────────── */}
        <section className="border border-[var(--accent-color)]/30 bg-card p-6 md:p-10 space-y-8 relative overflow-hidden shadow-xl">
          <div className="space-y-3 max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/40 bg-[var(--accent-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-color)]"
              style={MONO}
            >
              KOLABORASI TEKNOLOGI
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight" style={DISPLAY}>
              Diskusikan Kebutuhan {service.title} Bersama Kami
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
              Konsultasi awal tanpa biaya untuk menganalisis kelayakan sistem, perkiraan anggaran, dan pemilihan arsitektur yang paling tepat bagi target bisnis Anda.
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
              <span>Jadwalkan Konsultasi 1-on-1</span>
              <ArrowUpRight className="h-4 w-4 text-black" />
            </Link>

            <Link
              href="/mulai"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-background hover:border-foreground/40 font-semibold text-xs md:text-sm text-foreground transition-colors cursor-pointer"
              style={BODY}
            >
              <AiOutlineFileText className="h-4 w-4 text-foreground" />
              <span>Kirim Formulir Permintaan Solusi</span>
            </Link>

            {/* Link ke Portofolio Terkait */}
            <Link
              href={`/portofolio/${service.portfolioSlug}`}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline cursor-pointer ml-auto"
              style={MONO}
            >
              <span>Lihat Portofolio {service.title}</span>
              <ExternalLink className="h-3 w-3 text-[var(--accent-color)]" />
            </Link>

            {/* Link ke Tim Layanan Terkait */}
            <Link
              href={`/team/${service.teamSlug}`}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline cursor-pointer"
              style={MONO}
            >
              <Users className="h-3 w-3 text-[var(--accent-color)]" />
              <span>Tim Ahli {service.title}</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

