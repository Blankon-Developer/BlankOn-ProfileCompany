import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

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
                <PortfolioClient serviceFilter="machine-learning-ai" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
