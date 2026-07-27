import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blankon — Solusi Digital untuk Bisnis yang Serius",
  description:
    "Blankon membangun website dan aplikasi dari skala startup hingga enterprise — dengan konsultasi gratis, tanpa biaya di muka, dan garansi perbaikan penuh.",
  keywords: [
    "web development",
    "app development",
    "software house",
    "blankon",
    "konsultasi gratis",
    "website",
    "aplikasi",
  ],
  openGraph: {
    title: "Blankon — Solusi Digital untuk Bisnis yang Serius",
    description:
      "Konsultasi gratis, tanpa biaya di muka, garansi perbaikan penuh. Blankon membangun website dan aplikasi untuk bisnis Anda.",
    type: "website",
  },
};

import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
