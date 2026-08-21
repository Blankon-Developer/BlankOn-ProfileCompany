import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BaraCode Tech Solution",
  description:
    "BlankOn membangun website dan aplikasi dari skala startup hingga enterprise — dengan konsultasi gratis, tanpa biaya di muka, dan garansi perbaikan penuh.",
  keywords: [
    "web development",
    "app development",
    "software house",
    "blankon",
    "konsultasi gratis",
    "website",
    "aplikasi",
  ],
  icons: {
    icon: [
      {
        url: "/BlankOn Logo.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/BlankOn Logo Dark-Mode.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },

  openGraph: {
    title: "Blankon Tech",
    description:
      "Konsultasi gratis, tanpa biaya di muka, garansi perbaikan penuh. BlankOn membangun website dan aplikasi untuk bisnis Anda.",
    type: "website",
  },
};

import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono, Ubuntu } from "next/font/google";

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

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  style: "normal",
  display: "swap",
});

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${ubuntu.variable} font-sans min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
