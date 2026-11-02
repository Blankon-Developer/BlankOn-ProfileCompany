import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Konten Kreatif & Media Digital | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan UI/UX enterprise, design system korporat, dan strategi visual media digital berorientasi konversi dari BlankOn Digital Tech.",
};

export default function CreativeContentPage() {
  const service = servicesDetailData["creative-content-digital-media"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Desain & Media Digital"
          title={service.title}
          description="Mentransformasikan nilai keunggulan produk menjadi antarmuka UI/UX yang elegan, narasi visual persuasif, dan identitas digital yang berwibawa."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

