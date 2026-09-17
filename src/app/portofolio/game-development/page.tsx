import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Game Development | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Game Development dari BlankOn Digital Tech.",
};

export default function GameDevelopmentPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Game Development"
                    description="Membangun dan mengembangkan permainan video interaktif untuk berbagai platform. Dari ide awal, desain mekanik permainan, hingga implementasi grafis dan pemrograman interaktif."
                />
                <section className="py-20 px-6 max-w-7xl mx-auto">
                    <p className="text-center text-muted-foreground">Konten portofolio sedang dipersiapkan.</p>
                </section>
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
