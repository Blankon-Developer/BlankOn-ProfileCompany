import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Internet of Things (IoT) & Hardware | BlankOn Digital Tech",
  description: "Alur kerja survei lapangan, perakitan sirkuit sensor mikrokontroler, uji pilot project 14 hari, dan integrasi broker telemetri MQTT dari BlankOn Digital Tech.",
};

export default function IoTProcessPage() {
  const serviceProcess = servicesProcessData["internet-of-things"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus rekayasa perangkat keras cerdas: survei jaringan lapangan, kalibrasi laboratorium, uji coba pilot project tahan cuaca (IP67), hingga monitoring geospasial real-time."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

