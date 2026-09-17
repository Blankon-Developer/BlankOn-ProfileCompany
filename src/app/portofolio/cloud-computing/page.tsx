import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Cloud Computing | BlankOn Digital Tech",
    description: "Karya dan implementasi infrastruktur Cloud Computing dari BlankOn Digital Tech.",
};

export default function CloudComputingPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Cloud Computing"
                    description="Infrastruktur digital yang scalable, aman, dan siap mendukung pertumbuhan produk."
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
