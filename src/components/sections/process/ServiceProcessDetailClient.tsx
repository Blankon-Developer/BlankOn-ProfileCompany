"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckSquare,
  AlertTriangle,
  Calendar,
  MessageSquare,
  BookOpen,
  Layers,
  HelpCircle,
  Briefcase,
} from "lucide-react";
import { ServiceProcessData, servicesProcessData } from "@/lib/services-process-data";
import { DISPLAY, BODY, MONO } from "@/lib/utils";

interface ServiceProcessDetailClientProps {
  serviceProcess: ServiceProcessData;
}

export default function ServiceProcessDetailClient({
  serviceProcess,
}: ServiceProcessDetailClientProps) {
  const allServicesList = useMemo(() => {
    return Object.values(servicesProcessData);
  }, []);

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION / BREADCRUMB
          ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-8xl px-6 lg:px-28 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link
            href="/proses"
            className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
            style={MONO}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>KEMBALI KE SIKLUS KERJA UTAMA</span>
          </Link>

          <div className="flex items-center gap-2" style={MONO}>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 text-[var(--accent-color)] font-semibold">
              METODOLOGI LAYANAN: {serviceProcess.id} / 11
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-28 py-12 md:py-16 space-y-20">
        {/* ─────────────────────────────────────────────────────────────
            2. HERO SECTION / PENGENALAN METODOLOGI
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]"
              style={MONO}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {serviceProcess.eyebrow}
            </span>
            <h1
              className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]"
              style={DISPLAY}
            >
              Metode Implementasi: {serviceProcess.title}
            </h1>
            <p
              className="max-w-4xl text-base md:text-lg leading-relaxed text-muted-foreground"
              style={BODY}
            >
              {serviceProcess.shortDesc}
            </p>
          </div>

          {/* Nama Metodologi & Filosofi Rekayasa Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
            <div className="lg:col-span-5 p-5 md:p-6 rounded-2xl border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/5 flex flex-col justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-color)]" style={MONO}>
                  PENDEKATAN ARSITEKTUR RESMI:
                </span>
                <h2 className="text-lg md:text-xl font-bold text-foreground leading-snug" style={DISPLAY}>
                  {serviceProcess.methodologyName}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono" style={MONO}>
                <Layers className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                <span>Total 4 Fase Kerja Terukur</span>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 md:p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-2.5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase" style={MONO}>
                <ShieldCheck className="h-4 w-4 text-[var(--accent-color)]" />
                Filosofi & Komitmen Rekayasa:
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify" style={BODY}>
                {serviceProcess.philosophy}
              </p>
            </div>
          </div>

          {/* Quick Action Links ke Halaman Terkait */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold" style={MONO}>
            <Link
              href={`/layanan/${serviceProcess.relatedServiceSlug}`}
              className="inline-flex items-center gap-1.5 text-[var(--accent-color)] hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>PELAJARI SPESIFIKASI LAYANAN</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <span className="text-muted-foreground/40 hidden sm:inline">•</span>

            <Link
              href={`/faq/${serviceProcess.relatedFaqSlug}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>TANYA JAWAB (FAQ) LAYANAN INI</span>
            </Link>

            <span className="text-muted-foreground/40 hidden sm:inline">•</span>

            <Link
              href={`/portofolio/${serviceProcess.relatedPortfolioSlug}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>LIHAT PORTOFOLIO TERKAIT</span>
            </Link>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. DETAIL 4 FASE ALUR KERJA IMPLEMENTASI
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Peta Jalan Proyek (Roadmap)
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
              Alur Pengerjaan 4 Fase Langkah-demi-Langkah
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-3xl" style={BODY}>
              Setiap fase dirancang dengan batasan deliverable yang jelas. Anda memegang kendali penuh melalui tinjauan sprint rutin sebelum melangkah ke tahap berikutnya.
            </p>
          </div>

          <div className="space-y-6">
            {serviceProcess.phases.map((phase) => (
              <div
                key={phase.phaseNumber}
                className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-xs transition-colors hover:border-[var(--accent-color)] space-y-6 group"
              >
                {/* Header Fase */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-mono font-bold text-black px-2.5 py-1 rounded bg-[var(--accent-color)] shadow-xs"
                      style={MONO}
                    >
                      {phase.phaseNumber}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground" style={DISPLAY}>
                      {phase.name}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-muted text-muted-foreground border border-border w-fit">
                    <Clock className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                    <span>Estimasi: {phase.timeline}</span>
                  </div>
                </div>

                {/* Sasaran Strategis */}
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-color)] font-mono">
                    Sasaran Strategis Fase Ini:
                  </p>
                  <p className="text-sm md:text-base text-foreground font-medium leading-relaxed" style={BODY}>
                    {phase.objective}
                  </p>
                </div>

                {/* Dua Kolom: Kegiatan Rekayasa & Peran Klien */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                  {/* Kegiatan Rekayasa BlankOn */}
                  <div className="lg:col-span-7 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                      Kegiatan Rekayasa Tim BlankOn:
                    </p>
                    <ul className="space-y-2 text-xs md:text-sm text-foreground" style={BODY}>
                      {phase.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Keterlibatan & Peran Klien */}
                  <div className="lg:col-span-5 p-4 md:p-5 rounded-xl border border-border bg-background space-y-2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase font-mono">
                      <Briefcase className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                      <span>Peran & Keterlibatan Anda:</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground text-justify" style={BODY}>
                      {phase.clientRole}
                    </p>
                  </div>
                </div>

                {/* Deliverable Hasil Nyata Fase */}
                <div className="pt-4 border-t border-border/80 flex flex-col md:flex-row md:items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono shrink-0">
                    Deliverables Serah Terima:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 text-xs font-semibold text-foreground font-mono"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. GERBANG KENDALI MUTU (QUALITY GATES) & KESIAPAN KLIEN
            ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-border">
          {/* Kolom Kiri: Standar Gerbang Kendali Mutu */}
          <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl border border-border bg-card space-y-5">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
                KONTROL KELAYAKAN PROYEK
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground" style={DISPLAY}>
                Standar Gerbang Kendali Mutu (Quality Gates)
              </h3>
              <p className="text-xs text-muted-foreground" style={BODY}>
                Proyek tidak diizinkan berpindah ke fase berikutnya sebelum seluruh kriteria di bawah ini terpenuhi 100%:
              </p>
            </div>

            <ul className="space-y-3 pt-2 text-xs md:text-sm text-foreground" style={BODY}>
              {serviceProcess.qualityGates.map((gate, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-muted/20">
                  <CheckSquare className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{gate}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan: Prasyarat Kesiapan Klien */}
          <div className="lg:col-span-6 p-6 md:p-8 rounded-2xl border border-border bg-card space-y-5">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
                PERSIAPAN AWAL
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground" style={DISPLAY}>
                Apa yang Perlu Disiapkan Calon Klien?
              </h3>
              <p className="text-xs text-muted-foreground" style={BODY}>
                Untuk mempercepat proses kick-off proyek, berikut dokumen dan akses dasar yang dianjurkan disiapkan:
              </p>
            </div>

            <ul className="space-y-3 pt-2 text-xs md:text-sm text-foreground" style={BODY}>
              {serviceProcess.clientPreparation.map((prep, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-muted/20">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-color)]/20 text-[var(--accent-color)] font-mono text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="leading-relaxed">{prep}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. MANAJEMEN RISIKO TEKNIS & MITIGASI
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Manajemen Risiko Proaktif
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Bagaimana Kami Mengantisipasi Risiko Teknis?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground" style={BODY}>
              Setiap proyek rekayasa perangkat lunak memiliki tantangan teknis. Berikut cara kami mencegah potensi kegagalan sejak dini:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {serviceProcess.riskManagement.map((risk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-3.5"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase font-mono">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span>Potensi Risiko #{idx + 1}:</span>
                </div>
                <p className="text-xs md:text-sm font-semibold text-foreground" style={DISPLAY}>
                  {risk.risk}
                </p>
                <div className="p-3.5 rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/5 space-y-1">
                  <p className="text-[10px] font-bold uppercase text-[var(--accent-color)] font-mono">
                    Langkah Mitigasi BlankOn:
                  </p>
                  <p className="text-xs text-foreground leading-relaxed text-justify" style={BODY}>
                    {risk.mitigation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. PENGALIH CEPAT ALUR KERJA LAYANAN LAINNYA
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Metodologi Bidang Lain
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Jelajahi Alur Kerja Layanan Lainnya
            </h2>
            <p className="text-xs text-muted-foreground" style={BODY}>
              Setiap bidang keahlian memiliki protokol rekayasa yang unik. Pilih layanan di bawah untuk melihat metodologi implementasinya:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allServicesList.map((item) => {
              const isCurrent = item.slug === serviceProcess.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/proses/${item.slug}`}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 group ${
                    isCurrent
                      ? "border-[var(--accent-color)] bg-[var(--accent-color)]/5 ring-1 ring-[var(--accent-color)]"
                      : "border-border bg-card/60 hover:border-foreground/30 hover:bg-card"
                  }`}
                >
                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[10px] font-mono text-muted-foreground" style={MONO}>
                      KODE {item.id}
                    </span>
                    <p
                      className={`text-xs font-semibold truncate ${
                        isCurrent
                          ? "text-[var(--accent-color)]"
                          : "text-foreground group-hover:text-[var(--accent-color)]"
                      }`}
                      style={DISPLAY}
                    >
                      {item.title}
                    </p>
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isCurrent
                        ? "text-[var(--accent-color)]"
                        : "text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. CALL TO ACTION / MEMULAI PROYEK BERSAMA KAMI
            ───────────────────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-[var(--accent-color)]/30 bg-card p-6 md:p-10 space-y-6 relative overflow-hidden shadow-xl">
          <div className="space-y-3 max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/40 bg-[var(--accent-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-color)]"
              style={MONO}
            >
              MEMULAI KOLABORASI
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight" style={DISPLAY}>
              Siap Menerapkan Metodologi Ini pada Proyek Anda?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
              Jadwalkan sesi konsultasi awal tanpa komitmen untuk membahas kelayakan teknis, perkiraan linimasa implementasi, dan penyusunan dokumen proposal solusi resmi.
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
              <span>Jadwalkan Sesi Konsultasi Metodologi</span>
              <ArrowUpRight className="h-4 w-4 text-black" />
            </Link>

            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-background hover:border-foreground/40 font-semibold text-xs md:text-sm text-foreground transition-colors cursor-pointer"
              style={BODY}
            >
              <MessageSquare className="h-4 w-4 text-[var(--accent-color)]" />
              <span>Ajukan Permintaan Proposal Proyek</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

