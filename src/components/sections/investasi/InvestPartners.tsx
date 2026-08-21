import { DISPLAY, BODY, MONO } from "@/lib/utils";

export default function InvestPartners() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto text-center border-t border-border">
      <div className="mb-16">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          Strategic Ecosystem
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight" style={DISPLAY}>
          Partners & Key Clients
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder Logos */}
        <div className="text-xl font-black" style={DISPLAY}>[LOGO BUMN]</div>
        <div className="text-xl font-black" style={DISPLAY}>[LOGO TECH PARTNER]</div>
        <div className="text-xl font-black" style={DISPLAY}>[LOGO ENTERPRISE]</div>
        <div className="text-xl font-black" style={DISPLAY}>[LOGO GOV INST.]</div>
      </div>
    </section>
  );
}
