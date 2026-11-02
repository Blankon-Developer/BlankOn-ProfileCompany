import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Internet of Things (IoT) & Integrasi Hardware | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan sensor telemetri pintar, firmware mikrokontroler, protokol MQTT hemat daya, dan dashboard monitoring lapangan dari BlankOn Digital Tech.",
};

export default function IoTPage() {
  const service = servicesDetailData["internet-of-things"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Hardware & Sistem Tertanam"
          title={service.title}
          description="Menghubungkan aset fisik dengan komputasi awan melalui sensor presisi tinggi, kendali otomatis, dan pemantauan telemetri lapangan secara real-time."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

