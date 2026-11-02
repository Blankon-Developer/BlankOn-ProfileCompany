import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Kecerdasan Buatan (AI) & Pembelajaran Mesin | Layanan BlankOn Digital Tech",
  description: "Layanan implementasi asisten AI berbasis dokumen perusahaan (RAG), pemrosesan OCR cerdas, otomasi alur kerja, dan model prediksi dari BlankOn Digital Tech.",
};

export default function MachineLearningAIPage() {
  const service = servicesDetailData["machine-learning-ai"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Kecerdasan Komputasi"
          title={service.title}
          description="Solusi AI aplikatif yang memecahkan hambatan administrasi manual, mempercepat respon pelanggan, dan mengekstrak pengetahuan dari data internal korporasi."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

