import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Portofolio & Karya | Baracode Tech Solution",
  description: "Kumpulan proyek dan inovasi yang telah kami kerjakan untuk klien dan partner kami.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Karya Kami"
          title="Bukti Nyata Dampak Teknologi"
          description="Eksplorasi kumpulan studi kasus dan karya terbaik kami dalam membantu klien mencapai tujuan bisnis mereka melalui inovasi digital."
        />
        <Projects />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
