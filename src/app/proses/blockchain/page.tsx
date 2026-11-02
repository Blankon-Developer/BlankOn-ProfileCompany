import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Blockchain & Smart Contract | BlankOn Digital Tech",
  description: "Alur kerja rekayasa smart contract terverifikasi formal, audit keamanan berlapis, dan deployment konsorsium enterprise dari BlankOn Digital Tech.",
};

export default function BlockchainProcessPage() {
  const serviceProcess = servicesProcessData["blockchain"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus rekayasa kontrak pintar terstandarisasi OpenZeppelin, audit keamanan kerentanan celah kritis, dan konfigurasi multi-signature untuk integritas aset digital."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

