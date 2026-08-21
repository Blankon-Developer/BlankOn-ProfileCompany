import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { Clock, Zap, Globe } from "lucide-react";

export default function InvestWhyNow() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto border-b border-border">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Timing & Momentum
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={DISPLAY}>
          Why Now?
        </h2>
        <p className="text-lg text-muted-foreground" style={BODY}>
          Terdapat pergeseran mendasar dalam industri saat ini yang menciptakan *window of opportunity* sempurna untuk memperluas pangsa pasar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-border rounded-xl">
          <Clock className="w-8 h-8 mb-6 text-foreground" />
          <h3 className="text-xl font-bold mb-3" style={DISPLAY}>Regulatory Push</h3>
          <p className="text-sm text-muted-foreground" style={BODY}>
            Kewajiban kepatuhan sistem elektronik dan lokalisasi data memaksa ribuan instansi dan perusahaan untuk memperbarui infrastruktur IT mereka tahun ini.
          </p>
        </div>
        <div className="p-8 border border-border rounded-xl bg-foreground text-background">
          <Zap className="w-8 h-8 mb-6 text-background" />
          <h3 className="text-xl font-bold mb-3" style={DISPLAY}>AI & Cloud Adoption</h3>
          <p className="text-sm text-background/80" style={BODY}>
            Adopsi AI dan Cloud di sektor enterprise melonjak. Perusahaan kami telah memiliki framework proprietary yang memangkas waktu deployment hingga 50%.
          </p>
        </div>
        <div className="p-8 border border-border rounded-xl">
          <Globe className="w-8 h-8 mb-6 text-foreground" />
          <h3 className="text-xl font-bold mb-3" style={DISPLAY}>Market Consolidation</h3>
            <p className="text-sm text-muted-foreground" style={BODY}>
            Kompetitor lambat beradaptasi. Dengan pendanaan yang tepat, kami siap melakukan akuisisi pasar secara masif di kota-kota lapis kedua dan ketiga.
          </p>
        </div>
      </div>
    </section>
  );
}
