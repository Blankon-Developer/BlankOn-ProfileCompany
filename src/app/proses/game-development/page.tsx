import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceProcessDetailClient from "@/components/sections/process/ServiceProcessDetailClient";
import { servicesProcessData } from "@/lib/services-process-data";

export const metadata = {
  title: "Metodologi Pengembangan Game & Simulasi | BlankOn Digital Tech",
  description: "Alur kerja produksi game terpadu dari Game Design Document (GDD), greybox prototyping, produksi aset 2D/3D, hingga optimasi 60 FPS dari BlankOn Digital Tech.",
};

export default function GameDevelopmentProcessPage() {
  const serviceProcess = servicesProcessData["game-development"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Metodologi Implementasi"
          title={`Alur Kerja: ${serviceProcess.title}`}
          description="Siklus produksi interaktif Unity Engine: perancangan aturan main, pembuktian rasa bermain (game feel), arsitektur anti-cheat backend, dan rilis toko aplikasi."
        />
        <ServiceProcessDetailClient serviceProcess={serviceProcess} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

