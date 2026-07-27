"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Globe, Smartphone, Monitor, Server } from "lucide-react";
import { cn, DISPLAY, BODY, MONO, LIME, DARK } from "@/lib/utils";

type ServiceTab = "web" | "mobile" | "enterprise" | "backend";

const serviceData: Record<
  ServiceTab,
  {
    icon: typeof Globe;
    label: string;
    title: string;
    desc: string;
    img: string;
    tags: string[];
  }
> = {
  web: {
    icon: Globe,
    label: "Website & Web App",
    title: "Tampilan yang memukau, performa yang solid.",
    desc: "Landing page, portal bisnis, SaaS platform, e-commerce mulai dari sederhana hingga kompleks, kami bangun dengan standar terbaik yang siap scale.",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=900&h=560&fit=crop&auto=format",
    tags: ["Next.js", "React", "Laravel", "SEO-ready"],
  },
  mobile: {
    icon: Smartphone,
    label: "Mobile App",
    title: "Native di semua platform, mulus di genggaman.",
    desc: "Aplikasi iOS dan Android dengan pengalaman pengguna yang intuitif, cepat, dan terasa native di setiap perangkat.",
    img: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=900&h=560&fit=crop&auto=format",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  enterprise: {
    icon: Monitor,
    label: "Sistem Enterprise",
    title: "Infrastruktur digital untuk kebutuhan skala besar.",
    desc: "ERP, CRM, sistem manajemen internal, dan dashboard analytics yang dirancang khusus untuk kebutuhan operasional enterprise.",
    img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=900&h=560&fit=crop&auto=format",
    tags: ["Custom Build", "Scalable", "Secure", "Multi-user"],
  },
  backend: {
    icon: Server,
    label: "Backend & API",
    title: "Fondasi yang kuat untuk produk yang hebat.",
    desc: "REST & GraphQL API, integrasi sistem pihak ketiga, optimasi database, dan arsitektur yang siap menangani traffic skala besar.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=560&fit=crop&auto=format",
    tags: ["Node.js", "Python", "PostgreSQL", "AWS"],
  },
};

const tabOrder: ServiceTab[] = ["web", "mobile", "enterprise", "backend"];

export default function Services() {
  const [active, setActive] = useState<ServiceTab>("web");
  const s = serviceData[active];
  const Icon = s.icon;

  return (
    <section
      id="layanan"
      className="py-24 md:py-32 bg-[#F7F7F4] border-t border-black/8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4"
              style={{ ...MONO, color: "#6b7a00" }}
            >
              — Layanan Kami
            </p>
            <h2
              className="text-4xl md:text-5xl font-900 leading-[1.05] tracking-tight text-[#0F0F0D]"
              style={{ ...DISPLAY, fontWeight: 900 }}
            >
              Semua platform,
              <br />
              satu tim.
            </h2>
          </div>
          <p
            className="text-base text-[#5a5a58] max-w-sm leading-relaxed text-justify"
            style={BODY}
          >
            Apapun kebutuhan digital Anda, kami punya keahlian untuk
            mewujudkannya dari konsep hingga production.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabOrder.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "px-4 py-2 text-[11px] font-semibold uppercase tracking-widest border transition-all duration-200",
                active === key
                  ? "border-transparent text-[#0F0F0D]"
                  : "border-black/10 text-muted-foreground hover:border-black/20 hover:text-foreground bg-white"
              )}
              style={{
                ...MONO,
                ...(active === key ? { backgroundColor: LIME } : {}),
              }}
            >
              {serviceData[key].label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="grid md:grid-cols-5 border border-black/10 overflow-hidden bg-white shadow-sm">
          {/* Image — 3 cols */}
          <div
            className="md:col-span-3 relative overflow-hidden bg-[#e0e0dc]"
            style={{ minHeight: "320px" }}
          >
            <Image
              key={active}
              src={s.img}
              alt={s.label}
              fill
              className="object-cover"
              style={{ filter: "brightness(0.92)" }}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div
              className="absolute top-4 left-4 text-[9px] px-2.5 py-1 font-600 tracking-widest z-10"
              style={{
                ...MONO,
                fontWeight: 600,
                backgroundColor: LIME,
                color: DARK,
              }}
            >
              {s.label}
            </div>
          </div>

          {/* Copy — 2 cols */}
          <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between gap-8 border-t md:border-t-0 md:border-l border-black/8">
            <div>
              <div className="w-10 h-10 flex items-center justify-center border border-black/10 text-[#5a5a58] mb-6">
                <Icon size={18} />
              </div>
              <h3
                className="text-xl font-800 text-[#0F0F0D] mb-4 leading-snug"
                style={{ ...DISPLAY, fontWeight: 800 }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm text-[#5a5a58] leading-relaxed text-justify"
                style={BODY}
              >
                {s.desc}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-7">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] border border-black/10 px-2 py-1 text-muted-foreground bg-[#F7F7F4]"
                    style={MONO}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#penawaran"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold group transition-opacity hover:opacity-85"
                style={{ ...DISPLAY, backgroundColor: DARK, color: "#fff" }}
              >
                Konsultasi Gratis
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
