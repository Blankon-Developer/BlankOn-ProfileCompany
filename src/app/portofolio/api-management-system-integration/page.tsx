import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Portofolio API Management & System Integration | BlankOn Digital Tech",
    description: "Karya dan implementasi solusi API Management & System Integration dari BlankOn Digital Tech.",
};

export default function APIManagementSystemIntegrationPortfolioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Portofolio Kami"
                    title="API Management & System Integration"
                    description="API Management untuk mengelola akses ke layanan digital, menentukan batasan penggunaan, dan memastikan keamanan. System Integration untuk menghubungkan sistem yang berbeda sehingga dapat saling bertukar data dengan lancar, mendukung otomasi proses kerja."
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
