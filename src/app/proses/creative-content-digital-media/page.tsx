import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Konten Kreatif & Desain UI/UX | BlankOn Digital Tech",
  description: "Alur perancangan User-Centered Design, riset personas, wireframe struktural, prototipe interaktif Figma, dan Design Tokens dari BlankOn Digital Tech.",
};

export default function CreativeContentProcessPage() {
  const serviceProcess = servicesProcessData["creative-content-digital-media"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus riset kebutuhan pengguna, penyusunan arsitektur informasi teruji, desain UI berestetika korporat, hingga standarisasi design system untuk developer."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

