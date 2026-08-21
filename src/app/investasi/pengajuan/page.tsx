import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import InvestorForm from "@/components/forms/InvestorForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { DISPLAY, BODY, MONO } from "@/lib/utils";

export const metadata = {
  title: "Pengajuan Investasi | Baracode Tech Solution",
  description: "Formulir pengajuan minat investasi dan strategic partnership dengan Baracode Tech Solution.",
};

export default function PengajuanInvestasiPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main className="pb-24">
        <PageHeader 
          tag="Investor Relations"
          title="Mari Bangun Masa Depan Bersama"
          description="Silakan lengkapi formulir di bawah ini agar tim kami dapat menghubungi Anda dan menyediakan akses ke Data Room serta Investment Deck lengkap kami."
        />

        <section className="px-6 md:px-10 max-w-4xl mx-auto -mt-12 relative z-10">
          <InvestorForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
