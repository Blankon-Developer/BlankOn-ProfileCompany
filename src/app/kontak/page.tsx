import { Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Hubungi Kami | BlankOn Digital Tech",
  description: "Mari diskusikan kebutuhan teknologi Anda bersama tim ahli kami.",
};
const contactDetails = [
  {
    icon: Mail,
    label: "Email Resmi Kami",
    value1: "blankondev@hotmail.com",
    value2: "blankondigitaltech@gmail.com",
  },
  {
    icon: Phone,
    label: "No. Telepon / WhatsApp",
    value: "+62 851-7415-5704",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value:
      "Jl. Ringin Tirto No. 42, Purwokerto Utara, Banyumas, Jawa Tengah 53121",
  },
];
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader
          tag="Hubungi Kami"
          title="Mari Berkolaborasi"
          description="Punya ide besar yang belum tahu harus mulai dari mana? Atau sistem perusahaan yang butuh peremajaan? Tim ahli kami siap membantu Anda."
        />

        {/* Contact */}
        <section>
          <div className="mx-auto grid max-w-8xl px-6 lg:px-20 grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] pt-0 pb-12">
            {/* Information */}
            <aside className="border-b border-[var(--accent-color)] md:border-foreground px-6 py-14 md:px-8 lg:border-b-0 lg:border-r lg:py-2">
              <div className="max-w-full">
                <p
                  className="mb-5 text-xs md:text-base text-center md:text-right font-semibold uppercase tracking-[0.18em] text-[var(--accent-color)] border-b border-foreground/20 pb-1"
                  style={MONO}
                >
                  Informasi Kontak Kami
                </p>

                <div className="space-y-2">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="flex gap-4">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-color)]" />

                        <div className="w-full">
                          <p
                            className="mb-1 text-sm font-semibold"
                            style={DISPLAY}
                          >
                            {item.label}
                          </p>

                          <p
                            className="text-sm leading-6 text-muted-foreground text-justify"
                            style={BODY}
                          >
                            {item.value}
                            {item.value1 && item.value1}
                            <br />
                            {item.value2 && item.value2}
                          </p>

                          {item.label === "Alamat" && (
                            <div className="mt-6 w-full h-[320px] rounded-lg overflow-hidden border border-border opacity-90 hover:opacity-100 transition-opacity">
                              <iframe
                                src="https://maps.google.com/maps?q=Jl.%20Ringin%20Tirto%20No.%2042,%20Purwokerto%20Utara,%20Banyumas,%20Jawa%20Tengah%2053121&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps - Alamat BlankOn Digital Tech"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-16 border-t border-border pt-6">
                  <p
                    className="text-sm leading-6 text-muted-foreground text-justify"
                    style={BODY}
                  >
                    <span className="text-[var(--accent-color)] font-semibold">BlankOn Digital Tech</span> hadir sebagai partner teknologi untuk membantu membangun, memperbaiki, dan mengembangkan kebutuhan digital Anda dengan slogan <span className="text-[var(--accent-color)] font-semibold">“WE TOGETHER, DEPLOY THE FUTURE”.</span> Kami memastikan setiap layanan yang kami berikan mampu berdampak yang terbaik bagi bisnis Anda dalam mencapai kesuksesan pada ranah digital dengan solusi teknologi yang inovatif, aman, dan efisien.
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="px-6 py-14 md:px-6 lg:px-8 lg:py-2">
              <div className="max-w-full">
                <div className="mb-10">
                  <p
                    className="mb-3 text-xs md:text-base text-center md:text-right font-semibold uppercase tracking-[0.18em] text-[var(--accent-color)]"
                    style={MONO}
                  >
                    Mulai Percakapan Di Sini
                  </p>

                  <h2
                    className="text-[22px] text-center md:text-left font-black tracking-tight md:text-4xl"
                    style={DISPLAY}
                  >
                    Silakan ceritakan kebutuhan atau Ide Bisnis Anda,
                  </h2>
                  <h2
                    className="text-[22px] text-center md:text-left font-black tracking-tight md:text-4xl"
                    style={DISPLAY}
                  >
                    Kami siap membantu Anda.
                  </h2>
                </div>

                <Suspense fallback={
                  <div className="p-12 text-center text-muted-foreground font-mono" style={MONO}>
                    Menyiapkan formulir kontak...
                  </div>
                }>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Opsi Alternatif: Pengantar Singkat & Tautan ke Halaman Jadwal Temu */}
          <div className="mx-auto max-w-8xl px-6 lg:px-28 pb-16">
            <div
              className="group relative isolate overflow-hidden border border-border bg-black/[0.03] dark:bg-white/[0.04] p-8 md:p-10 backdrop-blur-xs transition-colors duration-300 hover:border-[var(--accent-color)] shadow-xs"
            >
              {/* Lapisan gambar latar */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat bg-right opacity-70 dark:opacity-55 transition-opacity duration-500 group-hover:opacity-85"
                style={{
                  backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.04) 45%, rgba(0, 0, 0, 0.12) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85")`,
                  backgroundSize: "cover",
                  maskImage: "linear-gradient(to left, black 0%, black 15%, transparent 85%)",
                  WebkitMaskImage: "linear-gradient(to left, black 0%, black 15%, transparent 85%)",
                }}
              />

              {/* Lapisan penyeimbang kontras */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-black dark:via-black/90"
              />

              {/* Konten utama */}
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl space-y-2.5">
                  <div className="inline-flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full inline-block"
                      style={{ backgroundColor: "var(--accent-color)" }}
                    />

                    <span
                      className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-semibold"
                      style={MONO}
                    >
                      Jalur Cepat Diskusi 1-on-1
                    </span>
                  </div>

                  <h3
                    className="text-xl md:text-2xl font-black tracking-tight text-foreground"
                    style={DISPLAY}
                  >
                    Ingin Langsung Berdiskusi Tanpa Mengisi Formulir?
                  </h3>

                  <p
                    className="text-sm text-muted-foreground leading-relaxed text-justify"
                    style={BODY}
                  >
                    Lewati formulir di atas jika Anda ingin segera menentukan waktu
                    diskusi. Anda dapat langsung memilih jadwal temu atau sesi
                    konsultasi tatap muka maupun daring bersama tim Solution
                    Architect kami melalui portal reservasi khusus.
                  </p>
                </div>

                <div className="relative z-20 shrink-0 w-full lg:w-auto">
                  <Link
                    href="/kontak/jadwal-temu"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-3 px-6 py-3.5 font-bold text-sm rounded-xl transition-all duration-300 hover:opacity-90 active:scale-[0.99] cursor-pointer shadow-md group/cta"
                    style={{
                      ...DISPLAY,
                      backgroundColor: "var(--accent-color)",
                      color: "black",
                    }}
                  >
                    <span className="text-xs md:text-sm tracking-tight text-white dark:text-black uppercase">Jadwalkan Janji Temu</span>

                    <ArrowRight
                      size={16}
                      className="text-white dark:text-black transition-transform group-hover/cta:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <div className="relative w-full">
        <div
          className="absolute hidden md:block top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-7xl h-[100px] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at center, var(--accent-color) 0%, transparent 68%)`,
            filter: "blur(5px)",
            opacity: 0.35,
          }}
        />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
