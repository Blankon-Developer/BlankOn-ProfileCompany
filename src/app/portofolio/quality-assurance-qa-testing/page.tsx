import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Quality Assurance (QA) / Testing | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Quality Assurance (QA) / Testing dari BlankOn Digital Tech.",
};

export default function QualityAssuranceQATestingPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Quality Assurance (QA) / Testing"
                    description="Quality Assurance (QA) / Testing sebagai bagian dari pengembangan produk digital yang kami bangun berjalan optimal, konsisten, dan bebas dari masalah melalui proses testing yang terstruktur — mencakup functional testing, performance testing, automation testing, hingga security and usability evaluation."
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
