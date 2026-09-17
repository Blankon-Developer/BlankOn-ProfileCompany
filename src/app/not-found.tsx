import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DISPLAY, MONO, BODY } from "@/lib/utils";

export const metadata = {
    title: "404 - Halaman Tidak Ditemukan | BlankOn Digital Tech",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[var(--accent-color)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

        <h1 
          className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-foreground/5 select-none"
          style={DISPLAY}
        >
          404
        </h1>
        
        <div className="mt-[-30px] md:mt-[-50px] relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent-color)] mb-4" style={MONO}>
            Error
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground" style={DISPLAY}>
            Halaman Tidak Ditemukan
          </h2>
          
          <p className="text-muted-foreground/80 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed text-balance" style={BODY}>
            Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
          </p>
          
          <Link
                href="/"
                className="
                  inline-flex items-center gap-2
                  mt-9
                  text-xs font-semibold uppercase tracking-[0.14em]
                  border-b border-foreground/30
                  pb-2
                  transition-colors
                  hover:border-foreground
                "
                style={MONO}
              >
                <ArrowLeft size={14} strokeWidth={1.5} />
                Kembali ke Beranda
              </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
