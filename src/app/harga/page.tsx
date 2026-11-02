
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
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

const serviceSpecializations = [
  {
    slug: "api-management-system-integration",
    title: "API Management & Integrasi Sistem",
    icon: <IoIosGitMerge size={20} />,
    desc: "Integrasi sistem legacy, custom API middleware, gateway pembayaran, dan antrean data.",
    startingPrice: "Mulai dari Rp 6 Juta",
  },
  {
    slug: "blockchain",
    title: "Blockchain & Smart Contract",
    icon: <Blocks size={20} />,
    desc: "Audit smart contract aman, dApp Web3, tokenomik ERC-20, NFT, dan private consortium.",
    startingPrice: "Mulai dari Rp 15 Juta",
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing & DevOps",
    icon: <Cloud size={20} />,
    desc: "Otomasi pipeline CI/CD, migrasi server tanpa downtime, Kubernetes, dan audit FinOps.",
    startingPrice: "Mulai dari Rp 8 Juta",
  },
  {
    slug: "creative-content-digital-media",
    title: "Konten Kreatif & Media Digital",
    icon: <Video size={20} />,
    desc: "Brand identity guidelines, Figma design system interaktif, dan video motion graphics 3D.",
    startingPrice: "Mulai dari Rp 5 Juta",
  },
  {
    slug: "data-science",
    title: "Data Science & BI Dashboard",
    icon: <BarChart3 size={20} />,
    desc: "Gudang data terpusat (ETL), dashboard KPI eksekutif, dan model analitik prediktif churn.",
    startingPrice: "Mulai dari Rp 12 Juta",
  },
  {
    slug: "game-development",
    title: "Game Development & Interaktif",
    icon: <IoGameControllerOutline size={20} />,
    desc: "Game web HTML5 promosi brand, game 2D mobile/PC, dan simulasi 3D pelatihan kerja.",
    startingPrice: "Mulai dari Rp 12 Juta",
  },
  {
    slug: "internet-of-things",
    title: "Internet of Things & Hardware",
    icon: <Cpu size={20} />,
    desc: "Prototipe sensor mikrokontroler, telemetri pemantauan realtime, dan otomasi industri.",
    startingPrice: "Mulai dari Rp 12 Juta",
  },
  {
    slug: "machine-learning-ai",
    title: "AI & Machine Learning",
    icon: <Brain size={20} />,
    desc: "Chatbot RAG dokumen internal, computer vision OCR, dan fine-tuning LLM on-premise.",
    startingPrice: "Mulai dari Rp 15 Juta",
  },
  {
    slug: "mobile-development",
    title: "Aplikasi Mobile (iOS & Android)",
    icon: <Smartphone size={20} />,
    desc: "Aplikasi loyalitas member, layanan on-demand kurir/booking, dan integrasi ERP mobile.",
    startingPrice: "Mulai dari Rp 10 Juta",
  },
  {
    slug: "quality-assurance-qa-testing",
    title: "Quality Assurance & QA Testing",
    icon: <Verified size={20} />,
    desc: "Audit manual matriks uji, otomasi E2E Playwright/Cypress, uji beban k6, dan audit VAPT.",
    startingPrice: "Mulai dari Rp 5 Juta",
  },
  {
    slug: "web-development",
    title: "Web Development & Enterprise",
    icon: <Monitor size={20} />,
    desc: "Landing page Next.js kilat, portal internal dashboard admin, e-commerce, dan SaaS.",
    startingPrice: "Mulai dari Rp 3.5 Juta",
  },
];

export const metadata = {
  title: "Harga & Layanan ",
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
        <section className="py-20 md:py-16 px-6 md:px-28 max-w-8xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]"
                style={MONO}
              >
                <Sparkles className="h-3.5 w-3.5" />
                ESTIMASI HARGA BERDASARKAN DISIPLIN TEKNOLOGI
              </span>
              <h2
                className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground"
                style={DISPLAY}
              >
                Butuh Estimasi Biaya untuk Disiplin Khusus?
              </h2>
              <p
                className="text-xs md:text-sm text-muted-foreground leading-relaxed text-justify"
                style={BODY}
              >
                Tidak semua kebutuhan sistem dapat dimasukkan ke dalam paket standar. Setiap domain teknologi—seperti integrasi API, AI, IoT, Blockchain, hingga Cloud—memiliki model implementasi, variabel kompleksitas, serta katalog proyek nyata yang berbeda. Pilih disiplin di bawah untuk melihat rincian biaya, contoh proyek yang bisa dibuat, dan edukasi teknisnya:
              </p>
            </div>

            <div className="text-xs text-muted-foreground font-mono shrink-0" style={MONO}>
              TERSEDIA 11 BIDANG SPESIALISASI
            </div>
          </div>

          {/* Grid 11 Kartu Spesialisasi Layanan dengan Link ke Masing-Masing Halaman */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSpecializations.map((service, index) => (
              <div
                key={service.slug}
                className="p-6 border border-border bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-lg group relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-mono font-bold text-[var(--accent-color)] px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10"
                      style={MONO}
                    >
                      LAYANAN {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded border border-border bg-muted/40 text-foreground"
                      style={MONO}
                    >
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl border border-border bg-muted/30 text-[var(--accent-color)] shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-foreground leading-snug group-hover:text-[var(--accent-color)] transition-colors"
                        style={DISPLAY}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground mt-0.5" style={MONO}>
                        4 Pilihan Implementasi Proyek
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-xs text-muted-foreground leading-relaxed text-justify line-clamp-3"
                    style={BODY}
                  >
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                  <Link
                    href={`/harga/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground group-hover:text-[var(--accent-color)] transition-colors cursor-pointer"
                    style={MONO}
                  >
                    <span>LIHAT RINCIAN BIAYA PROYEK</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href={`/layanan/${service.slug}`}
                    title="Buka spesifikasi layanan"
                    className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CUSTOM PROJECT */}
        <section className="py-16 md:py-12 px-0">
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

      
      <Footer />
    </div>
  );
}