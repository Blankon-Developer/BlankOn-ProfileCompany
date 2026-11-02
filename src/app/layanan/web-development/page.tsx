import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Pengembangan Website & Aplikasi Web Enterprise | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan profil perusahaan modern, aplikasi web enterprise berbasis Next.js dan React, serta portal bisnis berkecepatan tinggi dari BlankOn Digital Tech.",
};

export default function WebDevelopmentPage() {
  const service = servicesDetailData["web-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Rekayasa Perangkat Lunak Web"
          title={service.title}
          description="Pondasi digital yang andal, cepat, ramah mesin pencari (SEO), dan siap berkembang mengikuti skala pertumbuhan bisnis modern Anda."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

