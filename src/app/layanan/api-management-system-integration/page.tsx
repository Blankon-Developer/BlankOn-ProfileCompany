import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "API Management & Integrasi Sistem | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan arsitektur API Gateway, integrasi microservices, dan sinkronisasi data antar sistem enterprise dari BlankOn Digital Tech.",
};

export default function APIManagementPage() {
  const service = servicesDetailData["api-management-system-integration"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Layanan Rekayasa Sistem"
          title={service.title}
          description="Menghubungkan aplikasi, basis data, dan pihak ketiga dalam satu ekosistem data yang sinkron, andal, dan terlindungi protokol keamanan ketat."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

