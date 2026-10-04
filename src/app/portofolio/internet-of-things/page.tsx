import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

export const metadata = {
    title: "Portofolio Internet of Things | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Internet of Things dari BlankOn Digital Tech.",
};

export default function IoTPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Internet of Things"
                    description="Menghubungkan perangkat keras dengan ekosistem digital untuk kemudahan dan otomatisasi."
                />
                <PortfolioClient serviceFilter="internet-of-things" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
