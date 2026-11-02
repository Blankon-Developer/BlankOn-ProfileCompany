import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Pengembangan Game & Simulasi Interaktif | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan game 2D/3D Unity, gamifikasi promosi brand, dan simulasi pelatihan interaktif multi-platform dari BlankOn Digital Tech.",
};

export default function GameDevelopmentPage() {
  const service = servicesDetailData["game-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Media Interaktif & Hiburan"
          title={service.title}
          description="Menggabungkan mekanika permainan responsif, seni visual imersif, dan psikologi keterlibatan untuk kampanye promosi maupun simulasi pelatihan korporat."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

