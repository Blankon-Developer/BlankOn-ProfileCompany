import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import Offers from "@/components/sections/Offers";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] text-foreground">
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Offers />
      <Services />
      <Process />
      <StatsBand />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
