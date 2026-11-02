import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Quality Assurance (QA) & Testing | BlankOn Digital Tech",
  description: "Alur kerja jaminan mutu perangkat lunak berbasis continuous testing, automasi Cypress/Playwright, audit keamanan, dan uji beban JMeter/k6 dari BlankOn Digital Tech.",
};

export default function QualityAssuranceProcessPage() {
  const serviceProcess = servicesProcessData["quality-assurance-qa-testing"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Kerangka kerja pengujian perangkat lunak terintegrasi, mulai dari perumusan test matrix, automasi end-to-end, uji beban konkurensi tinggi, hingga verifikasi regresi pra-rilis."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

