"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  Search,
  HelpCircle,
  Calendar,
  MessageSquare,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { ServiceFAQData, servicesFAQData } from "@/lib/services-faq-data";
import { DISPLAY, BODY, MONO } from "@/lib/utils";

interface ServiceFAQDetailClientProps {
  serviceFAQ: ServiceFAQData;
}

export default function ServiceFAQDetailClient({ serviceFAQ }: ServiceFAQDetailClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Konsep & Kebutuhan", "Teknis & Keamanan", "Biaya & Timeline", "Garansi & Legal"];

  const filteredFAQs = useMemo(() => {
    return serviceFAQ.faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "Semua" || faq.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [serviceFAQ.faqs, selectedCategory, searchQuery]);

  const allServicesList = useMemo(() => {
    return Object.values(servicesFAQData);
  }, []);

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NAVIGATION / BREADCRUMB
          ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-8xl px-6 lg:px-28 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
            style={MONO}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>KEMBALI KE PUSAT BANTUAN (FAQ UMUM)</span>
          </Link>

          <div className="flex items-center gap-2" style={MONO}>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10 text-[var(--accent-color)] font-semibold">
              FAQ LAYANAN: {serviceFAQ.id} / 11
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-28 py-12 md:py-16 space-y-16">
        {/* ─────────────────────────────────────────────────────────────
            2. HEADER RINGKASAN & DESKRIPSI
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]"
              style={MONO}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {serviceFAQ.eyebrow}
            </span>
            <h1
              className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]"
              style={DISPLAY}
            >
              Tanya Jawab Terkurasi: {serviceFAQ.title}
            </h1>
            <p
              className="max-w-4xl text-base md:text-lg leading-relaxed text-muted-foreground"
              style={BODY}
            >
              {serviceFAQ.shortDesc} Pelajari aspek penting sebelum memulai proyek bersama tim BlankOn Digital Tech.
            </p>
          </div>

          {/* Quick Nav Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/layanan/${serviceFAQ.relatedServiceSlug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-color)] hover:underline"
              style={MONO}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>BACA EDUKASI LENGKAP LAYANAN INI</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <span className="text-muted-foreground/40 hidden sm:inline">•</span>

            <Link
              href={`/portofolio/${serviceFAQ.relatedPortfolioSlug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              style={MONO}
            >
              <span>LIHAT PORTOFOLIO TERKAIT</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. FILTER KATEGORI & PENCARIAN INTERAKTIF
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-5 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Kategori Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      isActive
                        ? "bg-[var(--accent-color)] text-black border-[var(--accent-color)] shadow-xs"
                        : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                    style={BODY}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Input Pencarian */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari topik pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs border border-border bg-background rounded-lg outline-none transition-colors focus:border-[var(--accent-color)] text-foreground placeholder:text-muted-foreground/60"
                style={BODY}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground" style={MONO}>
            <span>
              MENAMPILKAN {filteredFAQs.length} DARI {serviceFAQ.faqs.length} PERTANYAAN
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[var(--accent-color)] hover:underline cursor-pointer"
              >
                Hapus Pencarian
              </button>
            )}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. ACCORDION DAFTAR PERTANYAAN EDUKATIF
            ───────────────────────────────────────────────────────────── */}
        <section>
          {filteredFAQs.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-dashed border-border space-y-3">
              <HelpCircle className="h-8 w-8 text-muted-foreground mx-auto" />
              <p className="text-sm font-semibold text-foreground" style={DISPLAY}>
                Tidak ada pertanyaan yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
              </p>
              <p className="text-xs text-muted-foreground max-w-md mx-auto" style={BODY}>
                Coba gunakan istilah yang lebih umum atau hubungi tim konsultan kami langsung untuk berdialog mengenai kebutuhan Anda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
                className="mt-2 text-xs font-semibold text-[var(--accent-color)] underline cursor-pointer"
                style={MONO}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <Accordion.Root type="single" collapsible className="w-full divide-y divide-border border-y border-border">
              {filteredFAQs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden group"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger
                      className="flex flex-1 items-start justify-between py-6 text-left font-bold text-base md:text-lg hover:text-[#84c803] dark:hover:text-[#F5C700] transition-colors gap-4 cursor-pointer text-foreground [&[data-state=open]>span>svg]:rotate-45"
                      style={DISPLAY}
                    >
                      <div className="space-y-1.5 pr-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground font-semibold inline-block">
                          {faq.category}
                        </span>
                        <p className="text-base md:text-lg font-bold text-foreground group-hover:text-[var(--accent-color)] transition-colors">
                          {faq.q}
                        </p>
                      </div>
                      <span className="p-1 rounded-md text-muted-foreground group-hover:text-[var(--accent-color)] shrink-0 mt-1">
                        <Plus size={20} className="transition-transform duration-300" />
                      </span>
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
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. NAVIGASI FAQ LAYANAN LAINNYA (QUICK SWITCHER)
            ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 pt-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]" style={MONO}>
              — Jelajahi Layanan Lain
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground" style={DISPLAY}>
              Pusat Tanya Jawab Layanan Lainnya
            </h2>
            <p className="text-xs text-muted-foreground" style={BODY}>
              Setiap kategori layanan memiliki cakupan teknis yang spesifik. Pilih layanan di bawah untuk membaca tanya jawab terkait:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allServicesList.map((item) => {
              const isCurrent = item.slug === serviceFAQ.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/faq/${item.slug}`}
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
                        isCurrent ? "text-[var(--accent-color)]" : "text-foreground group-hover:text-[var(--accent-color)]"
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
            6. CALL TO ACTION / BUTUH DISKUSI KHUSUS?
            ───────────────────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-[var(--accent-color)]/30 bg-card p-6 md:p-10 space-y-6 relative overflow-hidden shadow-xl">
          <div className="space-y-3 max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/40 bg-[var(--accent-color)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-color)]"
              style={MONO}
            >
              KONSULTASI SPESIFIK
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight" style={DISPLAY}>
              Punya Pertanyaan Khusus Terkait Proyek Anda?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed" style={BODY}>
              Setiap model bisnis memiliki arsitektur unik. Tim Solution Architect BlankOn siap menjawab pertanyaan teknis mendalam dan memberikan rekomendasi solusi langsung tanpa biaya komitmen awal.
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
              <span>Jadwalkan Sesi Tanya Jawab 1-on-1</span>
              <ArrowUpRight className="h-4 w-4 text-black" />
            </Link>

            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-background hover:border-foreground/40 font-semibold text-xs md:text-sm text-foreground transition-colors cursor-pointer"
              style={BODY}
            >
              <MessageSquare className="h-4 w-4 text-[var(--accent-color)]" />
              <span>Kirim Pertanyaan Tertulis</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

