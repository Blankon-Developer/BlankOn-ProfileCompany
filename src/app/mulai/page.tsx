import OnboardingForm from "@/components/forms/OnboardingForm";
import Navbar from "@/components/sections/Navbar";
import MarqueeBand from "@/components/sections/MarqueeBand";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Mulai Diskusi Gratis",
  description: "Ceritakan kebutuhan Anda dan mulai digitalisasi bersama BlankOn Digital Tech.",
};

export default function MulaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-foreground flex flex-col">
      <Navbar />
      <PageHeader
        tag="Mulai Diskusi"
        title="Mulai Diskusi Anda Sekarang"
        description="Ceritakan kebutuhan Anda dan mulai digitalisasi bersama BlankOn Digital Tech. Kami ingin memastikan solusi yang kami bangun benar-benar tepat sasaran. Silakan pilih profil yang paling mewakili Anda saat ini."
      />
      <div className="flex-1 md:pb-10">
        <OnboardingForm />
      </div>
      <MarqueeBand />
      <CTA />
      <Footer />
    </main>
  );
}
