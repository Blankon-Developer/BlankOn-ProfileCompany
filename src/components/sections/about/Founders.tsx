"use client";

import { useState } from "react";
import { DISPLAY, BODY, MONO, LIME, cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown, Twitter, Linkedin, Globe } from "lucide-react";

const founders = [
  {
    name: "Galang Arsandy Moverdan P",
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

const teamDepartments = [
  {
    id: "web",
    name: "Web Development",
    members: [
      { name: "Amélie Laurent", role: "Frontend Developer", desc: "Membangun antarmuka interaktif dan memastikan pengalaman pengguna yang responsif.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80" },
      { name: "Nikolas Gibbons", role: "Backend Developer", desc: "Mengelola arsitektur server, basis data, dan performa API aplikasi.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80" },
      { name: "Zahra Christensen", role: "Fullstack Developer", desc: "Menghubungkan integrasi frontend dan backend untuk solusi digital yang lengkap.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
      { name: "Marco Kelly", role: "QA Engineer", desc: "Melakukan pengujian ketat untuk memastikan kualitas dan keamanan sistem.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
    ]
  },
  {
    id: "mobile",
    name: "Mobile Development",
    members: [
      { name: "Sienna Hewitt", role: "iOS Developer", desc: "Fokus pada pengembangan aplikasi native untuk ekosistem Apple.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=400&h=400&fit=crop&q=80" },
      { name: "Lily-Rose Chedjou", role: "Android Developer", desc: "Membangun aplikasi mobile performa tinggi untuk pengguna Android.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80" },
      { name: "Zaid Schwartz", role: "Mobile UI Engineer", desc: "Menerjemahkan desain mobile ke dalam interaksi yang presisi.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80" },
    ]
  },
  {
    id: "design",
    name: "UI/UX Design",
    members: [
      { name: "Caitlyn King", role: "Product Designer", desc: "Merancang antarmuka produk yang selaras dengan tujuan bisnis perusahaan.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80" },
    ]
  }
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
    <section className="px-5 py-20 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
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
              TIM INTI
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[52px]"
            style={DISPLAY}
          >
            Orang-orang di balik Blankon Tech.
          </h2>

          {/* Description */}
          <p
            className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground md:text-lg"
            style={BODY}
          >
            Blankon Tech dibangun oleh tim dengan latar belakang teknologi,
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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-24">
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
        <section className="border-t border-border pt-20 md:pt-28">
          {/* Intro */}
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end mb-16 md:mb-24">
            <div>
              <span
                className="mb-5 block text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground"
                style={BODY}
              >
                BlankOn Team
              </span>
              <h3
                className="max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-foreground"
                style={DISPLAY}
              >
                Orang-orang yang
                <br />
                menggerakkan ide.
              </h3>
            </div>
            <p
              className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end pb-2"
              style={BODY}
            >
              Dibangun dari berbagai disiplin, pengalaman, dan perspektif
              yang bekerja bersama untuk menghasilkan sesuatu yang berarti.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
            {/* Mobile Accordion View */}
            <div className="w-full border-t border-border lg:hidden mt-10">
              {teamDepartments.map((dept, index) => {
                const isOpen = !!openDepts[dept.id];
                return (
                  <div key={dept.id} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => toggleDept(dept.id)}
                      aria-expanded={isOpen}
                      className="group relative flex w-full items-center gap-4 py-6 text-left focus-visible:outline-none"
                    >
                      <span className={cn("absolute left-0 top-0 h-full w-[2px] bg-foreground origin-top transition-transform duration-300", isOpen ? "scale-y-100" : "scale-y-0")} />
                      <span className={cn("w-8 shrink-0 text-[10px] tabular-nums transition-colors pl-2", isOpen ? "text-foreground" : "text-muted-foreground/40")} style={MONO}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className={cn("text-xl font-medium tracking-tight transition-transform duration-300", isOpen && "translate-x-1")} style={DISPLAY}>{dept.name}</h4>
                      </div>
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                        <span className="absolute h-px w-3 bg-foreground transition-transform duration-300" />
                        <span className={cn("absolute h-px w-3 bg-foreground transition-transform duration-300", isOpen ? "rotate-0" : "rotate-90")} />
                      </span>
                    </button>
                    
                    <div className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <div className="pb-10 pt-2 pl-2">
                           <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-6">
                              {dept.members.map((member, mIndex) => (
                                <article key={member.name} className="group/member flex flex-col">
                                  <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-muted">
                                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover grayscale transition-all duration-700 ease-out group-hover/member:scale-[1.025] group-hover/member:grayscale-0" />
                                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/30 to-transparent p-4">
                                      <span className="text-[10px] text-white/90 font-medium" style={MONO}>{String(mIndex + 1).padStart(2, "0")}</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                      <div>
                                        <h5 className="text-lg font-medium tracking-tight" style={DISPLAY}>{member.name}</h5>
                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground" style={BODY}>{member.role}</p>
                                      </div>
                                      <div className="flex gap-2 pt-1 shrink-0">
                                        <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={14} strokeWidth={1.5}/></a>
                                        <a href="#" className="text-muted-foreground hover:text-foreground"><Globe size={14} strokeWidth={1.5}/></a>
                                      </div>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-muted-foreground flex-1" style={BODY}>{member.desc}</p>
                                  </div>
                                </article>
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Split View */}
            <div className="w-full mt-20 hidden lg:flex items-start">
              {/* Left */}
              <div 
                className={cn(
                  "border-t border-border relative max-w-8xl mx-auto transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]",
                  Object.values(openDepts).some(Boolean) ? "w-[380px] shrink-0" : "w-[1280px] mx-auto shrink-0"
                )}
              >
                <div className="sticky top-32 w-full">
                  {teamDepartments.map((dept, index) => {
                    const isOpen = !!openDepts[dept.id];
                    return (
                      <button
                        key={dept.id}
                        type="button"
                        onClick={() => toggleDept(dept.id)}
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
                              {dept.name}
                            </h4>
                            <span className="text-[10px] tabular-nums text-muted-foreground" style={MONO}>
                              {String(dept.members.length).padStart(1, "0")} People
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
                  "border-border min-h-[600px] transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] overflow-hidden",
                  Object.values(openDepts).some(Boolean) ? "flex-1 border-l opacity-100 pl-4 lg:pl-10" : "w-0 opacity-0 border-l-0 pl-0 flex-none"
                )}
              >
                <div className="min-w-[650px] w-full">
                  {teamDepartments.map((dept) => {
                  const isOpen = !!openDepts[dept.id];
                  return (
                    <div key={dept.id} className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <div className="px-10 pb-16">
                          <div className="flex items-end justify-between border-b border-border py-6 mb-10">
                            <div>
                              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground" style={BODY}>Team</p>
                              <h4 className="text-2xl font-medium tracking-tight" style={DISPLAY}>{dept.name}</h4>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground" style={MONO}>
                              {String(dept.members.length).padStart(2, "0")} People
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-10 gap-y-16">
                            {dept.members.map((member, index) => (
                              <article key={member.name} className="group/member flex flex-col h-full">
                                <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-muted">
                                  <Image src={member.image} alt={member.name} fill sizes="33vw" className="object-cover grayscale transition-all duration-700 ease-out group-hover/member:scale-[1.025] group-hover/member:grayscale-0" />
                                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/40 to-transparent p-5">
                                    <span className="text-[10px] font-medium text-white/90" style={MONO}>{String(index + 1).padStart(2, "0")}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <h5 className="text-lg font-medium tracking-[-0.02em]" style={DISPLAY}>{member.name}</h5>
                                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground" style={BODY}>{member.role}</p>
                                    </div>
                                    <div className="flex gap-2 pt-1 shrink-0">
                                      <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin size={14} strokeWidth={1.5} /></a>
                                      <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Globe size={14} strokeWidth={1.5} /></a>
                                    </div>
                                  </div>
                                  <p className="mt-4 text-sm leading-6 text-muted-foreground flex-1" style={BODY}>{member.desc}</p>
                                </div>
                              </article>
                            ))}
                          </div>
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
