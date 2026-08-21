import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Pusat Bantuan (Support) | BlankOn Tech",
  description: "Temukan jawaban dari pertanyaan yang sering diajukan mengenai layanan dan produk kami.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Pusat Bantuan (Support)"
          title="Sebelum kita mulai, mungkin Anda ingin tahu beberapa hal."
          description="Segala hal yang perlu Anda ketahui tentang layanan, proses pengerjaan, garansi, hingga skema biaya di BlankOn Tech."
        />
        <FAQ />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
