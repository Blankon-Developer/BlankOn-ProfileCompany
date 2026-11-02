import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Web Development & Aplikasi Web | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar arsitektur Next.js, skor kecepatan Core Web Vitals, optimasi SEO Google, kemudahan edit CMS, dan sistem web enterprise.",
};

export default function WebDevelopmentFAQPage() {
  const serviceFAQ = servicesFAQData["web-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai keunggulan Next.js dibanding CMS konvensional, kesiapan SEO ramah Google, perlindungan firewall Cloudflare, kepemilikan source code, dan garansi pasca-rilis."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

