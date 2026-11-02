import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Konten Kreatif & UI/UX | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar perancangan UI/UX, Design System korporat, video profil perusahaan, dan strategi visual berorientasi konversi.",
};

export default function CreativeContentFAQPage() {
  const serviceFAQ = servicesFAQData["creative-content-digital-media"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai pentingnya UX berbasis riset psikologi pengguna, standarisasi Design System di Figma, kepemilikan aset grafis, dan putaran revisi."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

