import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Teknologi Blockchain & Smart Contract | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan smart contract, private consortium ledger, dan sistem verifikasi keaslian berbasis blockchain dari BlankOn Digital Tech.",
};

export default function BlockchainPage() {
  const service = servicesDetailData["blockchain"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Layanan Rekayasa Sistem"
          title={service.title}
          description="Integritas data terdistribusi yang kebal manipulasi dan kontrak pintar otomatis untuk auditabilitas operasional berkepercayaan tinggi."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

