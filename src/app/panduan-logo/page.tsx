import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { DISPLAY, BODY, MONO, HEADING } from "@/lib/utils";
import Image from "next/image";
import { XCircle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Panduan Penggunaan Logo",
  description: "Kebijakan dan panduan resmi penggunaan logo dan identitas merek BlankOn Digital Tech.",
};

export default function BrandGuidelinesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />

      <main className="pt-32 pb-12 px-6 md:px-28 max-w-8xl mx-auto relative overflow-hidden">
        <div
          className="absolute -bottom-70 left-1/2 -translate-x-1/2 w-full h-[350px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, var(--accent-color) 5% 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        {/* Header */}
        <div className="mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-none bg-accent-color" style={{ backgroundColor: "var(--accent-color)" }} />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold" style={MONO}>
              BRAND GUIDELINES
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={DISPLAY}>
            Panduan Penggunaan Logo
          </h1>
          <p className="text-lg text-muted-foreground max-w-full leading-relaxed text-justify" style={BODY}>
            Pedoman ini dirancang untuk memastikan logo BlankOn Digital Tech selalu ditampilkan dengan cara yang benar, konsisten, dan profesional oleh semua instansi, mitra, maupun pihak ketiga.
          </p>
        </div>

        <hr className="border-[var(--accent-color)] mb-12" />

        {/* 1. Versi Logo Utama */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <h2 className="text-2xl font-bold mb-4" style={HEADING}>1. Versi Logo</h2>
              <p className="text-muted-foreground text-sm text-justify leading-relaxed" style={BODY}>
                Gunakan logo yang sesuai dengan latar belakang (background) penempatan. Logo utama kami dirancang untuk optimal di atas latar belakang putih/terang, sementara varian Dark Mode digunakan pada latar belakang yang gelap atau pekat.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-white rounded-2xl p-10 flex flex-col items-center justify-center border border-black transition-transform hover:-translate-y-1 duration-300">
                <div className="h-58 flex items-center justify-center">
                  <Image src="/BlankOn Logo.svg" alt="BlankOn Logo Light" width={180} height={180} className="dark:hidden" />
                  <Image src="/BlankOn Logo.svg" alt="BlankOn Logo Light" width={180} height={180} className="hidden dark:block" />
                </div>
                <span className="mt-14 text-xs font-semibold uppercase tracking-wider text-black dark:text-black flex items-center gap-2" style={MONO}>
                  <CheckCircle2 size={14} className="text-accent-color" style={{ color: "var(--accent-color)" }} /> Standard (Light Mode)
                </span>
              </div>
              <div className="bg-black rounded-2xl p-10 flex flex-col items-center justify-center border border-white transition-transform hover:-translate-y-1 duration-300">
                <div className="h-58 flex items-center justify-center">
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="BlankOn Logo Dark" width={180} height={180} />
                </div>
                <span className="mt-14 text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2" style={MONO}>
                  <CheckCircle2 size={14} className="text-accent-color" style={{ color: "var(--accent-color)" }} /> Standard (Dark Mode)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Clear Space (Ruang Kosong) & Minimum Size */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <h2 className="text-2xl font-bold mb-4" style={HEADING}>2. Ruang Kosong & Ukuran</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify" style={BODY}>
                <strong className="text-foreground">Ruang Kosong (Clear Space):</strong> Pastikan logo memiliki ruang bernafas yang cukup di sekitarnya agar tetap menonjol dan tidak berdesakan dengan teks atau elemen visual lainnya.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify" style={BODY}>
                <strong className="text-foreground">Ukuran Minimum:</strong> Untuk menjaga tingkat keterbacaan, logo tidak boleh ditampilkan dengan tinggi (height) kurang dari 30px di layar digital, atau proporsi yang setara di media cetak.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Clear space visualization */}
              <div className="bg-white dark:bg-black rounded-2xl p-10 flex items-center justify-center relative border border-black dark:border-white">
                <div className="relative border border-dashed border-foreground p-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[150%] text-[10px] text-accent-color font-bold font-mono">2rem = 32px</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[100%] text-[10px] text-accent-color font-bold font-mono">2rem = 32px</div>
                  <div className="absolute -left-2 top-1/2 -translate-x-[100%] -translate-y-1/2 text-[10px] text-accent-color font-bold font-mono">2rem = 32px</div>
                  <div className="absolute -right-2 top-1/2 translate-x-[100%] -translate-y-1/2 text-[10px] text-accent-color font-bold font-mono">2rem = 32px</div>

                  {/* Arrows */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-6 border-l border-accent-color" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-6 border-l border-accent-color" />
                  <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 h-px w-6 border-t border-accent-color" />
                  <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 h-px w-6 border-t border-accent-color" />

                  <Image src="/BlankOn Logo.svg" alt="Clear Space" width={100} height={100} className="dark:hidden" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Clear Space" width={100} height={100} className="hidden dark:block" />
                </div>
              </div>

              {/* Minimum size visualization */}
              <div className="bg-white dark:bg-black rounded-2xl p-10 flex flex-col items-center justify-center border border-black dark:border-white gap-8">
                <div className="flex items-end gap-6 border-b border-black dark:border-white pb-8">
                  <Image src="/BlankOn Logo.svg" alt="Size Large" width={80} height={80} className="dark:hidden" />
                  <Image src="/BlankOn Logo.svg" alt="Size Medium" width={50} height={50} className="dark:hidden" />
                  <Image src="/BlankOn Logo.svg" alt="Size Small" width={30} height={30} className="dark:hidden" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Size Large" width={80} height={80} className="hidden dark:block" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Size Medium" width={50} height={50} className="hidden dark:block" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Size Small" width={30} height={30} className="hidden dark:block" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground" style={MONO}>Min-Height: 30px</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Penggunaan yang Salah (Do's and Don'ts) */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <h2 className="text-2xl font-bold mb-4" style={HEADING}>3. Penggunaan yang Dilarang</h2>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify" style={BODY}>
                Integritas merek kami sangat penting. Harap hindari hal-hal berikut saat menggunakan logo kami di materi publikasi apa pun. Jangan mengubah proporsi, warna, orientasi, atau menambahkan efek yang tidak sah.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden flex flex-col">
                <div className="h-48 flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 bg-red-500/5" />
                  <Image src="/BlankOn Logo.svg" alt="Don't Stretch" width={150} height={150} className="dark:hidden scale-x-150 relative z-10" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Don't Stretch" width={150} height={150} className="hidden dark:block scale-x-150 relative z-10" />
                </div>
                <div className="bg-red-500/10 p-5 flex items-start gap-3 border-t border-red-500/20">
                  <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">Jangan merusak proporsi logo (stretch/distort).</p>
                </div>
              </div>

              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden flex flex-col">
                <div className="h-48 flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 bg-red-500/5" />
                  <Image src="/BlankOn Logo.svg" alt="Don't Rotate" width={110} height={110} className="dark:hidden -rotate-45 relative z-10" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Don't Rotate" width={110} height={110} className="hidden dark:block -rotate-45 relative z-10" />
                </div>
                <div className="bg-red-500/10 p-5 flex items-start gap-3 border-t border-red-500/20">
                  <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">Jangan memutar (rotate) posisi orientasi logo.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden flex flex-col">
                <div className="h-48 flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 bg-red-500/5" />
                  <div className="relative z-10 opacity-70  hue-rotate-[200deg]">
                    <Image src="/BlankOn Logo.svg" alt="Don't Colorize" width={110} height={110} className="dark:hidden" />
                    <Image src="/BlankOn Logo Dark-Mode.svg" alt="Don't Colorize" width={110} height={110} className="hidden dark:block" />
                  </div>
                </div>
                <div className="bg-red-500/10 p-5 flex items-start gap-3 border-t border-red-500/20">
                  <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">Jangan mengubah warna asli atau menambahkan filter.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden flex flex-col">
                <div className="h-48 flex items-center justify-center p-6 bg-[#84c803] dark:bg-[#F5C700] relative">
                  {/* Simulating bad contrast */}
                  <Image src="/BlankOn Logo.svg" alt="Bad Contrast" width={110} height={110} className="drop-shadow-none dark:hidden" />
                  <Image src="/BlankOn Logo Dark-Mode.svg" alt="Bad Contrast" width={110} height={110} className="drop-shadow-none hidden dark:block" />
                </div>
                <div className="bg-red-500/10 p-5 flex items-start gap-3 border-t border-red-500/20">
                  <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-medium text-red-700 dark:text-red-400">Jangan menempatkan logo di atas warna yang bertabrakan.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
