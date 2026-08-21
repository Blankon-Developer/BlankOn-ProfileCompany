import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Problem from "@/components/sections/Problem";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Solusi Industri | Baracode Tech Solution",
  description: "Solusi spesifik yang dirancang khusus untuk memenuhi kebutuhan berbagai skala bisnis dan industri.",
};

export default function SolusiPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Solusi Kami"
          title="Teknologi untuk Setiap Skala"
          description="Dari startup tahap awal yang membutuhkan kelincahan hingga enterprise yang menuntut skalabilitas tingkat tinggi, kami memiliki solusi yang tepat untuk menunjang pertumbuhan Anda."
        />
        <Problem />
        <WhoWeWorkWith />
        <Testimonials />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
