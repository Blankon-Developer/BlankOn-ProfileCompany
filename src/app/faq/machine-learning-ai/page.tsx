import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Kecerdasan Buatan (AI) & Machine Learning | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar asisten AI pintar (RAG), pemrosesan dokumen OCR, privasi data perusahaan, pencegahan halusinasi, dan efisiensi biaya.",
};

export default function MachineLearningAIFAQPage() {
  const serviceFAQ = servicesFAQData["machine-learning-ai"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai perbedaan AI umum dengan RAG Enterprise, jaminan kerahasiaan data internal, pencegahan halusinasi jawaban, dan integrasi WhatsApp."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

