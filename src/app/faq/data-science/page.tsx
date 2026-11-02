import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Sains Data & Business Intelligence | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar pembangunan data warehouse, pipeline ETL otomatis, dashboard eksekutif real-time, dan model prediksi bisnis.",
};

export default function DataScienceFAQPage() {
  const serviceFAQ = servicesFAQData["data-science"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai cara membersihkan data kotor, keunggulan dashboard analitik otomatis dibanding Excel, keamanan kerahasiaan data, dan pelatihan tim internal."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

