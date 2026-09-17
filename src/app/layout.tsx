import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blankon.tech"),
  title: {
    default: "BlankOn Digital Tech | We Together, Deploy The Future",
    template: "%s | BlankOn Digital Tech",
  },
  description:
    "Kami membangun solusi website, aplikasi mobile, AI, dan sistem terintegrasi dari skala startup hingga enterprise dengan pendekatan bisnis, keamanan, dan skalabilitas tinggi.",
  keywords: [
    "Software House",
    "Web Development",
    "Mobile App Development",
    "IT Consultant",
    "Digital Transformation",
    "Enterprise Software",
    "BlankOn",
  ],
  authors: [{ name: "BlankOn Digital Tech Team" }],
  creator: "BlankOn Digital Tech",
  publisher: "BlankOn Digital Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    title: "BlankOn Digital Tech | Inovasi Digital Enterprise",
    description:
      "Mitra teknologi Anda untuk transformasi digital. Kami merancang arsitektur sistem berskala besar yang aman, andal, dan inovatif.",
    url: "https://www.blankon.tech",
    siteName: "BlankOn Tech",
    locale: "en_US, id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Pastikan Anda menambahkan file og-image.jpg di folder public/
        width: 1200,
        height: 630,
        alt: "BlankOn Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlankOn Tech",
    description: "Inovasi digital untuk skala enterprise.",
    images: ["/og-image.jpg"],
    creator: "@blankon_tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${ubuntu.variable} font-sans min-h-screen bg-white dark:bg-black text-foreground`}>
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
