"use client";

import { DISPLAY, BODY, MONO, HEADING } from "@/lib/utils";
import Image from "next/image";
import { Sparkles, Hexagon, Component, Palette, Target, Download, BookOpen } from "lucide-react";
import Link from "next/link";

export default function LogoPhilosophy() {
  return (
    <section className="relative overflow-hidden py-24 md:py-12 px-6 md:px-10 max-w-8xl mx-auto border-t border-[var(--accent-color)]">

      {/* Background accents */}
      <div className="absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[1000px] md:h-[1000px] opacity-15 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-dashed border-accent-color animate-[spin_40s_linear_infinite]" style={{ backgroundColor: "var(--accent-color)" }} />
        <div className="absolute inset-4 rounded-full border border-accent-color/10 animate-[spin_30s_linear_infinite_reverse]" style={{ backgroundColor: "var(--accent-color)" }} />
        <div className="absolute inset-32 rounded-full border border-dashed border-accent-color/20 animate-[spin_50s_linear_infinite]" style={{ backgroundColor: "var(--accent-color)" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 md:mb-6 pb-4 border-b border-accent">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-none bg-accent-color" style={{ backgroundColor: "var(--accent-color)" }} />
          <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
            IDENTITAS BRAND
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={DISPLAY}>
          Filosofi Logo <br className="hidden sm:block" />
          <span className="text-muted-foreground">BlankOn Digital Tech</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed" style={BODY}>
          Tersusun dari bentuk geometris sederhana yang menyatu menjadi identitas kuat.
          Kesederhanaan ini mencerminkan cara kami memandang teknologi:{" "}
          <strong className="text-foreground font-semibold">
            teknologi canggih tidak harus terasa rumit.
          </strong>
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center">

        {/* Left Column (Diagram Items) */}
        <div className="space-y-12 lg:space-y-24 order-2 lg:order-1 relative">
          {/* Tech Connection Line (Desktop) */}
          <div className="hidden lg:block absolute right-[-40px] top-1/2 -translate-y-1/2 w-[30px] h-[100%] border-r border-t border-b border-dashed" style={{ borderColor: "var(--accent-color)" }} />

          {/* Item 1 */}
          <div className="relative group text-center lg:text-right">
            <div className="hidden lg:block absolute right-[-40px] top-1/2 w-[40px] h-px" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 mb-4 text-foreground group-hover:scale-110 transition-transform lg:ml-auto">
              <Component size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={HEADING}>Makna Bentuk</h3>
            <p className="text-sm text-justify text-muted-foreground leading-relaxed" style={BODY}>
              Bentuk membulat yang menyerupai inisial dari huruf <strong className="text-foreground">B</strong> dan <strong className="text-foreground">D</strong>.
              Karakter ini menggambarkan pendekatan fungsional, sederhana, dan mudah digunakan.
              Susunan modularnya menunjukkan sistem yang terus berkembang dan bekerja sebagai satu kesatuan.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative group text-center lg:text-right">
            <div className="hidden lg:block absolute right-[-40px] top-1/2 w-[40px] h-px" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 mb-4 text-foreground group-hover:scale-110 transition-transform lg:ml-auto">
              <Hexagon size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={HEADING}>Ruang Kosong (Blank)</h3>
            <p className="text-sm text-justify text-muted-foreground leading-relaxed" style={BODY}>
              Bagian ruang kosong adalah elemen penting yang merepresentasikan
              <strong className="text-foreground"> blank</strong> sebagai sebuah titik awal yang terbuka.
              Sesuatu yang belum terbentuk bukanlah kekosongan, tetapi kesempatan untuk ide dan inovasi baru.
            </p>
          </div>
        </div>

        {/* Center Column (Logo) */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center py-10 lg:py-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
            {/* Glowing Aura behind logo */}
            <div />

            <Image
              src="/BlankOn Logo.svg"
              alt="BlankOn Logo Light"
              width={220}
              height={220}
              className="dark:hidden relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <Image
              src="/BlankOn Logo Dark-Mode.svg"
              alt="BlankOn Logo Dark"
              width={220}
              height={220}
              className="hidden dark:block relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Corner UI Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/30" />
          </div>
        </div>

        {/* Right Column (Diagram Items) */}
        <div className="space-y-12 lg:space-y-24 order-3 relative">
          {/* Tech Connection Line (Desktop) */}
          <div className="hidden lg:block absolute left-[-40px] top-1/2 -translate-y-1/2 w-[30px] h-[100%] border-l border-t border-b border-dashed" style={{ borderColor: "var(--accent-color)" }} />

          {/* Item 3 */}
          <div className="relative group text-center lg:text-left">
            <div className="hidden lg:block absolute left-[-40px] top-1/2 w-[40px] h-px" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 mb-4 text-foreground group-hover:scale-110 transition-transform">
              <Palette size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={HEADING}>Makna Warna</h3>
            <ul className="text-sm text-justify text-muted-foreground leading-relaxed space-y-2 inline-block lg:block" style={BODY}>
              <li><strong className="text-foreground">Hitam:</strong> Tegas, profesional, kapabilitas teknis.</li>
              <li><strong className="text-foreground">Hijau:</strong> Pertumbuhan, inovasi, dampak nyata.</li>
              <li><strong className="text-foreground">Kuning:</strong> Energi dinamis, kreativitas, optimisme.</li>
              <li><strong className="text-foreground">Transparan:</strong> Keterbukaan untuk kemungkinan baru.</li>
            </ul>
          </div>

          {/* Item 4 */}
          <div className="relative group text-center lg:text-left">
            <div className="hidden lg:block absolute left-[-40px] top-1/2 w-[40px] h-px" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 mb-4 text-foreground group-hover:scale-110 transition-transform">
              <Target size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={HEADING}>Filosofi Utama</h3>
            <p className="text-sm text-justify text-muted-foreground leading-relaxed" style={BODY}>
              Perusahaan yang mengubah ide menjadi solusi digital sederhana dan fungsional.
              Teknologi bukanlah sesuatu yang eksklusif, melainkan alat untuk membantu bisnis melaju lebih jauh ke depan.
            </p>
            <p className="text-sm font-semibold text-foreground mt-3 italic" style={DISPLAY}>
              “Mengubah ruang kosong menjadi kemungkinan.”
            </p>
          </div>
        </div>

      </div>

      {/* Download Action */}
      <div className="relative z-10 mt-16 md:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="/BlankOn Logo.svg"
          download="BlankOn-Logo-Light.svg"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 w-full sm:w-auto border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors duration-300 font-semibold text-sm uppercase tracking-widest"
          style={MONO}
        >
          <Download size={16} />
          Unduh Logo (Light)
        </a>
        <a
          href="/BlankOn Logo Dark-Mode.svg"
          download="BlankOn-Logo-Dark.svg"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 w-full sm:w-auto border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors duration-300 font-semibold text-sm uppercase tracking-widest"
          style={MONO}
        >
          <Download size={16} />
          Unduh Logo (Dark)
        </a>
        <Link
          href="/panduan-logo"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 w-full sm:w-auto text-white transition-opacity duration-300 font-semibold text-sm uppercase tracking-widest"
          style={{ ...MONO, backgroundColor: "var(--accent-color)" }}
        >
          <BookOpen size={16} />
          Panduan Penggunaan Logo
        </Link>
      </div>

    </section>
  );
}
