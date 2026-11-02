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
  CreditCard,
  AlertCircle,
  HelpCircle,
  BookOpen,
  GitBranch,
  Briefcase,
  Layers,
  Calendar,
  MessageSquare,
  FileText,
  BadgePercent
} from "lucide-react";
import { ServicePricingData, servicesPricingData } from "@/lib/services-pricing-data";
import { DISPLAY, BODY, MONO } from "@/lib/utils";

interface ServicePricingDetailClientProps {
  servicePricing: ServicePricingData;
}

export default function ServicePricingDetailClient({
  servicePricing,
}: ServicePricingDetailClientProps) {
  const allServicesList = useMemo(() => {
    return Object.values(servicesPricingData);
  }, []);

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION / BREADCRUMB
          ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-8xl px-6 lg:px-28 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link
            href="/harga"
            className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
            style={MONO}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>KEMBALI KE DAFTAR HARGA UMUM</span>
          </Link>

          <div className="flex items-center gap-2" style={MONO}>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 text-[var(--accent-color)] font-semibold">
              HARGA LAYANAN: {servicePricing.id} / 11
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-28 py-12 md:py-16 space-y-20">
        {/* ─────────────────────────────────────────────────────────────
            2. HERO SECTION / PENGENALAN HARGA LAYANAN
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]"
              style={MONO}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {servicePricing.eyebrow}
            </span>
            <h1
              className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]"
              style={DISPLAY}
            >
              Estimasi Biaya: {servicePricing.title}
            </h1>
            <p
              className="max-w-4xl text-base md:text-lg leading-relaxed text-muted-foreground"
              style={BODY}
            >
              {servicePricing.shortDesc}
            </p>
          </div>

          {/* Banner Indikator Biaya & Transparansi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
            <div className="lg:col-span-5 p-6 rounded-2xl border border-[var(--accent-color)]/40 bg-[var(--accent-color)]/5 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-color)]" style={MONO}>
                  PATOKAN INVESTASI DASAR:
                </span>
                <p className="text-2xl md:text-3xl font-black text-foreground" style={DISPLAY}>
                  {servicePricing.startingPrice}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                  Biaya riil disesuaikan dengan cakupan fitur, integrasi sistem, dan target waktu peluncuran yang Anda tentukan.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono" style={MONO}>
                <BadgePercent className="h-4 w-4 text-[var(--accent-color)]" />
                <span>Termin Pembayaran 3 Tahap Berbasis Hasil Nyata</span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-3 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider" style={MONO}>
                <ShieldCheck className="h-4 w-4 text-[var(--accent-color)]" />
                Komitmen Transparansi Biaya BlankOn:
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify" style={BODY}>
                Setiap proposal biaya yang kami rilis memiliki rincian modul per baris, tanpa biaya tersembunyi (hidden fees), dan sudah mencakup lisensi komersial serta kepemilikan 100% kode sumber milik Anda sepenuhnya.
              </p>
            </div>
          </div>

          {/* Quick Action Links ke Halaman Terkait */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold" style={MONO}>
            <Link
              href={`/layanan/${servicePricing.relatedServiceSlug}`}
              className="inline-flex items-center gap-1.5 text-[var(--accent-color)] hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>SPESIFIKASI LAYANAN LENGKAP</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <span className="text-muted-foreground/40 hidden sm:inline">•</span>

            <Link
              href={`/proses/${servicePricing.relatedProcessSlug}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>METODOLOGI IMPLEMENTASI</span>
            </Link>

            <span className="text-muted-foreground/40 hidden sm:inline">•</span>

            <Link
              href={`/faq/${servicePricing.relatedFaqSlug}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>TANYA JAWAB (FAQ)</span>
            </Link>

            <span className="text-muted-foreground/40 hidden sm:inline">•</span>

            <Link
              href={`/portofolio/${servicePricing.relatedPortfolioSlug}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>STUDI KASUS PORTOFOLIO</span>
            </Link>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. EDUKASI LAYANAN: APA ITU & KAPAN DIBUTUHKAN
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Edukasi Solusi Bisnis
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
              Memahami Peran & Dampak Layanan Bagi Bisnis Anda
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-3xl" style={BODY}>
              Sebelum mengalokasikan anggaran, penting bagi pemangku kepentingan untuk memahami secara jernih masalah apa yang diselesaikan dan kapan waktu yang tepat untuk berinvestasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Apa itu layanan ini */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-color)]" style={MONO}>
                  DEFINISI FUNDAMENTAL
                </span>
                <h3 className="text-lg font-bold text-foreground" style={DISPLAY}>
                  Apa Sebenarnya Layanan Ini?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify" style={BODY}>
                  {servicePricing.educationalOverview.whatIsThisService}
                </p>
              </div>
            </div>

            {/* Card 2: Kapan bisnis membutuhkannya */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-color)]" style={MONO}>
                  INDIKATOR KEBUTUHAN
                </span>
                <h3 className="text-lg font-bold text-foreground" style={DISPLAY}>
                  Kapan Bisnis Membutuhkannya?
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground" style={BODY}>
                  {servicePricing.educationalOverview.whenDoYouNeedIt.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Nilai Bisnis / ROI */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-color)]" style={MONO}>
                  PENGEMBALIAN INVESTASI (ROI)
                </span>
                <h3 className="text-lg font-bold text-foreground" style={DISPLAY}>
                  Dampak Langsung ke Bisnis
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify" style={BODY}>
                  {servicePricing.educationalOverview.businessValue}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. DETAIL HARGA IMPLEMENTASI PROYEK-PROYEK YANG DAPAT DIBUAT
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Katalog Implementasi Proyek
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
              Pilihan Implementasi Proyek & Estimasi Biaya
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-3xl" style={BODY}>
              Setiap kategori proyek dirancang dengan ruang lingkup yang jelas. Pilih solusi yang paling mendekati target sistem yang ingin Anda bangun bersama tim kami:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicePricing.projects.map((project) => (
              <div
                key={project.id}
                className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-xs transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-lg flex flex-col justify-between gap-6 group relative"
              >
                {/* Header Proyek */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className="text-[11px] font-mono font-bold text-black px-2.5 py-0.5 rounded bg-[var(--accent-color)]"
                      style={MONO}
                    >
                      {project.badge}
                    </span>

                    <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono" style={MONO}>
                      <Clock className="h-3.5 w-3.5 text-[var(--accent-color)]" />
                      <span>Estimasi: {project.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug group-hover:text-[var(--accent-color)] transition-colors" style={DISPLAY}>
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 text-justify" style={BODY}>
                      {project.description}
                    </p>
                  </div>

                  {/* Rentang Harga */}
                  <div className="p-4 rounded-xl border border-border bg-muted/30 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground" style={MONO}>
                      ESTIMASI RENTANG BIAYA:
                    </span>
                    <p className="text-xl md:text-2xl font-black text-foreground" style={DISPLAY}>
                      {project.priceRange}
                    </p>
                    <p className="text-[11px] text-muted-foreground" style={BODY}>
                      Sasaran: <span className="text-foreground font-medium">{project.targetAudience}</span>
                    </p>
                  </div>

                  {/* Luaran Kunci (Deliverables) */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground" style={MONO}>
                      Cakupan Luaran (Deliverables Utama):
                    </p>
                    <ul className="space-y-2">
                      {project.keyDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground" style={BODY}>
                          <CheckCircle2 className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contoh Stack Teknologi */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground" style={MONO}>
                      Contoh Tumpukan Teknologi (Tech Stack):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStackSample.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono border border-border bg-background text-foreground"
                          style={MONO}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tombol Konsultasikan Proyek Ini */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Link
                    href={`/kontak/jadwal-temu?layanan=${servicePricing.slug}&proyek=${project.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all hover:opacity-90 shadow-sm cursor-pointer"
                    style={{
                      ...DISPLAY,
                      backgroundColor: "var(--accent-color)",
                      color: "black",
                    }}
                  >
                    <Calendar className="h-3.5 w-3.5 text-black" />
                    <span>Konsultasikan Proyek Ini</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-black" />
                  </Link>

                  <Link
                    href={`/kontak?layanan=${servicePricing.slug}&proyek=${project.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    style={MONO}
                  >
                    <span>Kirim Penawaran Formulir</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. FAKTOR PENENTU HARGA (COST DRIVERS)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Analisis Variabel Biaya
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
              Apa Saja yang Mempengaruhi Besaran Biaya Proyek?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-3xl" style={BODY}>
              Setiap proyek rekayasa perangkat lunak bersifat unik. Berikut adalah faktor teknis yang membedakan proyek skala kecil, menengah, hingga enterprise:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicePricing.costDrivers.map((driver, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-foreground" style={DISPLAY}>
                    {driver.factor}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      driver.impact === "Sangat Berpengaruh"
                        ? "bg-red-500/10 text-red-500 border border-red-500/30"
                        : driver.impact === "Tinggi"
                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/30"
                        : "bg-blue-500/10 text-blue-500 border border-blue-500/30"
                    }`}
                    style={MONO}
                  >
                    {driver.impact}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify" style={BODY}>
                  {driver.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. SKEMA PEMBAYARAN TERMIN & JAMINAN GARANSI
            ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-border">
          {/* Kolom Kiri: Termin Pembayaran */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
                — Skema Pembayaran
              </p>
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
                Termin Pembayaran Bertahap Berbasis Milestone
              </h2>
              <p className="text-xs text-muted-foreground" style={BODY}>
                Anda hanya membayar saat setiap tahap telah terbukti dan diverifikasi langsung:
              </p>
            </div>

            <div className="space-y-3.5">
              {servicePricing.paymentMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-border bg-muted/20 flex items-start gap-4"
                >
                  <span
                    className="shrink-0 px-3 py-1.5 rounded-lg font-mono font-black text-sm bg-[var(--accent-color)] text-black"
                    style={MONO}
                  >
                    {milestone.percentage}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-foreground" style={DISPLAY}>
                      {milestone.stage}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed" style={BODY}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Jaminan & Proteksi Klien */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
                — Jaminan Mutu
              </p>
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
                Proteksi & Garansi Resmi
              </h2>
              <p className="text-xs text-muted-foreground" style={BODY}>
                Standar perlindungan hak cipta dan jaminan kualitas setiap proyek:
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-4">
              {servicePricing.includedGuarantees.map((guarantee, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-foreground" style={BODY}>
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. NAVIGASI CEPAT ANTAR 11 LAYANAN (SWITCHER)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
                Eksplorasi Disiplin Lainnya
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-foreground" style={DISPLAY}>
                Lihat Harga & Estimasi untuk Layanan Lain
              </h2>
            </div>
            <span className="text-xs text-muted-foreground font-mono" style={MONO}>
              11 BIDANG SPESIALISASI TERSEDIA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allServicesList.map((item) => (
              <Link
                key={item.slug}
                href={`/harga/${item.slug}`}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 block ${
                  item.slug === servicePricing.slug
                    ? "border-[var(--accent-color)] bg-[var(--accent-color)]/10 font-bold"
                    : "border-border bg-card/40 hover:border-foreground/40 hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-muted-foreground" style={MONO}>
                    Layanan {item.id}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[var(--accent-color)]">
                    {item.startingPrice.split(" ")[0]} {item.startingPrice.split(" ")[1]}
                  </span>
                </div>
                <p className="text-xs font-semibold text-foreground truncate" style={DISPLAY}>
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. BOTTOM CTA: KONSULTASI SPESIFIKASI PROYEK
            ───────────────────────────────────────────────────────────── */}
        <section className="border border-foreground bg-card p-8 md:p-12 space-y-6 relative overflow-hidden shadow-xl">
          <div className="space-y-3 max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/40 bg-[var(--accent-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-color)]"
              style={MONO}
            >
              KONSULTASI ANGGARAN & SPESIFIKASI PROYEK
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight" style={DISPLAY}>
              Punya Anggaran Khusus atau Kebutuhan Arsitektur Unik?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
              Kami memahami setiap bisnis memiliki batasan anggaran dan timeline yang berbeda. Tim Solution Architect kami siap menyusun rekomendasi ruang lingkup (scope of work) yang paling efisien sesuai batas modal yang Anda miliki.
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
              href="/kontak"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-background hover:border-foreground/40 font-semibold text-xs md:text-sm text-foreground transition-colors cursor-pointer"
              style={BODY}
            >
              <FileText className="h-4 w-4 text-foreground" />
              <span>Kirim Rincian via Formulir</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

