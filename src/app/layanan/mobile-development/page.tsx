import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Pengembangan Aplikasi Mobile (iOS & Android) | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan dan pembangunan aplikasi seluler native dan cross-platform (React Native/Flutter) berkinerja tinggi dari BlankOn Digital Tech.",
};

export default function MobileDevelopmentPage() {
  const service = servicesDetailData["mobile-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Rekayasa Aplikasi Seluler"
          title={service.title}
          description="Aplikasi mobile iOS dan Android yang halus, ramah baterai, berarsitektur offline-first, dan terintegrasi dengan fitur perangkat keras gawai."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

