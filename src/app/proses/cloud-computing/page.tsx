import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Komputasi Cloud & DevOps | BlankOn Digital Tech",
  description: "Alur kerja provisi infrastruktur berbasis kode (IaC), kontainerisasi Kubernetes, pipeline CI/CD, dan migrasi zero-downtime dari BlankOn Digital Tech.",
};

export default function CloudComputingProcessPage() {
  const serviceProcess = servicesProcessData["cloud-computing"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Penerapan prinsip GitOps Terraform, otomatisasi pipa rilis CI/CD, arsitektur auto-scaling multi-zona, dan pemantauan telemetri aktif 24/7."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

