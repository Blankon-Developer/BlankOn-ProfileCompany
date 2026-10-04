import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

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
                <PortfolioClient serviceFilter="data-science" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
