import { DISPLAY, BODY, MONO } from "@/lib/utils";

export default function InvestGrowthStrategy() {
  const strategies = [
    { year: "2026", title: "Market Penetration", desc: "Mendominasi pasar B2B tier-2 dan tier-3 di Indonesia." },
    { year: "2027", title: "Product Expansion", desc: "Peluncuran SaaS terintegrasi untuk Enterprise resource management." },
    { year: "2028", title: "Regional Expansion", desc: "Ekspansi layanan ke pasar Asia Tenggara (Singapura & Malaysia)." },
    { year: "2029", title: "Scale & IPO Prep", desc: "Persiapan go-public dengan ARR dan ekosistem matang." },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="mb-16 max-w-2xl">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          How We Scale
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={DISPLAY}>
          Growth Strategy
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border -z-10" />
        {strategies.map((strat, i) => (
          <div key={i} className="flex flex-col">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xl mb-6 shadow-xl" style={MONO}>
              {strat.year}
            </div>
            <h3 className="text-xl font-bold mb-3" style={DISPLAY}>{strat.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed" style={BODY}>{strat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
