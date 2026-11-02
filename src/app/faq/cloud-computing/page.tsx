import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Komputasi Cloud & DevOps | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar migrasi server tanpa downtime, efisiensi tagihan cloud (FinOps), kontainerisasi Docker/Kubernetes, dan uptime 99.9%.",
};

export default function CloudComputingFAQPage() {
  const serviceFAQ = servicesFAQData["cloud-computing"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai cara mencegah server down di jam sibuk, mekanisme penghematan biaya cloud, kepemilikan akun server, serta keamanan DDoS."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

