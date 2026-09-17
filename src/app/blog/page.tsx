import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog & Insights | BlankOn Digital Tech",
  description: "Artikel, edukasi, dan wawasan seputar dunia teknologi dan inovasi digital.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Insight Teknologi"
          title="Jelajahi Wawasan Digital"
          description="Edukasi, studi kasus teknis, dan pandangan kami mengenai industri perangkat lunak, langsung dari para ahli di BlankOn Digital Tech."
        />
        
        <BlogClient />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
