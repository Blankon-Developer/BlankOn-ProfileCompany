import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Machine Learning & AI | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Machine Learning & AI dari BlankOn Digital Tech.",
};

export default function AIPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Machine Learning / AI"
                    description="Implementasi kecerdasan buatan pada proses bisnis untuk efisiensi yang nyata."
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
