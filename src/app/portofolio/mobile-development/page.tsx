import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import PortfolioClient from "@/app/portofolio/PortfolioClient";

export const metadata = {
    title: "Portofolio Mobile Development | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi Mobile Development dari BlankOn Digital Tech.",
};

export default function MobileDevPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="Mobile Development"
                    description="Aplikasi mobile iOS dan Android yang dirancang sesuai kebutuhan pengguna."
                />
                <PortfolioClient serviceFilter="mobile-development" />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
