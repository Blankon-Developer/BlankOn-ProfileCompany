import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Quality Assurance (QA) & Testing | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar perlunya tim QA independen, otomasi pengujian Playwright/Cypress, uji beban performa k6, dan audit celah keamanan.",
};

export default function QualityAssuranceFAQPage() {
  const serviceFAQ = servicesFAQData["quality-assurance-qa-testing"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai pentingnya uji regresi otomatis sebelum rilis, cara simulasi beban trafik ribuan pengguna bersamaan, pencegahan celah keamanan OWASP, dan sertifikat kelayakan rilis."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

