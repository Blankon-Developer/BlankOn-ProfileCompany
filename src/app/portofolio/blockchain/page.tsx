import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

export const metadata = {
    title: "Portofolio Blockchain | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Blockchain dari BlankOn Digital Tech.",
};

export default function BlockchainPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Blockchain"
                    description="Solusi blockchain untuk kebutuhan transparansi, verifikasi, dan desentralisasi yang nyata."
                />
                <PortfolioClient serviceFilter="blockchain" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
