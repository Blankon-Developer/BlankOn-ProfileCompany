"use client";

import { useState } from "react";
import { DISPLAY, BODY, MONO, LIME, cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown, Twitter, Linkedin, Globe } from "lucide-react";

const founders = [
  {
    name: "Galang Arsandy Noverdan P",
    role: "Co-Founder & Tech Lead",
    initials: "GA",
    desc: "Memimpin sisi teknologi dan development, dengan fokus pada bagaimana produk dibangun secara terstruktur, stabil, dan dapat dikembangkan sesuai kebutuhan.",
    image: "/foto-galang.jpg",
  },
  {
    name: "Harun Ar Rasyid",
    role: "Co-Founder & Design Lead",
    initials: "HA",
    desc: "Memimpin proses desain dan pengalaman pengguna, memastikan produk memiliki alur yang jelas dan mudah digunakan.",
    image: "/foto-harun.jpg",
  },
  {
    name: "Pras Tio Rifki Wijaya",
    role: "Co-Founder & Product Manager",
    initials: "PR",
    desc: "Menghubungkan kebutuhan bisnis, pengguna, dan tim pengembangan agar proses pembangunan produk tetap memiliki arah dan prioritas yang jelas.",
    image: "/foto-prastio.jpg",
  },
];

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const serviceTeams = [
  {
    id: "api-management-system-integration",
    name: "API Management & System Integration",
    desc: "Tim arsitek dan engineer kami membangun fondasi integrasi sistem yang stabil dan aman untuk kebutuhan bisnis Anda.",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    desc: "Tim spesialis web3 dan smart contract yang siap membantu penerapan teknologi blockchain secara efisien.",
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    desc: "Tim DevOps dan Cloud Engineer kami merancang infrastruktur digital yang skalabel dan aman.",
  },
  {
    id: "creative-content-digital-media",
    name: "Creative Content & Digital Media",
    desc: "Tim desainer dan content strategist yang menciptakan narasi visual yang kuat dan berdampak.",
  },
  {
    id: "data-science",
    name: "Data Science",
    desc: "Tim data scientist dan analis yang membantu mengubah data mentah menjadi keputusan bisnis yang berharga.",
  },
  {
    id: "game-development",
    name: "Game Development",
    desc: "Tim desainer dan developer game yang menggabungkan hiburan dan interaksi yang imersif.",
  },
  {
    id: "internet-of-things",
    name: "Internet of Things",
    desc: "Tim hardware engineer yang menghubungkan perangkat keras dengan sistem cerdas.",
  },
  {
    id: "machine-learning-ai",
    name: "Machine Learning / AI",
    desc: "Tim peneliti dan engineer AI yang melatih model cerdas untuk memecahkan masalah yang kompleks.",
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    desc: "Tim developer iOS dan Android yang membangun aplikasi performa tinggi untuk pengguna Anda.",
  },
  {
    id: "quality-assurance-qa-testing",
    name: "Quality Assurance (QA)",
    desc: "Tim penguji kualitas dan engineer automasi yang memastikan aplikasi berjalan tanpa celah.",
  },
  {
    id: "web-development",
    name: "Web Development",
    desc: "Tim frontend dan backend engineer yang mengembangkan aplikasi web handal dan responsif.",
  },
];

export default function Founders() {
  const [openDepts, setOpenDepts] = useState<Record<string, boolean>>({});

  const toggleDept = (id: string) => {
    setOpenDepts(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  return (
    <section className="px-5 py-20 md:px-8 md:py-28 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center">
            <span
              className="text-[12px] font-medium tracking-wide"
              style={{
                ...MONO,
                color: LIME,
              }}
            >
              BACKGROUND OF BLANKON DIGITAL TECH
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[52px]"
            style={DISPLAY}
          >
            Founder's of Blankon Digital Tech.
          </h2>

          {/* Description */}
          <p
            className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground md:text-lg"
            style={BODY}
          >
            Blankon Digital Tech dibangun oleh tim dengan latar belakang teknologi,
            desain, dan product management. Peran yang berbeda ini memungkinkan
            kami melihat sebuah proyek tidak hanya dari sisi teknis, tetapi juga
            dari sisi pengguna dan kebutuhan bisnis.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted"
              style={BODY}
            >
              Tentang Blankon Tech
            </button>

            <button
              type="button"
              className="rounded-lg px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: LIME,
                ...BODY,
              }}
            >
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Team Grid (Founders) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group relative aspect-3/4 overflow-hidden rounded-sm bg-muted"
            >
              {/* Image */}
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

              {/* Glass information card */}
              <div
                className="
                  absolute bottom-3 left-3 right-3
                  rounded-xl
                  border border-white/30
                  bg-white/20
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:bg-white/25
                "
              >
                {/* Name + Arrow */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3
                      className="text-lg font-semibold leading-tight text-white md:text-xl"
                      style={DISPLAY}
                    >
                      {founder.name}
                    </h3>

                    <p
                      className="mt-2 text-xs font-medium text-white/90 md:text-sm"
                      style={MONO}
                    >
                      {founder.role}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span
                    className="
                      mt-0.5 flex h-7 w-7 shrink-0
                      items-center justify-center
                      text-lg text-white
                      transition-transform duration-300
                      group-hover:translate-x-1 group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* Description */}
                <p
                  className="mt-2.5 line-clamp-3 text-xs leading-5 text-white/80 md:text-sm"
                  style={BODY}
                >
                  {founder.desc}
                </p>

                {/* Social / Meta */}
                <div className="mt-4 flex items-center gap-4 text-white/90">
                  <span className="text-sm font-medium">X</span>
                  <span className="text-sm font-medium">in</span>
                  <span className="text-sm">◉</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Executive Team */}
        <section className="border-t border-border pt-20 md:pt-12">
          {/* Intro */}
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end mb-16 md:mb-0">
            <div>
              <span
                className="mb-5 block text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground"
                style={BODY}
              >
                BlankOn Digital Tech | Team
              </span>
              <h3
                className="max-w-full text-[clamp(2.75rem,6vw,2rem)] font-medium leading-[0.92] tracking-[-0.055em] text-foreground"
                style={DISPLAY}
              >
                Beberapa orang dibalik layar <br />
                dari BlankOn Digital Tech.
              </h3>
            </div>
            <p
              className="max-w-full text-sm leading-7 text-muted-foreground lg:justify-self-end pb-2 text-justify"
              style={BODY}
            >
              Dibangun dari berbagai disiplin, pengalaman, dan perspektif
              yang bekerja bersama untuk menghasilkan sesuatu yang berarti.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
            {/* Mobile Accordion View */}
            <div className="w-full border-t border-border lg:hidden mt-10">
              {serviceTeams.map((team, index) => {
                const isOpen = !!openDepts[team.id];
                return (
                  <div key={team.id} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => toggleDept(team.id)}
                      aria-expanded={isOpen}
                      className="group relative flex w-full items-center gap-4 py-6 text-left focus-visible:outline-none"
                    >
                      <span className={cn("absolute left-0 top-0 h-full w-[2px] bg-foreground origin-top transition-transform duration-300", isOpen ? "scale-y-100" : "scale-y-0")} />
                      <span className={cn("w-8 shrink-0 text-[10px] tabular-nums transition-colors pl-2", isOpen ? "text-foreground" : "text-muted-foreground/40")} style={MONO}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className={cn("text-xl font-medium tracking-tight transition-transform duration-300", isOpen && "translate-x-1")} style={DISPLAY}>{team.name}</h4>
                      </div>
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                        <span className="absolute h-px w-3 bg-foreground transition-transform duration-300" />
                        <span className={cn("absolute h-px w-3 bg-foreground transition-transform duration-300", isOpen ? "rotate-0" : "rotate-90")} />
                      </span>
                    </button>

                    <div className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <div className="pb-10 pt-2 pl-2">
                          <div className="flex flex-col gap-6">
                            <p className="text-sm leading-6 text-muted-foreground" style={BODY}>{team.desc}</p>
                            <Link
                              href={`/team/${team.id}`}
                              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-muted-foreground w-fit"
                              style={MONO}
                            >
                              Lihat Tim {team.name}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Split View */}
            <div className="w-full mt-12 hidden lg:flex items-start">
              {/* Left */}
              <div
                className={cn(
                  "border-t border-border relative max-w-8xl mx-auto transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]",
                  Object.values(openDepts).some(Boolean) ? "w-[450px] shrink-0" : "w-[1280px] mx-auto shrink-0"
                )}
              >
                <div className="sticky top-32 w-full">
                  {serviceTeams.map((team, index) => {
                    const isOpen = !!openDepts[team.id];
                    return (
                      <button
                        key={team.id}
                        type="button"
                        onClick={() => toggleDept(team.id)}
                        aria-expanded={isOpen}
                        className={cn("group relative flex w-full items-start gap-4 border-b border-border py-6 text-left transition-colors duration-200 cursor-pointer", isOpen ? "bg-muted/30" : "hover:bg-muted/10")}
                      >
                        <span className={cn("absolute -left-px top-0 h-full w-[2px] bg-foreground origin-top transition-transform duration-300", isOpen ? "scale-y-100" : "scale-y-0")} />
                        <span className={cn("pt-1.5 pl-4 text-[10px] tabular-nums transition-colors", isOpen ? "text-foreground" : "text-muted-foreground/40")} style={MONO}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1 pr-6">
                          <div className="flex items-baseline justify-between gap-3">
                            <h4 className={cn("text-lg font-medium tracking-tight transition-transform duration-300", isOpen ? "translate-x-1 text-foreground" : "text-muted-foreground group-hover:text-foreground")} style={DISPLAY}>
                              {team.name}
                            </h4>
                            <span className="text-[10px] tabular-nums text-muted-foreground" style={MONO}>
                              Lihat Detail ↗
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right */}
              <div
                className={cn(
                  "border-border min-h-[250px] transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] overflow-hidden",
                  Object.values(openDepts).some(Boolean) ? "flex-1 opacity-100 pl-4 lg:pl-10" : "w-0 opacity-0 border-l-0 pl-0 flex-none"
                )}
              >
                <div className="min-w-[400px] w-full sticky top-32">
                  {serviceTeams.map((team) => {
                    const isOpen = !!openDepts[team.id];
                    return (
                      <div key={team.id} className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                        <div className="overflow-hidden">
                          <div className="px-10 py-6 h-full flex flex-col justify-center">
                            <div className="border-b border-border pb-8 mb-8">
                              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={BODY}>Team Overview</p>
                              <h4 className="text-3xl font-medium tracking-tight mb-4" style={DISPLAY}>{team.name}</h4>
                              <p className="text-base leading-7 text-muted-foreground" style={BODY}>{team.desc}</p>
                            </div>

                            <Link
                              href={`/team/${team.id}`}
                              className="inline-flex items-center justify-center gap-3 bg-[var(--accent-color)] text-background px-8 py-4 text-sm font-semibold transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg w-fit"
                              style={DISPLAY}
                            >
                              Jelajahi Tim {team.name}
                              <ArrowUpRight className="h-5 w-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
