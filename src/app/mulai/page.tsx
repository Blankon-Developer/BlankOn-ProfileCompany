import OnboardingForm from "@/components/forms/OnboardingForm";
import Navbar from "@/components/sections/Navbar";
import MarqueeBand from "@/components/sections/MarqueeBand";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";


export const metadata = {
  title: "Mulai Gratis | Blankon Tech",
  description: "Ceritakan kebutuhan Anda dan mulai digitalisasi bersama Blankon Tech.",
};

export default function MulaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20 pb-10 md:pt-48 md:pb-12">
        <OnboardingForm />
      </div>
      <MarqueeBand />
      <CTA />
      <Footer />
    </main>
  );
}
