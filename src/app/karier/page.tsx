import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { BODY, DISPLAY, MONO } from "@/lib/utils";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Karier | Baracode Tech Solution",
  description: "Bergabung bersama tim inovator kami dan bangun solusi digital masa depan.",
};

const jobOpenings = [
  {
    role: "Senior Frontend Engineer (React/Next.js)",
    department: "Engineering",
    location: "Remote (Indonesia)",
    type: "Full-time",
  },
  {
    role: "UI/UX Designer",
    department: "Design",
    location: "Hybrid (Purwokerto)",
    type: "Full-time",
  },
  {
    role: "Backend Developer (Node.js/Go)",
    department: "Engineering",
    location: "Remote (Indonesia)",
    type: "Full-time",
  },
  {
    role: "Project Manager",
    department: "Management",
    location: "Hybrid (Purwokerto)",
    type: "Full-time",
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader 
          tag="Karier di Baracode"
          title="Bangun Teknologi yang Berdampak"
          description="Kami mencari individu berbakat yang memiliki ambisi untuk memecahkan masalah kompleks dan merancang solusi digital skala besar."
        />

        <section className="py-12 md:py-24 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-black mb-4" style={DISPLAY}>Posisi Terbuka</h2>
            <p className="text-muted-foreground text-lg max-w-2xl" style={BODY}>
              Temukan peran yang sesuai dengan keahlian Anda dan jadilah bagian dari perjalanan pertumbuhan kami.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {jobOpenings.map((job, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 bg-white/50 dark:bg-black/20 border border-border hover:border-foreground transition-all rounded-lg"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2" style={MONO}>
                    {job.department}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4" style={DISPLAY}>
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground" style={BODY}>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> Pengalaman 2+ Tahun</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <Link 
                    href="#lamar" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm border border-border group-hover:bg-foreground group-hover:text-background transition-colors w-full md:w-auto"
                    style={DISPLAY}
                  >
                    Lamar Sekarang <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
