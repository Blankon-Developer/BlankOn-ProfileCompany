import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

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
                <PortfolioClient serviceFilter="cloud-computing" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
