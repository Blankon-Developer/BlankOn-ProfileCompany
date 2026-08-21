import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import BrandStory from "@/components/sections/about/BrandStory";
import VisionMission from "@/components/sections/about/VisionMission";
import Founders from "@/components/sections/about/Founders";
import USP from "@/components/sections/about/USP";
import SocialProof from "@/components/sections/about/SocialProof";
import AboutCTA from "@/components/sections/about/AboutCTA";

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
        <USP />
        <Founders />
        <VisionMission />
        <SocialProof />
      </main>
      <AboutCTA />
      <Footer />
    </div>
  );
}
