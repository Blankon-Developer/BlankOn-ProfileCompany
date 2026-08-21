import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { Cpu, ShieldCheck, Code2, Users } from "lucide-react";

export default function InvestCompetitiveAdvantage() {
  const advantages = [
    {
      icon: <Code2 className="w-6 h-6 mb-4" />,
      title: "Proprietary Architecture",
      desc: "Framework internal yang memangkas waktu pengembangan dari berbulan-bulan menjadi berminggu-minggu, menekan biaya operasional secara drastis.",
    },
    {
      icon: <Users className="w-6 h-6 mb-4" />,
      title: "Hyper-Local Talent",
      desc: "Akses ke engineer tier-1 dengan cost-structure regional yang sangat efisien dibanding kompetitor di ibu kota.",
    },
    {
      icon: <Cpu className="w-6 h-6 mb-4" />,
      title: "Tech Agnostic",
      desc: "Kemampuan integrasi fleksibel lintas platform, tidak mengunci klien pada satu vendor spesifik.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 mb-4" />,
      title: "High Switching Cost",
      desc: "Begitu sistem inti klien terintegrasi dengan infrastruktur kami, customer retention rate secara natural meningkat mendekati 100%.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto bg-muted/30 border border-border rounded-3xl my-12">
      <div className="mb-16">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Why We Win
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-2xl" style={DISPLAY}>
          Our Unfair Advantage
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((adv, i) => (
          <div key={i} className="p-6 bg-background border border-border rounded-xl">
            {adv.icon}
            <h3 className="text-lg font-bold mb-2" style={DISPLAY}>{adv.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed" style={BODY}>{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
