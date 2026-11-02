import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Sains Data & Business Intelligence | BlankOn Digital Tech",
  description: "Alur kerja audit sumber data, pembangunan pipeline ETL otomatis, data warehouse analitik, dashboard eksekutif, dan pemodelan prediktif dari BlankOn Digital Tech.",
};

export default function DataScienceProcessPage() {
  const serviceProcess = servicesProcessData["data-science"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus rekayasa data CRISP-DM: pembersihan data kotor, konsolidasi ke satu gudang data analitik (SSOT), rekonsiliasi akurasi 100%, hingga pelatihan tim analis internal."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

