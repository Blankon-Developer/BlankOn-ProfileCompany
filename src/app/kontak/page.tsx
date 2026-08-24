import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Hubungi Kami | Baracode Tech Solution",
  description: "Mari diskusikan kebutuhan teknologi Anda bersama tim ahli kami.",
};

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

        <section className="py-12 md:py-24 px-6 md:px-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-black mb-6" style={DISPLAY}>Informasi Kontak</h2>
                <p className="text-muted-foreground text-lg mb-8" style={BODY}>
                  Konsultasi awal dengan tim kami 100% gratis. Kami akan dengan senang hati mendengarkan kebutuhan dan tantangan bisnis Anda.
                </p>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={DISPLAY}>Email</h3>
                      <p className="text-muted-foreground mt-1" style={BODY}>hello@baracode.id</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={DISPLAY}>Telepon / WhatsApp</h3>
                      <p className="text-muted-foreground mt-1" style={BODY}>+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-full">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={DISPLAY}>Alamat Kantor</h3>
                      <p className="text-muted-foreground mt-1 leading-relaxed max-w-xs" style={BODY}>
                        Jl. Ringin Tirto No. 42, Purwokerto Utara, Banyumas, Jawa Tengah 53121
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/50 dark:bg-black/20 border border-border p-8 md:p-10 rounded-xl">
              <h3 className="text-2xl font-black mb-6" style={DISPLAY}>Kirim Pesan</h3>
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={MONO}>Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors rounded-md"
                    style={BODY}
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={MONO}>Alamat Email</label>
                  <input 
                    type="email" 
                    placeholder="john@perusahaan.com"
                    className="px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors rounded-md"
                    style={BODY}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={MONO}>Topik</label>
                  <select 
                    className="px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors rounded-md appearance-none"
                    style={BODY}
                  >
                    <option>Konsultasi Proyek Baru</option>
                    <option>Maintenance Sistem Lama</option>
                    <option>Partnership</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={MONO}>Pesan</label>
                  <textarea 
                    rows={5}
                    placeholder="Ceritakan sedikit tentang proyek atau tantangan Anda..."
                    className="px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors rounded-md resize-none"
                    style={BODY}
                  />
                </div>

                <button 
                  type="button"
                  className="mt-4 px-8 py-4 bg-foreground text-background font-bold hover:opacity-90 transition-opacity rounded-md"
                  style={DISPLAY}
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
