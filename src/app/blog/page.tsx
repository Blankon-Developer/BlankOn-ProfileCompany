import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog & Insights | Baracode Tech Solution",
  description: "Artikel, edukasi, dan wawasan seputar dunia teknologi dan inovasi digital.",
};

const dummyBlogs = [
  {
    title: "Memilih Antara Monolith dan Microservices di 2026",
    excerpt: "Panduan teknis bagi CTO dan Tech Lead untuk menentukan arsitektur yang paling tepat sesuai skala produk.",
    date: "12 Agustus 2026",
    category: "Software Engineering",
  },
  {
    title: "Mengapa Bisnis UMKM Kini Wajib Memiliki Sistem ERP Terpusat",
    excerpt: "Meningkatkan efisiensi dan visibilitas stok barang dengan ekosistem digital yang saling terintegrasi.",
    date: "25 Juli 2026",
    category: "Business Strategy",
  },
  {
    title: "Tren Desain UI/UX B2B SaaS: Beralih ke Fungsionalitas Maksimal",
    excerpt: "Menganalisis pergeseran estetika antarmuka pada produk B2B yang kini lebih fokus pada kecepatan dan kejelasan data.",
    date: "10 Juli 2026",
    category: "Design",
  },
  {
    title: "Keamanan Data Skala Enterprise di Era Cloud-Native",
    excerpt: "Langkah mitigasi dan protokol keamanan wajib yang harus Anda terapkan pada arsitektur AWS dan GCP.",
    date: "02 Juni 2026",
    category: "Cyber Security",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Insight Teknologi"
          title="Jelajahi Wawasan Digital"
          description="Edukasi, studi kasus teknis, dan pandangan kami mengenai industri perangkat lunak, langsung dari para ahli di Baracode Tech Solution."
        />
        
        <section className="py-12 md:py-24 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dummyBlogs.map((blog, idx) => (
              <Card key={idx} className="group hover:border-foreground transition-colors bg-white/50 dark:bg-black/20 flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-sm" style={MONO}>
                        {blog.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold leading-tight group-hover:text-foreground transition-colors" style={DISPLAY}>
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base" style={BODY}>
                      {blog.excerpt}
                    </CardDescription>
                  </CardContent>
                </div>
                <CardFooter className="flex items-center justify-between pt-6 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground" style={MONO}>
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-foreground" style={DISPLAY}>
                    Baca <ArrowRight size={14} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
