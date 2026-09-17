"use client";

import { DISPLAY, BODY, MONO, LIME } from "@/lib/utils";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    year: "2025",
    client: "Nama Klien",
    title: "Nama Proyek",
    category: "DIGITAL PRODUCT",
    industry: "Logistics",
    duration: "4 Months",
    status: "Delivered",
    description:
      "Platform digital untuk membantu tim operasional mengelola proses kerja yang sebelumnya tersebar di beberapa sistem.",
    context:
      "Sebelum proyek dimulai, sebagian besar proses operasional masih bergantung pada spreadsheet, komunikasi manual, dan beberapa tools yang tidak saling terhubung. Kondisi tersebut membuat informasi sulit dilacak dan memperlambat pengambilan keputusan.",
    outcome:
      "Kami membangun satu platform terintegrasi yang menyatukan workflow operasional, monitoring, reporting, dan manajemen pengguna dalam satu sistem.",
    image: "/images/projects/project-01.jpg",
    secondaryImage: "/images/projects/project-01-detail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST API",
    ],
    deliverables: [
      ["01", "Dashboard", "Centralized operational overview."],
      ["02", "Operations", "Daily workflow management."],
      ["03", "Reporting", "Structured monitoring and reports."],
      ["04", "User Management", "Role-based access control."],
    ],
  },
  {
    number: "02",
    year: "2024",
    client: "Nama Klien",
    title: "Nama Produk",
    category: "WEB PLATFORM",
    industry: "Professional Services",
    duration: "3 Months",
    status: "Delivered",
    description:
      "Web platform yang dirancang untuk mengubah proses layanan yang sebelumnya manual menjadi workflow digital.",
    context:
      "Tim membutuhkan sistem yang lebih terstruktur untuk menangani data, komunikasi, dan proses layanan dari awal hingga selesai.",
    outcome:
      "Sebuah platform modular dikembangkan untuk memberikan satu workflow yang konsisten bagi tim internal dan pengguna.",
    image: "/images/projects/project-02.jpg",
    secondaryImage: "/images/projects/project-02-detail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
    ],
    deliverables: [
      ["01", "Web Application", "Core application interface."],
      ["02", "Admin System", "Internal management tools."],
      ["03", "Authentication", "Secure user access."],
      ["04", "Integration", "Third-party service integration."],
    ],
  },
];

const companyFacts = [
  ["07+", "Projects"],
  ["05", "Industries"],
  ["03+", "Years"],
  ["01", "Approach"],
];

export default function ProjectsPage() {
  return (
    <main className="bg-foreground text-background">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="min-h-[90vh] flex flex-col justify-between py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: LIME }}
              />

              <span
                className="text-[10px] tracking-[0.2em] opacity-50"
                style={MONO}
              >
                BLANKON TECH
              </span>
            </div>

            <span
              className="text-[10px] tracking-[0.2em] opacity-35"
              style={MONO}
            >
              PROJECT ARCHIVE / 2023—2025
            </span>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">
          <div className="grid md:grid-cols-[70px_1fr] gap-8 md:gap-12">
            <span
              className="hidden md:block text-[11px] opacity-30 pt-3"
              style={MONO}
            >
              04
            </span>

            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-8"
                style={MONO}
              >
                Selected Work
              </p>

              <h1
                className="text-[clamp(3.5rem,9vw,9rem)] font-medium tracking-[-0.065em] leading-[0.83]"
                style={DISPLAY}
              >
                Things
                <br />
                we built.
              </h1>

              <div className="mt-12 md:mt-16 grid md:grid-cols-[1fr_320px] gap-10">
                <p
                  className="text-lg md:text-xl leading-8 max-w-2xl opacity-65"
                  style={BODY}
                >
                  Beberapa pekerjaan yang merepresentasikan bagaimana kami
                  menerjemahkan masalah bisnis menjadi produk digital,
                  sistem, dan pengalaman yang benar-benar digunakan.
                </p>

                <div className="md:border-l border-background/10 md:pl-8">
                  <span
                    className="block text-[9px] tracking-[0.18em] uppercase opacity-30 mb-4"
                    style={MONO}
                  >
                    Our role
                  </span>

                  <p
                    className="text-sm leading-7 opacity-50"
                    style={BODY}
                  >
                    Strategy, product design, frontend engineering,
                    backend integration, dan technical delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-16">
          <div className="border-t border-background/10 pt-5 flex items-center justify-between">
            <span
              className="text-[9px] tracking-[0.18em] uppercase opacity-30"
              style={MONO}
            >
              Scroll to explore
            </span>

            <ArrowDown
              size={15}
              strokeWidth={1.2}
              className="opacity-40"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY FACTS
      ========================================================== */}
      <section className="border-y border-background/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {companyFacts.map(([value, label], index) => (
              <div
                key={label}
                className={`
                  py-8 md:py-10
                  ${
                    index !== companyFacts.length - 1
                      ? "border-r border-background/10"
                      : ""
                  }
                  ${index === 1 ? "pl-5 md:pl-8" : ""}
                  ${index === 2 ? "md:pl-8" : ""}
                  ${index === 3 ? "pl-5 md:pl-8" : ""}
                `}
              >
                <span
                  className="block text-3xl md:text-4xl font-medium tracking-tight"
                  style={DISPLAY}
                >
                  {value}
                </span>

                <span
                  className="block mt-2 text-[9px] tracking-[0.16em] uppercase opacity-30"
                  style={MONO}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT ARCHIVE
      ========================================================== */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Archive heading */}
          <div className="flex items-end justify-between border-t border-background/15 pt-5 mb-16 md:mb-24">
            <div className="flex items-start gap-5">
              <span
                className="text-[10px] opacity-30"
                style={MONO}
              >
                01
              </span>

              <div>
                <p
                  className="text-[10px] tracking-[0.18em] uppercase opacity-40"
                  style={MONO}
                >
                  Project Archive
                </p>
              </div>
            </div>

            <span
              className="hidden md:block text-[9px] tracking-[0.16em] opacity-25"
              style={MONO}
            >
              07 PROJECTS
            </span>
          </div>

          {/* =====================================================
              PROJECTS
          ====================================================== */}
          <div className="space-y-32 md:space-y-48">
            {projects.map((project, index) => (
              <article key={project.number}>
                {/* Project header */}
                <div className="grid lg:grid-cols-[70px_1fr_280px] gap-8 lg:gap-12 mb-8 md:mb-10">
                  <div>
                    <span
                      className="text-sm opacity-30"
                      style={MONO}
                    >
                      {project.number}
                    </span>
                  </div>

                  <div>
                    <p
                      className="text-[9px] tracking-[0.18em] uppercase opacity-35 mb-5"
                      style={MONO}
                    >
                      {project.category}
                    </p>

                    <h2
                      className="text-4xl md:text-6xl font-medium tracking-[-0.045em] leading-[0.95]"
                      style={DISPLAY}
                    >
                      {project.title}
                    </h2>

                    <p
                      className="mt-4 text-sm opacity-40"
                      style={BODY}
                    >
                      {project.client}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-5 lg:pt-8">
                    <ProjectMeta
                      label="Year"
                      value={project.year}
                    />

                    <ProjectMeta
                      label="Industry"
                      value={project.industry}
                    />

                    <ProjectMeta
                      label="Duration"
                      value={project.duration}
                    />

                    <ProjectMeta
                      label="Status"
                      value={project.status}
                    />
                  </div>
                </div>

                {/* Hero image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-background/5 border border-background/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.client}`}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.015]"
                    sizes="(max-width: 1024px) 100vw, 1400px"
                  />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
                    <span
                      className="text-[9px] tracking-[0.16em] uppercase text-white/50"
                      style={MONO}
                    >
                      {project.client}
                    </span>

                    <span
                      className="text-[9px] tracking-[0.16em] text-white/50"
                      style={MONO}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Intro */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-12 md:py-16 border-b border-background/10">
                  <ProjectLabel
                    number="01"
                    label="About the project"
                  />

                  <div className="max-w-3xl">
                    <p
                      className="text-xl md:text-2xl leading-9 md:leading-10 opacity-75"
                      style={BODY}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Context */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-12 md:py-16 border-b border-background/10">
                  <ProjectLabel
                    number="02"
                    label="Context"
                  />

                  <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16">
                    <div>
                      <span
                        className="block text-[9px] tracking-[0.18em] uppercase opacity-30 mb-4"
                        style={MONO}
                      >
                        The situation
                      </span>

                      <p
                        className="text-sm leading-7 opacity-55"
                        style={BODY}
                      >
                        {project.context}
                      </p>
                    </div>

                    <div>
                      <span
                        className="block text-[9px] tracking-[0.18em] uppercase opacity-30 mb-4"
                        style={MONO}
                      >
                        What mattered
                      </span>

                      <p
                        className="text-sm leading-7 opacity-55"
                        style={BODY}
                      >
                        Sistem harus mudah digunakan oleh tim non-teknis,
                        tetap fleksibel untuk kebutuhan yang berubah,
                        dan memiliki fondasi yang dapat dikembangkan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary image */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-12 md:py-16 border-b border-background/10">
                  <ProjectLabel
                    number="03"
                    label="Inside the product"
                  />

                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-background/5 border border-background/10">
                      <Image
                        src={project.secondaryImage}
                        alt={`${project.title} product detail`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 900px"
                      />
                    </div>

                    <p
                      className="mt-4 text-[10px] leading-5 opacity-30 max-w-md"
                      style={MONO}
                    >
                      PRODUCT INTERFACE / SELECTED SCREEN
                    </p>
                  </div>
                </div>

                {/* Scope */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-12 md:py-16 border-b border-background/10">
                  <ProjectLabel
                    number="04"
                    label="What we built"
                  />

                  <div className="divide-y divide-background/10">
                    {project.deliverables.map(
                      ([number, title, description]) => (
                        <div
                          key={number}
                          className="py-6 first:pt-0 last:pb-0 grid sm:grid-cols-[50px_1fr_1fr] gap-5 items-start"
                        >
                          <span
                            className="text-[9px] opacity-25"
                            style={MONO}
                          >
                            {number}
                          </span>

                          <h3
                            className="text-base md:text-lg font-medium"
                            style={DISPLAY}
                          >
                            {title}
                          </h3>

                          <p
                            className="text-sm leading-6 opacity-40"
                            style={BODY}
                          >
                            {description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Outcome */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-12 md:py-16 border-b border-background/10">
                  <ProjectLabel
                    number="05"
                    label="Outcome"
                  />

                  <div>
                    <p
                      className="text-xl md:text-2xl leading-9 md:leading-10 opacity-70 max-w-3xl"
                      style={BODY}
                    >
                      {project.outcome}
                    </p>

                    <div className="mt-10 grid sm:grid-cols-3 gap-8">
                      <OutcomeStat
                        value="01"
                        label="Integrated Platform"
                      />

                      <OutcomeStat
                        value="04"
                        label="Core Modules"
                      />

                      <OutcomeStat
                        value="100%"
                        label="Digital Workflow"
                      />
                    </div>
                  </div>
                </div>

                {/* Technology */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 py-10 border-b border-background/10">
                  <ProjectLabel
                    number="06"
                    label="Technology"
                  />

                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-sm opacity-50"
                        style={BODY}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6">
                  <span
                    className="text-[9px] tracking-[0.18em] uppercase opacity-25"
                    style={MONO}
                  >
                    End of project / {project.number}
                  </span>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm group"
                    style={DISPLAY}
                  >
                    <span className="border-b border-background/20 pb-1 group-hover:border-background transition-colors">
                      Open project
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="border-t border-background/10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <div>
              <span
                className="text-[10px] tracking-[0.18em] uppercase opacity-30"
                style={MONO}
              >
                What we do
              </span>
            </div>

            <div>
              <h2
                className="text-3xl md:text-5xl font-medium tracking-[-0.04em] leading-tight max-w-3xl"
                style={DISPLAY}
              >
                Dari ide yang belum jelas hingga produk yang siap
                digunakan.
              </h2>

              <div className="mt-14 border-t border-background/10">
                {[
                  [
                    "01",
                    "Product Strategy",
                    "Memahami masalah, pengguna, dan kebutuhan bisnis sebelum menentukan apa yang perlu dibangun.",
                  ],
                  [
                    "02",
                    "Product Design",
                    "Merancang struktur, interface, dan interaction yang membuat produk mudah dipahami.",
                  ],
                  [
                    "03",
                    "Engineering",
                    "Membangun frontend dan backend dengan fondasi yang siap berkembang.",
                  ],
                  [
                    "04",
                    "Technology",
                    "Menghubungkan produk dengan sistem dan layanan yang sudah digunakan bisnis.",
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="grid md:grid-cols-[50px_1fr_1fr] gap-5 py-7 border-b border-background/10"
                  >
                    <span
                      className="text-[9px] opacity-25"
                      style={MONO}
                    >
                      {number}
                    </span>

                    <h3
                      className="text-lg font-medium"
                      style={DISPLAY}
                    >
                      {title}
                    </h3>

                    <p
                      className="text-sm leading-7 opacity-45"
                      style={BODY}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER CTA
      ========================================================== */}
      <section className="border-t border-background/10 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[70px_1fr] gap-8 md:gap-12">
            <span
              className="text-[10px] opacity-30"
              style={MONO}
            >
              05
            </span>

            <div>
              <span
                className="block text-[10px] tracking-[0.18em] uppercase opacity-35 mb-8"
                style={MONO}
              >
                Start a project
              </span>

              <h2
                className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.06em] leading-[0.9] max-w-5xl"
                style={DISPLAY}
              >
                Punya sesuatu
                <br />
                yang perlu dibangun?
              </h2>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-sm group"
                  style={DISPLAY}
                >
                  <span className="border-b border-background/30 pb-1 group-hover:border-background transition-colors">
                    Mari bicara
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===============================================================
   SMALL COMPONENTS
================================================================ */

function ProjectMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <span
        className="block text-[8px] tracking-[0.17em] uppercase opacity-25 mb-1.5"
        style={MONO}
      >
        {label}
      </span>

      <span
        className="text-xs opacity-55"
        style={BODY}
      >
        {value}
      </span>
    </div>
  );
}

function ProjectLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="text-[9px] opacity-25"
        style={MONO}
      >
        {number}
      </span>

      <span
        className="text-[10px] tracking-[0.18em] uppercase opacity-35"
        style={MONO}
      >
        {label}
      </span>
    </div>
  );
}

function OutcomeStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <span
        className="block text-3xl md:text-4xl font-medium tracking-tight"
        style={DISPLAY}
      >
        {value}
      </span>

      <span
        className="block mt-2 text-[9px] tracking-[0.15em] uppercase opacity-30"
        style={MONO}
      >
        {label}
      </span>
    </div>
  );
}