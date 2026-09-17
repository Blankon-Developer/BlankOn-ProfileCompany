import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import BrandStory from "@/components/sections/about/BrandStory";
import VisionMission from "@/components/sections/about/VisionMission";
import Founders from "@/components/sections/about/Founders";
import USP from "@/components/sections/about/USP";
import SocialProof from "@/components/sections/about/SocialProof";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Tentang Kami | BlankOn-Tech",
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
        <span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
        <USP />
        <span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
        <Founders />
        <VisionMission />
        <SocialProof />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
