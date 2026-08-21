import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        
      </main>
      <Footer />
    </div>
  );
}
