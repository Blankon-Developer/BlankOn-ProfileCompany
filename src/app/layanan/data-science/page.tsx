import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Sains Data & Business Intelligence (BI) | Layanan BlankOn Digital Tech",
  description: "Layanan pembangunan pipeline data ETL, data warehouse modern, dashboard eksekutif real-time, dan pemodelan prediktif dari BlankOn Digital Tech.",
};

export default function DataSciencePage() {
  const service = servicesDetailData["data-science"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Analitik & Intelijen Data"
          title={service.title}
          description="Mengonsolidasikan jutaan baris data mentah menjadi dashboard analitik interaktif dan model prediksi yang memandu keputusan strategis perusahaan."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

