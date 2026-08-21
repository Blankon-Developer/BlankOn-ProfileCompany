import OnboardingForm from "@/components/forms/OnboardingForm";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Mulai Gratis | Blankon Tech",
  description: "Ceritakan kebutuhan Anda dan mulai digitalisasi bersama Blankon Tech.",
};

export default function MulaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20">
        <OnboardingForm />
      </div>
      <Footer />
    </main>
  );
}
