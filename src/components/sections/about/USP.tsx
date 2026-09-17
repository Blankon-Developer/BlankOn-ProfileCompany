"use client";

import { DISPLAY, BODY, MONO } from "@/lib/utils";

export default function USP() {
  const usps = [
    {
      title: "Pemahaman Bisnis",
      desc: "Kami berusaha memahami konteks dan tujuan bisnis sebelum menentukan solusi teknis.",
      number: "01",
      size: "large",
    },
    {
      title: "Satu Tim dari Awal",
      desc: "Design, product, dan development bekerja dalam satu proses sehingga keputusan dapat dibuat dengan lebih terarah.",
      number: "02",
      size: "small",
    },
    {
      title: "Transparan dalam Proses",
      desc: "Scope, tahapan, prioritas, dan perkembangan proyek dibicarakan secara terbuka agar tidak ada ekspektasi yang berbeda di tengah jalan.",
      number: "03",
      size: "small",
    },
    {
      title: "Dibangun untuk Berkembang",
      desc: "Kami mempertimbangkan kebutuhan jangka panjang agar produk tidak cepat menjadi hambatan ketika bisnis dan penggunanya berkembang.",
      number: "04",
      size: "wide",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-24 md:py-12">
      <div className="mx-auto max-w-8xl px-6 md:px-28">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-foreground" />

              <span
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
                style={MONO}
              >
                Kenapa Blankon Tech
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <h2
              className="max-w-7xl text-justify text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground md:text-4xl lg:text-[48px]"
              style={DISPLAY}
            >
              Partner yang ikut memikirkan produk, bukan hanya mengerjakan task.
            </h2>

            <p
              className="mt-7 max-w-7xl text-justify text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
              style={BODY}
            >
              Kami ingin memahami alasan di balik sebuah kebutuhan sebelum
              menentukan solusi. Dengan begitu, produk yang dibangun tidak
              hanya selesai, tetapi benar-benar relevan untuk digunakan.
            </p>
          </div>
        </div>

        {/* Bento */}
        <div className="mt-20 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-12 md:grid-rows-[260px_260px]">
          {/* Large */}
          <article className="group relative overflow-hidden border border-border bg-background p-7 md:col-span-7 md:row-span-2 md:p-10">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span
                  className="text-xs text-muted-foreground"
                  style={MONO}
                >
                  {usps[0].number}
                </span>

                <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div>
                <h3
                  className="max-w-full text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground md:text-4xl"
                  style={DISPLAY}
                >
                  {usps[0].title}
                </h3>

                <p
                  className="mt-5 max-w-full text-justify text-sm leading-6 text-muted-foreground md:text-base md:leading-7"
                  style={BODY}
                >
                  {usps[0].desc}
                </p>
              </div>
            </div>
          </article>

          {/* Small */}
          <article className="group border border-border bg-background p-7 transition-colors duration-300 hover:bg-foreground hover:text-background md:col-span-5 md:p-8">
            <div className="flex h-full flex-col justify-between">
              <span
                className="text-xs text-muted-foreground group-hover:text-background/60"
                style={MONO}
              >
                {usps[1].number}
              </span>

              <div>
                <h3
                  className="text-xl font-medium tracking-[-0.02em] md:text-2xl"
                  style={DISPLAY}
                >
                  {usps[1].title}
                </h3>

                <p
                  className="mt-3 max-w-full text-sm leading-6 text-justify text-muted-foreground group-hover:text-background/70"
                  style={BODY}
                >
                  {usps[1].desc}
                </p>
              </div>
            </div>
          </article>

          {/* Small */}
          <article className="group border border-border bg-background p-7 transition-colors duration-300 hover:bg-foreground hover:text-background md:col-span-5 md:p-8">
            <div className="flex h-full flex-col justify-between">
              <span
                className="text-xs text-muted-foreground group-hover:text-background/60"
                style={MONO}
              >
                {usps[2].number}
              </span>

              <div>
                <h3
                  className="text-xl font-medium tracking-[-0.02em] md:text-2xl"
                  style={DISPLAY}
                >
                  {usps[2].title}
                </h3>

                <p
                  className="mt-3 max-w-full text-justify text-sm leading-6 text-muted-foreground group-hover:text-background/70"
                  style={BODY}
                >
                  {usps[2].desc}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom statement */}
        <div className="mt-3 border border-border bg-foreground px-7 py-8 text-background md:px-10 md:py-9">
          <div className="grid gap-5 md:grid-cols-12 md:items-center">
            <span
              className="text-xs text-background/50 md:col-span-1"
              style={MONO}
            >
              {usps[3].number}
            </span>

            <h3
              className="text-xl font-medium tracking-[-0.02em] md:col-span-4 md:text-2xl"
              style={DISPLAY}
            >
              {usps[3].title}
            </h3>

            <p
              className="max-w-full text-justify text-sm leading-6 text-background/65 md:col-span-6 md:text-base md:leading-7"
              style={BODY}
            >
              {usps[3].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
