import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServicePricingDetailClient from "@/components/sections/harga/ServicePricingDetailClient";
import { servicesPricingData } from "@/lib/services-pricing-data";

export const metadata = {
  title: "Estimasi Biaya Aplikasi Mobile (iOS & Android) | BlankOn Digital Tech",
  description: "Rincian biaya aplikasi member loyalitas UKM, aplikasi on-demand booking mitra, dompet digital FinTech, dan aplikasi ERP enterprise lapangan dari BlankOn Digital Tech.",
};

export default function MobileDevelopmentPricingPage() {
  const servicePricing = servicesPricingData["mobile-development"];

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

