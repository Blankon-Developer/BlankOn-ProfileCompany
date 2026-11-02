import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Quality Assurance (QA) & Pengujian Perangkat Lunak | Layanan BlankOn Digital Tech",
  description: "Layanan pengujian mutu perangkat lunak, otomasi pengujian E2E, uji beban performa k6, dan audit celah keamanan dari BlankOn Digital Tech.",
};

export default function QualityAssurancePage() {
  const service = servicesDetailData["quality-assurance-qa-testing"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Jaminan Mutu & Keamanan"
          title={service.title}
          description="Memastikan setiap baris kode berjalan stabil, bebas cacat fungsional, dan tangguh terhadap lonjakan beban pengguna sebelum diluncurkan ke pasar."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

