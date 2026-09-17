import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Web Development | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Web Development dari BlankOn Digital Tech.",
};

export default function WebDevPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Web Development"
                    description="Platform digital, aplikasi web, dan website yang scalable dan interaktif."
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
