"use client";

import { DISPLAY, BODY, MONO } from "@/lib/utils";
import Image from "next/image";

export default function USP() {
  const usps = [
    {
      title: "Pemahaman Bisnis",
      desc: "Kami berusaha memahami konteks dan tujuan bisnis sebelum menentukan solusi teknis.",
      number: "01",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4jo4IJXBjmWcPy_fB96KFHt5-fk611B96zBt1VZxow8YIAaJTpqQ4hw&s=10",
    },
    {
      title: "Satu Tim dari Awal",
      desc: "Design, product, dan development bekerja dalam satu proses sehingga keputusan dapat dibuat dengan lebih terarah.",
      number: "02",
      image:
        "https://youngster.id/wp-content/uploads/2024/02/employee-engagement.jpg",
    },
    {
      title: "Transparan dalam Proses",
      desc: "Scope, tahapan, prioritas, dan perkembangan proyek dibicarakan secara terbuka agar tidak ada ekspektasi yang berbeda di tengah jalan.",
      number: "03",
      image:
        "https://unipasby.ac.id/ckeditor/images-media/1758079285_3%20Kunci%20Utama%20Meningkatkan%20Keterlibatan%20dan%20Kepuasan%20Kerja%20Karyawan%20di%20Perusahaan%20Anda.png",
    },
    {
      title: "Dibangun untuk Berkembang",
      desc: "Kami mempertimbangkan kebutuhan jangka panjang agar produk tidak cepat menjadi hambatan ketika bisnis dan penggunanya berkembang.",
      number: "04",
      image:
        "https://www.gadjian.com/blog/wp-content/uploads/2020/03/2-Jenis-Reward-Karyawan-yang-Biasa-Diterapkan-HRD-Perusahaan-jpg.webp",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-black md:py-12">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-color) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-2xl border border-muted-foreground/20 bg-[var(--accent-color)]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-[400px] w-[400px] rounded-2xl border border-muted-foreground/20 bg-[var(--accent-color)]/10"
      />

      <div className="relative mx-auto max-w-8xl px-6 md:px-28">
        {/* =========================
            HEADER
        ========================== */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          {/* Label */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent-color)]" />

              <span
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground"
                style={MONO}
              >
                Kenapa Blankon Tech
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="md:col-span-9">
            <h2
              className="max-w-6xl text-justify text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground md:text-5xl lg:text-[56px]"
              style={DISPLAY}
            >
              Partner yang ikut memikirkan solusi, bukan hanya mengerjakan task dan permintaan.
            </h2>

            <p
              className="mt-7 max-w-full text-justify text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
              style={BODY}
            >
              Kami ingin memahami alasan di balik sebuah kebutuhan sebelum
              menentukan solusi. Dengan begitu, produk yang dibangun tidak
              hanya selesai, tetapi benar-benar relevan untuk digunakan.
            </p>
          </div>
        </div>

        {/* =========================
            BENTO GRID
        ========================== */}
        <div className="mt-16 grid grid-cols-1 gap-3 md:mt-20 md:grid-cols-12 md:grid-rows-[280px_280px]">
          {/* =================================
              CARD 01 — LARGE
          ================================== */}
          <article className="group relative min-h-[520px] overflow-hidden border border-[var(--accent-color)]/25 bg-black/50 dark:bg-black/50 md:col-span-7 md:row-span-2">
            {/* Image */}
            <Image
              src={usps[0].image}
              alt={usps[0].title}
              fill
              priority
              className="object-cover opacity-80 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-black via-white/15 to-[var(--accent-color)]/35" />

            {/* Subtle color tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-[var(--accent-color)] opacity-[0.15]" />

            {/* Grid detail */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--accent-color) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--accent-color) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />

            {/* Top content */}
            <div className="relative z-10 flex items-start justify-between p-7 md:p-10">
              <span
                className="text-xs tracking-wider text-white/60"
                style={MONO}
              >
                {usps[0].number}
              </span>

              {/* Arrow — tetap dipertahankan */}
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm text-white/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/50 group-hover:bg-white group-hover:text-black"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-10">
              <div className="max-w-2xl">
                <h3
                  className="text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-5xl"
                  style={DISPLAY}
                >
                  {usps[0].title}
                </h3>

                <p
                  className="mt-5 max-w-full text-justify text-sm leading-6 text-white/65 md:text-base md:leading-7"
                  style={BODY}
                >
                  {usps[0].desc}
                </p>
              </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-700 group-hover:w-full" />
          </article>

          {/* =================================
              CARD 02
          ================================== */}
          <article className="group relative min-h-[280px] overflow-hidden border border-[var(--accent-color)] bg-black md:col-span-5">
            <Image
              src={usps[1].image}
              alt={usps[1].title}
              fill
              className="object-cover opacity-65 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-lime-400/[0.07]" />

            {/* Top content */}
            <div className="relative z-10 flex items-start justify-between p-7 md:p-8">
              <span
                className="text-xs tracking-wider text-white/55"
                style={MONO}
              >
                {usps[1].number}
              </span>

              <span
                className="text-sm text-white/55 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-8">
              <h3
                className="text-2xl font-medium tracking-[-0.03em] text-white"
                style={DISPLAY}
              >
                {usps[1].title}
              </h3>

              <p
                className="mt-3 max-w-xl text-justify text-sm leading-6 text-white/60"
                style={BODY}
              >
                {usps[1].desc}
              </p>
            </div>

            {/* Hover line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-700 group-hover:w-full" />
          </article>

          {/* =================================
              CARD 03
          ================================== */}
          <article className="group relative min-h-[280px] overflow-hidden border border-[var(--accent-color)] bg-black md:col-span-5">
            <Image
              src={usps[2].image}
              alt={usps[2].title}
              fill
              className="object-cover opacity-65 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-400/[0.06]" />

            {/* Top content */}
            <div className="relative z-10 flex items-start justify-between p-7 md:p-8">
              <span
                className="text-xs tracking-wider text-white/55"
                style={MONO}
              >
                {usps[2].number}
              </span>

              <span
                className="text-sm text-white/55 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-8">
              <h3
                className="text-2xl font-medium tracking-[-0.03em] text-white"
                style={DISPLAY}
              >
                {usps[2].title}
              </h3>

              <p
                className="mt-3 max-w-xl text-justify text-sm leading-6 text-white/60"
                style={BODY}
              >
                {usps[2].desc}
              </p>
            </div>

            {/* Hover line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full" />
          </article>
        </div>

        {/* =================================
            CARD 04 — FULL WIDTH
        ================================== */}
        <article className="group relative mt-3 min-h-[210px] overflow-hidden border border-[var(--accent-color)] bg-black">
          {/* Image */}
          <Image
            src={usps[3].image}
            alt={usps[3].title}
            fill
            className="object-cover opacity-55 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-color)]/25 via-transparent to-[var(--accent-color)]/40" />

          {/* Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--accent-color) 1px, transparent 1px),
                linear-gradient(to bottom, var(--accent-color) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 grid min-h-[210px] gap-6 px-7 py-8 md:grid-cols-12 md:items-center md:px-10 md:py-10">
            {/* Number */}
            <span
              className="text-xs tracking-wider text-white/40 md:col-span-1"
              style={MONO}
            >
              {usps[3].number}
            </span>

            {/* Title */}
            <div className="md:col-span-4">
              <h3
                className="text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl"
                style={DISPLAY}
              >
                {usps[3].title}
              </h3>
            </div>

            {/* Description */}
            <p
              className="max-w-2xl text-justify text-sm leading-6 text-white/55 md:col-span-5 md:text-base md:leading-7"
              style={BODY}
            >
              {usps[3].desc}
            </p>

            {/* Arrow */}
            <div className="flex md:col-span-2 md:justify-end">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-sm text-white/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/50 group-hover:bg-white group-hover:text-black"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-lime-400 to-yellow-400 transition-all duration-700 group-hover:w-full" />
        </article>

        {/* Small footer note */}
        <div className="mt-5 flex items-center justify-between">
          <span
            className="text-[12px] uppercase tracking-[0.2em] text-foreground"
            style={MONO}
          >
            © 2026 BlankOn Digital Tech
          </span>

          <span
            className="text-[9px] uppercase tracking-[0.2em] text-foreground"
            style={MONO}
          >
            01 — 04
          </span>
        </div>
      </div>
    </section>
  );
}
