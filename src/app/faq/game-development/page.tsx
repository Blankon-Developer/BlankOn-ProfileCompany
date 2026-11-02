import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Pengembangan Game & Simulasi | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar gamifikasi pemasaran brand, game 2D/3D Unity, simulasi pelatihan kejuruan, dan kepemilikan hak cipta.",
};

export default function GameDevelopmentFAQPage() {
  const serviceFAQ = servicesFAQData["game-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai cara kerja gamified marketing, mini-game browser tanpa unduh aplikasi, sistem pencegahan kecurangan skor, dan estimasi waktu produksi."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

