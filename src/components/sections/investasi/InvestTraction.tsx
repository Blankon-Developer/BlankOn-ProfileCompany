import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { investmentData } from "@/data/investasi";

export default function InvestTraction() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="mb-16 max-w-2xl">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Proof of Concept
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight" style={DISPLAY}>
          Traction & Validation
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <h3 className="text-5xl font-black mb-2" style={DISPLAY}>{investmentData.traction.revenue}</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Annual Revenue</p>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-5xl font-black mb-2" style={DISPLAY}>{investmentData.summary.customers}</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Active Clients</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-5xl font-black mb-2" style={DISPLAY}>{investmentData.traction.retentionRate}</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Retention Rate</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-5xl font-black mb-2" style={DISPLAY}>{investmentData.traction.activeProjects}</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={MONO}>Live Projects</p>
        </div>
      </div>
    </section>
  );
}
