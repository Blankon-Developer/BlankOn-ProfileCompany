import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceFAQDetailClient from "@/components/sections/faq/ServiceFAQDetailClient";
import { servicesFAQData } from "@/lib/services-faq-data";

export const metadata = {
  title: "Tanya Jawab Internet of Things (IoT) | FAQ BlankOn Tech",
  description: "Pertanyaan umum dan edukasi seputar sensor telemetri lapangan, firmware mikrokontroler, konektivitas 4G/LoRaWAN, dan dashboard monitoring industri.",
};

export default function IoTFAQPage() {
  const serviceFAQ = servicesFAQData["internet-of-things"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Pusat Bantuan & Tanya Jawab"
          title={`FAQ: ${serviceFAQ.title}`}
          description="Edukasi mengenai solusi jaringan tanpa WiFi (LoRaWAN/4G), ketahanan perangkat terhadap cuaca lapangan (IP67), pembaruan firmware jarak jauh (OTA), dan garansi hardware."
        />
        <ServiceFAQDetailClient serviceFAQ={serviceFAQ} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

