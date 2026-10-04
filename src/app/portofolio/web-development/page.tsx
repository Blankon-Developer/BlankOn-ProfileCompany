import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

export const metadata = {
    title: "Portofolio Web Development | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Web Development dari BlankOn Digital Tech.",
};

export default function WebDevPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Web Development"
                    description="Platform digital, aplikasi web, dan website yang scalable dan interaktif."
                />
                <PortfolioClient serviceFilter="web-development" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
