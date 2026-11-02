import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Web Development & Aplikasi Web Enterprise | BlankOn Digital Tech",
  description: "Alur kerja pengembangan website dan portal enterprise modern berbasis Next.js/React, arsitektur microservices, headless CMS, dan standardisasi keamanan perbankan dari BlankOn Digital Tech.",
};

export default function WebDevelopmentProcessPage() {
  const serviceProcess = servicesProcessData["web-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus rekayasa perangkat lunak web enterprise yang tangguh, terukur, dan aman, mulai dari discovery arsitektur, sprint berkala, hingga optimalisasi Core Web Vitals pasca rilis."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

