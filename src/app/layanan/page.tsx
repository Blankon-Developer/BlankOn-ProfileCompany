import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import Offers from "@/components/sections/Offers";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Layanan | Baracode Tech Solution",
    description: "Layanan pengembangan website, aplikasi, dan produk digital untuk memenuhi kebutuhan bisnis Anda.",
};

export default function LayananPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black/50">
            <Navbar />
            <main>
                <PageHeader
                    tag="Layanan Kami"
                    title="Solusi Digital Terpadu"
                    description="Dari pengembangan aplikasi fungsional hingga integrasi ekosistem AI dan IoT, kami merancang dan membangun teknologi yang menyelesaikan masalah nyata bisnis Anda."
                />
                <Services />
                <span className="w-full h-px inline-block" style={{ backgroundColor: "var(--accent-color)" }} />
                <Offers />
            </main>
            <CTA />
            <Footer />
        </div>
    );
}
