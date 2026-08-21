"use client";

import { useEffect, useState } from "react";
import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
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


export default function Services() {
  const services = [
    {
      id: "01",
      title: "Blockchain",
      headline: "Solusi blockchain untuk kebutuhan yang memang membutuhkannya.",
      desc: "Mengembangkan aplikasi dan sistem berbasis blockchain dengan mempertimbangkan kebutuhan bisnis, model data, serta karakteristik transaksi yang digunakan. Fokus pada penerapan yang memiliki kebutuhan nyata terhadap transparansi, verifikasi, atau pencatatan data yang terdistribusi.",
      tags: ["Blockchain", "Smart Contract", "Web3", "dApp"],
      icon: <Blocks size={20} />,
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "Cloud Computing",
      headline: "Infrastruktur digital yang siap mendukung kebutuhan produk.",
      desc: "Membantu perusahaan membangun dan mengelola infrastruktur berbasis cloud untuk aplikasi, data, dan layanan digital. Solusi dirancang berdasarkan kebutuhan produk, mulai dari deployment dan penyimpanan hingga pengelolaan resource, keamanan, dan skalabilitas sistem.",
      tags: ["AWS", "Cloud", "DevOps", "Infrastructure"],
      icon: <Cloud size={20} />,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "03",
      title: "Data Science",
      headline: "Mengubah data menjadi informasi yang dapat digunakan.",
      desc: "Membantu perusahaan mengolah dan menganalisis data untuk memahami pola, mengukur performa, serta mendukung pengambilan keputusan. Solusi dapat mencakup data processing, dashboard, analisis statistik, hingga pengembangan model prediktif sesuai kebutuhan bisnis.",
      tags: ["Data Analytics", "Python", "Dashboard", "Predictive"],
      icon: <BarChart3 size={20} />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      title: "Internet of Things",
      headline: "Menghubungkan perangkat, data, dan sistem dalam satu alur.",
      desc: "Membangun solusi IoT yang menghubungkan perangkat fisik dengan sistem digital untuk mengumpulkan, memantau, dan mengelola data. Cocok untuk kebutuhan monitoring, otomasi, tracking, maupun sistem yang membutuhkan interaksi antara perangkat dan aplikasi.",
      tags: ["IoT", "Sensors", "Monitoring", "Automation"],
      icon: <Cpu size={20} />,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "05",
      title: "Machine Learning / AI",
      headline: "AI yang diterapkan pada kebutuhan dan proses bisnis yang jelas.",
      desc: "Mengembangkan solusi berbasis machine learning dan AI untuk kebutuhan seperti automasi proses, klasifikasi data, pencarian informasi, rekomendasi, hingga pengolahan konten. Pendekatan dimulai dari permasalahan yang ingin diselesaikan, kemudian menentukan penerapan AI yang sesuai.",
      tags: ["AI", "Machine Learning", "Automation", "LLM"],
      icon: <Brain size={20} />,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "06",
      title: "Mobile Development",
      headline: "Aplikasi mobile yang dirancang mengikuti kebutuhan pengguna.",
      desc: "Membangun aplikasi mobile untuk iOS dan Android dengan fokus pada alur penggunaan, kebutuhan fitur, serta integrasi dengan sistem yang sudah dimiliki bisnis. Pengembangan dilakukan secara bertahap agar produk dapat diuji, digunakan, dan dikembangkan sesuai kebutuhan.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Smartphone size={20} />,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "07",
      title: "Web Development",
      headline: "Website dan aplikasi web yang dibangun untuk kebutuhan bisnis nyata.",
      desc: "Merancang dan membangun website, web application, hingga platform digital dengan mempertimbangkan kebutuhan bisnis, pengguna, dan proses yang berjalan di dalamnya. Mulai dari company profile, customer portal, hingga sistem berbasis web yang membutuhkan integrasi dan pengembangan lebih lanjut.",
      tags: ["React", "Next.js", "Laravel", "API"],
      icon: <Monitor size={20} />,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

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

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextService();
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);


  return (
    <section id="layanan" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: LIME }} />
              <span className="text-[11px] opacity-60 uppercase tracking-widest font-semibold" style={MONO}>
                APA YANG KAMI KERJAKAN
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6" style={DISPLAY}>
              Dari kebutuhan bisnis hingga produk digital yang siap digunakan.
            </h2>
            <p className="opacity-70 text-lg leading-relaxed max-w-xl" style={BODY}>
              Kami menangani proses pengembangan digital product dari tahap awal hingga implementasi, dengan pendekatan yang disesuaikan dengan kebutuhan masing-masing proyek.
            </p>
          </div>
        </div>

        {/* Services Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${activeService * 100}%)`,
              }}
            >
              {services.map((s, index) => (
                <div
                  key={s.id}
                  className="w-full shrink-0 px-0.5"
                >
                  <article
                    className="relative overflow-hidden border border-white/10 dark:border-black/10 bg-background/[0.025] min-h-[560px] lg:min-h-[600px]"
                  >
                    <div className="grid lg:grid-cols-[1.15fr_0.85fr] h-full min-h-[560px] lg:min-h-[600px]">

                      {/* IMAGE */}
                      <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          priority={index === 0}
                          className={`object-cover transition-all duration-[1200ms] ease-out ${activeService === index
                            ? "scale-100 opacity-100"
                            : "scale-105 opacity-80"
                            }`}
                        />

                        {/* Minimal overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                        {/* Number */}
                        <div className="absolute top-7 left-7 md:top-10 md:left-10">
                          <span
                            className="text-xs tracking-[0.25em] text-white/70"
                            style={MONO}
                          >
                            {s.id}
                          </span>
                        </div>

                        {/* Image label */}
                        <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10 flex items-center gap-3">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: LIME }}
                          />
                          <span
                            className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white font-semibold"
                            style={MONO}
                          >
                            {s.title}
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="relative flex flex-col justify-between p-7 sm:p-10 md:p-12 lg:p-14">
                        {/* Top */}
                        <div>
                          <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 flex items-center justify-center border border-background/15">
                                {s.icon}
                              </div>
                              <span
                                className="text-[10px] uppercase tracking-[0.2em] text-background/40"
                                style={MONO}
                              >
                                Service
                              </span>
                            </div>
                            <span
                              className="text-[10px] uppercase tracking-[0.2em] text-background/30"
                              style={MONO}
                            >
                              {String(index + 1).padStart(2, "0")} /{" "}
                              {String(services.length).padStart(2, "0")}
                            </span>
                          </div>
                          {/* Headline */}
                          <div
                            key={s.id}
                            className="animate-[serviceContent_700ms_cubic-bezier(0.22,1,0.36,1)]"
                          >
                            <h3
                              className="text-3xl md:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.05] max-w-xl mb-7"
                              style={DISPLAY}
                            >
                              {s.headline}
                            </h3>
                            <p
                              className="text-sm md:text-base leading-[1.8] text-background/60 max-w-xl mb-8"
                              style={BODY}
                            >
                              {s.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {s.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1.5 border border-background/10 text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-background/50"
                                  style={MONO}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="pt-10 mt-10 border-t border-background/10 flex items-center justify-between gap-6">

                          <a
                            href="mailto:hello@blankon.id"
                            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] group/link"
                            style={MONO}
                          >
                            <span className="relative">
                              Konsultasi Gratis

                              <span
                                className="absolute left-0 -bottom-1 w-full h-px bg-background/30 origin-left transition-transform duration-300 group-hover/link:scale-x-0"
                              />
                            </span>

                            <ArrowUpRight
                              size={15}
                              className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                            />
                          </a>

                          {/* Navigation */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={prevService}
                              aria-label="Previous service"
                              className="w-10 h-10 flex items-center justify-center border border-background/15 text-background/60 hover:border-background/40 hover:text-background transition-colors"
                            >
                              <ChevronLeft size={17} />
                            </button>

                            <button
                              onClick={nextService}
                              aria-label="Next service"
                              className="w-10 h-10 flex items-center justify-center border border-background/15 text-background/60 hover:border-background/40 hover:text-background transition-colors"
                            >
                              <ChevronRight size={17} />
                            </button>
                          </div>
                        </div>

                        {/* Decorative large number */}
                        <span
                          aria-hidden="true"
                          className="absolute -right-8 -bottom-14 text-[12rem] md:text-[16rem] font-black leading-none text-background/[0.025] pointer-events-none select-none"
                          style={DISPLAY}
                        >
                          {s.id}
                        </span>
                      </div>
                    </div>

                    {/* Active lime line */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] transition-all duration-700"
                      style={{
                        width: `${((index + 1) / services.length) * 100}%`,
                        backgroundColor: LIME,
                      }}
                    />
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-7 flex items-center justify-between">

            {/* Progress */}
            <div className="flex items-center gap-5">
              <span
                className="text-[10px] tracking-[0.2em] text-background/40"
                style={MONO}
              >
                SERVICES
              </span>

              <div className="hidden sm:flex items-center gap-1">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    aria-label={`Go to ${service.title}`}
                    className="group py-2"
                  >
                    <span
                      className={`block h-[2px] transition-all duration-500 ${activeService === index
                        ? "w-10"
                        : "w-4 bg-background/15 group-hover:bg-background/40"
                        }`}
                      style={
                        activeService === index
                          ? { backgroundColor: LIME }
                          : undefined
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Current counter */}
            <div className="flex items-center gap-2">
              <span
                className="text-sm font-bold"
                style={MONO}
              >
                {String(activeService + 1).padStart(2, "0")}
              </span>

              <span className="text-background/20">—</span>

              <span
                className="text-sm text-background/30"
                style={MONO}
              >
                {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes serviceContent {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
      </style>

    </section>


  );
}
