import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Hubungi Kami | BlankOn Digital Tech",
  description: "Mari diskusikan kebutuhan teknologi Anda bersama tim ahli kami.",
};
const contactDetails = [
  {
    icon: Mail,
    label: "Email Resmi Kami",
    value: "blankondev@hotmail.com",
  },
  {
    icon: Phone,
    label: "No. Telepon / WhatsApp",
    value: "+62 812-3456-7890",
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
          <div className="mx-auto grid max-w-8xl px-6 lg:px-28 grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] pt-0 pb-12">
            {/* Information */}
            <aside className="border-b border-border px-6 py-14 md:px-8 lg:border-b-0 lg:border-r lg:py-6">
              <div className="max-w-full">
                <p
                  className="mb-10 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  style={MONO}
                >
                  Informasi Kontak Kami
                </p>

                <div className="space-y-9">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="flex gap-4">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

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
                    className="text-sm leading-6 text-muted-foreground"
                    style={BODY}
                  >
                    Kami biasanya merespons dalam satu hari kerja.
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="px-6 py-14 md:px-8 lg:px-16 lg:py-2">
              <div className="max-w-full">
                <div className="mb-10">
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    style={MONO}
                  >
                    Mulai Percakapan Di Sini
                  </p>

                  <h2
                    className="text-3xl font-black tracking-tight md:text-4xl"
                    style={DISPLAY}
                  >
                    Ceritakan kebutuhan Anda.
                  </h2>
                </div>

                <ContactForm />
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
