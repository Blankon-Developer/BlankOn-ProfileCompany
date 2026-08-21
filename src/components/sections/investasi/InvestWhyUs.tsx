import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { ShieldCheck, Target, TrendingUp } from "lucide-react";

export default function InvestWhyUs() {
  const reasons = [
    {
      icon: <Target className="w-8 h-8 mb-4" />,
      title: "Clear Market Demand",
      desc: "Produk dan layanan kami memecahkan masalah nyata dengan model bisnis B2B yang sudah terbukti mencetak profit dan retensi tinggi.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 mb-4" />,
      title: "Sustainable Growth",
      desc: "Model operasional yang efisien memungkinkan kami mencapai pertumbuhan pendapatan tahunan yang signifikan tanpa membakar uang untuk akuisisi semu.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 mb-4" />,
      title: "Strong Governance",
      desc: "Struktur manajemen profesional, pelaporan keuangan transparan, dan pengelolaan risiko yang teruji untuk memastikan keamanan dana investor.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Investment Thesis
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight" style={DISPLAY}>
          Why Invest With Us?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reasons.map((r, i) => (
          <div key={i} className="flex flex-col">
            <div className="text-foreground">{r.icon}</div>
            <h3 className="text-2xl font-bold mb-4" style={DISPLAY}>{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed" style={BODY}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
