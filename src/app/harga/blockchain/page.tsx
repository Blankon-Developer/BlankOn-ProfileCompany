import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServicePricingDetailClient from "@/components/sections/harga/ServicePricingDetailClient";
import { servicesPricingData } from "@/lib/services-pricing-data";

export const metadata = {
  title: "Estimasi Biaya Blockchain & Smart Contract | BlankOn Digital Tech",
  description: "Rincian biaya pengembangan smart contract aman, dApp Web3, token utilitas, NFT marketplace, dan arsitektur enterprise private blockchain dari BlankOn Digital Tech.",
};

export default function BlockchainPricingPage() {
  const servicePricing = servicesPricingData["blockchain"];

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

