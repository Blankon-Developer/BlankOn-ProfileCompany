import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Aplikasi Mobile (iOS & Android) | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar pengembangan React Native/Flutter, arsitektur offline-first, proses rilis di Play Store & App Store, serta kepemilikan kode.",
};

export default function MobileDevelopmentFAQPage() {
  const serviceFAQ = servicesFAQData["mobile-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai kapan bisnis perlu aplikasi mobile, keunggulan arsitektur cross-platform, integrasi push notification, penanganan kondisi tanpa sinyal, dan rilis toko aplikasi."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

