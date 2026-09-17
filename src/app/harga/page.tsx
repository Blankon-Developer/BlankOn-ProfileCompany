
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import {
  CheckCircle2,
  ArrowRight,
  User,
  Store,
  Building2,
  Landmark,
  Monitor,
  Smartphone,
  Cloud,
  BarChart3,
  Brain,
  Cpu,
  Blocks,
  Video,
  Verified,
} from "lucide-react";
import { IoIosGitMerge } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import Link from "next/link";

export const metadata = {
  title: "Harga & Layanan | Baracode Tech Solution",
  description:
    "Paket pengembangan solusi digital Baracode Tech Solution untuk personal, UMKM, startup, perusahaan, hingga kebutuhan enterprise dan pemerintahan.",
};

/**
 * Pricing dibuat berdasarkan kompleksitas solusi,
 * bukan berdasarkan kategori customer.
 *
 * Kategori customer tetap digunakan sebagai panduan
 * agar calon customer lebih mudah menemukan paket yang sesuai.
 */

const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    label: "Untuk memulai",
    description:
      "Solusi digital sederhana untuk personal, freelancer, dan bisnis yang baru mulai membangun kehadiran digital.",
    price: "Mulai dari Rp 2 Juta",
    icon: <User className="w-8 h-8 mb-4" />,
    suitableFor: ["Personal", "Freelancer", "Bisnis Baru"],
    services: [
      {
        name: "Web Development",
        icon: <Monitor size={14} />,
      },
    ],
    features: [
      "Website / Landing Page Custom",
      "Responsive di Semua Perangkat",
      "Custom UI sesuai kebutuhan",
      "Optimasi SEO Dasar",
      "Integrasi Form & WhatsApp",
      "Domain & Hosting Tahun Pertama",
      "Maintenance Dasar 1 Bulan",
    ],
    popular: false,
  },

  {
    id: "business",
    name: "Business",
    label: "Untuk bisnis berkembang",
    description:
      "Membangun sistem digital yang membantu bisnis mengelola informasi, pelanggan, produk, dan aktivitas operasional.",
    price: "Mulai dari Rp 5 Juta",
    icon: <Store className="w-8 h-8 mb-4" />,
    suitableFor: ["UMKM", "Retail", "Bisnis Lokal"],
    services: [
      {
        name: "Web Development",
        icon: <Monitor size={14} />,
      },
      {
        name: "Mobile Development",
        icon: <Smartphone size={14} />,
      },
    ],
    features: [
      "Company Profile / Katalog Produk",
      "Web Application Dasar",
      "Dashboard Admin",
      "Sistem POS / Kasir Sederhana",
      "Integrasi WhatsApp & API",
      "Database & Authentication",
      "Analytics Dasar",
      "Maintenance 3 Bulan",
    ],
    popular: false,
  },

  {
    id: "growth",
    name: "Growth",
    label: "Untuk produk & sistem custom",
    description:
      "Solusi custom untuk startup dan perusahaan yang membutuhkan aplikasi, integrasi sistem, dan infrastruktur digital yang lebih kompleks.",
    price: "Mulai dari Rp 15 Juta",
    icon: <Building2 className="w-8 h-8 mb-4" />,
    suitableFor: ["Startup", "Company", "Scale-up"],
    services: [
      {
        name: "Web Development",
        icon: <Monitor size={14} />,
      },
      {
        name: "Mobile Development",
        icon: <Smartphone size={14} />,
      },
      {
        name: "Cloud Computing",
        icon: <Cloud size={14} />,
      },
    ],
    features: [
      "Custom Web Application",
      "Custom Mobile Application",
      "Dashboard & Admin Panel",
      "Authentication & Role Management",
      "API & Database Integration",
      "Cloud Deployment",
      "Basic DevOps Setup",
      "Maintenance & Support 6 Bulan",
    ],
    popular: true,
  },

  {
    id: "advanced",
    name: "Advanced",
    label: "Untuk kebutuhan teknologi khusus",
    description:
      "Pengembangan solusi berbasis data, AI, cloud, dan IoT untuk kebutuhan bisnis dengan proses dan sistem yang lebih kompleks.",
    price: "Mulai dari Rp 50 Juta",
    icon: <Brain className="w-8 h-8 mb-4" />,
    suitableFor: [
      "Company",
      "Startup Teknologi",
      "Data-driven Business",
    ],
    services: [
      {
        name: "Cloud Computing",
        icon: <Cloud size={14} />,
      },
      {
        name: "Data Science",
        icon: <BarChart3 size={14} />,
      },
      {
        name: "AI / Machine Learning",
        icon: <Brain size={14} />,
      },
      {
        name: "IoT",
        icon: <Cpu size={14} />,
      },
    ],
    features: [
      "Data Processing & Analytics",
      "Interactive Dashboard",
      "Predictive Model / Machine Learning",
      "AI & LLM Integration",
      "IoT Monitoring & Automation",
      "Cloud Infrastructure",
      "System Integration & API",
      "Technical Support & Maintenance",
    ],
    popular: false,
  },

  {
    id: "enterprise",
    name: "Enterprise",
    label: "Untuk sistem berskala besar",
    description:
      "Solusi teknologi dengan kebutuhan keamanan, integrasi, infrastruktur, dan skalabilitas tinggi untuk organisasi dan institusi.",
    price: "Custom",
    icon: <Landmark className="w-8 h-8 mb-4" />,
    suitableFor: [
      "Enterprise",
      "Pemerintah",
      "Institusi",
    ],
    services: [
      {
        name: "AI / Machine Learning",
        icon: <Brain size={14} />,
      },
      {
        name: "IoT",
        icon: <Cpu size={14} />,
      },
      {
        name: "Blockchain",
        icon: <Blocks size={14} />,
      },
      {
        name: "Cloud / Infrastructure",
        icon: <Cloud size={14} />,
      },
    ],
    features: [
      "Enterprise Web / Mobile Application",
      "Distributed System Architecture",
      "AI & Big Data Processing",
      "IoT & Sensor Integration",
      "Blockchain & Smart Contract",
      "Cloud / On-Premise Infrastructure",
      "Security & Access Control",
      "System Integration",
      "SLA & Dedicated Support",
    ],
    popular: false,
  },
];

const customerCategories = [
  {
    id: "personal",
    icon: <User size={22} />,
    title: "Personal",
    description:
      "Website, portfolio, personal branding, atau produk digital sederhana.",
    recommended: "Starter",
  },
  {
    id: "umkm",
    icon: <Store size={22} />,
    title: "UMKM",
    description:
      "Digitalisasi bisnis, katalog, POS, dashboard, dan aplikasi operasional.",
    recommended: "Business",
  },
  {
    id: "company",
    icon: <Building2 size={22} />,
    title: "Company",
    description:
      "Aplikasi custom, integrasi sistem, cloud, data, dan automation.",
    recommended: "Growth / Advanced",
  },
  {
    id: "pemerintahan",
    icon: <Landmark size={22} />,
    title: "Pemerintah",
    description:
      "Sistem terintegrasi, data, IoT, AI, cloud, dan kebutuhan enterprise.",
    recommended: "Enterprise",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />

      <main>
        <PageHeader
          tag="Skema Harga & Layanan"
          title="Solusi Digital Sesuai Kebutuhan Anda"
          description="Tidak semua proyek membutuhkan teknologi yang sama. Kami menyesuaikan solusi, arsitektur, dan tingkat pengembangan berdasarkan kebutuhan bisnis, kompleksitas sistem, dan target yang ingin dicapai."
        />

        {/* CUSTOMER CATEGORY */}
        <section className="px-6 md:px-28 pt-12 md:py-12">
          <div className="max-w-8xl mx-auto">
            <div className="max-w-full mb-10">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={MONO}
              >
                Siapa Anda?
              </p>

              <h2
                className="text-3xl md:text-4xl font-black mb-4"
                style={DISPLAY}
              >
                Mulai dari kebutuhan Anda
              </h2>

              <p
                className="text-muted-foreground leading-relaxed"
                style={BODY}
              >
                Pilih kategori yang paling mendekati kondisi Anda.
                Setelah itu, kami dapat membantu menentukan tingkat solusi
                yang paling sesuai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {customerCategories.map((category) => (
                <div
                  key={category.id}
                  className="p-6 rounded-xl border border-border bg-white/50 dark:bg-black/20"
                >
                  <div className="mb-5">{category.icon}</div>

                  <h3
                    className="text-lg font-black mb-2"
                    style={DISPLAY}
                  >
                    {category.title}
                  </h3>

                  <p
                    className="text-sm text-muted-foreground leading-relaxed mb-5"
                    style={BODY}
                  >
                    {category.description}
                  </p>

                  <div
                    className="text-[10px] uppercase tracking-widest opacity-60"
                    style={MONO}
                  >
                    Rekomendasi:{" "}
                    <span className="font-bold opacity-100">
                      {category.recommended}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
<span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
        {/* PRICING */}
        <section className="py-16 md:py-12 px-6 md:px-10">
          <div className="max-w-8xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={MONO}
              >
                Paket Pengembangan
              </p>

              <h2
                className="text-3xl md:text-5xl font-black mb-4"
                style={DISPLAY}
              >
                Pilih Tingkat Solusi
              </h2>

              <p
                className="text-muted-foreground leading-relaxed"
                style={BODY}
              >
                Harga merupakan estimasi awal. Biaya akhir disesuaikan
                dengan jumlah fitur, kompleksitas sistem, integrasi,
                infrastruktur, dan kebutuhan khusus proyek.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`
                    relative flex flex-col p-7 border
                    transition-all duration-300 hover:shadow-xl
                    ${tier.popular
                      ? "border-foreground shadow-lg bg-foreground/70 text-background xl:-translate-y-4"
                      : "border-border bg-accent/30 dark:bg-accent/40 hover:border-foreground/50"
                    }
                  `}
                >
                  {tier.popular && (
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-background text-foreground text-[10px] font-bold uppercase tracking-widest rounded-full border border-foreground whitespace-nowrap"
                      style={MONO}
                    >
                      Paling Diminati
                    </div>
                  )}

                  <div className="mb-1">{tier.icon}</div>

                  <div
                    className={`text-[10px] uppercase tracking-widest mb-2 ${tier.popular
                        ? "text-background/60"
                        : "text-muted-foreground"
                      }`}
                    style={MONO}
                  >
                    {tier.label}
                  </div>

                  <h3
                    className="text-2xl font-black mb-3"
                    style={DISPLAY}
                  >
                    {tier.name}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${tier.popular
                        ? "text-background"
                        : "text-muted-foreground"
                      }`}
                    style={BODY}
                  >
                    {tier.description}
                  </p>

                  <div
                    className={`mb-6 pb-6 border-b ${tier.popular
                        ? "border-background"
                        : "border-border/40"
                      }`}
                  >
                    <div
                      className="text-2xl font-black"
                      style={DISPLAY}
                    >
                      {tier.price}
                    </div>
                  </div>

                  {/* SUITABLE FOR */}
                  <div className="mb-6">
                    <p
                      className="text-[10px] uppercase tracking-widest mb-3 font-semibold opacity-60"
                      style={MONO}
                    >
                      Cocok untuk:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tier.suitableFor.map((item) => (
                        <span
                          key={item}
                          className={`
                            text-xs px-2.5 py-1 rounded-md border
                            ${tier.popular
                              ? "bg-background/10 border-background/20"
                              : "bg-muted border-border"
                            }
                          `}
                          style={BODY}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* SERVICES */}
                  <div className="mb-6">
                    <p
                      className="text-[10px] uppercase tracking-widest mb-3 font-semibold opacity-60"
                      style={MONO}
                    >
                      Layanan Utama:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tier.services.map((service) => (
                        <span
                          key={service.name}
                          className={`
                            inline-flex items-center gap-1.5
                            text-xs px-2.5 py-1 rounded-md border
                            ${tier.popular
                              ? "bg-background/10 border-background/20"
                              : "bg-muted border-border"
                            }
                          `}
                          style={BODY}
                        >
                          {service.icon}
                          {service.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="flex-grow flex flex-col gap-3 mb-8">
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          className={`
                            w-4 h-4 flex-shrink-0 mt-0.5
                            ${tier.popular
                              ? "text-background"
                              : "text-foreground"
                            }
                          `}
                        />

                        <span
                          className="text-sm leading-snug"
                          style={BODY}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/kontak?package=${tier.id}`}
                    className={`
                      w-full inline-flex items-center justify-center
                      gap-2 py-3.5 font-bold text-sm rounded-md
                      transition-all mt-auto
                      ${tier.popular
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-foreground text-background hover:opacity-90"
                      }
                    `}
                    style={DISPLAY}
                  >
                    Konsultasikan
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
<span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
        {/* SERVICE SPECIALIZATION */}
        <section className="py-16 md:py-12 px-6 md:px-28">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={MONO}
                >
                  Layanan Khusus
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black mb-5"
                  style={DISPLAY}
                >
                  Butuh teknologi yang lebih spesifik?
                </h2>

                <p
                  className="text-muted-foreground leading-relaxed"
                  style={BODY}
                >
                  Tidak semua kebutuhan dapat dimasukkan ke dalam
                  paket standar. Blockchain, AI, IoT, Data Science,
                  dan cloud infrastructure dapat dikembangkan sebagai
                  bagian dari proyek custom.
                </p>
              </div>

              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  {
                    title: "API Management & System Integration",
                    icon: <IoIosGitMerge size={20} />,
                    desc: "Desain, fitur, dan integrasi sistem.",
                  },
                  {
                    title: "Blockchain",
                    icon: <Blocks size={20} />,
                    desc: "Smart contract, Web3, dan dApp.",
                  },
                  {
                    title: "Cloud Computing",
                    icon: <Cloud size={20} />,
                    desc: "Deployment, infrastructure, dan DevOps.",
                  },
                  {
                    title: "Creative Content & Digital Media",
                    icon: <Video size={20} />,
                    desc: "Visual storytelling dan content strategy.",
                  },
                  {
                    title: "Data Science",
                    icon: <BarChart3 size={20} />,
                    desc: "Analytics, dashboard, dan predictive model.",
                  },
                  {
                    title: "Game Development",
                    icon: <IoGameControllerOutline size={20} />,
                    desc: "Pengembangan game dan aplikasi interaktif.",
                  },
                  {
                    title: "Internet of Things",
                    icon: <Cpu size={20} />,
                    desc: "Sensor, monitoring, tracking, dan automation.",
                  },
                  {
                    title: "Machine Learning / AI",
                    icon: <Brain size={20} />,
                    desc: "AI, LLM, classification, recommendation.",
                  },
                  {
                    title: "Mobile Development",
                    icon: <Smartphone size={20} />,
                    desc: "Aplikasi iOS dan Android.",
                  },
                  {
                    title: "Quality Assurance (QA) / Testing",
                    icon: <Verified size={20} />,
                    desc: "Functional, performance, automation testing.",
                  },
                  {
                    title: "Web Development",
                    icon: <Monitor size={20} />,
                    desc: "Sistem, portal, dan website bisnis.",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="flex gap-4 p-5 border border-border bg-white/50 dark:bg-black/20"
                  >
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>

                    <div>
                      <h3
                        className="font-bold mb-1"
                        style={DISPLAY}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-sm text-muted-foreground"
                        style={BODY}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM PROJECT */}
        <section className="py-16 md:py-12 px-6 md:px-28">
          <div className="max-w-8xl mx-auto">
            <div className="bg-accent text-background p-8 md:p-12 text-center">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-90"
                style={MONO}
              >
                Tidak menemukan paket yang sesuai?
              </p>

              <h2
                className="text-3xl md:text-5xl font-black mb-5"
                style={DISPLAY}
              >
                Mari bahas kebutuhan proyek Anda.
              </h2>

              <p
                className="max-w-2xl mx-auto text-background/80 leading-relaxed mb-8"
                style={BODY}
              >
                Setiap proyek memiliki kebutuhan yang berbeda.
                Ceritakan masalah, target, dan sistem yang ingin
                Anda bangun. Kami akan membantu menentukan pendekatan
                teknologi dan estimasi yang paling masuk akal.
              </p>

              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-4 text-foreground bg-white dark:bg-black rounded-md font-bold text-sm hover:bg-background/90 transition-colors"
                style={DISPLAY}
              >
                Konsultasi Proyek
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}