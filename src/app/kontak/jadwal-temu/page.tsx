import { Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import QuickMeetingBooking from "../QuickMeetingBooking";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Jadwalkan Janji Temu Konsultasi | BlankOn Digital Tech",
  description:
    "Reservasi jadwal pertemuan langsung dengan tim Solution Architect dan Tech Lead BlankOn Digital Tech tanpa perlu mengisi formulir panjang.",
};

export default function JadwalTemuPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground flex flex-col">
      <Navbar />

      <main className="relative isolate flex-1 overflow-hidden pt-28 pb-16 md:pt-24 md:pb-24">
        {/* Latar foto atmosferik */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1634097543438-45e9960f647d?auto=format&fit=crop&w=2400&q=85')",
            }}
          />

          {/* Memudarkan foto dari atas ke bawah */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/85 to-white dark:from-black/40 dark:via-black/80 dark:to-black" />

          {/* Menjaga keterbacaan area teks dan form */}
          <div className="absolute inset-0 bg-white/25 dark:bg-black/20" />

          {/* Aksen cahaya halus sesuai warna identitas */}
          <div
            className="absolute -top-24 left-1/2 h-[360px] w-[min(900px,100%)] -translate-x-1/2 rounded-full blur-[100px] opacity-20"
            style={{ background: "var(--accent-color)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-28">
          {/* Breadcrumb Navigasi */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs text-muted-foreground"
            style={MONO}
          >
            <Link
              href="/"
              className="transition-colors hover:text-foreground"
            >
              Beranda
            </Link>

            <ChevronRight className="h-3.5 w-3.5 opacity-50" />

            <Link
              href="/kontak"
              className="transition-colors hover:text-foreground"
            >
              Kontak
            </Link>

            <ChevronRight className="h-3.5 w-3.5 opacity-50" />

            <span className="font-semibold text-foreground">
              Jadwalkan Janji Temu
            </span>
          </nav>

          {/* Header */}
          <div className="mb-12 max-w-8xl space-y-4">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-color)]/30 bg-white dark:bg-black px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]"
              style={MONO}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
              Layanan Reservasi Pertemuan Langsung
            </div>

            <h1
              className="max-w-5xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
              style={DISPLAY}
            >
              Jadwalkan Konsultasi 1-on-1 dengan <br /> Tim Teknis {` `}
              <span
                className="text-[var(--accent-color)] [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white]"
              >
                BlankOn Digital Tech
              </span>
            </h1>

            <p
              className="max-w-8xl text-justify text-base leading-relaxed text-muted-foreground md:text-lg"
              style={BODY}
            >
              Layanan khusus bagi calon klien yang ingin langsung mengatur agenda
              pertemuan teknis tanpa melalui antrean formulir umum. Tentukan format
              serta waktu pertemuan yang paling sesuai dengan jadwal Anda.
            </p>
          </div>

          {/* Portal Booking Engine */}
          <Suspense fallback={
            <div className="p-12 text-center text-muted-foreground font-mono" style={MONO}>
              Menyiapkan formulir janji temu...
            </div>
          }>
            <QuickMeetingBooking />
          </Suspense>
        </div>
      </main>

      {/* Ambient Radial Accent */}
      <div className="relative w-full">
        <div
          className="absolute hidden md:block top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-7xl h-[80px] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at center, var(--accent-color) 0%, transparent 68%)`,
            filter: "blur(6px)",
            opacity: 0.25,
          }}
        />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
