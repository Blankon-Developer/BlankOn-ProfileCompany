import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServicePricingDetailClient from "@/components/sections/harga/ServicePricingDetailClient";
import { servicesPricingData } from "@/lib/services-pricing-data";

export const metadata = {
  title: "Estimasi Biaya Data Science & Business Intelligence | BlankOn Digital Tech",
  description: "Rincian biaya perancangan data warehouse ETL, dashboard PowerBI/Metabase eksekutif, model analisis prediktif churn, dan big data streaming dari BlankOn Digital Tech.",
};

export default function DataSciencePricingPage() {
  const servicePricing = servicesPricingData["data-science"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Estimasi Biaya & Layanan"
          title={`Harga Proyek: ${servicePricing.title}`}
          description="Edukasi estimasi investasi, katalog implementasi proyek nyata, variabel penentu biaya, dan skema pembayaran transparan berbasis milestone."
        />
        <ServicePricingDetailClient servicePricing={servicePricing} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

