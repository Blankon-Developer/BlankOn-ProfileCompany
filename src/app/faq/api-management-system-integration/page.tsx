import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab API Management & Integrasi Sistem | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar arsitektur API Gateway, integrasi microservices, dan interoperabilitas sistem enterprise dari BlankOn Digital Tech.",
};

export default function APIManagementFAQPage() {
  const serviceFAQ = servicesFAQData["api-management-system-integration"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mendalam mengenai fungsi API Gateway, metode menghubungkan sistem lama (legacy), standar keamanan data, hingga estimasi waktu pengerjaan."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

