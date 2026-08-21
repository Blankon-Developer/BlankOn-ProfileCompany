import { DISPLAY, BODY, MONO } from "@/lib/utils";
import Image from "next/image";

export default function InvestTeam() {
  const team = [
    {
      name: "[Nama Founder]",
      role: "Founder & CEO",
      bg: "Ex-[Perusahaan Besar], 10+ tahun pengalaman di Tech & Business Development.",
    },
    {
      name: "[Nama CTO]",
      role: "Chief Technology Officer",
      bg: "Ahli arsitektur sistem skala besar, memimpin tim engineer lintas platform.",
    },
    {
      name: "[Nama CFO]",
      role: "Chief Financial Officer",
      bg: "Background di corporate finance & M&A, memastikan arus kas perusahaan sehat.",
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="mb-16 max-w-2xl">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Leadership Team
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={DISPLAY}>
          Orang di Balik Eksekusi
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col">
            <div className="w-full aspect-square bg-muted rounded-xl mb-6 flex items-center justify-center border border-border">
              {/* Image placeholder */}
              <span className="text-muted-foreground" style={MONO}>[FOTO]</span>
            </div>
            <h3 className="text-2xl font-bold mb-1" style={DISPLAY}>{member.name}</h3>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-semibold" style={MONO}>{member.role}</p>
            <p className="text-muted-foreground leading-relaxed" style={BODY}>{member.bg}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
