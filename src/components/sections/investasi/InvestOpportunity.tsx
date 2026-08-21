import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { investmentData } from "@/data/investasi";

export default function InvestOpportunity() {
  return (
    <section id="opportunity" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Target & Stage */}
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
            The Opportunity
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-12" style={DISPLAY}>
            Funding Round
          </h2>
          
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2" style={MONO}>Target Raise</p>
              <h3 className="text-5xl font-black text-foreground" style={DISPLAY}>{investmentData.opportunity.targetRaise}</h3>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2" style={MONO}>Stage</p>
              <h3 className="text-2xl font-bold text-foreground" style={DISPLAY}>{investmentData.opportunity.stage}</h3>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2" style={MONO}>Instrument</p>
              <h3 className="text-2xl font-bold text-foreground" style={DISPLAY}>{investmentData.opportunity.instrument}</h3>
            </div>
          </div>
        </div>

        {/* Right: Use of Funds Progress Bars */}
        <div className="bg-muted/50 p-8 md:p-12 border border-border rounded-2xl">
          <h3 className="text-2xl font-black mb-8" style={DISPLAY}>Use of Funds</h3>
          <div className="flex flex-col gap-6">
            {investmentData.useOfFunds.map((fund, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-sm" style={BODY}>{fund.label}</span>
                  <span className="font-bold text-lg" style={MONO}>{fund.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${fund.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
