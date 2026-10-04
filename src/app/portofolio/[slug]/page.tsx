import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { portfolioData } from "@/lib/portfolio-data";
import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ShareProject from "./ShareProject";

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground selection:bg-accent-color selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-28 max-w-8xl mx-auto relative overflow-hidden">
        <div
          className="absolute -bottom-70 left-1/2 -translate-x-1/2 w-full h-[350px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, var(--accent-color) 5% 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-foreground/10 pb-6 mb-12">
          <Link href="/portofolio" className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:text-[var(--accent-color)] transition-colors" style={MONO}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="text-xs uppercase tracking-widest text-muted-foreground" style={MONO}>
            Project Archive / 2024
          </div>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-8">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-color)] mb-6 bg-[var(--accent-color)]/10 px-3 py-1.5 rounded-sm" style={MONO}>
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none" style={DISPLAY}>
              {project.title}
            </h1>
            <p className="text-2xl text-muted-foreground font-light" style={BODY}>
              Untuk {project.client}
            </p>
          </div>

          {/* Metadata Table */}
          <div className="md:col-span-4 self-end">
            <div className="border-t border-foreground/10">
              <div className="flex justify-between py-3 border-b border-foreground/10 text-sm">
                <span className="text-muted-foreground" style={MONO}>Tahun</span>
                <span className="font-semibold" style={MONO}>{project.year}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-foreground/10 text-sm">
                <span className="text-muted-foreground" style={MONO}>Industri</span>
                <span className="font-semibold" style={MONO}>{project.industry}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-foreground/10 text-sm">
                <span className="text-muted-foreground" style={MONO}>Durasi</span>
                <span className="font-semibold" style={MONO}>{project.duration}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-foreground/10 text-sm">
                <span className="text-muted-foreground" style={MONO}>Status</span>
                <span className="font-semibold" style={MONO}>{project.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big visual block / Image placeholder */}
        <div className="w-full aspect-[21/9] bg-secondary/30 border border-foreground/10 flex items-center justify-center mb-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/5 via-background to-background" />
          <div className="text-center relative z-10 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="text-4xl font-black tracking-widest text-foreground/20" style={DISPLAY}>
              PRODUCT INTERFACE
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-4" style={MONO}>
              Selected Screens
            </div>
          </div>
        </div>

        {/* Editorial Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

          {/* Main Content Column */}
          <div className="md:col-span-8 space-y-24">

            {/* 01 About */}
            <section>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[var(--accent-color)] font-bold text-lg" style={MONO}>01</span>
                <h2 className="text-3xl font-bold" style={DISPLAY}>Tentang Proyek</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground" style={BODY}>
                {project.excerpt}
              </p>
            </section>

            {/* 02 Context */}
            <section>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[var(--accent-color)] font-bold text-lg" style={MONO}>02</span>
                <h2 className="text-3xl font-bold" style={DISPLAY}>Konteks & Tantangan</h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-3" style={MONO}>Situasi Awal</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground" style={BODY}>
                    {project.contextSituation}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-3" style={MONO}>Fokus Utama</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground" style={BODY}>
                    {project.contextMattered}
                  </p>
                </div>
              </div>
            </section>

            {/* 05 Outcome */}
            <section>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[var(--accent-color)] font-bold text-lg" style={MONO}>03</span>
                <h2 className="text-3xl font-bold" style={DISPLAY}>Hasil Akhir (Outcome)</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-12" style={BODY}>
                {project.outcome}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-b border-foreground/10 py-10">
                <div className="text-center border-b sm:border-b-0 sm:border-r border-foreground/10 pb-6 sm:pb-0 last:border-0">
                  <div className="text-4xl font-black mb-2" style={DISPLAY}>01</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground" style={MONO}>Integrated Platform</div>
                </div>
                <div className="text-center border-b sm:border-b-0 sm:border-r border-foreground/10 pb-6 sm:pb-0 last:border-0">
                  <div className="text-4xl font-black mb-2" style={DISPLAY}>04</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground" style={MONO}>Core Modules</div>
                </div>
                <div className="text-center last:border-0">
                  <div className="text-4xl font-black mb-2" style={DISPLAY}>100%</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground" style={MONO}>Digital Workflow</div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-16">

            <div className="sticky top-32">
              {/* Technology */}
              <div className="mb-12">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-[var(--accent-color)] font-bold" style={MONO}>04</span>
                  <h3 className="text-xl font-bold" style={DISPLAY}>Teknologi</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {project.technologies.map(tech => (
                    <li key={tech} className="flex items-center gap-3 text-sm" style={MONO}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* End of Project */}
              <div className="border border-foreground/10 bg-secondary/10 p-8 flex flex-col items-start gap-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground" style={MONO}>
                  Akses Proyek
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between bg-foreground text-background hover:bg-[var(--accent-color)] hover:text-white transition-colors p-4 group"
                  style={MONO}
                >
                  <span className="text-xs uppercase tracking-widest font-bold">Open Project</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              
              {/* Share Project */}
              <ShareProject title={project.title} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
