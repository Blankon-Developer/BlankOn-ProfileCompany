"use client";

import { useEffect, useState } from "react";
import {
  Monitor,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
  Cpu,
  Blocks,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

import { DISPLAY, BODY, MONO } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Blockchain",
    eyebrow: "Blockchain",
    headline: "Solusi blockchain untuk kebutuhan yang memang membutuhkannya.",
    desc: "Mengembangkan aplikasi dan sistem berbasis blockchain dengan mempertimbangkan kebutuhan bisnis, model data, serta karakteristik transaksi yang digunakan. Fokus pada penerapan yang memiliki kebutuhan nyata terhadap transparansi, verifikasi, atau pencatatan data yang terdistribusi.",
    tags: ["Blockchain", "Smart Contract", "Web3", "dApp"],
    icon: <Blocks size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "02",
    title: "Cloud Computing",
    eyebrow: "Cloud Computing",
    headline: "Infrastruktur digital yang siap mendukung kebutuhan produk.",
    desc: "Membantu perusahaan membangun dan mengelola infrastruktur berbasis cloud untuk aplikasi, data, dan layanan digital. Solusi dirancang berdasarkan kebutuhan produk, mulai dari deployment dan penyimpanan hingga pengelolaan resource, keamanan, dan skalabilitas sistem.",
    tags: ["AWS", "Cloud", "DevOps", "Infrastructure"],
    icon: <Cloud size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "03",
    title: "Data Science",
    eyebrow: "Data Science",
    headline: "Mengubah data menjadi informasi yang dapat digunakan.",
    desc: "Membantu perusahaan mengolah dan menganalisis data untuk memahami pola, mengukur performa, serta mendukung pengambilan keputusan. Solusi dapat mencakup data processing, dashboard, analisis statistik, hingga pengembangan model prediktif sesuai kebutuhan bisnis.",
    tags: ["Data Analytics", "Python", "Dashboard", "Predictive"],
    icon: <BarChart3 size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "04",
    title: "Internet of Things",
    eyebrow: "Internet of Things",
    headline: "Menghubungkan perangkat, data, dan sistem dalam satu alur.",
    desc: "Membangun solusi IoT yang menghubungkan perangkat fisik dengan sistem digital untuk mengumpulkan, memantau, dan mengelola data. Cocok untuk kebutuhan monitoring, otomasi, tracking, maupun sistem yang membutuhkan interaksi antara perangkat dan aplikasi.",
    tags: ["IoT", "Sensors", "Monitoring", "Automation"],
    icon: <Cpu size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "05",
    title: "Machine Learning / AI",
    eyebrow: "Machine Learning / AI",
    headline: "AI yang diterapkan pada kebutuhan dan proses bisnis yang jelas.",
    desc: "Mengembangkan solusi berbasis machine learning dan AI untuk kebutuhan seperti automasi proses, klasifikasi data, pencarian informasi, rekomendasi, hingga pengolahan konten. Pendekatan dimulai dari permasalahan yang ingin diselesaikan, kemudian menentukan penerapan AI yang sesuai.",
    tags: ["AI", "Machine Learning", "Automation", "LLM"],
    icon: <Brain size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "06",
    title: "Mobile Development",
    eyebrow: "Mobile Development",
    headline: "Aplikasi mobile yang dirancang mengikuti kebutuhan pengguna.",
    desc: "Membangun aplikasi mobile untuk iOS dan Android dengan fokus pada alur penggunaan, kebutuhan fitur, serta integrasi dengan sistem yang sudah dimiliki bisnis. Pengembangan dilakukan secara bertahap agar produk dapat diuji, digunakan, dan dikembangkan sesuai kebutuhan.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    icon: <Smartphone size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "07",
    title: "Web Development",
    eyebrow: "Web Development",
    headline: "Website dan aplikasi web yang dibangun untuk kebutuhan bisnis nyata.",
    desc: "Merancang dan membangun website, web application, hingga platform digital dengan mempertimbangkan kebutuhan bisnis, pengguna, dan proses yang berjalan di dalamnya. Mulai dari company profile, customer portal, hingga sistem berbasis web yang membutuhkan integrasi dan pengembangan lebih lanjut.",
    tags: ["React", "Next.js", "Laravel", "API"],
    icon: <Monitor size={18} strokeWidth={1.5} />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextService = () => {
    setActiveService((current) => (current + 1) % services.length);
  };

  const prevService = () => {
    setActiveService(
      (current) => (current - 1 + services.length) % services.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextService, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const active = services[activeService];

  return (
    <section
      id="layanan"
      className="relative overflow-hidden bg-white py-24 dark:bg-black md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* SECTION INTRO */}
        <header className="mb-16 grid gap-10 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span
                className="h-[5px] w-[5px] rounded-full"
                style={{ backgroundColor: "var(--accent-color)" }}
              />

              <span
                className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/50 dark:text-white/50"
                style={MONO}
              >
                What we do
              </span>
            </div>

            <h2
              className="max-w-3xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.055em] text-black dark:text-white md:text-6xl lg:text-[5.2rem]"
              style={DISPLAY}
            >
              Dari kebutuhan bisnis menjadi produk digital yang nyata.
            </h2>
          </div>

          <div className="max-w-xs pb-1 md:text-right">
            <p
              className="text-sm leading-7 text-black/55 dark:text-white/50"
              style={BODY}
            >
              Kami membangun digital product dengan pendekatan yang
              mempertimbangkan kebutuhan bisnis, pengguna, dan teknologi yang
              benar-benar dibutuhkan.
            </p>
          </div>
        </header>

        {/* SERVICE */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${activeService * 100}%)`,
              }}
            >
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="w-full shrink-0"
                >
                  <div className="grid h-full min-h-[700px] overflow-hidden bg-white dark:bg-[#111111] lg:grid-cols-[1.15fr_0.85fr]">

                    {/* IMAGE */}
                    <div className="group relative min-h-[380px] overflow-hidden lg:min-h-[680px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className={`object-cover transition-all duration-[1400ms] ease-out ${activeService === index
                          ? "scale-100 opacity-100"
                          : "scale-[1.04] opacity-70"
                          }`}
                      />

                      {/* subtle image treatment */}
                      <div className="absolute inset-0 bg-black/10" />

                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

                      {/* BRAND */}
                      <div className="absolute left-7 top-7 flex items-center gap-3 md:left-10 md:top-10">
                        <Image
                          src="/BlankOn Logo.svg"
                          alt="BlankOn"
                          width={20}
                          height={20}
                          className="dark:hidden"
                        />

                        <Image
                          src="/BlankOn Logo Dark-Mode.svg"
                          alt="BlankOn"
                          width={20}
                          height={20}
                          className="hidden dark:block"
                        />

                        <span
                          className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/80"
                          style={MONO}
                        >
                          BlankOn Tech
                        </span>
                      </div>

                      {/* IMAGE META */}
                      <div className="absolute bottom-8 left-7 right-7 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
                        <div>
                          <div
                            className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/50"
                            style={MONO}
                          >
                            Layanan
                          </div>

                          <div
                            className="text-2xl font-medium tracking-tight text-white md:text-3xl group-hover:text-[var(--accent-color)] transition-all duration-300"
                            style={DISPLAY}
                          >
                            {service.title}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative flex flex-col bg-white dark:bg-black justify-between px-7 py-8 md:px-0 md:pl-12 md:py-0">
                      <div className="p-6 border border-black/20 dark:border-white/20">
                        {/* TOP META */}
                        <div className="mb-10 flex items-center justify-center rounded-md border border-[var(--accent-color)] dark:border-[var(--accent-color)]">
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-9 w-9 items-center justify-center text-black/50 dark:text-white/50"
                            >
                              {service.icon}
                            </div>

                            <span
                              className="text-[14px] uppercase tracking-[0.2em] text-[var(--accent-color)] font-semibold text-balance"
                              style={MONO}
                            >
                              {service.eyebrow}
                            </span>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div
                          key={service.id}
                          className="animate-[serviceContent_800ms_cubic-bezier(0.22,1,0.36,1)]"
                        >
                          <h3
                            className="max-w-[700px] text-[2.5rem] font-semibold leading-[1.3] tracking-[-0.045em] text-black dark:text-white md:text-[2rem] text-balence"
                            style={DISPLAY}
                          >
                            {service.headline}
                          </h3>

                          <div className="my-9 h-px w-full bg-black/20 dark:bg-white/20" />

                          <p
                            className="max-w-[600px] text-[15px] leading-7 text-black/55 dark:text-white/50 text-justify"
                            style={BODY}
                          >
                            {service.desc}
                          </p>

                          {/* TAGS */}
                          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] uppercase tracking-[0.17em] text-black/45 dark:text-white/40"
                                style={MONO}
                              >
                                / {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* BOTTOM */}
                      <div className="mt-14 md:mt-0 flex items-center justify-between border-t border-black/10 pt-7 dark:border-white/10">
                        <a
                          href="mailto:hello@blankon.id"
                          className="group inline-flex items-center gap-3"
                        >
                          <span
                            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors duration-300 dark:text-white group-hover:text-[var(--accent-color)] dark:group-hover:text-[var(--accent-color)]"
                            style={MONO}
                          >
                            Konsultasi Gratis
                          </span>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white group-hover:text-[var(--accent-color)] dark:group-hover:text-[var(--accent-color)]"
                          />
                        </a>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={prevService}
                            aria-label="Previous service"
                            className="flex h-10 w-10 items-center justify-center border border-black/15 text-black transition-colors hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-[var(--accent-color)]"
                          >
                            <ChevronLeft size={16} strokeWidth={1.5} />
                          </button>

                          <button
                            onClick={nextService}
                            aria-label="Next service"
                            className="flex h-10 w-10 items-center justify-center border border-black/15 text-black transition-colors hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                          >
                            <ChevronRight size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span
                className="text-[9px] uppercase tracking-[0.22em] text-black/40 dark:text-white/40"
                style={MONO}
              >
                Layanan Kami
              </span>

              <div className="hidden items-center gap-1 sm:flex">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    aria-label={`Go to ${service.title}`}
                    className="group flex h-5 items-center"
                  >
                    <span
                      className={`block h-[2px] transition-all duration-500 ${activeService === index ? "w-12" : "w-5"
                        }`}
                      style={{
                        backgroundColor:
                          activeService === index
                            ? "var(--accent-color)"
                            : "rgba(0,0,0,0.12)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span
                className="text-sm font-semibold text-black dark:text-white"
                style={MONO}
              >
                {String(activeService + 1).padStart(2, "0")}
              </span>

              <span
                className="text-[10px] text-black/25 dark:text-white/25"
                style={MONO}
              >
                / {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes serviceContent {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
