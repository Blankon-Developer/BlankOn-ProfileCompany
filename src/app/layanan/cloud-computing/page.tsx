import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import ServiceDetailClient from "@/components/sections/services/ServiceDetailClient";
import { servicesDetailData } from "@/lib/services-data";

export const metadata = {
  title: "Komputasi Cloud & Infrastruktur DevOps | Layanan BlankOn Digital Tech",
  description: "Layanan perancangan arsitektur cloud AWS/GCP, orkestrasi Kubernetes, pipeline CI/CD, dan auto-scaling berkeandalan tinggi dari BlankOn Digital Tech.",
};

export default function CloudComputingPage() {
  const service = servicesDetailData["cloud-computing"];

  return (
    <div className="min-h-screen bg-white dark:bg-black/50 text-foreground">
      <Navbar />
      <main>
        <PageHeader
          tag="Infrastruktur & Operasi"
          title={service.title}
          description="Infrastruktur server cloud-native yang elastis, uptime 99.9%, dan siap menampung lonjakan trafik bisnis dengan efisiensi biaya optimal."
        />
        <ServiceDetailClient service={service} />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

