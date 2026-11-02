import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi API Management & Integrasi Sistem | BlankOn Digital Tech",
  description: "Alur kerja dan metode rekayasa integrasi API Gateway, interoperabilitas sistem legacy, dan sinkronisasi data dari BlankOn Digital Tech.",
};

export default function APIManagementProcessPage() {
  const serviceProcess = servicesProcessData["api-management-system-integration"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Tahapan rekayasa interkoneksi data non-invasif dari audit sistem eksisting, standardisasi kontrak OpenAPI, hingga pengalihan jalur produksi tanpa waktu henti."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

