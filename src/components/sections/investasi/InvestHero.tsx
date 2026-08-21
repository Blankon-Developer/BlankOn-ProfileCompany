import { DISPLAY, BODY, MONO } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function InvestHero() {
  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-10 max-w-6xl mx-auto flex flex-col items-center text-center">
      <div 
        className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        <span className="w-2 h-2 bg-foreground" />
        <span className="text-xs uppercase tracking-widest font-semibold" style={MONO}>
          Investor Relations
        </span>
      </div>

      <h1 
        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-[-0.04em] mb-6 max-w-5xl opacity-0 animate-fade-up"
        style={{ ...DISPLAY, animationDelay: "200ms" }}
      >
        Invest in the Future of Digital Transformation
      </h1>

      <p 
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed opacity-0 animate-fade-up"
        style={{ ...BODY, animationDelay: "300ms" }}
      >
        Join us in building scalable technology ecosystems. We are opening opportunities for strategic partners to accelerate growth and innovation across industries.
      </p>

      <div 
        className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "400ms" }}
      >
        <Link 
          href="/investasi/pengajuan"
          className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-sm transition-opacity hover:opacity-90 w-full sm:w-auto justify-center"
          style={DISPLAY}
        >
          Explore Opportunity <ArrowRight size={18} />
        </Link>
        <button 
          className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-transparent text-foreground font-bold rounded-sm transition-colors hover:bg-muted w-full sm:w-auto justify-center"
          style={DISPLAY}
        >
          Download Pitch Deck <Download size={18} />
        </button>
      </div>
    </section>
  );
}
