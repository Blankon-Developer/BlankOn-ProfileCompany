import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Aplikasi Mobile (iOS & Android) | BlankOn Digital Tech",
  description: "Alur kerja pengembangan aplikasi seluler React Native/Flutter, arsitektur offline-first, pengujian perangkat fisik, dan publikasi toko aplikasi dari BlankOn Digital Tech.",
};

export default function MobileDevelopmentProcessPage() {
  const serviceProcess = servicesProcessData["mobile-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus rilis sprint mingguan berbasis React Native/Flutter, integrasi sensor hardware seluler, pengujian stres jaringan lambat, hingga rilis Play Store dan App Store."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

