import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Proses Kerja | Baracode Tech Solution",
  description: "Metodologi pengembangan kami yang terstruktur untuk memastikan setiap produk digital dikirim tepat waktu dan tepat sasaran.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Proses Kerja"
          title="Metodologi Teruji, Hasil Maksimal"
          description="Kami mengadopsi standar DevOps modern dan siklus pengembangan yang berkelanjutan untuk memastikan produk Anda selalu relevan dan tangguh."
        />
        <Process />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
