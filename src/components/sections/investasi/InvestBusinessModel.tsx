import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export default function InvestBusinessModel() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-4xl mx-auto text-center">
      <div className="mb-16">
        <p className="text-[10px] uppercase tracking-widest mb-4 font-semibold text-muted-foreground" style={MONO}>
          How We Make Money
        </p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight" style={DISPLAY}>
          Business Model
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-sm p-6 bg-foreground text-background font-bold text-xl rounded-xl shadow-lg" style={DISPLAY}>
          B2B Product & Services
        </div>
        <ArrowDown className="text-muted-foreground" />
        <div className="w-full max-w-sm p-6 bg-white dark:bg-black border border-border font-bold text-xl rounded-xl shadow-sm" style={DISPLAY}>
          Enterprise Customers
        </div>
        <ArrowDown className="text-muted-foreground" />
        <div className="w-full max-w-sm p-6 bg-muted text-foreground font-bold text-xl rounded-xl shadow-sm" style={DISPLAY}>
          Project Fee & Retainer
        </div>
        <ArrowDown className="text-muted-foreground" />
        <div className="w-full max-w-sm p-6 bg-foreground text-background font-bold text-xl rounded-xl shadow-lg" style={DISPLAY}>
          Recurring Revenue
        </div>
      </div>
    </section>
  );
}
