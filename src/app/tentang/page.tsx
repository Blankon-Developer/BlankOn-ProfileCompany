import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import BrandStory from "@/components/sections/about/BrandStory";
import LogoPhilosophy from "@/components/sections/about/LogoPhilosophy";
import VisionMission from "@/components/sections/about/VisionMission";
import Founders from "@/components/sections/about/Founders";
import USP from "@/components/sections/about/USP";
import SocialProof from "@/components/sections/about/SocialProof";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat siapa BlankOn-Tech, cerita kami, visi, dan misi kami dalam membangun solusi digital.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <AboutHero />
        <MarqueeBand />
        <BrandStory />
        <VisionMission />
        <LogoPhilosophy />
        <span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
        <Founders />
        <span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
        <USP />
        <SocialProof />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
