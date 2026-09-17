import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio Creative Content & Digital Media | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Creative Content & Digital Media dari BlankOn Digital Tech.",
};

export default function CreativeContentDigitalMediaPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Creative Content & Digital Media"
                    description="Content sebagai fondasi yang memperkuat pesan merek, membangun keterlibatan dengan audiens, dan mendukung tujuan bisnis — mencakup foto & video produksi, materi promosi, copywriting, hingga desain visual yang mendukung nilai brand serta produk."
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
