import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi AI & Machine Learning | BlankOn Digital Tech",
  description: "Alur kerja kurasi dokumen internal, indeksasi vector database, arsitektur RAG nol-halusinasi, dan integrasi WhatsApp dari BlankOn Digital Tech.",
};

export default function MachineLearningAIProcessPage() {
  const serviceProcess = servicesProcessData["machine-learning-ai"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus rekayasa AI aplikatif berstandar enterprise: pembersihan dokumen SOP, indeksasi vector database aman, pengujian red-teaming anti-halusinasi, hingga integrasi live."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

