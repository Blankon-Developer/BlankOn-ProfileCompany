import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Data Science | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Data Science dari BlankOn Digital Tech.",
};

export default function DataSciencePortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Data Science"
                    description="Mengubah data kompleks menjadi wawasan strategis dan keputusan bisnis yang tepat."
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
